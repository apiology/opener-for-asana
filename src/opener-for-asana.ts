/**
 * opener-for-asana module.
 *
 * Searches for and opens an Asana task in the Chrome Omnibox
 */

import * as Asana from 'asana';
import { formatTask, pullResult } from './asana-typeahead.js';

export const logSuccess = (result: string | object): void => console.log('Upvoted task:', result);

const formatTaskForTypeahead = (task: Asana.resources.Tasks.Type) => ({
  content: task.gid,
  description: formatTask(task),
});

export const pullOmniboxSuggestions = async (
  text: string
) => (await pullResult(text)).data.map(formatTaskForTypeahead);

export const actOnInputData = async (text: string) => {
  console.log(`Acting upon ${text}`);
  // https://stackoverflow.com/questions/16503879/chrome-extension-how-to-open-a-link-in-new-tab
  const newURL = `https://app.asana.com/0/0/${text}`;
  chrome.tabs.create({ url: newURL });
  return `Upvoted ${newURL}`;
};
