const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const realBase = 'https://staging.myriade.io/metrics';

app.use(bodyParser.json());

app.get('/v1/*', (req, res) => {
  const base = req.hostname;
  res.json(base);
});

module.exports = app;
