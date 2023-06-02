import yargs from 'yargs/';
import { hideBin } from 'yargs/helpers';
import { openTask, toggleTaskStatus } from '../opener-for-asana.js';
import { AlfredPlatform } from './alfred-platform.js';
import { setPlatform } from '../platform.js';

setPlatform(new AlfredPlatform());

const argv = yargs(hideBin(process.argv))
  .usage('Usage: $0 <url> [--toggle]')
  .demandCommand(1, 'You need to provide the URL of the task.')
  .option('toggle', {
    describe: 'Toggle the completion status of the task.',
    type: 'boolean',
  })
  .strict()
  .help()
  .parseSync();

const taskUrl = argv.$0;
const toggleArg = argv.toggle;

if (toggleArg) {
  // Toggle task completion status
  toggleTaskStatus(taskUrl);
} else {
  // Open the task
  openTask(taskUrl);
}
