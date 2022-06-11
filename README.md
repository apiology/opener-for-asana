# Opener for Asana

[![CircleCI](https://circleci.com/gh/apiology/opener-for-asana.svg?style=svg)](https://circleci.com/gh/apiology/opener-for-asana)

Searches for and opens an Asana task in the Chrome Omnibox or as an Alfred workflow

[![Available in the Chrome Web Store](https://storage.googleapis.com/web-dev-uploads/image/WlD8wC6g8khYWPJUsQceQkhXSlv1/tbyBjqi7Zu733AAKA5n4.png)](https://chrome.google.com/webstore/detail/opener-for-asana/aaljndcedpekcigodagpkfmkafncfdfb)

## Using Chrome Extension

Go to the URL bar ("Chrome Omnibox"), then type 'a', a space, then
search for an Asana task.  You should see them pop up as suggestions.
Pick one, and your task will be opened in a new tab!

## Using Alfred Workflow

Similarly, activate Alfred, then type 'a', a space, then search for an
Asana task.  You should see them pop up as suggestions.  Pick one, and
your task will be opened in a new tab!

## Installing Chrome Extension

[![Available in the Chrome Web Store](https://storage.googleapis.com/web-dev-uploads/image/WlD8wC6g8khYWPJUsQceQkhXSlv1/tbyBjqi7Zu733AAKA5n4.png)](https://chrome.google.com/webstore/detail/opener-for-asana/aaljndcedpekcigodagpkfmkafncfdfb)

## Installing Alfred workflow

1. `npm install -g alfred-opener-for-asana`
2. Alfred | Workflows | File Asana task | Configure workflow and
   variables icon | configure workspace name and access key.

Go to the URL bar ("Chrome Omnibox"), then type 'a', a space, then
search for an Asana task.  You should see them pop up as suggestions.
Pick one, and your task will be opened in a new tab!

<img src="./docs/screenshot-2.png" alt="screenshot showing chrome omnibar with the 'a' keyword being entered" height="400"/>

## Chrome Extension Configuration

1. Create a new "Personal access token" in
   [Asana](https://app.asana.com/0/my-apps)
1. Set up options directly
   [here](chrome-extension://aaljndcedpekcigodagpkfmkafncfdfb/options.html)
   or in Chrome | … | More Tools | Extensions | Opener for Asana |
   Details | Extension options.
1. Paste in your personal access token.
1. Provide the rest of the configuration and hit 'Save'

<img src="./docs/screenshot-1.png" alt="screenshot showing the above configuration steps in Asana and in Chrome" height="400"/>

## Alfred Workflow Configuration

1. Create a new "Personal access token" in
   [Asana](https://app.asana.com/0/my-apps)
1. Alfred | Workflows | Opener for Asana | [≈] icon in upper right
1. Add values to Workflow Environment Variables section
1. Save

## Legal

Not created, maintained, reviewed, approved, or endorsed by Asana, Inc.

## Contributions

This project, as with all others, rests on the shoulders of a broad
ecosystem supported by many volunteers doing thankless work, along
with specific contributors.

In particular I'd like to call out:

* [Audrey Roy Greenfeld](https://github.com/audreyfeldroy) for the
  cookiecutter tool and associated examples, which keep my many
  projects building with shared boilerplate with a minimum of fuss.
