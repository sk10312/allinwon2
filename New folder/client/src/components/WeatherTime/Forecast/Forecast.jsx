
import React, { useEffect, useState } from 'react';

function Forecast() {
  const [forecast, setForecast] = useState([]);

  useEffect(() => {
    fetch('/api/weather/forecast')
      .then(res => res.json())
      .then(data => setForecast(data.daily || []));
  }, []);

  return (
    <div>
      <h4>5-Day Forecast</h4>
      <div style={{ display: 'flex', gap: 10 }}>
        {forecast.slice(0, 5).map((day, idx) => (
          <div key={idx} style={{ background: '#eee', padding: 10, borderRadius: 8 }}>
            <p>{new Date(day.dt * 1000).toLocaleDateString()}</p>
            <p>{day.weather[0].main}</p>
            <p>High: {Math.round(day.temp.max)}°F</p>
            <p>Low: {Math.round(day.temp.min)}°F</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Forecast;
