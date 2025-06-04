import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavigationBar from './Halaman-Web/NavigationBar';
import Daftar from './Halaman-Web/Daftar';
import Resep from './Halaman-Web/Resep';
import ResepDetail from './Halaman-Web/komponen/ResepDetail';
import Register from './Halaman-Web/Register';
import Login from './Halaman-Web/Login';
import { useState } from 'react';
import AdminAdd from './Halaman-Web/AdminAdd';
import AdminUpdate from './Halaman-Web/AdminUpdate';
import Pengeluaran from './Halaman-Web/Pengeluaran';

function App() {
  const [user, setUser] = useState(null);
  return(
    
    <>
        <BrowserRouter>
        <NavigationBar user={user} setUser={setUser} /> 
        <Routes>
          <Route path='/' element={<Daftar />} />
          <Route path='/daftar' element={<Daftar />} />
          <Route path='/resep' element={<Resep />} />
          <Route path="/resep/:id" element={<ResepDetail />} />
          <Route path="/signup" element={<Register />} />
          <Route path="/login" element={<Login setUser={setUser} />} />
           <Route path="/pengeluaran" element={<Pengeluaran user={user} />} />
          <Route path="/add" element={<AdminAdd />} />
          <Route path="/update" element={<AdminUpdate />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App