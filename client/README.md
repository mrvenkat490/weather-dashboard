# 🌤 Weather Dashboard

A real-time weather tracking app built with **React**, **Node.js/Express**, and **OpenWeatherMap API**.  
It allows users to search weather by city, view current location weather, toggle between Celsius and Fahrenheit, and save favorite cities.

---

## ✅ Features

- Search weather by city  
- Show current location weather (Geolocation API)  
- Toggle between Celsius (°C) and Fahrenheit (°F)  
- Save favorite cities for quick access  
- Display:
  - Temperature
  - Feels like temperature
  - Min/Max temperature
  - Weather condition
  - Humidity
  - Wind speed  
- Dynamic weather icons from OpenWeatherMap  
- Modern responsive UI with Tailwind CSS  

---

## 🌟 Tech Stack

- **Frontend:** React.js, Tailwind CSS  
- **Backend:** Node.js, Express.js  
- **API:** OpenWeatherMap API  
- **State Management:** React useState & localStorage  

---

## 💻 Screenshots

![Weather Dashboard Screenshot](screenshots/weather-dashboard.png)  

*Example of the app showing Hyderabad weather:*

🌤 Weather Dashboard
Hyderabad
Get Weather
Hyderabad, IN
📅 Monday 25 August, 2025 at 12:34 pm

🌡 Temperature: 29.85°C
🤔 Feels Like: 31.81°C
⬇ Min: 29.85°C | ⬆ Max: 29.85°C
☁ Condition: overcast clouds
💧 Humidity: 56%
🌬 Wind Speed: 7.64 m/s

yaml
Copy
Edit

---

## 🚀 How to Run Locally

1. Clone the repository:  
   ```bash
   git clone <your-repo-url>
   cd weather-dashboard
Install dependencies and start the backend:

bash
Copy
Edit
cd server
npm install
npm run dev
Install dependencies and start the frontend:

bash
Copy
Edit
cd ../client
npm install
npm start
Open your browser at http://localhost:3000

Make sure your .env file in server has your OpenWeatherMap API key:

env
Copy
Edit
WEATHER_API_KEY=121c02d5c407e3183d3bce2ed9188710
📦 Usage
Enter a city name and click Get Weather

Click Current Location to see weather at your location

Toggle °C / °F to switch temperature units

Click Add to Favorites to save a city

Click on a favorite city to fetch its weather

Remove favorite cities with the × button