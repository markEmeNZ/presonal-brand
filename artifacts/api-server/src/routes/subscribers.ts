import { Router, type IRouter } from "express";
import { db, subscribersTable, emailQueueTable } from "@workspace/db";
import { eq } from "drizzle-orm";
import { z } from "zod/v4";
import { getScheduledDates, EMAIL_JOURNEY } from "../lib/emails.js";

const router: IRouter = Router();

const createSubscriberBodySchema = z.object({
  email: z.email(),
});

router.post("/", async (req, res) => {
  const parsed = createSubscriberBodySchema.safeParse(req.body);

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
