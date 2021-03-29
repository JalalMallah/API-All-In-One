import React, { useState } from 'react';

import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBolt,
  faCloud,
  faCloudRain,
  faCloudShowersHeavy,
  faMoon,
  faSnowflake,
  faSun,
} from '@fortawesome/free-solid-svg-icons';

const APIKey = 'd8bda41b14ee677c9b19adfc045f9b2b';
const mPerSecToKmPerHrRatio = 3.6;

export default function Weather() {
  const [city, setCity] = useState('');
  const [hasFoundCity, setHasFoundCity] = useState(true);
  const [weatherData, setWeatherData] = useState('');

  const handleInputChange = e => setCity(e.target.value);
  const handleButtonClick = e => {
    e.preventDefault();
    if (!city) return;

    getWeatherForGivenCity(city);
    setCity('');
  };

  const getWeatherForGivenCity = city => {
    const URL = `http://api.openweathermap.org/data/2.5/weather?q=${city.trim()}&appid=${APIKey}&units=metric`;
    fetch(URL)
      .then(res => res.json())
      .then(data => {
        if (data.cod !== 200) {
          setHasFoundCity(false);
          throw new Error('City not found...');
        }

        setHasFoundCity(true);
        extractWeatherData(data);
      })
      .catch(err => console.error(err));
  };

  const extractWeatherData = data => {
    const weatherData = {
      cityName: data.name,
      temperature: Math.round(data.main.temp),
      feelsLike: Math.round(data.main.feels_like),
      humidity: data.main.humidity,
      pressure: data.main.pressure,
      wind: Math.round(data.wind.speed * mPerSecToKmPerHrRatio),
      condition: data.weather[0].main,
      conditionDescription: data.weather[0].description,
      sunrise: new Date(data.sys.sunrise * 1000).toLocaleTimeString(),
      sunset: new Date(data.sys.sunset * 1000).toLocaleTimeString(),
      hasSunSet: new Date().getTime() >= data.sys.sunset * 1000 ? true : false,
    };

    setWeatherData(weatherData);
  };

  const renderWeatherData = () => {
    const {
      cityName,
      condition,
      conditionDescription,
      feelsLike,
      hasSunSet,
      humidity,
      pressure,
      sunrise,
      sunset,
      temperature,
      wind,
    } = weatherData;

    const conditionDescriptionFormatted =
      conditionDescription.slice(0, 1).toUpperCase() + conditionDescription.slice(1);

    return (
      <section>
        <WeatherMainInfo>
          <p className='city'>{cityName}</p>
          <p className='temperature'>{temperature}&deg;</p>
          <small className='feels_like'>Feels like {feelsLike}&deg;</small>
          <p className='condition'>
            {conditionDescriptionFormatted} {getIcon(condition, hasSunSet)}
          </p>
        </WeatherMainInfo>
        <WeatherInfoList>
          <li>
            Wind <span>{wind} km/h</span>
          </li>
          <li>
            Humidity <span>{humidity}%</span>
          </li>
          <li>
            Pressure <span>{pressure} hPa</span>
          </li>
          <li>
            Sunrise <span>{sunrise}</span>
          </li>
          <li>
            Sunset <span>{sunset}</span>
          </li>
        </WeatherInfoList>
      </section>
    );
  };

  const getIcon = (condition, hasSunSet) => {
    if (condition === 'Clear') {
      if (hasSunSet) return <FontAwesomeIcon icon={faMoon} />;
      return <FontAwesomeIcon icon={faSun} />;
    }
    if (condition === 'Clouds') return <FontAwesomeIcon icon={faCloud} />;
    if (condition === 'Rain') return <FontAwesomeIcon icon={faCloudShowersHeavy} />;
    if (condition === 'Snow') return <FontAwesomeIcon icon={faSnowflake} />;
    if (condition === 'Drizzle') return <FontAwesomeIcon icon={faCloudRain} />;
    if (condition === 'Thunderstorm') return <FontAwesomeIcon icon={faBolt} />;
    return null;
  };

  return (
    <Main>
      <Title>Get current weather for a given location 🌤️</Title>
      <Form>
        <CityInput
          type='text'
          id='city'
          value={city}
          onChange={handleInputChange}
          placeholder='Search city'
          autoComplete='off'
        />
        <SearchButton onClick={handleButtonClick}>Search</SearchButton>
      </Form>
      {weatherData && renderWeatherData()}
      {!hasFoundCity && <Text>City not found...Please try again.</Text>}
    </Main>
  );
}

const Main = styled.main`
  padding: 1rem 1.5rem;
`;

const Title = styled.h1`
  margin: 0 0 1rem;
  font-size: 1.8rem;

  @media (min-width: 360px) {
    font-size: 2.2rem;
  }
`;

const Form = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 0 1rem;
`;

const CityInput = styled.input`
  flex-grow: 1;
  padding: 0.5rem 1rem;
  border: 1px solid #fff;
  border-radius: 3px 0 0 3px;
  outline: none;
  background-color: #fff;
  font-family: var(--main-font);
  font-size: 1.5rem;
  transition: border 0.3s ease;

  &:focus {
    border: 1px solid var(--dark-blue);
  }
`;

const SearchButton = styled.button`
  padding: 0.5rem 2rem;
  border: 1px solid var(--dark-blue);
  border-radius: 0 3px 3px 0;
  outline: none;
  background-color: var(--dark-blue);
  color: var(--light-gray);
  font-family: var(--main-font);
  font-size: 1.5rem;
  transition: background-color 0.3s ease;
  cursor: pointer;

  &:active {
    transform: scale(0.98);
  }

  &:hover {
    background-color: var(--light-blue);
  }
`;

const WeatherMainInfo = styled.section`
  margin: 0 auto 1rem;
  text-align: center;

  & p {
    margin: 0;
  }

  & p.city {
    font-size: 1.8rem;
    letter-spacing: 1px;
  }

  & p.temperature {
    font-size: 3.4rem;
  }

  & small.feels_like {
    font-size: 1.2rem;
  }
`;

const WeatherInfoList = styled.ul`
  list-style-type: none;

  & li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem;
    border-bottom: 1px solid #888;
    font-size: 1.5rem;
  }

  & li:first-child {
    border-top: 1px solid #888;
  }
`;

const Text = styled.p`
  margin: 0 0 1rem;
  font-size: 1.5rem;
  line-height: 1.4;
`;
