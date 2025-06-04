import { useUser } from '../UserContext';
const CardBahan = ({ item, isLoggedIn, userId, bahanId }) => {
   const { user } = useUser(); 
    const isAdmin = user?.UserRole === 'admin';
  const handleAddToCart = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/pengeluaran', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          userId: userId,
          bahanId: bahanId,
          quantity: 1
        })
      });

      if (response.ok) {
        alert('Berhasil ditambahkan ke pengeluaran!');
      } else {
        const data = await response.json();
        alert('Gagal menambahkan: ' + data.message);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Terjadi kesalahan saat menambahkan.');
    }
  };

  return (
    <div
      style={{
        borderRadius: "12px",
        overflow: "hidden",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        backgroundColor: "white",
        transition: "box-shadow 0.3s",
        marginBottom: "16px",
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
            backgroundColor: "rgba(0, 0, 0, 0.4)",
            color: "white",
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
        <div style={{ fontSize: '16px', color: 'black' }}>{item.price}</div>
        <div style={{ fontSize: '16px' }}>Diperbarui : {item.updated}</div>

        {isLoggedIn && !isAdmin && (
          <button
            onClick={handleAddToCart}
            style={{
              marginTop: "16px",
              padding: "8px 16px",
              backgroundColor: "#2E6DB5",
              color: "white",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              width: "150px",
              fontSize: "10px",
              marginLeft: "45%",
              marginBottom: "0px"           
            }}
          >
            Tambah ke Pengeluaran
          </button>
        )}
      </div>
    </div>
  );
};

export default CardBahan;
