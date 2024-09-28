const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const tracks = [
  { id: 1, track_name: 'Calm Waters', binaural_beat: 'Alpha', frequency: 10, tone: 'Relaxing', purpose: 'Relax' },
  { id: 2, track_name: 'Deep Focus', binaural_beat: 'Beta', frequency: 20, tone: 'Intense', purpose: 'Focus' },
  { id: 3, track_name: 'Inspiring Heights', binaural_beat: 'Gamma', frequency: 40, tone: 'Inspiring', purpose: 'Creativity' },
  { id: 4, track_name: 'Tranquil Waves', binaural_beat: 'Theta', frequency: 6, tone: 'Calming', purpose: 'Deep Relaxation' },
  { id: 5, track_name: 'Energetic Pulse', binaural_beat: 'Beta', frequency: 18, tone: 'Uplifting', purpose: 'Work' },
  { id: 6, track_name: 'Heightened Awareness', binaural_beat: 'Gamma', frequency: 45, tone: 'Intense', purpose: 'Focus' }
];

// Heart rate ranges
const heartRateToTrack = (heartRate) => {
  if (heartRate < 70) {
    return tracks.find(track => track.binaural_beat === 'Alpha');
  } else if (heartRate >= 70 && heartRate <= 90) {
    return tracks.find(track => track.binaural_beat === 'Beta');
  } else {
    return tracks.find(track => track.binaural_beat === 'Gamma');
  }
};

app.post('/recommend-song', (req, res) => {
  const { heartRate } = req.body;

  if (!heartRate || typeof heartRate !== 'number') {
    return res.status(400).json({ error: 'Please provide a valid heart rate.' });
  }

  const recommendedTrack = heartRateToTrack(heartRate);
  res.json(recommendedTrack);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
