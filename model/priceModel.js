// const fs = require('fs').promises;
// const path = require('path');
// const filePath = path.join(__dirname, '../data/dummyPrice.json');
const {connectDB, sql} = require('../config/db');

const getAllPrices = async () => {
    try {
        const pool = await connectDB();
        const result = await pool.request().query('SELECT * FROM BahanPokok');
        return result.recordset;
    } catch (error) {
        console.error('Error reading prices file:', error);
        throw error;
    }
};

const addPrice = async (newData) => {
  try{
    const pool = await connectDB();
    const query = `
      INSERT INTO BahanPokok (NamaBahan, HargaBahan, DateUp, imageLink)
      OUTPUT INSERTED.*
      VALUES (@name, @price, @date, @imageLink);
    `;

    const result = await pool.request()
      .input('name', sql.NVarChar, newData.name)
      .input('price', sql.Float, newData.price)
      .input('date', sql.DateTime, newData.date)
      .input('imageLink', sql.NVarChar, newData.imageLink)
      .query(query);

      return result.recordset[0];

  } catch (error){
    console.error('Error adding new price:', error);
    throw error;
  }
};

module.exports = { getAllPrices, addPrice};  