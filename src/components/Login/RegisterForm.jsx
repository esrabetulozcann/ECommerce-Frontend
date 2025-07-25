import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../css/RegisterForm.css';

const RegisterForm = () => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    // Şimdilik fake register işlemi
    try {
      // Normalde burada API'ye gönderim yapılırdı
      console.log('Kayıt Verisi:', { name, surname, email, password });

      // Başarılıysa token verilmese bile kullanıcıyı login sayfasına yönlendir
      alert('Kayıt başarılı! Giriş yapabilirsiniz.');
      navigate('/login'); // Giriş sayfasına yönlendir
    } catch (error) {
      alert('Kayıt başarısız!');
    }
  };

  return (
    <form className="register-form" onSubmit={handleRegister}>
      <label htmlFor="name">Ad</label>
      <input
        id="name"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Adınızı girin"
        required
      />

      <label htmlFor="surname">Soyad</label>
      <input
        id="surname"
        type="text"
        value={surname}
        onChange={(e) => setSurname(e.target.value)}
        placeholder="Soyadınızı girin"
        required
      />

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

      <button type="submit" className="register-button">Üye Ol</button>
    </form>
  );
};

export default RegisterForm;
