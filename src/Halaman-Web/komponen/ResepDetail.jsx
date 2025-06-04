import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "./ResepDetail.css";

function ResepDetail() {
  const { id } = useParams();
  const [resep, setResep] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3000/api/resep/${id}`)
      .then((res) => res.json())
      .then((data) => setResep(data))
      .catch((error) => {
        console.error("Gagal memuat detail resep:", error);
      });
  }, [id]);

  if (!resep) return <p className="loading-text">Loading...</p>;

  return (
    <div className="detail-container">
      <h2 className="detail-title">{resep.ResepName}</h2>
      <img
        src={resep.images}
        alt={resep.ResepName}
        className="detail-img"
      />

      <p className="detail-section"><strong>Deskripsi:</strong></p>
      <p className="detail-desc">{resep.deskripsi}</p>

      <p className="detail-section"><strong>Langkah-langkah:</strong></p>
      <ol className="detail-steps">
        {resep.langkah.split("\\n").map((line, index) => (
          <li key={index}>{line.replace(/^\d+\.\s*/, '')}</li>
        ))}
      </ol>

      <p className="detail-section"><strong>Total Harga:</strong> Rp{resep.totalHarga.toLocaleString("id-ID")}</p>

      <p className="detail-section"><strong>Bahan-bahan:</strong></p>
      <ul className="detail-bahan">
        {resep.bahan.map((item, index) => (
          <li key={index}>
            <span className="bahan-nama">{item.NamaBahan}</span>
            <span className="bahan-jumlah">{item.quantity}x</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ResepDetail;
