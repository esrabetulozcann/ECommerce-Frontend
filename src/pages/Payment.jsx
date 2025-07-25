import React, { useState } from 'react';
import '../css/Payment.css';

function Payment() {
  const [paymentMethod, setPaymentMethod] = useState('credit');

  return (
    <div className="payment-page">
      <div className="payment-left">
        {/* Teslimat Adresi */}
        <div className="section">
          <h2>Teslimat Adresi</h2>
          <textarea
            className="address-input"
            placeholder="Adresinizi buraya yazın..."
            rows="4"
          ></textarea>
        </div>

        {/* Ödeme Seçenekleri */}
        <div className="section">
          <h2>Ödeme Seçenekleri</h2>
          <div className="payment-options">
            <label>
              <input
                type="radio"
                name="payment"
                value="credit"
                checked={paymentMethod === 'credit'}
                onChange={() => setPaymentMethod('credit')}
              />
              Kredi Kartı
            </label>
            <label>
              <input
                type="radio"
                name="payment"
                value="havale"
                checked={paymentMethod === 'havale'}
                onChange={() => setPaymentMethod('havale')}
              />
              Havale/EFT
            </label>
          </div>

          {/* Kredi Kartı Bilgileri */}
          {paymentMethod === 'credit' && (
            <div className="credit-card-form">
              <input type="text" placeholder="Kart Numarası" />
              <input type="text" placeholder="Kart Üzerindeki İsim" />
              <div className="credit-row">
                <input type="text" placeholder="MM/YY" />
                <input type="text" placeholder="CVV" />
              </div>
            </div>
          )}

          {/* Havale Bilgileri */}
          {paymentMethod === 'havale' && (
            <div className="havale-info">
              <p><strong>Banka Adı:</strong> Örnek Bankası</p>
              <p><strong>IBAN:</strong> TR00 0000 0000 0000 0000 0000 00</p>
              <p><strong>Açıklama:</strong> Sipariş numaranızı açıklama kısmına eklemeyi unutmayın.</p>
            </div>
          )}
        </div>
      </div>

      {/* Sipariş Özeti */}
      <div className="payment-right">
        <h3>Sipariş Özeti</h3>
        <p>Ürün Toplamı: <strong>450,00 TL</strong></p>
        <p>Kargo: <strong>49,90 TL</strong></p>
        <hr />
        <p>Genel Toplam: <strong>499,90 TL</strong></p>
        <button className="payment-btn">Ödeme Yap</button>
      </div>
    </div>
  );
}

export default Payment;
