import { Router, type IRouter } from "express";
import { forwardToFormspree } from "../lib/formspree.js";

const router: IRouter = Router();

function decodeToken(token: string): string | null {
  try {
    const email = Buffer.from(token, "base64url").toString("utf-8");
    return email.includes("@") ? email : null;
  } catch {
    return null;
  }
}

export function encodeToken(email: string): string {
  return Buffer.from(email).toString("base64url");
}

router.get("/", async (req, res) => {
  const { token } = req.query;

  if (!token || typeof token !== "string") {
    res.status(400).json({ message: "Invalid unsubscribe link." });
    return;
  }

  const email = decodeToken(token);

  if (!email) {
    res.status(400).json({ message: "Invalid unsubscribe link." });
    return;
  }

  try {
    await forwardToFormspree({ email, request: "unsubscribe" });

    req.log.info({ email }, "Unsubscribe request forwarded");
    res.json({ message: "unsubscribed", email });
  } catch (err) {
    req.log.error({ err }, "Failed to unsubscribe");
    res.status(500).json({ message: "Something went wrong." });
  }
});

export default router;
