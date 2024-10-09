chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.status === 'complete' && tab.url.includes('youtube.com/watch')) {
        // Inject the script to fetch the video URL when a YouTube page is loaded
        chrome.scripting.executeScript({
            target: { tabId: tabId },
            function: fetchVideoURL
        });
    }
});

function fetchVideoURL() {
    const videoUrl = window.location.href;
    chrome.runtime.sendMessage({ videoUrl: videoUrl });
}
