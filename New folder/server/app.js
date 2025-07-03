const express = require('express');
const cors = require('cors');
const app = express();
const weatherRoute = require('./routes/weather');
const forecastRoute = require('./routes/weather/forecast');
const askRoute = require('./routes/ask');
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
const certificateRoute = require('./routes/certificates');
app.use('/api/certificates', certificateRoute);
const trainingRoute = require('./routes/training');
app.use('/api/training', trainingRoute);
app.use('/api/weather', weatherRoute);
app.use('/api/weather/forecast', forecastRoute);
app.use('/api/ask', askRoute);

app.get('/', (req, res) => {
  res.send('ALL IN WON Backend Running');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
