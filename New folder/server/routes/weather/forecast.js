
const express = require('express');
const axios = require('axios');
const router = express.Router();

const WEATHER_API_KEY = process.env.WEATHER_API_KEY;

router.get('/forecast', async (req, res) => {
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/onecall?lat=40.7128&lon=-74.0060&units=imperial&appid=${WEATHER_API_KEY}`
    );
    res.json(response.data);
  } catch (err) {
    res.status(500).json({ error: 'Forecast fetch failed', details: err.message });
  }
});

module.exports = router;
