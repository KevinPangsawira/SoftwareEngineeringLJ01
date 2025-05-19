const priceModel = require('../model/priceModel');

const getPrices = (req, res) => {
    const prices = priceModel.getAllPrices();
    if (prices) {
        res.status(200).json(prices);
    } else {
        res.status(500).json({ message: 'Error retrieving prices' });
    }
}

module.exports = {getPrices};