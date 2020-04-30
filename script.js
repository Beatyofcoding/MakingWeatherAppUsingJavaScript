// Selecting Elements

cons iconElement = document.querySelector(".weather-icon");
cons tempElement = document.querySelector(".temperature-value p");
cons descElement = document.querySelector(".temperature-description p");
cons locationElement = document.querySelector(".location p");
cons notificationElement = document.querySelector(".notification");



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