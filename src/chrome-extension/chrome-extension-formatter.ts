import * as Asana from 'asana';
import { escapeHTML } from './omnibox.js';

export default class ChromeExtensionFormatter {
  formatTask = (task: Asana.resources.Tasks.Type) => {
    const project = task.memberships[0]?.project;

    let membership = '';

    if (task.parent != null) {
      membership += ` / ${escapeHTML(task.parent.name)}`;
    }
    if (project != null) {
      membership += ` <dim>${project.name}</dim>`;
    }

    return `${escapeHTML(task.name)}${membership}`;
  };
}
