import React, { useState } from 'react';
import '../css/LoginRegisterPage.css';

const LoginRegisterPage = () => {
  const [activeTab, setActiveTab] = useState('login');

  return (
    <div className="login-register-page">
      <div className="login-register-container">
        <h2 className="title">Merhaba,</h2>
        <p className="subtitle">
          Giriş yap veya hesap oluştur, fırsatları kaçırma!
        </p>

        {/* Sekmeler */}
        <div className="tab-header">
          <button
            className={activeTab === 'login' ? 'active' : ''}
            onClick={() => setActiveTab('login')}
          >
            Giriş Yap
          </button>
          <button
            className={activeTab === 'register' ? 'active' : ''}
            onClick={() => setActiveTab('register')}
          >
            Üye Ol
          </button>
        </div>

        {/* İçerik */}
        {activeTab === 'login' ? (
          <form className="form">
            <label>E-Posta</label>
            <input type="email" placeholder="E-posta adresinizi girin" />
            <label>Şifre</label>
            <input type="password" placeholder="Şifrenizi girin" />
            <div className="forgot">
              <a href="#">Şifremi Unuttum</a>
            </div>
            <button className="submit-button">Giriş Yap</button>
          </form>
        ) : (
          <form className="form">
            <label>Ad Soyad</label>
            <input type="text" placeholder="Adınızı girin" />
            <label>E-Posta</label>
            <input type="email" placeholder="E-posta adresinizi girin" />
            <label>Şifre</label>
            <input type="password" placeholder="Şifrenizi oluşturun" />
            <button className="submit-button">Üye Ol</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default LoginRegisterPage;
