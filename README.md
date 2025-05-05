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

## What is Model Context Protocol (MCP)?

**Model Context Protocol (MCP)** is an open protocol designed to enable AI models (such as Claude, GPT, etc.) to securely and standardly access external data sources, tools, and services.

- MCP is not a proprietary protocol of any single company, but an open standard promoted by AI companies like Anthropic.
- The core idea is to let AI models access various "external capabilities" (such as databases, APIs, maps, files, web, etc.) through a standard interface, just like humans can.

### MCP Server and MCP Client
- **MCP Server**: A provider of capabilities/data/tools that implements the MCP protocol and can be accessed by AI models via MCP Clients. Examples include: Amap Maps MCP Server, Github MCP Server, Redis MCP Server, Blender MCP Server, etc.
- **MCP Client**: The agent for AI models, which can call these servers via the MCP protocol. Examples include: Claude, Cursor, Windsurf, ChatWise, etc.

### Why does AI need MCP?
- Traditional AI models can only work with their own knowledge and reasoning, unable to access real-time external information.
- With MCP, AI models can "connect to the internet," use tools, query databases, access maps, send emails, and more—greatly expanding their capabilities.
- This turns AI into a "super plugin platform" or "digital operator."

### Amap Maps MCP Server and AI
- The Amap Maps MCP Server wraps Amap's API capabilities as an MCP protocol service for AI models to call.
- This allows AI models (like Claude, GPT, etc.) to use natural language to query routes, POIs, perform geo-analyses, etc., via the MCP protocol.
- Thus, AI models gain real-time map capabilities in a standardized, composable way.

### The Significance of mcp.so
- [mcp.so](https://mcp.so/) is a marketplace or capability hub for MCP Servers and Clients.
- You can find various MCP Servers (Amap Maps, Github, Redis, Blender, Figma, Baidu Map, etc.) and MCP Clients (Cursor, Claude, Windsurf, etc.).
- This shows that MCP is becoming the "capability interconnection standard" in the AI ecosystem, enabling seamless collaboration between AI models and external services.

### Summary: The Relationship Between MCP and AI
- **MCP is the bridge for AI models to connect with the real world**, enabling AI to not only "chat" but also "do things."
- Future AI assistants, agents, and operating systems will use the MCP protocol to call various servers, becoming "super digital employees."
- You can think of MCP as the "USB interface for AI"—as long as it supports MCP, AI can plug into all kinds of capability "peripherals."

---

References:
- [MCP.so Official Website](https://mcp.so/)
- [MCP FAQ (English)](https://mcp.so/) (see the bottom of the page)

This project is for learning and demonstration purposes. For production use, please secure your API keys and follow best practices.