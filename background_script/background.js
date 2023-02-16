console.log('background running');

/*
chrome.runtime.onInstalled.addListener(async () => {
    for (const cs of chrome.runtime.getManifest().content_scripts) {
      for (const tab of await chrome.tabs.query({url: cs.matches})) {
        chrome.scripting.executeScript({
          target: {tabId: tab.id},
          files: cs.js,
        });
      }
    }
  });
*/

/*
validUrlStrings = [];
let completedLoadingTab;

chrome.tabs.onUpdated.addListener(tabUpdated);

function tabUpdated(tabID, chngInfo, theTab){
    if (theTab.status == "complete"){
        completedLoadingTab = theTab;
    }

    console.log(completedLoadingTab);

}
*/

//"https://www.linkedin.com/jobs/collections/*"
//"<all_urls>"