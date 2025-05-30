import { Link } from 'react-router-dom';
import './NavigationBar.css';

function NavigationBar() {
    return (
        <div className='container'>
            <nav>
                <Link to="/daftar" >Daftar</Link>
                <Link to="/pengeluaran" >Pengeluaran</Link>
                <Link to="/resep" >Resep</Link>
            </nav>

            <nav>
                <Link to="/signup" >Sign Up</Link>
                <Link to="/login" >Login</Link>
            </nav>
        </div>
    );
}

export default NavigationBar