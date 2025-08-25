const express = require("express");
const axios = require("axios");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = 5000;

app.use(cors());

// Weather API endpoint
app.get("/api/weather", async (req, res) => {
  const { city } = req.query;
  if (!city) return res.status(400).json({ error: "City is required" });

  try {
    const apiKey = process.env.WEATHER_API_KEY;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    const response = await axios.get(url);
    res.json(response.data);
  } catch (error) {
    console.error("Weather API Error:", error.response?.data || error.message);
    res.status(500).json({ error: error.response?.data || "Failed to fetch weather" });
  }
});

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
console.log("API Key:", process.env.WEATHER_API_KEY);
