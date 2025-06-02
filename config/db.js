require('dotenv').config();
const sql = require('mssql');

const dbConfig = {
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    server: process.env.DB_SERVER,
    database: 'bahan_makanan_SE',
    options: {
        encrypt: true,
        trustServerCertificate: true,
    },
    port: 1433
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

module.exports = { sql, connectDB };
