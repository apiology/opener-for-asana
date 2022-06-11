/**
 * opener-for-asana module.
 *
 * Searches for and opens an Asana task in the Chrome Omnibox
 */

// import * as Asana from 'asana';
import { spawn } from 'node:child_process';
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
  const formatter = platform().formatter();
  return (await pullResult(text)).data.map((task) => {
    const description = formatter.formatTask(task);
    const url = `opener-for-asana:${task.gid}`;
    return {
      url,
      text,
      description,
    };
  });
};

export const actOnInputData = async (text: string) => {
  let parsedText = text;
  if (text.startsWith('opener-for-asana:')) {
    const url = new URL(text);
    parsedText = decodeURIComponent(url.pathname);
  }
  console.log(`Acting upon ${parsedText}`);
  const newURL = `https://app.asana.com/0/0/${parsedText}`;
  spawn('open', [newURL]);

  // https://stackoverflow.com/questions/16503879/chrome-extension-how-to-open-a-link-in-new-tab
  // chrome.tabs.create({ url: newURL });
  return `Opened ${newURL}`;
};
