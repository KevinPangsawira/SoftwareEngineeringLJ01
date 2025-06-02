const pengeluaranModel = require('../model/pengeluaranModel');

const addToCart = async (req, res) => {
    const { userId, bahanId, quantity } = req.body;

    if (userId == null || bahanId == null || quantity == null) {
        return res.status(400).json({ message: 'Semua field harus diisi' });
    }

    try {
        const result = await pengeluaranModel.addToCart(userId, bahanId, quantity);
        res.status(201).json(result);
    } catch (error) {
        res.status(500).json({ message: 'Gagal menambahkan ke pengeluaran', error: error.message });
    }
};

const getCart = async (req, res) => {
    const userId = req.params.userId;

    try {
        const result = await pengeluaranModel.getCart(userId);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ message: 'Gagal mengambil data pengeluaran', error: error.message });
    }
};

const removeItem = async (req, res) => {
    const { userId, bahanId } = req.params;

    try {
        await pengeluaranModel.removeItem(userId, bahanId);
        res.status(200).json({ message: 'Item berhasil dihapus dari pengeluaran' });
    } catch (error) {
        res.status(500).json({ message: 'Gagal menghapus item dari pengeluaran', error: error.message });
    }
};

const clearCart = async (req, res) => {
    const userId = req.params.userId;

    try {
        await pengeluaranModel.clearCart(userId);
        res.status(200).json({ message: 'Pengeluaran berhasil dikosongkan' });
    } catch (error) {
        res.status(500).json({ message: 'Gagal mengosongkan pengeluaran', error: error.message });
    }
};

module.exports = { addToCart, getCart, removeItem, clearCart };