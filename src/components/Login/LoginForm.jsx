import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../css/LoginForm.css';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      localStorage.setItem('token', 'fake-token');
      navigate('/');
    } catch (error) {
      alert('Giriş başarısız!');
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-title">Merhaba,</div>
        <form className="login-form" onSubmit={handleLogin}>
          <label htmlFor="email">E-Posta</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="E-posta adresinizi girin"
            required
          />

          <label htmlFor="password">Şifre</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Şifrenizi girin"
            required
          />

          <div className="forgot-password">
            <a href="#">Şifremi Unuttum</a>
          </div>

          <button type="submit" className="login-button">Giriş Yap</button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
