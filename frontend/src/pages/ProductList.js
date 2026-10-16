import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Mengambil data produk
    axios.get('https://elektronik-kami.vercel.app/api/products')
      .then(res => setProducts(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h2>Daftar Produk</h2>
      <div className="product-grid">
        {products.map(product => (
          <div key={product._id} className="product-card">
            <img src={product.imageUrl} alt={product.name} />
            <h3>{product.name}</h3>
            <p className="price">Rp {product.price.toLocaleString('id-ID')}</p>
            <p className="location">📍 {product.location}</p>
            <Link to={`/products/${product._id}`} className="btn-detail">Lihat Detail</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;