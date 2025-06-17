function getWeather() {
      const apiKey = 'YOUR_API_KEY_HERE'; // <-- Replace this with your OpenWeatherMap API Key
      const city = 'London';
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

      fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
          const weather = data.weather[0].main;
          document.getElementById('weatherData').innerText = `Current weather in ${city}: ${weather}`;
        })
        .catch(error => {
          document.getElementById('weatherData').innerText = 'Error fetching weather data';
          console.error(error);
        });
    }