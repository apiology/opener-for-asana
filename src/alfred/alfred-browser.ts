import { spawn } from 'node:child_process';

export default class AlfredBrowser {
  openUrl = (url: string): void => {
    spawn('open', [url]);
  };
}
