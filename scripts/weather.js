const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const url = `https://api.openweathermap.org/data/2.5/weather?lat=49.75&lon=6.64&units=metric&appid=68aaa81d80f2973de1bdf11407816979`;

async function apiFetch() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      console.log(data); // View full response
      displayResults(data);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.error('Error fetching weather data:', error);
  }
}

function displayResults(data) {
  currentTemp.innerHTML = `${data.main.temp}&deg;C`;

  const iconCode = data.weather[0].icon;
  const description = data.weather[0].description;
  const iconURL = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

  weatherIcon.setAttribute('src', iconURL);
  weatherIcon.setAttribute('alt', description);
  captionDesc.textContent = description;
}

apiFetch();
