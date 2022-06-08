/**
 * opener-for-asana module.
 *
 * Searches for and opens an Asana task in the Chrome Omnibox
 */

// import * as Asana from 'asana';
import { platform } from './platform.js';
import { pullResult } from './asana-typeahead.js';

export const logSuccess = (result: string | object): void => {
  const logger = platform().logger();
  logger.log('Upvoted task:', result);
};

export type Suggestion = {
  url: string
  text: string;
  description: string;
}

export const pullSuggestions = async (text: string): Promise<Suggestion[]> => {
  // const description = formatTask(task);
  const description = 'dummy';
  (await pullResult(text)).data.map((task) => {
    const url = `opener-for-asana:${task.gid}`;
    return {
      url,
      text,
      description,
    };
  });
};

export const actOnInputData = async (text: string) => {
  console.log(`Acting upon ${text}`);
  // https://stackoverflow.com/questions/16503879/chrome-extension-how-to-open-a-link-in-new-tab
  const newURL = `https://app.asana.com/0/0/${text}`;
  chrome.tabs.create({ url: newURL });
  return `Upvoted ${newURL}`;
};
