import React from "react";

const CardBahan = ({ item }) => {
  return (
    <div
      style={{
        borderRadius: "12px",
        overflow: "hidden",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        backgroundColor: "white",
        transition: "box-shadow 0.3s",
      }}
    >
      <div
        style={{
          height: "160px",
          backgroundImage: `url(${item.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "flex-end",
          position: "relative",
          filter: "brightness(90%)",
     
        }}
      >
        <div
          style={{
            // filter: "brightness(100%)", 
            backgroundColor: "rgba(0, 0, 0, 0.4)",
            color: "rgba(255, 255, 255, 1)",
            width: "100%",
            padding: "12px 16px",
            fontSize: "18px",
            fontWeight: "600",
            textAlign: "end",
            
          }}
        >
          {item.name}
        </div>
      </div>
      <div style={{ padding: "16px", fontSize: "14px", color: "#374151" }}>
        <div style={{fontSize: '16px', color: 'black'}}>{item.price}</div>
        <div style={{fontSize: '16px'}}>Diperbarui : {item.updated}</div>
      </div>
    </div>
  );
};

export default CardBahan;
