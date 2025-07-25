import React, { useState, useEffect, useRef } from 'react';
import '../../css/Header.css';
import { FiSearch, FiUser, FiHeart, FiShoppingCart, FiMessageCircle, FiLogOut, FiShoppingBag } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Badge from '@mui/material/Badge';
import axios from 'axios';


function Header() {
  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const accountToggleRef = useRef(null);
  const [searchKeyword, setSearchKeyword] = useState('');

  const { products } = useSelector((state) => state.basket);

  // Hover ile aç
  const handleMouseEnter = () => {
    setDropdownOpen(true);
  };

  // Dışarı tıklanınca kapat
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        accountToggleRef.current &&
        !accountToggleRef.current.contains(event.target)
      ) {
        setDropdownOpen(false);
      }
    }
    if (dropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownOpen]);

  return (
    <div className="header-container">
      <div onClick={() => navigate("/")}>
        <img className='logo' src={require('../../assets/images/logo.png')} alt="Logo" />
      </div>

      <div className="search-container">
        <input
          type='text'
          value={searchKeyword}
          onChange={(e) => setSearchKeyword(e.target.value)}
          placeholder="Aradığınız ürün, kategori veya markayı yazınız"
          className="search-input"
        />
        <FiSearch 
        className="search-icon"
        onClick={() => {
          if (searchKeyword.trim() !== '') {
            navigate(`/search?keyword=${encodeURIComponent(searchKeyword)}`);
          }
        }}
        style={{ cursor: 'pointer' }}
        />
      </div>

      <div className='header-right'>
        <div
          className="header-account"
          onMouseEnter={handleMouseEnter}
          ref={dropdownRef}
          style={{ position: 'relative' }}
        >
          <span
            className="account-toggle"
            ref={accountToggleRef}
            style={{ cursor: 'pointer', userSelect: 'none' }}
          >
            <FiUser className="header-icon" /> Hesabım
          </span>
          {dropdownOpen && (
            <div className="account-dropdown">
              <div className="account-dropdown-item"><FiShoppingBag /> Tüm Siparişlerim</div>
              <div className="account-dropdown-item"
              onClick={() => {
                navigate("/profile");setDropdownOpen(false); // dropdown'u kapat 
                }}><FiUser /> Kullanıcı Bilgilerim
              </div>
              <a 
                href="https://chat.openai.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="account-dropdown-item" 
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                 <FiMessageCircle /> Trendyol Asistan
              </a>
              <div className="account-dropdown-item"
              onClick={() => {
                // (token varsa ileride kullanacaksın) şimdilik güvenli çıkış
                localStorage.removeItem("token");
                // Giriş sayfasına yönlendir
                navigate("/login");
                // Dropdown'u kapat
                setDropdownOpen(false);
                }}
                >
                  <FiLogOut /> Çıkış Yap
              </div>

            </div>
          )}
        </div>

        <span onClick={() => navigate("/favorites")} style={{ cursor: 'pointer' }}>
          <FiHeart className="header-icon" /> Favoriler
        </span>

        {/* ✅ Güncellenmiş Sepet Alanı */}
        <span onClick={() => navigate("/basket")} style={{ cursor: 'pointer' }}>
          <Badge
            badgeContent={products.length > 0 ? products.length : null}
            overlap="rectangular"
            sx={{
              ml: 1,
              '& .MuiBadge-badge': {
                backgroundColor: '#F27A1A !important',
                color: '#fff !important',
                right: -10,
                top: 0,
                fontSize: '0.75rem',
                minWidth: '18px',
                height: '18px',
                borderRadius: '9px',
              },
            }}
          >
            <FiShoppingCart className="header-icon" />Sepet
          </Badge>
        </span>
      </div>
    </div>
  );
}

export default Header;
