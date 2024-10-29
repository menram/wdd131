// use the date object
const today = new Date();
// displays the year in the associated ID
document.querySelector("#currentyear").textContent = today.getFullYear();
// displays the last modified date in the corresponding ID
document.querySelector("#lastModified").textContent = document.lastModified;

// hamburger menu
const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});

// attractions array
const attractions = [
    {
        attractionName: "Bellagio Conservatory",
        location: "strip",
        cost: 0,
        attractionUrl:
            "https://bellagio.mgmresorts.com/en/entertainment/conservatory-botanical-garden.html"
    },
    {
        attractionName: "Fountains of Bellagio",
        location: "strip",
        cost: 0,
        attractionUrl:
            "https://bellagio.mgmresorts.com/en/entertainment/fountains-of-bellagio.html"
    },
    {
        attractionName: "The Aquarium at The Silverton",
        location: "strip",
        cost: 0,
        attractionUrl:
            "https://silvertoncasino.com/hotel/aquarium-mermaid-show/"
    },
    {
        attractionName: "High Roller",
        location: "strip",
        cost: 33,
        attractionUrl:
            "https://www.caesars.com/linq/things-to-do/attractions/high-roller"
    },
    {
        attractionName: "Flyover in Las Vegas",
        location: "strip",
        cost: 36,
        attractionUrl:
            "https://www.flyoverlasvegas.com/"
    },
    {
        attractionName: "Shark Reef Aquarium",
        location: "strip",
        cost: 29,
        attractionUrl:
            "https://mandalaybay.mgmresorts.com/en/entertainment/shark-reef-aquarium.html"
    },
    {
        attractionName: "Fremont Street Experience",
        location: "downtown",
        cost: 0,
        attractionUrl:
            "https://vegasexperience.com/"
    },
    {
        attractionName: "Downtown Container Park",
        location: "downtown",
        cost: 0,
        attractionUrl:
            "https://downtowncontainerpark.com/visit/"
    },
    {
        attractionName: "The Arts Factory",
        location: "downtown",
        cost: 0,
        attractionUrl:
            "https://www.theartsfactorylv.com/"
    },
    {
        attractionName: "The Neon Museum Las Vegas",
        location: "downtown",
        cost: 25.88,
        attractionUrl:
            "https://neonmuseum.org/tickets-and-experiences/"
    },
    {
        attractionName: "The Mob Museum",
        location: "downtown",
        cost: 34.95,
        attractionUrl:
            "https://themobmuseum.org/plan-your-visit/purchase-tickets/"
    },
    {
        attractionName: "SlotZilla Zipline Las Vegas",
        location: "downtown",
        cost: 54,
        attractionUrl:
            "https://vegasexperience.com/slotzilla-zip-line/"
    },
    {
        attractionName: "Mt. Charleston",
        location: "outdoors",
        cost: 0,
        attractionUrl:
            "https://www.gomtcharleston.com/hikes-trails/"
    },
    {
        attractionName: "Las Vegas Nevada Temple",
        location: "outdoors",
        cost: 0,
        attractionUrl:
            "https://www.churchofjesuschrist.org/temples/details/las-vegas-nevada-temple?lang=eng"
    },
    {
        attractionName: "Seven Magic Mountains",
        location: "outdoors",
        cost: 0,
        attractionUrl:
            "https://sevenmagicmountains.com/"
    },
    {
        attractionName: "Red Rock Canyon",
        location: "outdoors",
        cost: 20,
        attractionUrl:
            "https://www.redrockcanyonlv.org/fees/"
    },
    {
        attractionName: "Hoover Dam",
        location: "outdoors",
        cost: 30,
        attractionUrl:
            "https://www.usbr.gov/lc/hooverdam/service/"
    },
    {
        attractionName: "Lake Mead",
        location: "outdoors",
        cost: 25,
        attractionUrl:
            "https://www.nps.gov/lake/planyourvisit/fees.htm"
    }
];

function addAttractions(filteredAttractions) {
    document.querySelector(".free").innerHTML = "";
    let freeHeading = document.createElement("h2");
    freeHeading.textContent = "Free Attractions";
    document.querySelector(".free").appendChild(freeHeading);
    filteredAttractions.filter((attraction) => attraction.cost === 0).forEach(filteredAttraction => {
        let addAttractions = document.createElement("span");
        // addAttractions.textContent = filteredAttraction.addAttractions;
        let a = document.createElement('a');
        a.text = filteredAttraction.attractionName;
        a.href = filteredAttraction.attractionUrl;
        a.target = "_blank";
        addAttractions.appendChild(a);
        document.querySelector(".free").appendChild(addAttractions);
    }
    )

    document.querySelector(".money").innerHTML = "";
    let costHeading = document.createElement("h2");
    costHeading.textContent = "Cost Attractions";
    document.querySelector(".money").appendChild(costHeading);
    filteredAttractions.filter((attraction) => attraction.cost > 0).forEach(filteredAttraction => {
        let addAttractions = document.createElement("span");
        const attractionLink = `<a href="${filteredAttraction.attractionUrl}" target="_blank">${filteredAttraction.attractionName}</a>`
        addAttractions.innerHTML = attractionLink;
        document.querySelector(".money").appendChild(addAttractions);
    }
    )
}

function loadPage(pageName) {
    if (pageName === "strip") {
        addAttractions(attractions.filter((attraction) => attraction.location === 'strip'));
    } else if (pageName === "downtown") {
        addAttractions(attractions.filter((attraction) => attraction.location === 'downtown'));
    } else {
        addAttractions(attractions.filter((attraction) => attraction.location === 'outdoors'));
    }
    countVisits(pageName);
}

function countVisits(pageName) {
    let visitsCount = JSON.parse(localStorage.getItem(pageName)) || 0;
    visitsCount += 1;
    JSON.stringify(localStorage.setItem(pageName, visitsCount));
    document.querySelector(".visitsCount").textContent = `${visitsCount}`;
}