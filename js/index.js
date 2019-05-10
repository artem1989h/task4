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
  email.value = localStorage['phoneNum'] || ;
  message.value = localStorage['message'] || '';
}


