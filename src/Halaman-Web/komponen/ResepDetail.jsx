import './ResepDetail.css';
import { useParams } from 'react-router-dom';

// Detail data
const resepData = {
  "nasi-goreng": {
    gambar: "/Pics/Nasi-Goreng.jpg",
    judul: "Nasi Goreng Spesial",
    deskripsi: "Nasi goreng dengan telur, ayam suwir, dan bumbu khas Indonesia. Tambahkan acar dan kerupuk sebagai pelengkap."
  },
  "nasi-hainam": {
    gambar: "/Pics/Nasi-Hainam.jpeg",
    judul: "Nasi Hainam",
    deskripsi: "Nasi gurih dimasak dengan kaldu ayam, disajikan dengan ayam rebus dan saus jahe-kecap."
  },
  "sapi-lada-hitam": {
    gambar: "/Pics/Sapi-Lada-Hitam.jpg",
    judul: "Sapi Lada Hitam",
    deskripsi: "Wuenak rek"
  }
};


function ResepDetail() {
    // Ambil id dari URL
    const { id } = useParams();

    // Ambil data sesuai id resep
    const resep = resepData[id];

    // Kalo ga nemu
    if (!resep) {
        return <p>Resep tidak ditemukan</p>;
    }

    // Kalo nemu
    return (
        <div className="detail-container">
        <img src={resep.gambar} alt={resep.judul} className="detail-img" />
        <h2 className="detail-title">{resep.judul}</h2>
        <p className="detail-desc">{resep.deskripsi}</p>
        </div>
  );
}

export default ResepDetail;