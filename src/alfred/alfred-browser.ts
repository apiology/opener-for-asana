import { spawn } from 'node:child_process';

export class AlfredBrowser {
  openUrl = (url: string): void => {
    spawn('open', [url]);
  };
}
