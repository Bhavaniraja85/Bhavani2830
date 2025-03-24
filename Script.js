const apiKey = 'your-api-key';  // Replace with your OpenWeatherMap API key

async function getWeather() {
    const city = document.getElementById('city-input').value;
    if (city === '') {
        alert('Please enter a city');
        return;
    }
    
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.cod === '404') {
            alert('City not found');
            return;
        }

        // Update the UI with the fetched data
        document.getElementById('city-name').innerText = `Weather in ${data.name}, ${data.sys.country}`;
        document.getElementById('temperature').innerText = `Temperature: ${data.main.temp}°C`;
        document.getElementById('description').innerText = `Description: ${data.weather[0].description}`;
    } catch (error) {
        console.error('Error fetching weather data:', error);
        alert('Something went wrong. Please try again later.');
    }
}
