import React from 'react';
import './styles.css';
import logo from '../../assets/img/logo.png';

const Header = () => {
  return (
    <div className="header">
      <div className="project-name">Для адаптации</div>
      <div className="header-container">
        <div className="right-cont">
          <div className="notifications">🔔</div>
          <div className="profile">
            <img
              src={logo}
              alt="Profile"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
