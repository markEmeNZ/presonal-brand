import { Router, type IRouter } from "express";
import { CreateSubscriberBody } from "@workspace/api-zod";
import { forwardToFormspree } from "../lib/formspree.js";

const router: IRouter = Router();

router.post("/", async (req, res) => {
  const parsed = CreateSubscriberBody.safeParse(req.body);

  if (!parsed.success) {
    res.status(422).json({ message: "Please enter a valid email address." });
    return;
  }

  const email = parsed.data.email.toLowerCase();
  const createdAt = new Date();

  try {
    await forwardToFormspree({ email });

    req.log.info({ email }, "New subscriber added");

    res.status(201).json({
      id: createdAt.getTime(),
      email,
      createdAt: createdAt.toISOString(),
    });
  } catch (err) {
    req.log.error({ err }, "Failed to create subscriber");
    res.status(500).json({ message: "Something went wrong. Please try again." });
  }
});

export default router;
