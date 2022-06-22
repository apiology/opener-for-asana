/**
 * opener-for-asana module.
 *
 * Searches for and opens an Asana task in the Chrome Omnibox or as an Alfred workflow
 */

// import * as Asana from 'asana';
import { platform } from './platform.js';
import { pullResult } from './asana-typeahead.js';

export const logSuccess = (result: string | object): void => {
  const logger = platform().logger();
  logger.log('Acted:', result);
};

export type Suggestion = {
  url: string
  text: string;
  description: string;
}

export const pullSuggestions = async (text: string): Promise<Suggestion[]> => {
  const formatter = platform().formatter();
  return (await pullResult(text, 'task', ['name', 'completed', 'parent.name', 'custom_fields.gid', 'custom_fields.number_value', 'memberships.project.name'])).data.map((task) => {
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
  const url = new URL(text);
  const parsedText = decodeURIComponent(url.pathname);
  console.log(`Acting upon ${parsedText}`);
  const newURL = `https://app.asana.com/0/0/${parsedText}`;
  const b = platform().browser();
  b.openUrl(newURL);

  // https://stackoverflow.com/questions/16503879/chrome-extension-how-to-open-a-link-in-new-tab
  // chrome.tabs.create({ url: newURL });
  return `Opened ${newURL}`;
};
