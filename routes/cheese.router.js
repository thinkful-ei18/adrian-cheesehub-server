'use strict';

const express = require('express');
const router = express.Router();

router.get('/cheeses', (req, res, next) => {

  const cheeses = [
    'Bath Blue',
    'Barkham Blue',
    'Buxton Blue',
    'Cheshire Blue',
    'Devon Blue',
    'Dorset Blue Vinney',
    'Dovedale',
    'Exmoor Blue',
    'Harbourne Blue',
    'Lanark Blue',
    'Lymeswold',
    'Oxford Blue',
    'Shropshire Blue',
    'Stichelton',
    'Stilton',
    'Blue Wensleydale',
    'Yorkshire Blue'
  ];

  return JSON.parse(cheeses)
    .catch(next);

});