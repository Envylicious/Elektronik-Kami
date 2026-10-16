import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/products/${id}`)
      .then(res => setProduct(res.data))
      .catch(err => console.error(err));
  }, [id]);

  if (!product) return <div>Loading...</div>;

  return (
    <div className="product-detail">
      <img src={product.imageUrl} alt={product.name} />
      <div className="detail-info">
        <h2>{product.name}</h2>
        <h3 className="price">Rp {product.price.toLocaleString('id-ID')}</h3>
        <p><strong>Lokasi:</strong> {product.location}</p>
        <p><strong>Deskripsi:</strong></p>
        <p>{product.description}</p>
        <Link to="/products" className="btn-back">← Kembali ke Daftar Produk</Link>
      </div>
    </div>
  );
}

export default ProductDetail;