const sql = require('mssql');

const dbConfig = {
    user: 'user123',
    password: 'password_yang_anda_masukkan',
    server: 'LAPTOP-J3A9TJMS',
    database: 'bahan_makanan_SE',
    options: {
        encrypt: true,
        trustServerCertificate: true
    }
};

async function connectDB() {
    try {
        const pool = await sql.connect(dbConfig);
        console.log('Connected to SQL Server database!');
        return pool;
    } catch (err) {
        console.error('Database connection failed!', err);
        throw err;
    }
}

module.exports = {sql,connectDB};