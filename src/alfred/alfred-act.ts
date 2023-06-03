import yargs, { Argv } from 'yargs';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import type { ArgumentsCamelCase } from 'yargs';
import { openTask, toggleTaskStatus } from '../opener-for-asana.js';
import { AlfredPlatform } from './alfred-platform.js';
import { setPlatform } from '../platform.js';

console.log('whuuuh');
const realArgv = process.argv.slice(2);
console.log(realArgv);

setPlatform(new AlfredPlatform());

const parseArgs = async () => {
  await yargs(realArgv)
    .usage('$0 <cmd> [args]')
    .command(
      'open <url>',
      'Open the task in Asana',
      (a: Argv) => {
        a.positional('url', {
          type: 'string',
          describe: 'The URL of the task to open.',
          demand: true,
        });
      },
      async ({ url }: ArgumentsCamelCase<{ url: string }>): Promise<void> => {
        await openTask(url);
      }
    )
    .command(
      'toggle <url>',
      'Toggle the completion value of the task in Asana',
      (a: Argv) => {
        a.positional('url', {
          type: 'string',
          describe: 'The URL of the task to open.',
          demand: true,
        });
      },
      async ({ url }: ArgumentsCamelCase<{ url: string }>): Promise<void> => {
        await toggleTaskStatus(url);
      }
    )
    .demandCommand()
    .strict()
    .help()
    .argv;
};

parseArgs();
