import { Link } from "react-router-dom";
import "./ResepCard.css";

// Receive data from Resep.jsx -> {id} , {gambar} , {deskripsi}
function ResepCard({id , gambar , deskripsi, harga}) {
    return (
        // Each card have a page -> {id}
        <Link to={`/resep/${id}`} className="card-link">
            {/* Display card with {gambar} , {deskripsi} */}
            <div className="card">
                <img src={gambar} alt="resep" className="card-img" ></img>
                <p className="card-desc" >{deskripsi}</p>
                <p className="card-desc" >Rp {harga !== undefined ? harga.toLocaleString() : '-'}</p>
            </div>
        </Link>
    );
}

export default ResepCard;