import React, { useState, useEffect, useRef } from 'react';
import '../../css/CategoryBar.css';
import { FiMenu } from 'react-icons/fi';
import categoryIcons from '../../assets/icons/IconMenu'; 
import { FaChevronRight } from 'react-icons/fa';

function CategoryBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [categories, setCategories] = useState([]);
  const [hoveredMainCategory, setHoveredMainCategory] = useState(null);
  const menuRef = useRef();
  const categoryBarRef = useRef(); //  CategoryBar'ın kendisi için ref

  useEffect(() => {
    fetch('http://localhost:5067/api/Category/GetAll')
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
        // Menü ilk açıldığında ilk ana kategorinin alt kategorilerini göstermek için
        if (data.length > 0) {
          const firstMainCategory = data.find(cat => cat.children && cat.children.length > 0);
          if (firstMainCategory) {
            setHoveredMainCategory(firstMainCategory);
          }
        }
      })
      .catch(error => console.error("Kategori verileri çekilirken hata oluştu:", error));
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      // Hem menünün dışına hem de categoryBar'ın dışına tıklamalarda menüyü kapat
      if (menuRef.current && !menuRef.current.contains(e.target) &&
          categoryBarRef.current && !categoryBarRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // 'Tüm Kategoriler' hover durumunda, menü açıkken mouse menü dışına çıkarsa kapatmak için
  const handleMouseLeaveDropdown = (e) => {
  const related = e.relatedTarget;
  // Eğer relatedTarget yoksa veya contains fonksiyonuna uygun değilse doğrudan kapat
  if (
    !related ||
    !(related instanceof Node) ||
    (categoryBarRef.current && !categoryBarRef.current.contains(related))
  ) {
    setMenuOpen(false);
  }
};


  return (
    <div className="category-bar" ref={categoryBarRef}> {}
      {/* TÜM KATEGORİLER */}
      <div
        className="all-category"
        onMouseEnter={() => setMenuOpen(true)}
        onMouseLeave={() => {
          // Bu kısım, menü içeriğinden çıkıldığında menünün kapanmasını sağlar.
          // Ancak, dropdown-menu üzerine geçildiğinde kapanmamalı.
          // Genel mouse leave için handleMouseLeaveDropdown kullanılacak.
        }}
      >
        <FiMenu className="menu-icon" />
        <span>TÜM KATEGORİLER</span>

        {menuOpen && (
          <div
            className="dropdown-menu"
            ref={menuRef} // Ref sadece dropdown-menu'ye eklendi
            onMouseLeave={handleMouseLeaveDropdown} // Mouse leave event'i dropdown'a eklendi
          >
            {/* Sol sütun: Ana kategoriler */}
            <div className="menu-column left-column">
              {categories
                .filter((cat) => cat.children && cat.children.length > 0)
                .map((main) => (
                  <div
                    key={main.id}
                    className={`dropdown-item main-category ${hoveredMainCategory?.id === main.id ? 'active' : ''}`}
                    onMouseEnter={() => setHoveredMainCategory(main)}
                  >
                    <span className="icon-left">{categoryIcons[main.name]}</span> {/* categoryIcons'un doğru çalıştığından emin olun */}
                    <span>{main.name}</span>
                    <span className="icon-right">
                      <FaChevronRight />
                    </span>
                  </div>
                ))}
            </div>

            {/* Sağ sütun: Hoverlanan ana kategorinin alt kategorileri */}
            {hoveredMainCategory && (
              <div className="right-columns">
                {/* Trendyol'daki gibi her alt kategoriyi kendi başlığı altında listeleyelim */}
                {hoveredMainCategory.children.map((sub) => (
                  <div key={sub.id} className="column">
                    <div className="column-title">{sub.name}</div>
                    {sub.children && sub.children.length > 0 && ( // Çocukları varsa listeyi göster
                      <ul className="column-items">
                        {sub.children.map((child) => (
                          <li key={child.id}>{child.name}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>

      {/* Sabit kategoriler - Trendyol'daki gibi yatay ve düzenli */}
      <div className="main-category-list"> {/* Yeni bir div ile sarmalandı */}
        {categories.slice(0, 8).map((cat) => ( // İlk 8 kategori gösterilebilir, Trendyol'da sayı daha az.
          <span key={cat.id} className="category-item">
            {cat.name}
          </span>
        ))}
        {/* İsteğe bağlı olarak burada "Daha Fazla" butonu eklenebilir */}
      </div>
    </div>
  );
}

export default CategoryBar;