import { Router, type IRouter } from "express";
import { db, subscribersTable } from "@workspace/db";
import { eq } from "drizzle-orm";

const router: IRouter = Router();

function decodeToken(token: string): number | null {
  try {
    const decoded = Buffer.from(token, "base64url").toString("utf-8");
    const id = parseInt(decoded, 10);
    return isNaN(id) ? null : id;
  } catch {
    return null;
  }
}

export function encodeToken(subscriberId: number): string {
  return Buffer.from(String(subscriberId)).toString("base64url");
}

router.get("/", async (req, res) => {
  const { token } = req.query;

  if (!token || typeof token !== "string") {
    res.status(400).json({ message: "Invalid unsubscribe link." });
    return;
  }

  const subscriberId = decodeToken(token);

  if (!subscriberId) {
    res.status(400).json({ message: "Invalid unsubscribe link." });
    return;
  }

  try {
    const [subscriber] = await db
      .select()
      .from(subscribersTable)
      .where(eq(subscribersTable.id, subscriberId))
      .limit(1);

    if (!subscriber) {
      res.status(404).json({ message: "Subscriber not found." });
      return;
    }

    if (subscriber.unsubscribed) {
      res.json({ message: "already_unsubscribed", email: subscriber.email });
      return;
    }

    await db
      .update(subscribersTable)
      .set({ unsubscribed: true })
      .where(eq(subscribersTable.id, subscriberId));

    req.log.info({ subscriberId }, "Subscriber unsubscribed");
    res.json({ message: "unsubscribed", email: subscriber.email });
  } catch (err) {
    req.log.error({ err }, "Failed to unsubscribe");
    res.status(500).json({ message: "Something went wrong." });
  }
});

export default router;
