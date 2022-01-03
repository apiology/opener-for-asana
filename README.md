# Opener for Asana

[![CircleCI](https://circleci.com/gh/apiology/opener-for-asana.svg?style=svg)](https://circleci.com/gh/apiology/opener-for-asana)

Searches for and opens an Asana task in the Chrome Omnibox

## Using

Go to the URL bar ("Chrome Omnibox"), and type 'a', a space, then
search for an Asana task.  You should see them pop up as suggestions.
Pick one, and your task will be opened in a new tab!

## Configuration

1. Create a new "Personal access token" in
   [Asana](https://app.asana.com/0/my-apps)
1. Set up options directly
   [here](chrome-extension://TBD/options.html)
   or in Chrome | … | More Tools | Extensions | Opener for Asana |
   Details | Extension options.
1. Paste in your personal access token.
1. Provide the rest of the configuration and hit 'Save'

## Legal

Not created, maintained, reviewed, approved, or endorsed by Asana, Inc.

## Installing

This isn't in the Chrome App Store and doesn't have any cool config
UI, so welcome to the Chrome Extension development experience!

1. Run 'make' to create the bundle with webpack, or 'make start' to
   start webpack in watch mode.
2. Go to [chrome://extensions/](chrome://extensions/)
3. Make sure 'Developer mode' is flipped on in the upper right.
4. Click the 'Load unpacked' button.
5. Choose the [dist](./dist) directory
