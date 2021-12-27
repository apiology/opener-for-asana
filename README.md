# Opener for Asana

[![CircleCI](https://circleci.com/gh/apiology/opener-for-asana.svg?style=svg)](https://circleci.com/gh/apiology/opener_for_asana)

Searches for and opens an Asana task in the Chrome Omnibox

## Using

Go to the URL bar ("Chrome Omnibox"), and type 'a', a space, then
search for an Asana task.  You should see them pop up as suggestions.
Pick one, and your task will be opened in a new tab!

## Installing

This isn't in the Chrome App Store and doesn't have any cool config
UI, so welcome to the Chrome Extension development experience!

1. Create a config.js in the src directory with a variable named
   'asanaAccessToken' with a new
   [Asana Personal Access Token](https://app.asana.com/0/developer-console)
   assigned to it.
2. Add the name of your Asana workspace to config.ts under the name
   'workspaceName'
3. Run 'make' to create the bundle with webpack, or 'make start' to
   start webpack in watch mode.
4. Go to [chrome://extensions/](chrome://extensions/)
5. Make sure 'Developer mode' is flipped on in the upper right.
6. Click the 'Load unpacked' button.
7. Choose this directory
