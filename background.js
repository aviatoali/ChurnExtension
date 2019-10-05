chrome.browserAction.onClicked.addListener((tab) => {
    let message = 'Hello';
    chrome.tabs.sendMessage(tab.id, message);
});