document.getElementById('toggle').addEventListener('click', function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.scripting.executeScript({
            target: {tabId: tabs[0].id},
            func: toggleOverlay,
        });
    });
});

// This function gets executed in the context of the content script
function toggleOverlay() {
    const overlay = document.querySelector('.fb-timeline-overlay');
    if (overlay) {
        overlay.style.display = overlay.style.display === 'none' ? 'block' : 'none';
    }
}
