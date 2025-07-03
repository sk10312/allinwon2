
import React, { useEffect, useState } from 'react';

function WeatherTimeWidget() {
  const [weather, setWeather] = useState(null);
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    fetch('/api/weather')
      .then(res => res.json())
      .then(data => setWeather(data));

    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ backgroundColor: '#f0f2f5', padding: '10px', borderRadius: '8px' }}>
      <h4>Time & Weather</h4>
      <p><strong>Time:</strong> {time.toLocaleTimeString()}</p>
      {weather && (
        <>
          <p><strong>Location:</strong> {weather.name}</p>
          <p><strong>Temp:</strong> {Math.round(weather.main.temp)}°F</p>
          <p><strong>Condition:</strong> {weather.weather[0].description}</p>
        </>
      )}
    </div>
  );
}

export default WeatherTimeWidget;
