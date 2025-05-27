const priceModel = require('../model/priceModel');

const getPrices = async (req, res) => {
  try {
    const prices = await priceModel.getAllPrices();
    res.status(200).json(prices);
  } catch (error) {
    res.status(500).json({ message: 'Gagal mengambil data harga', error: error.message });
  }
};

const addPrice = async (req, res) => {
  try {
    const newPrice = await priceModel.addPrice(req.body);
    res.status(201).json(newPrice);
  } catch (error) {
    res.status(500).json({ message: 'Gagal menambahkan harga baru', error: error.message });
  }
};

module.exports = {getPrices, addPrice};