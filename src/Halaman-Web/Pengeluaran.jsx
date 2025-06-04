import { useEffect, useState } from "react";
import axios from "axios";
import { useUser } from './UserContext';
import './Pengeluaran.css'; 

function Pengeluaran() {
    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);
    const [newBahanId, setNewBahanId] = useState("");
    const [newQuantity, setNewQuantity] = useState(1);
    const [bahanList, setBahanList] = useState([]);
    const { user } = useUser(); 

    useEffect(() => {
        if (user?.UserID) {
            fetchCart();
            fetchBahanList();
        }
    }, [user]);

    const fetchCart = async () => {
        try {
            const res = await axios.get(`http://localhost:3000/api/pengeluaran/${user.UserID}`);
            setCart(res.data.items || []);
            setTotal(res.data.total || 0);
        } catch (error) {
            console.error("Gagal mengambil pengeluaran:", error);
        }
    };

    const fetchBahanList = async () => {
        try {
            const res = await axios.get("http://localhost:3000/api/bahanpokok");
            setBahanList(res.data || []);
        } catch (error) {
            console.error("Gagal mengambil daftar bahan:", error);
        }
    };

    const handleQuantityChange = async (bahanId, newQty) => {
        try {
            await axios.post("http://localhost:3000/api/pengeluaran", {
                userId: user.UserID,
                bahanId: bahanId,
                quantity: parseInt(newQty)
            });
            fetchCart();
        } catch (error) {
            console.error("Gagal mengubah jumlah:", error);
        }
    };

    const handleRemoveItem = async (bahanId) => {
        try {
            await axios.delete(`http://localhost:3000/api/pengeluaran/remove/${user.UserID}/${bahanId}`);
            fetchCart();
        } catch (error) {
            console.error("Gagal menghapus item:", error);
        }
    };

    const handleClearAll = async () => {
        try {
            await axios.delete(`http://localhost:3000/api/pengeluaran/clearcart/${user.UserID}`);
            fetchCart();
        } catch (error) {
            console.error("Gagal menghapus semua item:", error);
        }
    };

    if (!user) {
        return <div>Login untuk mengakses fitur pengeluaran Anda.</div>;
    }

    return (
        <div className="pengeluaran-container">
            <h1>Pengeluaran Anda</h1>

            {cart.length === 0 ? (
                <p style={{ marginTop: '20px' }}>Belum ada pengeluaran.</p>
            ) : (
                <>
                    <table className="cart-table">
                        <thead>
                            <tr>
                                <th>Nama Bahan</th>
                                <th>Harga</th>
                                <th>Jumlah(kg)</th>
                                <th>Subtotal</th>
                                <th>Aksi</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cart.map((item) => (
                                <tr key={item.BahanID}>
                                    <td>{item.NamaBahan}</td>
                                    <td>Rp{item.HargaBahan}</td>
                                    <td>
                                        <input style={{fontSize: "30px", border: "1px solid"}}
                                            type="number"
                                            min="1"
                                            value={item.Quantity}
                                            onChange={(e) =>
                                                handleQuantityChange(item.BahanID, e.target.value)
                                            }
                                        />
                                    </td>
                                    <td>Rp{item.subtotal}</td>
                                    <td>
                                        <button onClick={() => handleRemoveItem(item.BahanID)}>Hapus</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    <h3>Total Pengeluaran: Rp{total}</h3>
                    <button onClick={handleClearAll} className="hapus-semua">
                        Hapus Semua
                    </button>
                </>
            )}
        </div>
    );
}

export default Pengeluaran;
