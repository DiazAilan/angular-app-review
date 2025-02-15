import express from 'express';
import cors from 'cors';
import path from 'path';
import { Location } from './types/Location';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

app.get('/locations', (req, res) => {
    res.sendFile(path.join(__dirname, '../mockups/locations.json'));
});

app.get('/locations/:id', (req, res) => {
  const locationId = req.params.id;
  const locations = require('../mockups/locations.json'); 
  const location = locations.find((location: Location) => location.id === Number(locationId));

  if (location) {
      res.json(location); 
  } else {
      res.status(404).send('Location not found'); 
  }
});