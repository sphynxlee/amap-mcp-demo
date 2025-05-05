# Amap MCP Demo (Node.js + JS)

This project demonstrates how to use all available Amap (高德地图) MCP APIs in a Node.js environment, with a simple frontend for interaction.

## Features & APIs Covered
- Geocoding (address to coordinates)
- Reverse Geocoding (coordinates to address)
- IP Location
- POI Search (text and around)
- POI Detail
- Weather Query
- Distance Calculation
- Route Planning (driving, walking, cycling, transit)
- Schema (open Amap app for navigation/taxi)
- Personal Map (custom route display)

## Project Structure
```
amap-mcp-demo/
  ├── package.json
  ├── README.md
  ├── .env.example
  ├── server.js
  ├── public/
  │     ├── index.html
  │     └── main.js
  └── src/
        ├── amapClient.js   // All MCP API calls
        └── routes.js       // Express routes for each API
```

## Setup
1. Install dependencies:
   ```bash
   npm install
   ```
2. Copy `.env.example` to `.env` and fill in your Amap MCP API key.
3. Start the server:
   ```bash
   npm start
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## How to Use
- Each API is demonstrated via a simple web interface.
- You can test all endpoints directly from the browser or via API calls.

---

This project is for learning and demonstration purposes. For production use, please secure your API keys and follow best practices.