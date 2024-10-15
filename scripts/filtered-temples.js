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

// temple cards
const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Tijuana Mexico",
        location: "Tijuana, Baja California, Mexico",
        dedicated: "2015, December, 13",
        area: 33367,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/tijuana-mexico/400x250/tijuana-mexico-temple-exterior-1603896-wallpaper.jpg"
    },
    {
        templeName: "Colonia Juárez Chihuahua Mexico",
        location: "Colonia Juárez, Chihuahua, Mexico",
        dedicated: "1999, March, 6–7",
        area: 6800,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/colonia-juarez-chihuahua-mexico/400x250/colonia-juarez-mexico-temple-lds-126123-wallpaper.jpg"
    },
    {
        templeName: "San Diego California",
        location: "San Diego, California, United States",
        dedicated: "1993, April, 25–30",
        area: 72000,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/san-diego-california/400x250/san-diego-temple-765109-wallpaper.jpg"
    },
];

createTempleCard(temples);

function createTempleCard(filteredTemples) {
    document.querySelector(".temple-images").innerHTML = "";
    filteredTemples.forEach(filteredTemples => {
        let templeCard = document.createElement("section");
        let templeName = document.createElement("h3");
        let templeLocation = document.createElement("span");
        let templeDedication = document.createElement("span");
        let templeArea = document.createElement("span");
        let templeImage = document.createElement("img");

        templeCard.className = "temple-card";
        templeName.textContent = filteredTemples.templeName;
        templeLocation.innerHTML = `Location: ${filteredTemples.location}`;
        templeDedication.innerHTML = `Dedication: ${filteredTemples.dedicated}`;
        templeArea.innerHTML = `Area: ${filteredTemples.area}`;
        templeImage.src = filteredTemples.imageUrl;
        templeImage.setAttribute("alt", `${filteredTemples.templeName} Temple`);
        templeImage.width = 200;
        templeImage.height = 125;
        templeImage.loading = "lazy";
        templeCard.appendChild(templeName);
        templeCard.appendChild(templeLocation);
        templeCard.appendChild(templeDedication);
        templeCard.appendChild(templeArea);
        templeCard.appendChild(templeImage);
        document.querySelector(".temple-images").appendChild(templeCard);
    }
    )
}

// for temple filtering
const homeLink = document.querySelector("#home");
const oldLink = document.querySelector("#old");
const newLink = document.querySelector("#new");
const largeLink = document.querySelector("#large");
const smallLink = document.querySelector("#small");

// navigation event listeners
homeLink.addEventListener("click", () => {
    createTempleCard(temples);
});

oldLink.addEventListener("click", () => {
    createTempleCard(temples.filter((temple) => (parseInt(temple.dedicated.split(",")[0]) < 1900)));
});

newLink.addEventListener("click", () => {
    createTempleCard(temples.filter((temple) => (parseInt(temple.dedicated.split(",")[0]) > 2000)));
});

largeLink.addEventListener("click", () => {
    createTempleCard(temples.filter((temple) => temple.area > 90000));
});

smallLink.addEventListener("click", () => {
    createTempleCard(temples.filter((temple) => temple.area < 10000));
});
