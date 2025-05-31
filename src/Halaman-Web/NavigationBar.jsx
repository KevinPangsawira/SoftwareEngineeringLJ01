import { Link } from 'react-router-dom';
import './NavigationBar.css';

function NavigationBar({ user, setUser }) {
  const isAdmin = user?.UserRole === 'admin';
  const isCustomer = user?.UserRole === 'Customer';

  return (
    <div className='container'>
      <nav>
        {isAdmin ? (
          <>
            <Link to="/add">Add</Link>
            <Link to="/update">Update</Link>
          </>
        ) : (
          <>
            <Link to="/daftar">Daftar</Link>
            <Link to="/pengeluaran">Pengeluaran</Link>
            <Link to="/resep">Resep</Link>
          </>
        )}
      </nav>

      <nav>
        {user ? (
          <>
            <span style={{ fontWeight: 'bold', color: 'white' }}>{user.UserName}</span>
            <button onClick={() => setUser(null)}>Logout</button>
          </>
        ) : (
          <>
            <Link to="/signup">Sign Up</Link>
            <Link to="/login">Login</Link>
          </>
        )}
      </nav>
    </div>
  );
}

export default NavigationBar;
