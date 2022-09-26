setWeather({
    temperture: response.data.main.temp,
    description: response.data.weather[0].description,
    humidity: response.data.main.humidity,
    wind: response.data.wind.speed,
    icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    city: response.data.name
  });
function handleSubmit(event) {
  event.preventDefault();
  let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=3a94f3778290bfeee61278505dbbe51d&units=metric`;
  axios.get(apiURL).then(showTemperture);
}

function updateCity(event) {
  event.preventDefault();
  setCity(event.target.value);
}

let form = (
  <form onSubmit={handleSubmit}>
    <input type="search" placeholder="Enter a city.." onChange={updateCity} />
    <button type="Submit">Search</button>
  </form>
);

if (message) {
  return (
    <div>
      {form}
      <ul className="WeatherForcastForm">
        <li className="City">{weather.city}</li>
        <li className="Temperature">
          <img src={weather.icon} alt={weather.description} width="50px" />
          {Math.round(weather.temperture)}°C
        </li>
        <li>Description: {weather.description}</li>
        <li>Humidity:{weather.humidity}%</li>
        <li>Wind:{weather.wind}km/h</li>
        <li></li>
      </ul>
    </div>
  );
} else {
  return form;
}