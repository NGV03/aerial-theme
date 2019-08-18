let weatherCurrent = null;
let query = 'Auckland,nz';
const temperature = document.getElementById('data-temperature');
const weatherCond = document.getElementById('data-weatherCondition');
const place = document.getElementById('data-place');
const description = document.getElementById('data-description');
const icon = document.getElementById('data-icon');

const apiKey = '1f44f25862b9c48cdcc9e2d699a1a9e4';
const url = 'https://api.openweathermap.org/data/2.5/weather?q=' + query + '&units=metric&appid=' + apiKey;

//using axios js library for http request to weather api
axios.get(url)
    .then(response =>  {
        weatherCurrent = response.data;
        temperature.innerHTML = weatherCurrent.main.temp;
        weatherCond.innerHTML = weatherCurrent.weather[0].main;
        place.innerHTML = weatherCurrent.name;
        description.innerHTML = weatherCurrent.weather[0].description;
        icon.innerHTML = ("<img src='http://openweathermap.org/img/wn/" + weatherCurrent.weather[0].icon + ".png' alt='Icon depicting current weather.'>");
    })
    .catch(err => {
        weatherCurrent = null;
    });
    

 