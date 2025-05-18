import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavigationBar from './Halaman-Web/NavigationBar';
import Daftar from './Halaman-Web/Daftar';
import Resep from './Halaman-Web/Resep';
import ResepDetail from './Halaman-Web/komponen/ResepDetail';

function App() {
  return(
    <>
        <BrowserRouter>
            <NavigationBar />
            <Routes>
                <Route path='/' element={<Daftar />} ></Route>
                <Route path='/daftar' element={<Daftar />} />
                <Route path='/resep' element={<Resep />} />
                <Route path="/resep/:id" element={<ResepDetail />} />
            </Routes>
        </BrowserRouter>
    </>
  );
}

export default App