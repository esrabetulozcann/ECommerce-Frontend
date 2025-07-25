import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';

const BASE_URL = "http://localhost:5067";

function SearchResults() {
  const location = useLocation();
  const navigate = useNavigate();
  const keyword = new URLSearchParams(location.search).get("keyword");

  const [products, setProducts] = useState([]);
  const [images, setImages] = useState([]);

  useEffect(() => {
    if (keyword) {
      axios
        .get(`${BASE_URL}/api/Product/SearchKeyword?keyword=${encodeURIComponent(keyword)}`)
        .then((res) => setProducts(res.data))
        .catch((err) => console.error("Arama hatası:", err));

      axios
        .get(`${BASE_URL}/api/ProductImage/GetAllProductImage`)
        .then((res) => setImages(res.data))
        .catch((err) => console.error("Görsel hatası:", err));
    }
  }, [keyword]);

  const getImageForProduct = (productId) => {
    const imageObj = images.find((img) => img.productId === productId);

    if (imageObj?.imageUrl) return imageObj.imageUrl;

    if (imageObj?.imagePath) {
      const path = imageObj.imagePath.startsWith("/")
        ? imageObj.imagePath.slice(1)
        : imageObj.imagePath;
      return `${BASE_URL}/${path}`;
    }

    return "https://via.placeholder.com/300x400?text=No+Image";
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>"{keyword}" için arama sonuçları</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
        {products.length === 0 ? (
          <p>Sonuç bulunamadı.</p>
        ) : (
          products.map((product) => (
            <div
              key={product.id}
              onClick={() => navigate(`/product/${product.id}`)} // 👈 Tıklama yönlendirmesi burada
              style={{
                border: '1px solid #ccc',
                borderRadius: '10px',
                padding: '10px',
                width: '200px',
                textAlign: 'center',
                background: '#f9f9f9',
                cursor: 'pointer', // 👈 fare üzerine gelince el işareti
                transition: 'transform 0.2s',
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >
              <img
                src={getImageForProduct(product.id)}
                alt={product.name}
                style={{
                  width: '100%',
                  height: '250px',
                  objectFit: 'cover',
                  borderRadius: '5px',
                }}
              />
              <h3 style={{ fontSize: '16px', margin: '10px 0 5px 0' }}>{product.name}</h3>
              <p style={{ fontWeight: 'bold', color: '#F27A1A' }}>{product.price} ₺</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default SearchResults;
