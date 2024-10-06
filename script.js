function createStars() {
    const container = document.querySelector("body");
    for (let i = 0; i < 1000; i++) {
        const star = document.createElement("div");
        star.className = "star";
        star.style.width = ".1px";
        star.style.height = ".1px";
        star.style.top = Math.random() * 100 + "%";
        star.style.left = Math.random() * 100 + "%";
        container.appendChild(star);
    }
}
createStars();

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

// Add event listener to the continue button
const continueButton = document.getElementById('continue-button');
continueButton.addEventListener('click', function () {
    // Add class to lift the overlay content
    document.body.classList.add('lifted');
    // Optionally, set a timeout to remove the overlay after lifting
    setTimeout(() => {
        document.querySelector('.overlay').style.display = 'none'; // Hide the overlay
    }, 500); // Match this duration with the lifting transition time
});

// Toggle menu function
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

// Function to handle planet selection
function selectPlanet(name, speed, size, linkElement) {
    const planets = document.querySelectorAll('.container > div');
    planets.forEach((planet) => {
        planet.style.boxShadow = ''; // Reset box shadow for all planets
    });

    const selectedPlanet = document.querySelector('.' + name.replace(/ /g, '-').toLowerCase());
    if (selectedPlanet) {
        selectedPlanet.style.boxShadow = '0 0 1em yellow'; // Highlight selected planet
    }

    // Update planet info
    document.getElementById('planet-info').style.display = 'block';
    document.getElementById('planet-name').innerText = name;
    document.getElementById('planet-speed').innerText = `Speed: ${speed} km/h`;
    document.getElementById('planet-size').innerText = `Size: ${size}`;

    // Get the current planet image
    const currentPlanetImage = document.getElementById("current-planet");

    // Hide all planet images
    const planetImages = document.querySelectorAll(".planet-image");
    planetImages.forEach((img) => {
        img.style.display = "none"; // Hide all planet images
    });

    // Update the image based on the selected planet
    if (name === 'TRAPPIST-1 star') {
        currentPlanetImage.src = './Images-New/sun.png'; // Image for the star
    } else {
        currentPlanetImage.src = `./Images-New/${name.toLowerCase()}.png`; // Replace with the actual image source
    }

    // Show the selected planet image
    const selectedPlanetImage = document.getElementById(`${name.toLowerCase()}-img`);
    if (selectedPlanetImage) {
        selectedPlanetImage.style.display = "block"; // Show the selected planet image
    }

    // Set timeout to hide planet info and remove active class from link
    setTimeout(() => {
        document.getElementById('planet-info').style.display = 'none'; // Hide planet info
        linkElement.classList.remove('active'); // Remove active class from link
    }, 5000);

    linkElement.classList.add('active'); // Add active class to link
}

// Add event listeners to planet links
document.querySelectorAll('.planet-links a').forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent default link behavior
        const planetName = link.innerText;
        let speed, size;

        // Set speed and size based on planet name
        switch (planetName) {
            case 'TRAPPIST-1b':
                speed = 'Unknown';
                size = 'Orbit Every 1.5 Earth Days';
                break;
            case 'TRAPPIST-1c':
                speed = '8.718 miles (14,030 KM)';
                size = 'Orbit Every 2.4 Earth Days';
                break;
            case 'TRAPPIST-1d':
                speed = '6,246 miles (10,050 KM)';
                size = 'Orbit Every 4.05 Earth Days';
                break;
            case 'TRAPPIST-1e':
                speed = '7,292 miles (11,736 KM)';
                size = 'Orbit Every 6.1 Earth Days';
                break;
            case 'TRAPPIST-1f':
                speed = '8,282 miles (13,330 KM)';
                size = 'Orbit Every 9.2 Earth Days';
                break;
            case 'TRAPPIST-1g':
                speed = '8,950 miles (14,400 KM)';
                size = 'Orbit Every 12.4 Earth Days';
                break;
            case 'TRAPPIST-1h':
                speed = '6,142 miles (9,886 KM)';
                size = 'Orbit Every 18.9 Earth Days';
                break;
            default:
                speed = 'Unknown';
                size = 'Unknown';
                break;
        }

        selectPlanet(planetName, speed, size, link); // Call selectPlanet with the selected values
    });
});
