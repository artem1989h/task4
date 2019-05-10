document.querySelector('.openweather').addEventListener('click', getWeather);

const XHR_DONE = 4;
const HTTP_OK = 200;


function getWeather() {
    const XML = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        
        if (xhr.readyState === XHR_DONE && xhr.status === HTTP_OK) {
            document.querySelector('.weather').innerHTML = xhr.responesXML;
        }
    }
    xhr.open('GET', 'weather.html', true);
    xhr.send();
}
