import logo from '../../assets/logo.png';
import './styles.css';

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
