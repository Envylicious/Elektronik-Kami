import React from 'react';

function Home() {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Selamat Datang di Toko Elektronik Kami</h1>
      <p>Temukan berbagai produk elektronik di sini!</p>
      
      <div style={{ marginTop: '30px' }}>
        <img 
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQzp-HuYzgCmBXbDYcjRIE_qhvCkhcfk4BThcJ0_wQrg&s=10" 
          alt="Banner Toko Online" 
          style={{ 
            maxWidth: '100%', 
            maxHeight: '400px', 
            borderRadius: '12px', 
            boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
            objectFit: 'cover'
          }} 
        />
      </div>
    </div>
  );
}

export default Home;