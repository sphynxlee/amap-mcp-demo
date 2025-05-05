const express = require('express');
const router = express.Router();
const amap = require('./amapClient');

// 1. Geocoding
router.get('/geocode', async (req, res) => {
  try {
    const { address, city } = req.query;
    const data = await amap.geocode(address, city);
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 2. Reverse Geocoding
router.get('/regeocode', async (req, res) => {
  try {
    const { location } = req.query;
    const data = await amap.regeocode(location);
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 3. IP Location
router.get('/ip-location', async (req, res) => {
  try {
    const { ip } = req.query;
    const data = await amap.ipLocation(ip);
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 4. POI Text Search
router.get('/poi-text-search', async (req, res) => {
  try {
    const { keywords, city } = req.query;
    const data = await amap.poiTextSearch(keywords, city);
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 5. POI Around Search
router.get('/poi-around-search', async (req, res) => {
  try {
    const { keywords, location, radius } = req.query;
    const data = await amap.poiAroundSearch(keywords, location, radius);
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 6. POI Detail
router.get('/poi-detail', async (req, res) => {
  try {
    const { id } = req.query;
    const data = await amap.poiDetail(id);
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 7. Weather Query
router.get('/weather', async (req, res) => {
  try {
    const { city } = req.query;
    const data = await amap.weather(city);
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 8. Distance Calculation
router.get('/distance', async (req, res) => {
  try {
    const { origins, destination, type } = req.query;
    const data = await amap.distance(origins, destination, type);
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 9. Route Planning - Driving
router.get('/direction-driving', async (req, res) => {
  try {
    const { origin, destination } = req.query;
    const data = await amap.directionDriving(origin, destination);
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 10. Route Planning - Walking
router.get('/direction-walking', async (req, res) => {
  try {
    const { origin, destination } = req.query;
    const data = await amap.directionWalking(origin, destination);
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 11. Route Planning - Cycling
router.get('/direction-bicycling', async (req, res) => {
  try {
    const { origin, destination } = req.query;
    const data = await amap.directionBicycling(origin, destination);
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 12. Route Planning - Transit
router.get('/direction-transit', async (req, res) => {
  try {
    const { origin, destination, city, cityd } = req.query;
    const data = await amap.directionTransit(origin, destination, city, cityd);
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 13. Schema - Navigation
router.get('/schema-navi', async (req, res) => {
  try {
    const { lon, lat } = req.query;
    const uri = await amap.schemaNavi(lon, lat);
    res.json({ uri });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 14. Schema - Take Taxi
router.get('/schema-take-taxi', async (req, res) => {
  try {
    const { dlon, dlat, dname, slon, slat, sname } = req.query;
    const uri = await amap.schemaTakeTaxi(dlon, dlat, dname, slon, slat, sname);
    res.json({ uri });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 15. Personal Map
router.post('/personal-map', async (req, res) => {
  try {
    const { lineList } = req.body;
    const uri = await amap.personalMap(lineList);
    res.json({ uri });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;