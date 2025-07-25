import React from 'react';
import { useSelector } from 'react-redux';
import Product from '../components/product/Product';

function FavoritesPages() {
  const favorites = useSelector((state) => state.favorite.items);

  return (
    <div style={{ marginTop: '25px', display: 'flex', flexWrap: 'wrap' }}>
      {favorites.length === 0 ? (
        <p>Favori ürün bulunmamaktadır.</p>
      ) : (
        favorites.map((product) => (
          <Product key={product.id} product={product} isFavoritePage={true} />
        ))
      )}
    </div>
  );
}

export default FavoritesPages;
