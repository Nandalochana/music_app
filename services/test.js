// Import the recommendation service to test
const recommendationSongs = require('../services/song_recommendationService');

// Test dataset for heart rate input
const heartRateData = [
    { unit: "count/min", sdate: 1695542400000, value: 72 },
    { unit: "count/min", sdate: 1695542700000, value: 68 },
    { unit: "count/min", sdate: 1695543000000, value: 65 },
    { unit: "count/min", sdate: 1695543600000, value: 110 }
];

// Expected output (based on updated recommendation logic)
const expectedTracks = [
    { track_name: "Calm Waters", binaural_beat: "Alpha", frequency: 10, tone: "Relaxing", purpose: "Relax" },    // Heart rate 72 -> Alpha
    { track_name: "Tranquil Waves", binaural_beat: "Theta", frequency: 6, tone: "Calming", purpose: "Deep Relaxation" }, // Heart rate 68 -> Theta
    { track_name: "Tranquil Waves", binaural_beat: "Theta", frequency: 6, tone: "Calming", purpose: "Deep Relaxation" }, // Heart rate 65 -> Theta
    { track_name: "Inspiring Heights", binaural_beat: "Gamma", frequency: 40, tone: "Inspiring", purpose: "Creativity" },  // Heart rate 95 -> Gamma
    { track_name: "Heightened Awareness", binaural_beat: "Gamma", frequency: 45, tone: "Intense", purpose: "Focus" } // Heart rate 110 -> Gamma
];

// Unit test suite
describe('Track Recommendation Based on Heart Rate', () => {
    heartRateData.forEach((hrData, index) => {
        test(`should return correct track for heart rate: ${hrData.value}`, () => {
            // Get the recommended track based on heart rate
            const recommendedTrack = recommendationSongs.getTrackRecommendation(hrData.value);
            
            // Compare it to the expected track
            expect(recommendedTrack.track_name).toBe(expectedTracks[index].track_name);
            expect(recommendedTrack.binaural_beat).toBe(expectedTracks[index].binaural_beat);
            expect(recommendedTrack.frequency).toBe(expectedTracks[index].frequency);
            expect(recommendedTrack.tone).toBe(expectedTracks[index].tone);
            expect(recommendedTrack.purpose).toBe(expectedTracks[index].purpose);
        });
    });
});
