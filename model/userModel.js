const {connectDB, sql} = require('../config/db');

const addNewUser= async (newData) => {
    const pool = await connectDB();
    const query = `
      INSERT INTO [User] (UserName, UserEmail, UserPassword, UserRole)
      OUTPUT INSERTED.*
      VALUES (@username, @email, @password, @role);
    `;

    const result = await pool.request()
      .input('username', sql.NVarChar, newData.username)
      .input('email', sql.NVarChar, newData.email)
      .input('password', sql.NVarChar, newData.password)
      .input('role', sql.NVarChar, newData.role)
      .query(query);

    return result.recordset[0];
};

const getUser = async (email, pass) => {
    const pool = await connectDB();
    const result = await pool.request()
    .input('email', sql.NVarChar, email)
    .input('password', sql.NVarChar, pass)
    .query('SELECT * FROM [User] WHERE UserEmail = @email AND UserPassword = @password');

    if (result.recordset.length === 0)  return null;

    else return result.recordset[0];
};

module.exports = { addNewUser, getUser };