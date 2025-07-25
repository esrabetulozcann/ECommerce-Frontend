import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { incrementCount, decrementCount, removeFromBasket } from '../redux/slices/basketSlice';
import '../css/Basket.css';
import { CiCirclePlus, CiCircleMinus } from 'react-icons/ci';
import { MdDelete } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

function Basket() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { products } = useSelector((state) => state.basket);

  const totalCount = products.reduce((acc, product) => acc + product.count, 0);
  const totalPrice = products.reduce((acc, product) => acc + product.count * product.price, 0);
  const shipping = totalPrice > 500 ? 0 : 49.90;
  const grandTotal = totalPrice + shipping;

  return (
    <div className="basket-page">
      <div className="basket-left">
        <h2>Sepetim</h2>
        {products.length === 0 ? (
          <p>Sepetinizde ürün yok.</p>
        ) : (
          products.map((product) => (
            <div key={product.id} className="basket-item">
              <img src={product.image} alt={product.title} />
              <div className="basket-item-info">
                <h4>{product.title}</h4>
                <p>{product.price} TL</p>
                <div className="basket-controls">
                  <CiCircleMinus
                    className="icon-btn"
                    onClick={() => dispatch(decrementCount(product.id))}
                  />
                  <span>{product.count}</span>
                  <CiCirclePlus
                    className="icon-btn"
                    onClick={() => dispatch(incrementCount(product.id))}
                  />
                  <MdDelete
                    className="icon-btn delete-btn"
                    onClick={() => dispatch(removeFromBasket(product.id))}
                  />
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      <div className="basket-right">
        <h3>Sepet Özeti</h3>
        <p>Toplam Ürün: <strong>{totalCount}</strong></p>
        <p>Ürün Tutarı: <strong>{totalPrice.toFixed(2)} TL</strong></p>
        <p>Kargo: <strong>{shipping === 0 ? "Ücretsiz" : `${shipping.toFixed(2)} TL`}</strong></p>
        <hr />
        <p>Genel Toplam: <strong>{grandTotal.toFixed(2)} TL</strong></p>
        <button
          className="checkout-btn"
          onClick={() => navigate('/payment')}
        >
          Alışverişi Tamamla
        </button>
      </div>
    </div>
  );
}

export default Basket;
