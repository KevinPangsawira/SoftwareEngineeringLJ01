import React from "react";
import CardBahan from "./komponen/CardBahan";
import beras from "../assets/beras.jpg";
import ds from "../assets/ds.webp";
const items = [
  {
    name: "Beras",
    price: "Rp. 15.000 / kg",
    updated: "7 Mei 2025",
    image: beras, 
  },
  {
    name: "Daging Sapi",
    price: "Rp. 135.000 / kg",
    updated: "7 Mei 2025",
    image: ds,
  },
  {
    name: "Bawang Merah",
    price: "Rp. 32.000 / kg",
    updated: "7 Mei 2025",
    image: beras,
  },
  {
    name: "Telur Ayam",
    price: "Rp. 30.000 / kg",
    updated: "7 Mei 2025",
    image: ds,
  },
  {
    name: "Daging Ayam",
    price: "Rp. 38.000 / kg",
    updated: "7 Mei 2025",
    image: beras,
  },
  {
    name: "Bawang Putih",
    price: "Rp. 34.000 / kg",
    updated: "7 Mei 2025",
    image: ds,
  },
];

function Daftar() {
  return (
    <div
      style={{
        padding: "24px",
        fontFamily: "sans-serif",
        backgroundColor: "#f3f4f6",
        minHeight: "100vh",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "24px",
        }}
      >
        {items.map((item, index) => (
          <CardBahan key={index} item={item} />
        ))}
      </div>
    </div>
  );
}

export default Daftar;
