let color = "#4a4a4a";
let dark = "6b6b6b";

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ color });
  chrome.storage.sync.set({ dark });
});
