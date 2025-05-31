import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function Login({ setUser }) {
    const [form, setForm] = useState({ email: '', password: '' });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await fetch('http://localhost:3000/api/users/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(form)
        });

        const data = await response.json();

        if (response.ok) {
            alert("Login berhasil!");
            setUser(data.user);
            navigate('/');
        } else {
            alert(`Login gagal: ${data.message}`);
        }
    };

    return (
        <div style={{ height: '90vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <form className="loginFrame" onSubmit={handleSubmit} style={{ height: '25vw', width: '30vw', boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)' }}>
                <p style={{ fontSize: '45px', textAlign: 'center' }}>Login</p>
                <div className='textbox'>
                    <label>Email</label>
                    <div>
                        <input type="email" name="email" value={form.email} onChange={handleChange} placeholder='Enter Email' required />
                        <hr />
                    </div>
                </div>
                <div className='textbox'>
                    <label>Password</label>
                    <div>
                        <input type="password" name="password" value={form.password} onChange={handleChange} placeholder='Enter Password' required />
                        <hr />
                    </div>
                </div>
                <div className='footerRegister'>
                    <button type="submit">Login</button>
                    <p>Forgot password</p>
                </div>
            </form>
        </div>
    );
}

export default Login;
