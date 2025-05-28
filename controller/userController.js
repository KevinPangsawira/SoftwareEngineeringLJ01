const userModel = require('../model/userModel');

const registerUser = async (req, res) => {
    if(!req.body.username || !req.body.email || !req.body.password || !req.body.role) {
        return res.status(400).json({ message: 'Semua field harus diisi' });
    }

    try {
    const newUser = await userModel.addNewUser(req.body);

    return res.status(201).json({ message: 'Registrasi berhasil', user: newUser });

  } catch (error) {
    res.status(500).json({ message: 'Registrasi gagal', error: error.message });
  }
};

const loginUser = async (req, res) => {
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