// const fs = require('fs').promises;
// const path = require('path');
// const filePath = path.join(__dirname, '../data/dummyPrice.json');

const {connectDB, sql} = require('../config/db');

//halaman resep
const getAllResep = async () => {
    try {
        const pool = await connectDB();
        const result = await pool.request().query('SELECT ResepID, ResepName, images FROM Resep');
        return result.recordset;
    } catch (error) {
        console.error('Error reading resep:', error);
        throw error;
    }
};


//pas dipencet gambar resep
const getResepbyID = async (id) => {
  try{
    const pool = await connectDB();
    const result = await pool.request()
      .input('id', sql.Int, id)
      .query('SELECT * FROM Resep WHERE ResepID = @id');

      return result.recordset[0];

  } catch (error){
    console.error('Error fetching resep by id:', error);
    throw error;
  }
};

//filter dari bahan yang user punya
const filterBahan = async(bahanId) => {
  try {
    const pool = await connectDB();
    const query = `
      SELECT r.ResepID, r.ResepName, r.images
      FROM Resep r
      WHERE NOT EXISTS (
        SELECT 1 
        FROM ResepBahan rb 
        WHERE rb.ResepID = r.ResepID 
        AND rb.BahanID NOT IN (${bahanId.join(',')})
      )
    `;
    const result = await pool.request().query(query);
    
    return result.recordset;

  } catch (error) {
    console.error('Error filtering bahan:', error);
    throw error;
  }
};

//filter dari range harga
const filterHarga = async(key) =>{
  let min = 0;
  let max = 100000;

  if(key === 'below50') max = 50000;

  else if(key === '50to75'){
    min = 50000;
    max = 75000;
  }

  else if(key === '75to100'){
    min = 75000;
    max = 100000;
  }

  try {
    const pool = await connectDB();
    const query = `
      SELECT ResepID, ResepName, images
      FROM Resep
      WHERE TotalHarga BETWEEN @min AND @max
    `;

    const result = await pool.request()
      .input('min', sql.Int, min)
      .input('max', sql.Int, max)
      .query(query);

      return result.recordset;
  } catch (error) {
    console.error('Error filtering harga:', error);
    throw error;
  }
};

module.exports = { getAllResep, getResepbyID, filterBahan, filterHarga };