import { Router, type IRouter } from "express";
import { db, subscribersTable, emailQueueTable } from "@workspace/db";
import { eq } from "drizzle-orm";
import { CreateSubscriberBody } from "@workspace/api-zod";
import { getScheduledDates } from "../lib/emails.js";
import { addSubscriberToList } from "../lib/campaign-monitor.js";

const FORMSPREE_URL = "https://formspree.io/f/xkopngpv";

async function forwardToFormspree(email: string): Promise<void> {
  const res = await fetch(FORMSPREE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json", "Accept": "application/json" },
    body: JSON.stringify({ email }),
  });
  if (!res.ok) {
    const body = await res.text();
    throw new Error(`Formspree error ${res.status}: ${body}`);
  }
}

const router: IRouter = Router();

router.post("/", async (req, res) => {
  const parsed = CreateSubscriberBody.safeParse(req.body);

  if (!parsed.success) {
    res.status(422).json({ message: "Please enter a valid email address." });
    return;
  }

  const { email } = parsed.data;

  try {
    const existing = await db
      .select()
      .from(subscribersTable)
      .where(eq(subscribersTable.email, email.toLowerCase()))
      .limit(1);

    if (existing.length > 0) {
      res.status(409).json({ message: "You're already on the list." });
      return;
    }

    const [subscriber] = await db
      .insert(subscribersTable)
      .values({ email: email.toLowerCase() })
      .returning();

    const scheduledDates = getScheduledDates(subscriber.createdAt);
    const queueEntries = scheduledDates.map((scheduledAt, emailIndex) => ({
      subscriberId: subscriber.id,
      emailIndex,
      scheduledAt,
    }));
    await db.insert(emailQueueTable).values(queueEntries);

    await Promise.allSettled([
      addSubscriberToList(subscriber.email).catch((cmErr) => {
        req.log.warn({ cmErr }, "Campaign Monitor sync failed — subscriber saved locally");
      }),
      forwardToFormspree(subscriber.email).catch((fsErr) => {
        req.log.warn({ fsErr }, "Formspree sync failed — subscriber saved locally");
      }),
    ]);

    req.log.info({ subscriberId: subscriber.id }, "New subscriber added");

    res.status(201).json({
      id: subscriber.id,
      email: subscriber.email,
      createdAt: subscriber.createdAt.toISOString(),
    });
  } catch (err) {
    req.log.error({ err }, "Failed to create subscriber");
    res.status(500).json({ message: "Something went wrong. Please try again." });
  }
});

export default router;
