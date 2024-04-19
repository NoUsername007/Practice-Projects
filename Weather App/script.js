const cityInput = document.getElementById('cityInput');
// const submitBtn = document.getElementById('submit');
const card = document.querySelector('.card');

const weatherForm = document.getElementById('weatherForm');

const APIKey = 'ae602b039b168fa5aeeca4b476b94a49';

weatherForm.addEventListener('submit', async event => {
    
    event.preventDefault();

    const city = cityInput.value;

    if (city) {

        try {
            const WeatherData = await getWeatherData(city);
            displayWeatherInfo(WeatherData);
            
        } catch (error) {
            console.error(error);
            displayError(error);
        }

    } else {
        displayError("Please Enter a City.");

    }
})

async function getWeatherData (city) {
    const APIurl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKey}`;

    const response = await fetch(APIurl);

    if (!response.ok) {
        throw new Error('Could not fetch weather data.')
    } 
    
    return await response.json();
}

function displayWeatherInfo (data) {
    
    const {name: city, main: {temp, humidity}, weather:[{description, id}]} = data;

    card.textContent = '';

    card.style.display = 'flex'

    const cityDisplay= document.createElement('h1');
    const tempDisplay= document.createElement('p');
    const humidityDisplay = document.createElement('p');
    const descriptionDisplay = document.createElement('p');
    const weatherEmoji = document.createElement('p');

    cityDisplay.textContent = city
    cityDisplay.classList.add('cityName')

    tempDisplay.textContent = `${(temp - 273.15).toFixed(1)}°C`;
    tempDisplay.classList.add('tempDisplay');

    humidityDisplay.textContent = `Humidity: ${humidity}%`
    humidityDisplay.classList.add('humidityDisplay')

    descriptionDisplay.textContent = `${description}`;
    descriptionDisplay.classList.add('descriptionDisplay')

    weatherEmoji.textContent = getWeatherEmoji(id);
    weatherEmoji.classList.add('WeatherEmoji')


    card.append(cityDisplay);
    card.append(tempDisplay);
    card.append(humidityDisplay);
    card.append(descriptionDisplay);
    card.append(weatherEmoji);

}

function getWeatherEmoji(weatherId) {
    
    switch (true) {
        case (weatherId >= 200 && weatherId < 300):
            return `⛈️`
        case (weatherId >= 300 && weatherId < 400):
            return `🌧️`
        case (weatherId >= 500 && weatherId < 600):
            return `☔`
        case (weatherId >= 600 && weatherId < 700):
            return `❄️`
        case (weatherId >= 700 && weatherId < 800):
            return `🌫️`
        case (weatherId == 800):
            return `☀️`
        case (weatherId >= 801 && weatherId < 810):
            return `☁️`

        default: 
            return `❓`
    }

}

function displayError(message) {
    const errorDisplay = document.createElement("p");
    errorDisplay.textContent = message;
    errorDisplay.classList.add('errorDisplay');

    card.textContent = '';
    card.style.display = 'block';
    card.appendChild(errorDisplay)
}


