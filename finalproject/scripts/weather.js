const apiKey = "68aaa81d80f2973de1bdf11407816979"; // API key
const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=Nairobi,KE&units=metric&appid=${apiKey}`;

async function getWeather() {
  try {
    const response = await fetch(apiURL);
    if (!response.ok) throw new Error("Network response was not ok");
    const data = await response.json();
    displayWeather(data);
  } catch (error) {
    console.error("Weather fetch failed:", error);
    document.getElementById("weatherInfo").innerHTML = "Unable to load weather.";
  }
}

function displayWeather(data) {
  const description = data.weather[0].description;
  const temp = data.main.temp;
  const humidity = data.main.humidity;
  const icon = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;

  document.getElementById("description").textContent = description;
  document.getElementById("temperature").textContent = temp.toFixed(1);
  document.getElementById("humidity").textContent = humidity;
  document.getElementById("weatherIcon").src = icon;
  document.getElementById("weatherIcon").alt = description;
}

getWeather();
