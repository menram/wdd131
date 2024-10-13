// use the date object
const today = new Date();
// displays the year in the associated ID
document.querySelector("#currentyear").textContent = today.getFullYear();
// displays the last modified date in the corresponding ID
document.querySelector("#lastModified").textContent = document.lastModified;

// Wind Chill Function - One Line
function calculateWindChill(temperature, windSpeed) {
    return Math.round(35.74 + 0.6215 * temperature - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * temperature * Math.pow(windSpeed, 0.16)) + " ℉";
}

let temperature = document.querySelector("#temperature").textContent;
let windSpeed = document.querySelector("#windSpeed").textContent;
let windChill = document.querySelector("#windChill");

// Wind Chill Function - Only when applicable call the Wind Chill Function
if (temperature > 50 || windSpeed <= 3) {
    windChill.textContent = "N/A";
}
else {
    windChill.textContent = calculateWindChill(temperature, windSpeed);
}
