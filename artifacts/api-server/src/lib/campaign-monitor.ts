import { logger } from "./logger.js";

const CM_API_BASE = "https://api.createsend.com/api/v3.2";

function getApiKey(): string {
  const key = process.env.CAMPAIGN_MONITOR_API_KEY;
  if (!key) throw new Error("CAMPAIGN_MONITOR_API_KEY is not set");
  return key;
}

function getListId(): string {
  const id = process.env.CAMPAIGN_MONITOR_LIST_ID;
  if (!id) throw new Error("CAMPAIGN_MONITOR_LIST_ID is not set");
  return id;
}

function authHeader(): string {
  return "Basic " + Buffer.from(`${getApiKey()}:x`).toString("base64");
}

export async function addSubscriberToList(email: string): Promise<void> {
  const listId = getListId();
  const url = `${CM_API_BASE}/subscribers/${listId}.json`;

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Authorization": authHeader(),
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      EmailAddress: email,
      Resubscribe: true,
      ConsentToTrack: "Yes",
    }),
  });

  if (!response.ok) {
    const body = await response.text();
    logger.error({ status: response.status, body }, "Campaign Monitor add subscriber failed");
    throw new Error(`Campaign Monitor error: ${response.status}`);
  }

  logger.info({ email }, "Subscriber added to Campaign Monitor list");
}
