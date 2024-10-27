// use the date object
const today = new Date();
// displays the year in the associated ID
document.querySelector("#currentyear").textContent = today.getFullYear();
// displays the last modified date in the corresponding ID
document.querySelector("#lastModified").textContent = document.lastModified;

const products = [
    {
        id: "fc-1888",
        name: "flux capacitor",
        averagerating: 4.5
    },
    {
        id: "fc-2050",
        name: "power laces",
        averagerating: 4.7
    },
    {
        id: "fs-1987",
        name: "time circuits",
        averagerating: 3.5
    },
    {
        id: "ac-2000",
        name: "low voltage reactor",
        averagerating: 3.9
    },
    {
        id: "jj-1969",
        name: "warp equalizer",
        averagerating: 5.0
    }
];

addOptions(products);

function addOptions(products) {
    const select = document.querySelector("#products");

    products.map(products => {
        const option = document.createElement('option');
        option.value = products.id;
        option.text = products.name;
        select.appendChild(option);
    });
}

function countReviews() {
    let reviewCount = JSON.parse(localStorage.getItem("reviewCount")) || 0;
    reviewCount += 1;
    JSON.stringify(localStorage.setItem("reviewCount", reviewCount));
    document.querySelector(".reviewCount").textContent = `${reviewCount}`;
}

