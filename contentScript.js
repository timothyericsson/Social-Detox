window.addEventListener('load', function() {
    // Run the overlay function only if we are on the homepage
    if (isFacebookHomepage()) {
        createOverlay();
    }

    // Listen for changes in the URL which happens during navigation in Facebook's SPA
    let lastUrl = location.href; 
    new MutationObserver(() => {
        const url = location.href;
        if (url !== lastUrl) {
            lastUrl = url;
            onUrlChange();
        }
    }).observe(document, {subtree: true, childList: true});
});

// Function to handle URL changes
function onUrlChange() {
    if (isFacebookHomepage()) {
        if (!document.querySelector('.fb-timeline-overlay')) {
            createOverlay();
        }
    } else {
        const overlay = document.querySelector('.fb-timeline-overlay');
        if (overlay) {
            overlay.remove();
        }
    }
}

// Function to check if the current page is the Facebook homepage
function isFacebookHomepage() {
    // Check if the pathname is just '/' or '/home.php', which indicates the homepage
    const pathname = window.location.pathname;
    return pathname === '/' || pathname === '/home.php';
}

// Function to create the overlay
function createOverlay() {
    const overlay = document.createElement('div');
    overlay.className = 'fb-timeline-overlay';
    overlay.style.position = 'fixed';
    overlay.style.top = '56px'; // Adjust this value to move the overlay down just enough to show the top buttons
    overlay.style.bottom = '0';
    overlay.style.left = '50%';
    overlay.style.transform = 'translateX(-50%)';
    overlay.style.width = '600px';
    overlay.style.height = 'calc(100vh - 56px)'; // Adjust the height to account for the top offset
    overlay.style.backgroundColor = 'black';
    overlay.style.zIndex = '1000';
    overlay.style.display = 'flex';
    overlay.style.justifyContent = 'center';
    overlay.style.alignItems = 'center';
    overlay.style.color = 'white';
    overlay.style.fontSize = '24px';
    overlay.style.textAlign = 'center';
    overlay.style.padding = '20px';

    const affirmationText = document.createElement('div');
    affirmationText.innerText = getRandomAffirmation();
    overlay.appendChild(affirmationText);

    document.body.appendChild(overlay);
}

// Function to get a random affirmation
function getRandomAffirmation() {
    const affirmations = [
        "Your strength is an inspiration.",
        "Your kindness shines brightly.",
        "Embrace your unique journey.",
        "Trust in your incredible potential.",
        "Your perseverance is powerful.",
        "Believe in the beauty of your dreams.",
        "Your creativity brings light to the world.",
        "You are capable of amazing things.",
        "Let your inner wisdom guide you.",
        "Your positivity is infectious.",
        "You are worthy of every success.",
        "Your empathy is a true gift.",
        "Keep nurturing your passions.",
        "Let your courage lead the way.",
        "Your determination sets you apart.",
        "You are a beacon of hope and joy.",
        "Embrace every challenge as an opportunity.",
        "Your journey is uniquely beautiful.",
        "Trust in your journey, step by step.",
        "You bring so much goodness to the world."
    ];
    return affirmations[Math.floor(Math.random() * affirmations.length)];
}

// ... other content script code ...

// Function to toggle the overlay display
function toggleOverlay() {
    const overlay = document.querySelector('.fb-timeline-overlay');
    if (overlay) {
        overlay.style.display = overlay.style.display === 'none' ? 'block' : 'none';
    }
}
