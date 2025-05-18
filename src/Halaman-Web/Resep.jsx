import ResepCard from "./komponen/ResepCard";

function Resep(){
    return (
        // To ResepCard.jsx -> Send {id} , {gambar} , {deskripsi}
        <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
            <ResepCard id="nasi-goreng" gambar="/Pics/Nasi-Goreng.jpg" deskripsi="Nasi goreng spesial" />
            <ResepCard id="nasi-hainam" gambar="/Pics/Nasi-Hainam.jpeg" deskripsi="Nasi Hainam" />
            <ResepCard id="sapi-lada-hitam" gambar="/Pics/Sapi-Lada-Hitam.jpg" deskripsi="Sapi Lada Hitam" />
        </div>
    );
}

export default Resep;