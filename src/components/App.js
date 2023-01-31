import '../styles/App.css';
import React, { useEffect, useState } from 'react';
import LocationDetails from './LocationDetails';
import ForecastSummaries from './ForecastSummaries';
import ForecastDetails from './ForecastDetails';
import getForecast from '../requests/getForecast';

function App() {
  const [forecasts, setForecasts] = useState([]);
  const [location, setLocation] = useState({ city: "", country: "" });
  const {city, country} = location;
  const [selectedDate, setSelectedDate] = useState(0);
  const selectedForecast = forecasts.find((forecast) => forecast.date === selectedDate);
  
  useEffect(() => {
    getForecast(setSelectedDate, setForecasts, setLocation);
  }, []);

  const handleForecastSelect = (date) => {
    setSelectedDate(date);
  }

  return (
    <div className="weather-app">
      <LocationDetails
        city={city}
        country={country}
      />
      <ForecastSummaries forecasts={forecasts}
      onForecastSelect={handleForecastSelect} />
      {selectedForecast && (<ForecastDetails forecast={selectedForecast} />)}
    </div>
  );
}

export default App;
