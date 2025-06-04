import { Link } from 'react-router-dom';
import './NavigationBar.css';
import { useUser } from './UserContext';
function NavigationBar() {
  const { user, setUser } = useUser(); 
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
            <span style={{ fontWeight: 'bold', fontSize: "40px",color: "rgb(3, 31, 62)" }}>{user.UserName}</span>
            <button onClick={() => setUser(null)} style={{
              borderRadius:'10px',width: "80px", marginTop: "6px",height: "35px",backgroundColor:"rgb(3, 31, 62)",color: "white", fontSize: '15px', cursor:'pointer'
            }}>Logout</button>
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
