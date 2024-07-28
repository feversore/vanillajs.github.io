const API_KEY = "a6c4fe1feec1a9358ad11ecc94a82feb";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  
  // console.log("You live in", lat, lon);


  fetch(url).then(response => response.json()).then(data => {
    const weather = document.querySelector('.weather');
    
    const ico = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    const text = data.weather[0].main;
    const cityData = data.name;
    const weatherData = `${data.main.temp}`; //${data.weather[0].icon}

    weather.innerHTML = `
      <span class="city">${cityData}</span>
      <span class="decs">${weatherData}°C <img src="${ico}" alt="${text}"></span>
    `;
    
    console.log(ico);
    // console.log(cityWeather);
  });
}
function onGeoError() {
  alert("Can't find you. No weather for you.");
}
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);