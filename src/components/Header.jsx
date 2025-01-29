/*import React from 'react';
import { Link } from 'react-router-dom';
import youtubeLogo from '../assets/youtube-logo.jpg'; // Asegúrate de que la ruta sea correcta
import bannerImage from '../assets/Banner.jpg'; // Añade la ruta a la imagen del banner

const Header = () => {
  return (
<header>
  <div className="banner">
    <img src={bannerImage} alt="Banner del Canal" className="banner-image" />
  </div>
  <div className="header-content">
    <nav>
      <ul>
        <li><Link to="/">Videos</Link></li>
        <li><Link to="/products">Productos</Link></li>
      </ul>
    </nav>
    <img src={youtubeLogo} alt="YouTube Logo" className="youtube-logo" />
  </div>
</header>

  );
};

export default Header;
*/

import React from 'react';
import { Link } from 'react-router-dom';
import youtubeLogo from '../assets/youtube-logo.jpg';
import bannerImage from '../assets/Banner.jpg';

const Header = ({ openCartModal }) => {
  return (
    <header>
      <div className="banner">
        <img src={bannerImage} alt="Banner del Canal" className="banner-image" />
      </div>
      <div className="header-content">
        <nav>
          <ul>
            <li><Link to="/">Videos</Link></li>
            <li><Link to="/products">Productos</Link></li>
            <li>
              <a href="#" onClick={(e) => { e.preventDefault(); openCartModal(); }}>
                <i className="fas fa-shopping-cart"></i>
              </a>
            </li>
          </ul>
        </nav>
        <img src={youtubeLogo} alt="YouTube Logo" className="youtube-logo" />
      </div>
    </header>
  );
};

export default Header;
