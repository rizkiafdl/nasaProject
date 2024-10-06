// Placeholder planet images for demonstration
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

const planetImages = {
  'star': 'url(./Images-New/sun.png)',
  '1b': 'url(./Images-New/TRAPPIST-1b.png)',
  '1c': 'url(./Images-New/TRAPPIST-1c.png)',
  '1d': 'url(./Images-New/TRAPPIST-1d.png)',
  '1e': 'url(./Images-New/TRAPPIST-1e.png)',
  '1f': 'url(./Images-New/TRAPPIST-1f.png)',
  '1g': 'url(./Images-New/TRAPPIST-1g.png)',
  '1h': 'url(./Images-New/TRAPPIST-1h.png)'
};

const planetExplain = {
  'star': {
    generalInfo: 'TRAPPIST-1 is an ultra-cool dwarf star located approximately 40 light-years from Earth in Aquarius. It has only 9% the mass of our Sun and a surface temperature of around 2,500 Kelvin (2,227°C). Despite its cool nature, it hosts seven Earth-sized exoplanets, three of which are in the habitable zone, making it one of the most promising systems for studying potential life beyond the Solar System.',
    historicalSignificance: 'TRAPPIST-1 gained significant attention in 2017 when its planetary system was discovered. The discovery of seven Earth-sized planets, three of which lie within the habitable zone, sparked renewed interest in the search for life beyond our solar system. It was one of the few systems where astronomers could study multiple terrestrial planets orbiting the same star.',
    funFact: 'TRAPPIST-1 is named after a Belgian-operated telescope in Chile, which is named after the Trappist order of monks famous for brewing beer!'
  },

  '1b': {
    generalInfo: 'TRAPPIST-1b is the innermost planet in the system, completing an orbit around its star in just over 1.5 Earth days. With an estimated surface temperature of around 400K (127°C), it is too hot for life as we know it, but its study provides crucial data on planetary atmospheres in close proximity to a star.',
    historicalSignificance: 'As the first planet discovered in the TRAPPIST-1 system, TRAPPIST-1b opened the door to the discovery of a rich planetary system. Its extreme proximity to the star provides key insights into how close-orbiting planets behave under intense stellar radiation.',
    funFact: 'Despite being the closest planet to TRAPPIST-1, this planet’s temperature is lower than Mercury’s in our solar system due to its star being much cooler than the Sun!'
  },

  '1c': {
    generalInfo: 'TRAPPIST-1c, the second planet from the star, orbits in approximately 2.4 Earth days. It is thought to have a thick atmosphere and could experience strong greenhouse effects similar to Venus, making its surface extremely hot. It provides key insights into atmospheric composition and heat retention.',
    historicalSignificance: 'TRAPPIST-1c was part of the initial discovery that solidified the importance of the TRAPPIST-1 system in the field of exoplanet research. It allowed astronomers to develop theories about the interaction between planetary atmospheres and stellar radiation.',
    funFact: 'TRAPPIST-1c’s atmosphere is thought to be dense, potentially trapping heat in a manner similar to Venus, making it a greenhouse planet!'
  },

  '1d': {
    generalInfo: 'TRAPPIST-1d is located within the star’s habitable zone and orbits the star in about 4 Earth days. It has the potential to maintain liquid water on its surface under the right conditions, making it one of the most intriguing planets for the possibility of life.',
    historicalSignificance: 'TRAPPIST-1d holds special significance due to its location within the habitable zone, sparking interest in its potential for life. Its discovery has been key in furthering the study of exoplanetary climates and conditions for habitability.',
    funFact: 'Because of its potential for liquid water, TRAPPIST-1d is considered one of the most promising candidates for life within this planetary system!'
  },

  '1e': {
    generalInfo: 'TRAPPIST-1e, one of the most Earth-like planets in the system, orbits in about 6.1 Earth days. With its rocky composition, size, and location in the habitable zone, it is one of the best candidates for hosting life, as it may have a temperate climate and even liquid water.',
    historicalSignificance: 'TRAPPIST-1e has become a primary target for astrobiological research because of its Earth-like characteristics. It provides a real-world case for studying planets in the habitable zone of ultra-cool dwarf stars.',
    funFact: 'TRAPPIST-1e is so similar to Earth that scientists speculate it could have an atmosphere and oceans like our own!'
  },

  '1f': {
    generalInfo: 'TRAPPIST-1f orbits its star in about 9.2 Earth days and is located within the outer edge of the habitable zone. Its size and mass suggest it could be a water-rich world, possibly covered entirely by oceans, making it an exciting subject for astrobiological studies.',
    historicalSignificance: 'TRAPPIST-1f adds to the diversity of planets within the habitable zone of the system, providing another case study for understanding atmospheric evolution on exoplanets.',
    funFact: 'TRAPPIST-1f could be an ocean world, with its surface entirely covered by water, making it one of the more intriguing planets for astrobiological study!'
  },

  '1g': {
    generalInfo: 'TRAPPIST-1g is one of the larger planets in the system, orbiting in 12.4 Earth days. Its mass and size suggest that it could have a substantial atmosphere, possibly resembling mini-Neptunes found in our own solar system, but its exact nature remains unknown.',
    historicalSignificance: 'TRAPPIST-1g stands out as one of the larger planets discovered, allowing astronomers to study the differences between smaller terrestrial planets and larger, potentially gas-rich worlds.',
    funFact: 'TRAPPIST-1g might have thick clouds rich in hydrogen and helium, resembling the mini-Neptunes found in our own solar system!'
  },

  '1h': {
    generalInfo: 'TRAPPIST-1h is the outermost planet in the system, completing an orbit in about 18 Earth days. Though it lies on the edge of the system’s habitable zone, its surface is likely too cold for liquid water to exist. However, subsurface oceans remain a possibility.',
    historicalSignificance: 'TRAPPIST-1h represents a key discovery as the outermost planet of the system, providing crucial insights into how planetary environments change with increasing distance from the host star.',
    funFact: 'Even though it’s far from the star, TRAPPIST-1h might still have subsurface oceans, similar to moons like Europa and Enceladus in our solar system!'
  }
};

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


function showPlanet(planet) {
  const planetImageDiv = document.getElementById('planet-image');

  // Start zoom-out effect
  planetImageDiv.classList.add('zoom-out');

  // Wait for zoom-out to complete before changing the image (0.5s)
  setTimeout(() => {
    // Update the background image for the new planet
    if (planetImages[planet]) {
      planetImageDiv.style.backgroundImage = planetImages[planet];
    } else {
      console.error('Planet image not found');
    }

    // Wait a little, then apply zoom-in effect
    planetImageDiv.classList.remove('zoom-out');
    planetImageDiv.classList.add('zoom-in');

    // Clean up zoom-in class after the animation completes
    setTimeout(() => {
      planetImageDiv.classList.remove('zoom-in');
    }, 500); // Ensure this matches the CSS transition time

    // Update planet info after the zoom effect
    // Update planet info after the zoom effect
    const planetInfo = document.getElementById('planet-info');
    const planetfunfact = document.getElementById('planet-funfact');
    const planetHistory = document.getElementById('planet-history');

    planetInfo.innerText = `${planetExplain[planet].generalInfo}`;
    planetfunfact.innerText = `${planetExplain[planet].funFact}`;
    planetHistory.innerText = `${planetExplain[planet].historicalSignificance}`;

    // Optionally, you can collapse the sections by default after updating the content
    document.getElementById('funfact-content').style.display = 'none';
    document.getElementById('history-content').style.display = 'none';

    // Show the sidebar
    document.getElementById('planet-sidebar').classList.add('active');

  }, 500); // Wait for zoom-out transition before updating the image
}

// Function to toggle collapsible content visibility
function toggleCollapse(contentId) {
  const content = document.getElementById(contentId);

  if (content.style.display === "none" || content.style.display === "") {
    content.style.display = "block";
  } else {
    content.style.display = "none";
  }
}


// Close the sidebar
function closeSidebar() {
  document.getElementById('planet-sidebar').classList.remove('active');
}
