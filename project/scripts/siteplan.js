// use the date object
const today = new Date();
// displays the year in the associated ID
document.querySelector("#currentyear").textContent = today.getFullYear();
// displays the last modified date in the corresponding ID
document.querySelector("#lastModified").textContent = document.lastModified;
