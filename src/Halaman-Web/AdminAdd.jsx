import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'; // gunakan styling yang sama
import { useUser } from './UserContext';

function AdminAdd() {
    const [form, setForm] = useState({
        name: '',
        price: '',
        date: '',
        imageLink: ''
    });

    const navigate = useNavigate();
    const { user } = useUser(); 
    const isAdmin = user?.UserRole === 'admin';

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:3000/api/prices', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(form)
            });

            const data = await response.json();

            if (response.ok) {
                alert("Bahan pokok berhasil ditambahkan!");
                navigate('/'); // arahkan ke halaman daftar harga
            } else {
                alert(`Gagal menambahkan: ${data.message}`);
            }
        } catch (error) {
            console.error("Error saat menambahkan:", error);
            alert("Terjadi kesalahan saat menambahkan data.");
        }
    };

    // Validasi jika bukan admin
    if (!user || !isAdmin) {
        return <p style={{ textAlign: 'center', marginTop: '40px' }}>Akses ditolak. Hanya admin yang bisa menambahkan bahan pokok.</p>;
    }

    return (
        <div style={{ height: '90vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <form className="loginFrame" onSubmit={handleSubmit} style={{ height: '35vw', width: '30vw', boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)' }}>
                <p style={{ fontSize: '35px', textAlign: 'center', marginTop: "20px" }}>Tambah Bahan Pokok</p>

                <div className='textbox'>
                    <label>Nama Bahan</label>
                    <div>
                        <input type="text" name="name" value={form.name} onChange={handleChange} placeholder='Contoh: Telur Ayam Ras' required />
                        <hr />
                    </div>
                </div>

                <div className='textbox'>
                    <label>Harga</label>
                    <div>
                        <input type="number" name="price" value={form.price} onChange={handleChange} placeholder='Contoh: 30000' required />
                        <hr />
                    </div>
                </div>

                <div className='textbox'>
                    <label>Tanggal</label>
                    <div>
                        <input type="date" name="date" value={form.date} onChange={handleChange} required />
                        <hr />
                    </div>
                </div>

                <div className='textbox'>
                    <label>Link Gambar</label>
                    <div>
                        <input type="text" name="imageLink" value={form.imageLink} onChange={handleChange} placeholder='https://...' required />
                        <hr />
                    </div>
                </div>

                <div className='footerRegister'>
                    <button type="submit">Tambah</button>
                    <p onClick={() => navigate('/')}>Kembali</p>
                </div>
            </form>
        </div>
    );
}

export default AdminAdd;
