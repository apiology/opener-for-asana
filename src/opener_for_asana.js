const Asana = require('asana');

const client = Asana.Client.create().useAccessToken(asanaAccessToken);

let workspaceGid = null;

let customFieldGid = null;

const saveCustomFieldGidIfRightName = (customField) => {
  if (customField.name === customFieldName) {
    customFieldGid = customField.gid;
    console.log(`Found custom field GID as ${customFieldGid}`);
  }
};

const findAndSaveCustomFieldGid = (customFieldsResult) => {
  customFieldsResult.stream().on('data', saveCustomFieldGidIfRightName);
};

const saveWorkspaceAndCustomFieldGidsIfRightNames = (workspace) => {
  if (workspace.name === workspaceName) {
    workspaceGid = workspace.gid;
    console.log(`Found workspace GID as ${workspaceGid}`);
    client.customFields.getCustomFieldsForWorkspace(workspaceGid, {})
      .then(findAndSaveCustomFieldGid);
  }
};

const findAndSaveWorkspaceAndCustomFieldGids = (workspacesResult) => {
  workspacesResult.stream().on('data', saveWorkspaceAndCustomFieldGidsIfRightNames);
};

client.workspaces.getWorkspaces().then(findAndSaveWorkspaceAndCustomFieldGids);

// How on God's green earth is there no built-in function to do this?
//
// https://stackoverflow.com/questions/40263803/native-javascript-or-es6-way-to-encode-and-decode-html-entities
const escapeHTML = (str) => str.replace(/[&<>'"]/g,
  (tag) => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    "'": '&#39;',
    '"': '&quot;',
  }[tag]));

class NotInitializedError extends Error {}

const pullSuggestions = (text, suggest) => {
  const query = {
    resource_type: 'task',
    query: text,
    opt_pretty: true,
    opt_fields: ['name', 'completed'],
  };
  if (workspaceGid == null) {
    throw new NotInitializedError();
  }

  console.log('requesting typeahead with workspaceGid', workspaceGid,
    ' and query of ', query);
  chrome.omnibox.setDefaultSuggestion({
    description: `<dim>Searching for ${text}...</dim>`,
  });

  // https://developers.asana.com/docs/typeahead
  return client.typeahead.typeaheadForWorkspace(workspaceGid, query)
    .then((typeaheadResult) => ({ suggest, typeaheadResult }));
};

const actOnInputData = (text) => {
  console.log(`Acting upon ${text}`);
  // https://stackoverflow.com/questions/16503879/chrome-extension-how-to-open-a-link-in-new-tab
  const newURL = `https://app.asana.com/0/0/${text}`;
  chrome.tabs.create({ url: newURL });
};

module.exports = {
  pullSuggestions,
  actOnInputData,
  escapeHTML,
};
