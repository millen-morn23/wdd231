const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const forecastContainer = document.querySelector('#forecast');
const apiKey = '68aaa81d80f2973de1bdf11407816979'; //  OpenWeatherMap API key

const lat = -1.2921; // Nairobi
const lon = 36.8219;
const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;

async function apiFetch() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      displayResults(data);
    } else {
      throw Error(await response.text());
    }

    const forecastResponse = await fetch(forecastUrl);
    if (forecastResponse.ok) {
      const forecastData = await forecastResponse.json();
      displayForecast(forecastData);
    }
  } catch (error) {
    console.log(error);
  }
}

function displayResults(data) {
  currentTemp.innerHTML = `${data.main.temp}&deg;C`;
  const icon = data.weather[0].icon;
  const desc = data.weather[0].description;
  const iconsrc = `https://openweathermap.org/img/wn/${icon}@2x.png`;
  weatherIcon.setAttribute('src', iconsrc);
  weatherIcon.setAttribute('alt', desc);
  captionDesc.textContent = desc;
}

function displayForecast(forecastData) {
  const days = forecastData.list.filter((item, index) => index % 8 === 0).slice(1, 4);
  forecastContainer.innerHTML = '';
  days.forEach(day => {
    const dayEl = document.createElement('div');
    dayEl.innerHTML = `
      <p><strong>${new Date(day.dt_txt).toLocaleDateString()}</strong></p>
      <p>${day.main.temp}&deg;C</p>
      <img src="https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png" alt="${day.weather[0].description}">
    `;
    forecastContainer.appendChild(dayEl);
  });
}

apiFetch();
