import React from "react";
import "../css/UserProfilePage.css";

export default function UserProfilePage() {
  // Gün, ay, yıl için örnek veri
  const days = Array.from({ length: 31 }, (_, i) => i + 1);
  const months = [
    "Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran",
    "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"
  ];
  const years = Array.from({ length: 70 }, (_, i) => 2025 - i);

  return (
    <div className="user-profile-container">
      <h1 className="section-title">Kullanıcı Bilgilerim</h1>
      <div className="profile-content">
        {/* Üyelik Bilgileri */}
        <div className="section">
          <h2 className="section-subtitle">Üyelik Bilgilerim</h2>

          <div className="form-row">
            <div className="form-group-vertical">
              <label className="form-label-bold">Ad</label>
              <input type="text" defaultValue="Esra Betül" />
            </div>
            <div className="form-group-vertical">
              <label className="form-label-bold">Soyad</label>
              <input type="text" defaultValue="Özcan" />
            </div>
          </div>

          <div className="form-group-vertical">
            <label className="form-label-bold">Email</label>
            <input type="email" defaultValue="esrabetulozccc@gmail.com" />
          </div>

          <div className="form-group-vertical">
            <label className="form-label-bold">Cep Telefonu</label>
            <div className="form-group">
              <select><option value="+90">+90</option></select>
              <input type="text" defaultValue="505******37" />
              <button className="phone-update-button">Güncelle</button>
            </div>
          </div>

          <div className="form-group-vertical">
            <label className="birthdate">Doğum Tarihi</label>
            <div className="form-group">
              <select><option>Gün</option>{days.map(d => <option key={d}>{d}</option>)}</select>
              <select><option>Ay</option>{months.map(m => <option key={m}>{m}</option>)}</select>
              <select><option>Yıl</option>{years.map(y => <option key={y}>{y}</option>)}</select>
            </div>
          </div>

          <div className="form-group-vertical">
            <label style={{fontWeight: 'bold'}}>Kurumsal</label>
            <label className="checkbox-wrapper">
              <input type="checkbox" />
              <span className="checkbox-label">İş yeri alışverişlerim için fırsatlardan haberdar olmak istiyorum.</span>
            </label>
          </div>

          <button className="main-update-button">Güncelle</button>
        </div>

        {/* Şifre Güncelleme */}
        <div className="section">
          <h2 className="section-subtitle">Şifre Güncelleme</h2>
          <div className="form-group-vertical">
            <label className="form-label-bold">Şu Anki Şifre</label>
            <input type="password" />

            <label className="form-label-bold">Yeni Şifre</label>
            <input type="password" />
            <p className="password-info">
              Şifreniz <strong>en az 10 karakter</strong> olmalı. <strong>1 büyük harf</strong>, 
              <strong>1 küçük harf</strong> ve <strong>rakam</strong> içermelidir.
            </p>

            <label className="form-label-bold">Yeni Şifre (Tekrar)</label>
            <input type="password" />
          </div>
          <button className="main-update-button">Güncelle</button>

          {/* İki Adımlı Doğrulama */}
          <div className="two-step">
            <h3>İKİ ADIMLI DOĞRULAMA</h3>
            <p>
              İki adımlı doğrulama yöntemini etkinleştirdiğinizde, kişisel şifrenize ek olarak kayıtlı cep telefonunuza gelen doğrulama koduyla oturum açarsınız.
            </p>
            <label className="checkbox-wrapper">
              <input type="checkbox" />
              <span>Etkinleştir</span>
            </label>
          </div>
        </div> {/* Şifre Güncelleme bitiş */}
      </div> {/* profile-content bitiş */}
    </div> // user-profile-container bitiş
  );
}
