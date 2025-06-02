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

  if (!resep) return <p>Loading...</p>;

  return (
    <div style={{ padding: '20px', color: '#333' }}>
      <h2>{resep.ResepName}</h2>
      <img
        src={resep.images}
        alt={resep.ResepName}
        style={{ maxWidth: '400px', borderRadius: '12px' }}
      />
      <p><strong>Deskripsi:</strong> {resep.deskripsi}</p>

      <p><strong>Langkah-langkah:</strong></p>
      <p>
        {resep.langkah.split("\\n").map((line, index) => (
          <span key={index}>
            {line}
            <br />
          </span>
        ))}
      </p>

      <p><strong>Total Harga:</strong> Rp{resep.totalHarga.toLocaleString("id-ID")}</p>

      <p><strong>Bahan-bahan:</strong></p>
      <ul>
        {resep.bahan.map((item, index) => (
          <li key={index}>
            {item.NamaBahan} — {item.quantity}x
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ResepDetail;
