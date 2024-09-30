# Audicin API - Heart Rate Based Song Recommendation

## Overview

The **Audicin API** is a RESTful API that recommends music tracks based on a user's heart rate. It processes heart rate data from Apple Watch HealthKit (or similar sources) and returns a track with suitable binaural beats to match the user's mental state—whether it's for relaxation, focus, or creativity.

The recommendations are made from a predefined track dataset, each linked to a specific brainwave frequency (Gamma, Beta, Alpha, etc.) that corresponds to different cognitive and emotional states.

---

## Features

- **Heart Rate Input**: Accepts heart rate data (in bpm) and provides a song recommendation.
- **Track Recommendations**: Returns music tracks with binaural beats based on the user's heart rate range.
- **Scalable Design**: Modular structure, enabling easy extension and future scalability.
- **Professional Codebase**: Structured for readability, maintainability, and reusability.

---

## API Documentation

### POST `/recommend-song`

This endpoint accepts the user's heart rate and returns a suitable song recommendation.

#### Request

- **Method**: `POST`
- **URL**: `/recommend-song`
- **Body**: JSON object containing the user's heart rate

```json
{
  "heartRate": 85
}
