// Select the audio element and button
const audio = document.getElementById('background-music');
const muteButton = document.getElementById('mute-button');

// Function to toggle mute/unmute
function toggleMute() {
    if (audio.muted) {
        audio.muted = false; // Unmute
        muteButton.textContent = "🔊"; // Update button icon to unmute
    } else {
        audio.muted = true; // Mute
        muteButton.textContent = "🔇"; // Update button icon to mute
    }
}

// Play the music when the page loads
window.addEventListener('load', function () {
    audio.play().catch(error => {
        console.log('Audio playback failed:', error); // Log any errors
    });
});

// Correct function name and ensure event listener works properly
function toggleMenu() {
    const menu = document.querySelector('.menu');
    const hamburger = document.querySelector('.hamburger');
    menu.classList.toggle('active');

    if (menu.classList.contains('active')) {
        hamburger.innerHTML = 'X';
    } else {
        hamburger.innerHTML = '&#9776;';
    }
}

toggleMenu();

function closeSidebar() {
    document.getElementById('planet-sidebar').classList.remove('active');
}