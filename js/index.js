// document.querySelector('.openweather').addEventListener('click', getWeather);

// const XHR_DONE = 4;
// const HTTP_OK = 200;


// function getWeather() {
//     const XML = new XMLHttpRequest();
//     xhr.onreadystatechange = function () {
        
//         if (xhr.readyState === XHR_DONE && xhr.status === HTTP_OK) {
//             document.querySelector('.weather').innerHTML = xhr.responesXML;
//         }
//     }
//     xhr.open('GET', 'weather.html', true);
//     xhr.send();
// }

// document.querySelector('.fetch-weather').addEventListener('click', fetchWeather);

// function fetchWeather() {
//     fetch('client-data.html')
//         .then( response => response.text() )
//         .then( html => document.querySelector('.html-container').innerHTML = html );
// }
// const forecastAPI = 'https://api.openweathermap.org/data/2.5/weather?id=702550';
// const keyAPI = '6769bee229c73c93d1cea3e53ea41fe5';
// fetch(forecastAPI + keyAPI)
//     .then(response => response.json())
//     .then(weatherdata => {
//         const celsiusTemperature = (weatherdata.main.temp - 273.15).toFixed(2);
//         document.getElementById('temp').innerHTML = `<p> ${(weatherdata.main.temp - 273.15).toFixed(2)} <sup>o</sup>C</p>`;
//         document.getElementById('humidity').innerHTML = `<p> ${weatherdata.main.humidity} %</p>`;
//         document.getElementById('pressure').innerHTML = `<p> ${weatherdata.main.pressure} мм рт.ст.</p>`;
//         document.getElementById('clouds').innerHTML = `<p> ${weatherdata.clouds.all} %</p>`;
//         document.getElementById('wind').innerHTML = `<p> ${weatherdata.wind.speed} м/с</p>`;
//     });
    
const forecastAPI = 'https://api.openweathermap.org/data/2.5/weather?id=702550';
const keyAPI = '&APPID=0746e9cef51e45cd40c66c3f06fcecb1';
fetch(forecastAPI + keyAPI)
    .then(response => response.json())
    .then(weatherdata => {
        const celsiusTemperature = (weatherdata.main.temp - 273.15).toFixed(2);
        document.getElementById('temp').innerHTML = `<p> ${(weatherdata.main.temp - 273.15).toFixed(2)} <sup>o</sup>C</p>`;
        document.getElementById('humidity').innerHTML = `<p> ${weatherdata.main.humidity} %</p>`;
        document.getElementById('pressure').innerHTML = `<p> ${weatherdata.main.pressure} мм рт.ст.</p>`;
        document.getElementById('clouds').innerHTML = `<p> ${weatherdata.clouds.all} % <img src="" id="wicon" src="" alt="Weather icon"></p>`;
        document.getElementById('wicon').src = "http://openweathermap.org/img/w/" + weatherdata.weather[0].icon + ".png";
        document.getElementById('wind').innerHTML = `<p> ${weatherdata.wind.speed} м/с</p>`;
    });


const name = document.querySelector('.contact-form input[type=text]');
const email = document.querySelector('.contact-form input[type=email]');
const phoneNum = document.querySelector('.contact-form input[type=text]');
const message = document.querySelector('.contact-form textarea');

document.querySelector('.save-btn')
  .addEventListener('click', saveText);

document.querySelector('.load-btn')
  .addEventListener('click', loadText);

function saveText(e) {
  e.preventDefault();
  localStorage['name'] = name.value;
  localStorage['email'] = email.value;
  localStorage['phoneNum'] = email.value;
  localStorage['message'] = message.value;
}

function loadText(e) {
  e.preventDefault();
  name.value = localStorage['name'] || '';
  email.value = localStorage['email'] || '';
  email.value = localStorage['phoneNum'] || '';
  message.value = localStorage['message'] || '';
}


