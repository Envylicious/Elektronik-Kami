import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function AppNavbar() {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');
  const user = JSON.parse(localStorage.getItem('user'));

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    alert('Anda telah logout.');
    navigate('/login');
  };

  return (
    <nav className="navbar">
      <h2>Elektronik Kami</h2>
      <div>
        <Link to="/">Beranda</Link>
        <Link to="/products">Daftar Produk</Link>
        
        {token ? (
          <>
            <span style={{ marginLeft: '20px', color: '#ffdd59' }}>
              Halo, {user?.username || 'Pengguna'}
            </span>
            <button 
              onClick={handleLogout} 
              style={{ marginLeft: '15px', padding: '5px 10px', background: '#e94560', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default AppNavbar;