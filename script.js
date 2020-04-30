// Selecting Elements

const iconElement = document.querySelector(".weather-icon");
const tempElement = document.querySelector(".temperature-value p");
const descElement = document.querySelector(".temperature-description p");
const locationElement = document.querySelector(".location p");
const notificationElement = document.querySelector(".notification");



// App Data
const weather = {};

weather.temperature = {
    unit : "celsius"
}

// App Consts and Vars
const KELVIN = 273;
// API Key
const key = "82005d27a116c2880c8f0fcb866998a0";

// Check if browser supports Geolocation
if("geolocation" in navigator){
    navigator.geolocation.getCurrentPosition(setPosition, showError);
}else{
    notificationElement.style.display = "block";
    notificationElement.innerHTML = "<p>Browser doesn't support Geolocation</p>";
}

// Set user's position
function setPosition(position){
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;

    getWeather(latitude, longitude);
}

// Show Error when there is an issue with Geolocation Service
function showError(error){
    notificationElement.style.display = "block";
    notificationElement.innerHTML =`<p> ${error.message} </p>`;
}
// Get Weather From API Provider
function getWeather(latitude, longitude){
    let api = `http://api.openweathermap.org/data/2.5/weather?
    lat=${latitude}&lon=${longitude}&appid=${key}`;

    console.log(api);//works perfectely
}