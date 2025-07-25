import React from 'react';
import '../../css/Product.css';
import { useNavigate } from 'react-router-dom';
import { FiHeart, FiX } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import { toggleFavorite } from '../../redux/slices/favoriteSlice';

function Product({ product, isFavoritePage = false }) {
  const { id, title, description, price, image } = product;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const favorites = useSelector((state) => state.favorite.items);
  const isFavorite = favorites.some((p) => p.id === id);

  const handleClick = (e) => {
    e.stopPropagation();
    dispatch(toggleFavorite(product));
  };

  return (
    <div className='card' onClick={() => navigate("/product.details/" + id)}>
      <div className='heart-icon' onClick={handleClick}>
        {isFavoritePage ? (
          <FiX color='red' />
        ) : (
          <FiHeart color={isFavorite ? 'red' : 'black'} />
        )}
      </div>
      <img className='image' src={image} alt="" />
      <div>
        <p className='product-name'>{title}</p>
        <h3 className='product-price'>{price} ₺</h3>
      </div>
    </div>
  );
}

export default Product;
