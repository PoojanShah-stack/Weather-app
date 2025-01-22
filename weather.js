const apiUrl ="http://api.weatherapi.com/v1/current.json?aqi=yes&q="
const apiKey = "bbed368ece014ba39e7201740242412"

const searchBox = document.querySelector(".search input")
const searchBtn = document.querySelector(".search button")
const weatherIcon = document.querySelector(".weather-icon")
const celDiv = document.querySelector('.cel')
const fahreDiv = document.querySelector('.fahre')
const unitSelector = document.getElementById('unitSelector')

// Event listener for the dropdown selection
unitSelector.addEventListener('change', () => {
    const selectedUnit = unitSelector.value;

    if (selectedUnit === 'C') {
        celDiv.style.display = 'block';
        fahreDiv.style.display = 'none';
    } else if (selectedUnit === 'F') {
        celDiv.style.display = 'none';
        fahreDiv.style.display = 'block';
    }
});

async function checkWeather(city) {
        const response = await fetch(apiUrl + city + `&key=${apiKey}`)
        const data = await response.json()
        console.log(data) 

    document.querySelector(".city").innerHTML = data.location.name
    document.querySelector("#tempC").innerHTML = Math.round(data.current.temp_c) +"°c"
    document.querySelector(".humidity").innerHTML = data.current.humidity + "%"
    document.querySelector(".wind").innerHTML = Math.round(data.current.wind_kph)+ " km/h"
    weatherIcon.src= data.current.condition.icon
    document.querySelector("#feelC").innerHTML = `Feels like ${Math.round(data.current.feelslike_c)}°c`
    document.querySelector("#tempF").innerHTML = Math.round(data.current.temp_f) +"°F"
    document.querySelector("#feelF").innerHTML = `Feels like ${Math.round(data.current.feelslike_f)}°F`
    }


    searchBtn.addEventListener("click",()=>{ 
            if(searchBox.value !== ""){
                checkWeather(searchBox.value)
                }   
            })