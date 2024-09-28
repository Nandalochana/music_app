// app.js
const express = require('express');
const bodyParser = require('body-parser');
const { recommendTrackByHeartRate } = require('./services/song_recommendationService');

const app = express();
app.use(bodyParser.json());

app.post('/recommend-song', (req, res) => {
  const { heartRate } = req.body;
  console.log(heartRate)
  
  if (!heartRate || typeof heartRate !== 'number') {
    return res.status(400).json({ error: 'Please provide a valid heart rate.' });
  }

  const recommendedTrack = recommendTrackByHeartRate(heartRate);
  res.json(recommendedTrack);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
