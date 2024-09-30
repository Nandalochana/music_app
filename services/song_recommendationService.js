// Import the dataset of tracks
const tracks = require('../data/music_tracks');

/**
 * Get a track recommendation based on the user's heart rate.
 * Maps heart rate ranges to binaural beats and their corresponding tracks.
 * 
 * @param {Number} heartRate - The user's heart rate.
 * @returns {Object} - A track object matching the heart rate.
 */
function getTrackRecommendation(heartRate) {
  // Define heart rate ranges and corresponding binaural beats based on the new logic
  if (heartRate < 60) {
      // For heart rates under 60, recommend tracks with Delta (deep sleep, regeneration)
      return getTrackByBeat('Delta');
  } else if (heartRate >= 60 && heartRate < 70) {
      // For heart rates between 60-70, recommend tracks with Theta (deep relaxation, meditation)
      return getTrackByBeat('Theta');
  } else if (heartRate >= 70 && heartRate < 85) {
      // For heart rates between 70-85, recommend tracks with Alpha (relaxation and creativity)
      return getTrackByBeat('Alpha');
  } else if (heartRate >= 85 && heartRate < 100) {
      // For heart rates between 85-100, recommend tracks with Beta (active thinking, self-control)
      return getTrackByBeat('Beta');
  } else {
      // For heart rates above 100, recommend tracks with Gamma (intense focus, creativity)
      return getTrackByBeat('Gamma');
  }
}

/**
 * Helper function to find a track from the dataset based on binaural beat.
 * 
 * @param {String} beatType - The binaural beat type (e.g., Alpha, Beta, Gamma).
 * @returns {Object} - A track object with the specified binaural beat.
 */
function getTrackByBeat(beatType) {
  // Filter the track list to find a track that matches the provided beat type
  return tracks.find(track => track.binaural_beat === beatType);
}

// Export the function to be used in other parts of the application
module.exports = {
  getTrackRecommendation
};