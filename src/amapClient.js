const axios = require('axios');

const AMAP_KEY = process.env.AMAP_MCP_API_KEY;
const BASE_URL = 'https://restapi.amap.com/v3';

// Helper for GET requests
async function amapGet(endpoint, params) {
  const url = `${BASE_URL}${endpoint}`;
  const response = await axios.get(url, { params: { key: AMAP_KEY, ...params } });
  return response.data;
}

module.exports = {
  // 1. Geocoding
  geocode: async (address, city) => {
    // TODO: Implement
    return amapGet('/geocode/geo', { address, city });
  },

  // 2. Reverse Geocoding
  regeocode: async (location) => {
    // TODO: Implement
    return amapGet('/geocode/regeo', { location });
  },

  // 3. IP Location
  ipLocation: async (ip) => {
    // TODO: Implement
    return amapGet('/ip', { ip });
  },

  // 4. POI Text Search
  poiTextSearch: async (keywords, city) => {
    // TODO: Implement
    return amapGet('/place/text', { keywords, city });
  },

  // 5. POI Around Search
  poiAroundSearch: async (keywords, location, radius) => {
    // TODO: Implement
    return amapGet('/place/around', { keywords, location, radius });
  },

  // 6. POI Detail
  poiDetail: async (id) => {
    // TODO: Implement
    return amapGet('/place/detail', { id });
  },

  // 7. Weather Query
  weather: async (city) => {
    // TODO: Implement
    return amapGet('/weather/weatherInfo', { city });
  },

  // 8. Distance Calculation
  distance: async (origins, destination, type = 1) => {
    // TODO: Implement
    return amapGet('/distance', { origins, destination, type });
  },

  // 9. Route Planning - Driving
  directionDriving: async (origin, destination) => {
    // TODO: Implement
    return amapGet('/direction/driving', { origin, destination });
  },

  // 10. Route Planning - Walking
  directionWalking: async (origin, destination) => {
    // TODO: Implement
    return amapGet('/direction/walking', { origin, destination });
  },

  // 11. Route Planning - Cycling
  directionBicycling: async (origin, destination) => {
    // TODO: Implement
    return amapGet('/direction/bicycling', { origin, destination });
  },

  // 12. Route Planning - Transit
  directionTransit: async (origin, destination, city, cityd) => {
    // TODO: Implement
    return amapGet('/direction/transit/integrated', { origin, destination, city, cityd });
  },

  // 13. Schema - Navigation
  schemaNavi: async (lon, lat) => {
    // TODO: Implement
    // This is a URI, not a REST API
    return `amapuri://route/plan/?dlat=${lat}&dlon=${lon}&dev=0&t=0`;
  },

  // 14. Schema - Take Taxi
  schemaTakeTaxi: async (dlon, dlat, dname, slon, slat, sname) => {
    // TODO: Implement
    // This is a URI, not a REST API
    return `amapuri://taxi/order?dlat=${dlat}&dlon=${dlon}&dname=${encodeURIComponent(dname)}&slat=${slat}&slon=${slon}&sname=${encodeURIComponent(sname)}`;
  },

  // 15. Personal Map (custom route display)
  // This is typically a frontend feature, but you can return a URI
  personalMap: async (lineList) => {
    // TODO: Implement
    // This would be a URI for the Amap app
    return 'amapuri://openFeature?feature=Route&lineList=' + encodeURIComponent(JSON.stringify(lineList));
  },
};