import React from 'react';
import PropTypes from 'prop-types';
import WeatherIcon from 'react-icons-weather';

function ForecastSummary(props) {
  const {
    date, temperature, description, icon,
  } = props;
  const formattedDate = new Date(date).toDateString();

  return (
    <div className="forecast-summary" data-testid="forecast-summary">
      <div className="forecast-summary__date">
        {formattedDate}
      </div>
      <div className="forecast-summary__temperature">
        {temperature.max}
        &deg;C
      </div>
      <div className="forecast-summary__description">
        {description}
      </div>
      <div className="forecast-summary__icon" data-testid="forecast-icon">
        <WeatherIcon name="owm" iconId={icon}/>
      </div>
      <button type="button" onClick={() => props.onSelect(date)} data-testid="forecast-btn">
        More details
      </button>
    </div>
  );
}

ForecastSummary.propTypes = {
    date: PropTypes.number.isRequired,
    temperature: PropTypes.shape({
      max: PropTypes.number,
      min: PropTypes.number,
    }).isRequired,
    description: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    onSelect: PropTypes.func.isRequired
};

export default ForecastSummary;
