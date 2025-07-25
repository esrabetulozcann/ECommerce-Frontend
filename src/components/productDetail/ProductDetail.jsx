import React, { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { setSelectedProduct } from '../../redux/slices/productSlice';
import { addToBasket } from '../../redux/slices/basketSlice';
import { FiHeart } from 'react-icons/fi';
import '../../css/ProductDetail.css';

function ProductDetail() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { products, images, selectedProduct } = useSelector((store) => store.product);

  const foundProduct = useMemo(() => products.find(p => p.id == id), [id, products]);

  const productImage = useMemo(() => {
    const imgObj = images.find(img => img.productId == id);
    return imgObj?.imageUrl || 'https://via.placeholder.com/300x400?text=No+Image';
  }, [images, id]);

  useEffect(() => {
    if (foundProduct) {
      dispatch(setSelectedProduct(foundProduct));
    }
  }, [foundProduct, dispatch]);

  const { name, description, price } = selectedProduct;

  const addBasket = () => {
    const payload = {
      id,
      name,
      description,
      price,
      image: productImage,
      count: 1,
    };
    dispatch(addToBasket(payload));
  };

  return (
    <div className='product-detail-container'>
      <div>
        <img src={productImage} width={350} height={500} alt={name} />
      </div>
      <div>
        <h1 className='product-detail-name'>{name}</h1>
        <p className='product-detail-description'>{description}</p>
        <h1 className='product-detail-price'>{price} TL</h1>

        <div className='product-detail-button-group'>
          <button onClick={addBasket} className='product-detail-button'>Sepete Ekle</button>
          <div className='favorite-icon-wrapper'>
            <FiHeart className='favorite-icon' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
