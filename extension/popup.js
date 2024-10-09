document.getElementById('download').addEventListener('click', () => {
    // Request the YouTube video URL from the background script
    chrome.runtime.onMessage.addListener((message) => {
        if (message.videoUrl) {
            const videoUrl = message.videoUrl;

            // Send the video URL to the Flask server
            fetch('http://localhost:5000/download', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({ url: videoUrl })
            })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    document.getElementById('progress').innerText = 'Download started!';
                } else {
                    document.getElementById('progress').innerText = `Download failed: ${data.error}`;
                }
            })
            .catch(error => {
                console.error('Error:', error);
                document.getElementById('progress').innerText = 'An error occurred while downloading the video.';
            });
        }
    });

    // Trigger the background script to get the video URL
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        const tabId = tabs[0].id;
        chrome.scripting.executeScript({
            target: { tabId: tabId },
            function: fetchVideoURL
        });
    });
});

function fetchVideoURL() {
    const videoUrl = window.location.href;
    chrome.runtime.sendMessage({ videoUrl: videoUrl });
}
