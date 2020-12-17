function onRightClick(info, tab) {
    chrome.browserAction.openPopup(function() {
        chrome.runtime.sendMessage({ action: "checkStatement", info: info, tab: tab }, function(response) {
            console.log(response);
        });
    })
}

//chrome.contextMenus.create({ "title": "Check Statement", "id": "checkStatement", contexts: ["selection"] }, function() {});
chrome.contextMenus.create({ "title": "Check Statement", "id": "checkStatement", contexts: ["selection"] }, () => chrome.runtime.lastError);


chrome.contextMenus.onClicked.addListener(onRightClick)