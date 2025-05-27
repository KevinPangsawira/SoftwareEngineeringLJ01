const fs = require('fs').promises;
const path = require('path');
const filePath = path.join(__dirname, '../data/dummyPrice.json');

const getAllPrices = async () => {
    try {
        const data = await fs.readFile(filePath, 'utf8');
        return JSON.parse(data);
    } catch (error) {
        console.error('Error reading prices file:', error);
        throw error;
    }
};

const addPrice = async (newData) => {
  try{
    const prices = await getAllPrices();

    const newPrice = {
      id: prices.length + 1,
      name: newData.name,
      price: newData.price,
      unit: newData.unit,
      date: newData.date,
    };

    prices.push(newPrice);

    await fs.writeFile(filePath, JSON.stringify(prices, null, 2), 'utf8');
    return newPrice;

  } catch (error){
    console.error('Error adding new price:', error);
    throw error;
  }
};

module.exports = { getAllPrices, addPrice};  