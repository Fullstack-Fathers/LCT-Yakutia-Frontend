import logo from '../../assets/logo.png';
import './styles.css';

const Header: React.FC = () => {
 return (
   <header className="header-outer">
     <div className="header-inner responsive-wrapper">
       <div className="header-logo">
         <img src={logo} alt="Logo" />
         <h1>FULLSTACK FATHER</h1>
       </div>
       <nav className="header-navigation">
         <a href="#">Home</a>
         <a href="#">Test</a>
         <a href="#">Recomendation</a>
         <a href="#">Contact Us</a>
         <button>Menu</button>
       </nav>
     </div>
   </header>
 );
}

export default Header;
