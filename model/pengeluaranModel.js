const { connectDB, sql } = require('../config/db');

const addToCart = async (userId, bahanId, quantity) => {
    const pool = await connectDB();
    await pool.request()
        .input('userId', sql.Int, userId)
        .input('bahanId', sql.Int, bahanId)
        .input('quantity', sql.Int, quantity)
        .query(`
            MERGE INTO Checklists AS target
            USING (SELECT @userId AS UserID, @bahanId AS BahanID) AS source
            ON target.UserID = source.UserID AND target.BahanID = source.BahanID
            WHEN MATCHED THEN
                UPDATE SET Quantity = @quantity
            WHEN NOT MATCHED THEN
                INSERT (UserID, BahanID, Quantity)
                VALUES (@userId, @bahanId, @quantity);
        `);
};

const getCart = async (userId) => {
    const pool = await connectDB();
    const result = await pool.request()
        .input('userId', sql.Int, userId)
        .query(`
            SELECT b.BahanID, b.NamaBahan, b.HargaBahan, c.Quantity, (b.HargaBahan * c.Quantity) AS subtotal
            FROM Checklists c
            JOIN BahanPokok b ON c.BahanID = b.BahanID
            WHERE c.UserID = @userId
        `);

    let total = 0;

    result.recordset.forEach(item => {
        total += item.subtotal;
    });

    return {
        items: result.recordset,
        total: total
    };
};

const removeItem = async (userId, bahanId) => {
    const pool = await connectDB();
    await pool.request()
        .input('userId', sql.Int, userId)
        .input('bahanId', sql.Int, bahanId)
        .query('DELETE FROM Checklists WHERE UserID = @userId AND BahanID = @bahanId');
}

const clearCart = async(userId) => {
    const pool = await connectDB();
    await pool.request()
        .input('userId', sql.Int, userId)
        .query('DELETE FROM Checklists WHERE UserID = @userId');
}

module.exports = { addToCart, getCart, removeItem, clearCart };  