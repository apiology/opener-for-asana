export class ChromeExtensionBrowser {
  openUrl = (url: string): void => {
    // https://stackoverflow.com/questions/16503879/chrome-extension-how-to-open-a-link-in-new-tab
    chrome.tabs.create({ url });
  };
}
