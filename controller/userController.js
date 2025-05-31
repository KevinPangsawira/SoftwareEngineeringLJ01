const userModel = require('../model/userModel');

const registerUser = async (req, res) => {
  const { username, email, password } = req.body;
  const role = "Customer"; // default

  if (!username || !email || !password) {
    return res.status(400).json({ message: 'Semua field harus diisi' });
  }

  if (!email.endsWith('@gmail.com')) {
    return res.status(400).json({ message: 'Email harus menggunakan @gmail.com' });
  }

  if (password.length < 8) {
    return res.status(400).json({ message: 'Password minimal 8 karakter' });
  }

  try {
    const newUser = await userModel.addNewUser({ username, email, password, role });
    return res.status(201).json({ message: 'Registrasi berhasil', user: newUser });
  } catch (error) {
    res.status(500).json({ message: 'Registrasi gagal', error: error.message });
  }
};


const loginUser = async (req, res) => {
  if (!req.body.email || !req.body.password) {
    return res.status(400).json({ message: 'Email dan password harus diisi' });
  }

  if (!req.body.email.endsWith('@gmail.com')) {
    return res.status(400).json({ message: 'Email harus menggunakan @gmail.com' });
  }

  if (req.body.password.length < 8) {
    return res.status(400).json({ message: 'Password minimal 8 karakter' });
  }

  try {
    const user = await userModel.getUser(req.body.email, req.body.password);

    if (!user) {
      return res.status(401).json({ message: 'Email atau password salah' });
    }

    res.status(200).json({ message: 'Login berhasil', user });

  } catch (error) {
    res.status(500).json({ message: 'Login gagal', error: error.message });
  }
};

module.exports = { registerUser, loginUser };