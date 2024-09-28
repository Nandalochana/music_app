// services/recommendationService.js
const tracks = require('../data/music_tracks');

// Heart rate to track mapping logic
const recommendTrackByHeartRate = (heartRate) => {
  if (heartRate < 70) {
    return tracks.find(track => track.binaural_beat === 'Alpha');
  } else if (heartRate >= 70 && heartRate <= 90) {
    return tracks.find(track => track.binaural_beat === 'Beta');
  } else {
    return tracks.find(track => track.binaural_beat === 'Gamma');
  }
};

module.exports = {
  recommendTrackByHeartRate
};
