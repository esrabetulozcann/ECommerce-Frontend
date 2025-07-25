import '../../css/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-column">
            <h4 className='menu-title'>Trendyol</h4>
            <ul>
              <li>Biz Kimiz</li>
              <li>Kariyer</li>
              <li>Sürdürülebilirlik</li>
              <li>İletişim</li>
              <li>Güvenlik</li>
            </ul>
          </div>
          <div className="footer-column">
            <h4 className='menu-title'>Kampanyalar</h4>
            <ul>
              <li>Kampanyalar</li>
              <li>Alışveriş Kredisi</li>
              <li>Elit Üyelik</li>
              <li>Hediye Fikirleri</li>
            </ul>
          </div>
          <div className="footer-column">
            <h4 className='menu-title'>Satıcı</h4>
            <ul>
              <li>Trendyol'da Satış Yap</li>
              <li>Temel Kavramlar</li>
              <li>Trendyol Akademi</li>
            </ul>
          </div>
          <div className="footer-column">
            <h4 className='menu-title'>Yardım</h4>
            <ul>
              <li>Sıkça Sorulan Sorular</li>
              <li>Canlı Yardım / Asistan</li>
              <li>Nasıl İade Edebilirim</li>
              <li>İşlem Rehberi</li>
            </ul>
          </div>
          <div className="footer-column">
            <h4 className='menu-title'>Sosyal Medya</h4>
            <div className="social-icons">
              <img src="https://cdn.dsmcdn.com/web/production/footer-facebook.png" alt="Facebook" />
              <img src="https://cdn.dsmcdn.com/web/production/footer-instagram.png" alt="Instagram" />
              <img src="https://cdn.dsmcdn.com/web/production/footer-youtube.png" alt="YouTube" />
              <img src="https://cdn.dsmcdn.com/web/production/footer-x.png" alt="X (Twitter)" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
