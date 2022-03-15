chrome.action.onClicked.addListener(function (tab) {
    // for the current tab, inject the "inject.js" file & execute it
    console.log("invoking");
    chrome.scripting.executeScript({
        target: {tabId: tab.id},
        files: ['./lib/js/inject.js'],
    });
});