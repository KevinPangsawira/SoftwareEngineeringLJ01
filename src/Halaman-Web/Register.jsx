import { useState } from "react";
import './Register.css';

function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:3000/api/users/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: form.name,
        email: form.email,
        password: form.password
        // tidak perlu kirim role karena default di backend
      }),
    });

    const data = await response.json();

    if (response.ok) {
      alert("Registrasi berhasil!");
    } else {
      alert(`Registrasi gagal: ${data.message}`);
    }
  };

  return (
    <div style={{
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <form className="registerFrame"
        onSubmit={handleSubmit}
        style={{
          height: '30vw',
          width: '30vw',
          boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)'
        }}
      >
        <p style={{ fontSize: '45px', textAlign: 'center', marginTop: "35px"}}>Sign Up</p>

        <div className='textbox'>
          <label htmlFor="name">Name</label>
          <div>
            <input type="text" name="name" placeholder='Enter Name' value={form.name} onChange={handleChange} />
            <hr />
          </div>
        </div>

        <div className='textbox'>
          <label htmlFor="email">Email</label>
          <div>
            <input type="email" name="email" placeholder='Enter Email' value={form.email} onChange={handleChange} />
            <hr />
          </div>
        </div>

        <div className='textbox'>
          <label htmlFor="password">Password</label>
          <div>
            <input type="password" name="password" placeholder='Enter Password' value={form.password} onChange={handleChange} />
            <hr />
          </div>
        </div>

        <div className='footerRegister'>
          <button type="submit">Register</button>
          <p>Already have an account? Login</p>
        </div>
      </form>
    </div>
  );
}

export default Register;
