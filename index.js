
//hamburger menu
const hamburger = document.querySelectorAll('.hamburger');
const header = document.querySelector('.header');

for (let i = 0; i < hamburger.length; i++) {

  hamburger[i].addEventListener('click', () => {
    if (header.getAttribute('data-menu') === 'closed') {
      header.setAttribute('data-menu', 'open');
    } else {
      header.setAttribute('data-menu', 'closed');
    }
  });
} 



/****************

//destination

*****************/

//json destination into the js
const destinations = 
  [
    {
      "name": "Moon",
      "images": {
        "png": "./assets/destination/image-moon.png",
        "webp": "./assets/destination/image-moon.webp"
      },
      "description": "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
      "distance": "384,400 km",
      "travel": "3 days"
    },
    {
      "name": "Mars",
      "images": {
        "png": "./assets/destination/image-mars.png",
        "webp": "./assets/destination/image-mars.webp"
      },
      "description": "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
      "distance": "225 mil. km",
      "travel": "9 months"
    },
    {
      "name": "Europa",
      "images": {
        "png": "./assets/destination/image-europa.png",
        "webp": "./assets/destination/image-europa.webp"
      },
      "description": "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
      "distance": "628 mil. km",
      "travel": "3 years"
    },
    {
      "name": "Titan",
      "images": {
        "png": "./assets/destination/image-titan.png",
        "webp": "./assets/destination/image-titan.webp"
      },
      "description": "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
      "distance": "1.6 bil. km",
      "travel": "7 years"
    }
  ];
  
//changing elements
const planet = document.querySelector('.planet');
const planetName = document.querySelector('.destination-main-content h2');
const destP = document.querySelector('.destination-p');
const destinationKM = document.querySelector('.distance .subheading1');
const destinaionTravelTime =document.querySelector('.travel-time .subheading1');

// menu
const destinationLink = document.querySelectorAll('.destination-list li');
  
destinationLink.forEach((link, index) => {
  link.addEventListener('click', function() {
    destinationLink.forEach((otherlink) => {
      otherlink.classList.remove('destination-link-active');
    });
    this.classList.add('destination-link-active');

    // Get the destination at the current index
    const destination = destinations[index];

    // Update the planet image
    planet.setAttribute('src', destination.images.png);

    // Update the planet name
    planetName.textContent = destination.name;

    // Update the destination description
    destP.textContent = destination.description;

    // Update the distance
    destinationKM.textContent = destination.distance;

    // Update the travel time
    destinaionTravelTime.textContent = destination.travel;
  });
});


/****************

//crew

*****************/

//json crew into the js

const crew = [
  {
    "name": "Douglas Hurley",
    "images": {
      "png": "./assets/crew/image-douglas-hurley.png",
      "webp": "./assets/crew/image-douglas-hurley.webp"
    },
    "role": "Commander",
    "bio": "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2."
  },
  {
    "name": "Mark Shuttleworth",
    "images": {
      "png": "./assets/crew/image-mark-shuttleworth.png",
      "webp": "./assets/crew/image-mark-shuttleworth.webp"
    },
    "role": "Mission Specialist",
    "bio": "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist."
  },
  {
    "name": "Victor Glover",
    "images": {
      "png": "./assets/crew/image-victor-glover.png",
      "webp": "./assets/crew/image-victor-glover.webp"
    },
    "role": "Pilot",
    "bio": "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer."
  },
  {
    "name": "Anousheh Ansari",
    "images": {
      "png": "./assets/crew/image-anousheh-ansari.png",
      "webp": "./assets/crew/image-anousheh-ansari.webp"
    },
    "role": "Flight Engineer",
    "bio": "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space."
  }
];

//changing elements

const crewJob = document.querySelector('.crew-job');
const crewName = document.querySelector('.crew-name');
const crewP = document.querySelector('.crew-info p');
const crewImg = document.querySelector('.crew-img');

//addeventlistener for each span
const span = document.querySelectorAll('.crew-slider span');
span.forEach((spa,index) => {
  spa.addEventListener('click', function() {
    span.forEach((anotherSpa) => {
      anotherSpa.classList.remove('slider-active');
    });
    this.classList.add('slider-active');

    const changingCrew = crew[index];
    crewImg.setAttribute('src', changingCrew.images.png);
    crewP.textContent = changingCrew.bio;
    crewName.textContent = changingCrew.name;
    crewJob.textContent = changingCrew.role;
  });
});

/****************

//technology

*****************/

//json technology into the js

const tech = [
  {
    "name": "Launch vehicle",
    "images": {
      "portrait": "./assets/technology/image-launch-vehicle-portrait.jpg",
      "landscape": "./assets/technology/image-launch-vehicle-landscape.jpg"
    },
    "description": "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!"
  },
  {
    "name": "Spaceport",
    "images": {
      "portrait": "./assets/technology/image-spaceport-portrait.jpg",
      "landscape": "./assets/technology/image-spaceport-landscape.jpg"
    },
    "description": "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch."
  },
  {
    "name": "Space capsule",
    "images": {
      "portrait": "./assets/technology/image-space-capsule-portrait.jpg",
      "landscape": "./assets/technology/image-space-capsule-landscape.jpg"
    },
    "description": "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained."
  }
];

//changing elements

const techBtnChild = document.querySelectorAll('.tech-btn-child');
const techHeader = document.querySelector('.tech-text-container h1');
const techP = document.querySelector('.tech-text-container p');
const techImg = document.querySelector('.tech-img')

//addeventlistener to btns

techBtnChild.forEach((child, index) => {
  child.addEventListener('click', () => {
    techBtnChild.forEach((anotherChild) => {
      anotherChild.classList.remove('tech-active');
    });
    child.classList.add('tech-active');
    techHeader.textContent = tech[index].name;
    techP.textContent = tech[index].description;
    techImg.style.setProperty('background-image', `url(${window.innerWidth < 768 ? tech[index].images.landscape : tech[index].images.portrait})`)
  })
})

