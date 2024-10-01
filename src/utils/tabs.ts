import { tabs } from "webextension-polyfill";

export async function getCurrentTab() {
  return await tabs.query({ active: true, currentWindow: true });
}
