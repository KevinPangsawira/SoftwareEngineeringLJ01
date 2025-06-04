const resepModel = require('../model/resepModel');

const getResepList = async (req, res) => {
  try {
    const resepList = await resepModel.getAllResep();
    res.status(200).json(resepList);
  } catch (error) {
    res.status(500).json({ message: 'Gagal mengambil data resep', error: error.message });
  }
};

const getDetailResep = async (req, res) => {
  try {
    const resepDetail = await resepModel.getResepbyID(req.params.id);

    if(!resepDetail) return res.status(404).json({ message: 'Resep tidak ditemukan' });

    res.status(201).json(resepDetail);
  } catch (error) {
    res.status(500).json({ message: 'Gagal mengambil resep detail', error: error.message });
  }
};

const filterbyBahan = async (req, res) => {
  const { NamaBahan } = req.body;

  if(!Array.isArray(NamaBahan) || NamaBahan.length === 0) {
    return res.status(400).json({ message: 'Bahan yang dimiliki harus diisi' });
  }

  try {
    const filteredResep = await resepModel.filterBahan(NamaBahan);
    res.status(200).json(filteredResep);
  } catch (error) {
    res.status(500).json({ message: 'Gagal memfilter resep berdasarkan bahan', error: error.message });
  }
};

const filterbyHarga = async (req, res) => {
  const {key} = req.params;

  try {
    const result = await resepModel.filterHarga(key);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: 'Gagal memfilter resep berdasarkan harga', error: error.message });
  }
};

module.exports = { getResepList, getDetailResep, filterbyBahan, filterbyHarga };