import React, { useEffect, useState } from "react";
import CardBahan from "./komponen/CardBahan";
import "./Daftar.css";
import { useUser } from "./UserContext"; // ⬅️ tambahkan ini

function Daftar() {
  const { user } = useUser(); // ⬅️ cek login
   console.log('User di Daftar:', user);
  const [items, setItems] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/api/prices")
      .then((res) => res.json())
      .then((data) => {
        const mappedData = data.map((item) => ({
          bahanId: item.BahanID,
          name: item.NamaBahan,
          price: `Rp. ${item.HargaBahan.toLocaleString("id-ID")} / kg`,
          updated: new Date(item.DateUp).toLocaleDateString("id-ID", {
            day: "numeric",
            month: "long",
            year: "numeric",
          }),
          image: item.imageLink,
        }));
        setItems(mappedData);
      })
      .catch((error) => console.error("Gagal fetch data:", error));
  }, []);

  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div style={{ padding: "24px", fontFamily: "sans-serif", minHeight: "100vh" }}>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
        <input
          type="text"
          placeholder="Cari bahan..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          style={{
            marginBottom: "20px",
            padding: "10px",
            width: "15%",
            maxWidth: "500px",
            borderRadius: "8px",
            border: "1px solid transparent",
            fontSize: "20px",
            backgroundColor: "transparent",
            borderBottom: "1px solid black",
            color: "black"
          }}
        />
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
          gap: "24px",
        }}
      >
        {filteredItems.length > 0 ? (
          filteredItems.map((item, index) => (
            <CardBahan key={index} item={item} isLoggedIn={!!user} userId={user?.UserID} bahanId={item.bahanId} />
          ))
        ) : (
          <div style={{ gridColumn: "1/-1", textAlign: "center", fontSize: "18px" }}>
            Tidak ada bahan yang cocok.
          </div>
        )}
      </div>
    </div>
  );
}

export default Daftar;
