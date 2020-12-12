chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if (request.action == "checkStatement") {
            console.log(request, sender, sendResponse);
            document.getElementById('curr-link').innerHTML = request.info.pageUrl;
            document.getElementById('sel-text').innerHTML = request.info.selectionText;
            sendResponse({ farewell: "allOK" });
        }
    }
);