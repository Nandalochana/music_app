// Import libraries and modules
const express = require('express');
const bodyParser = require('body-parser');
const recommendationService = require('./services/song_recommendationService');

// Initialize the Express application
const app = express();
const port = process.env.PORT || 3000;

// Use bodyParser to handle JSON requests
app.use(bodyParser.json());


/**
 * POST /recommend-song
 * Endpoint to recommend a song based on heart rate input
 * Request body: { "heartRate": Number }
 * Response: A song recommendation object
 */
app.post('/recommend-song', (req, res) => {
  const { heartRate } = req.body;  
  // Validate the heartRate input to ensure it's a valid number
  if (!heartRate || typeof heartRate !== 'number') {
    return res.status(400).json({ error: 'Please provide a valid heart rate.' });
  }

 // Get the recommended track based on heart rate using the recommendation service
 const recommendedTrack = recommendationService.getTrackRecommendation(heartRate);

 // Return the recommendation as a JSON response
 res.json(recommendedTrack);

});

// Start the Express server and listen on the specified port
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});