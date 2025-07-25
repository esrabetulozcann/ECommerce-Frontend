import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts, getAllProductImages } from '../../redux/slices/productSlice';
import Product from '../product/Product';
import '../../css/ProducList.css';

function ProductList() {
  const dispatch = useDispatch();
  const { products, images } = useSelector((store) => store.product);

  useEffect(() => {
    dispatch(getAllProducts());
    dispatch(getAllProductImages());
  }, [dispatch]);


  console.log("GELEN ÜRÜNLER:", products);
console.log("GELEN GÖRSELLER:", images);

  const productsWithImages = products.map(product => {
    const imageObj = images.find(img => img.productId === product.id);
    return {
      ...product,
      title: product.name,
      image: imageObj?.imageUrl || 'https://via.placeholder.com/300x400?text=No+Image'
    };
  });

  return (
    <div className='flex-row' style={{flexWrap:'wrap', marginTop:'25px'}}> 
      {productsWithImages.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductList;
