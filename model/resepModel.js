const {connectDB, sql} = require('../config/db');

//halaman resep
const getAllResep = async () => {
    try {
        const pool = await connectDB();
        const result = await pool.request().query('SELECT ResepID, ResepName, images, TotalHarga FROM Resep');
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
    const query = `
      SELECT r.ResepID, r.ResepName, r.deskripsi, r.langkah, r.images, r.totalHarga,
      rb.BahanID, rb.quantity, b.NamaBahan
      FROM Resep r
      JOIN ResepBahan rb ON r.ResepID = rb.ResepID
      JOIN BahanPokok b ON rb.BahanID = b.BahanID
      WHERE r.ResepID = @id
    `;
    const result = await pool.request()
      .input('id', sql.Int, id)
      .query(query);

      const row = result.recordset;

      if (row.length === 0) return null;

      const map = {
        ResepID: row[0].ResepID,
        ResepName: row[0].ResepName,
        deskripsi: row[0].deskripsi,
        langkah: row[0].langkah,
        images: row[0].images,
        totalHarga: row[0].totalHarga,
        bahan: row.map(item => ({
          BahanID: item.BahanID,
          NamaBahan: item.NamaBahan,
          quantity: item.quantity
        }))
      };

      return map;

  } catch (error){
    console.error('Error fetching resep by id:', error);
    throw error;
  }
};


//filter dari bahan yang user punya
const filterBahan = async(NamaBahan) => {
  try {
    const pool = await connectDB();
    const map = NamaBahan.map((_, i) => `@bahan${i}`).join(', ')
    const query = `
      SELECT DISTINCT r.ResepID, r.ResepName, r.images
      FROM Resep r
      JOIN ResepBahan rb ON r.ResepID = rb.ResepID
      JOIN BahanPokok bp ON rb.BahanID = bp.BahanID
      WHERE bp.NamaBahan IN (${map})
    `;
    
    const request = pool.request();
    NamaBahan.forEach((nama, i) => {
      request.input(`bahan${i}`, sql.NVarChar, nama);
    });

    const result = await request.query(query);
    
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