# Opener for Asana

Searches for and opens an Asana task in the Chrome Omnibox

## Installing

This isn't in the Chrome App Store and doesn't have any cool config,
so welcome to the Chrome Extension development experience!

1. Create a config.js in this directory with a variable named
   'asanaAccessToken' with a new
   [Asana Personal Access Token](https://app.asana.com/0/developer-console)
   assigned to it.
2. Add the name of your Asana workspace to config.js under the name
   'workspaceName'
3. Run `npm install && npx webpack`
4. Go to [chrome://extensions/](chrome://extensions/)
5. Make sure 'Developer mode' is flipped on in the upper right.
6. Click the 'Load unpacked' button.
7. Choose the directory containing this code.

## Using

Go to the URL bar ("Chrome Omnibox"), and type 'a', a space, then
search for an Asana task.  You should see them pop up as suggestions.
Pick one, and your task will be opened in a new tab!
