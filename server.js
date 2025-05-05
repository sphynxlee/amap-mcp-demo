require('dotenv').config();
const express = require('express');
const path = require('path');
const routes = require('./src/routes');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/api', routes);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});