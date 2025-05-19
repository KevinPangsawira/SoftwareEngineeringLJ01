const fs = require('fs');
const path = require('path');

const getAllPrices = () => {
  const data = fs.readFileSync(path.join(__dirname, '../data/dummyPrice.json'), 'utf-8');
  return JSON.parse(data);
};

module.exports = { getAllPrices };