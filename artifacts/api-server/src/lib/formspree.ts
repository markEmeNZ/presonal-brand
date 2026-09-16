import { logger } from "./logger.js";

const FORMSPREE_URL = "https://formspree.io/f/xkopngpv";

export async function forwardToFormspree(fields: Record<string, string>): Promise<void> {
  const res = await fetch(FORMSPREE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json", "Accept": "application/json" },
    body: JSON.stringify(fields),
  });

  if (!res.ok) {
    const body = await res.text();
    logger.error({ status: res.status, body }, "Formspree submission failed");
    throw new Error(`Formspree error ${res.status}: ${body}`);
  }
}
