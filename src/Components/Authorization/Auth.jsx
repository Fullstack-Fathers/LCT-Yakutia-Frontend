import React, { useState, useEffect, useRef } from 'react';
import './Auth.css';
import logo from '../../assets/img/logo.png';
import image1 from '../../assets/img/image1.png';
import image2 from '../../assets/img/image2.png';
import image3 from '../../assets/img/image3.png';



const SignInForm = ({ onToggle }) => {

    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    return (
  <form action="index.html" autoComplete="off">
    <div className="logo">
      <img src={logo} alt="easyclass" />
      <h4>FrontendFather</h4>
    </div>

    <div className="heading">
        <h2>Welcome Back</h2>
        <h6>Not registred yet?</h6>
        <a href="#" className="toggle" onClick={onToggle}>Sign up</a>
      </div>

    <div className="actual-form">
      <div className="input-wrap">
        <input
          type="text"
          minLength="4"
          className="input-field"
          autoComplete="off"
          required
        />
        <label>Name</label>
      </div>

      <div className="input-wrap">
        <input
          type="password"
          minLength="4"
          className="input-field"
          autoComplete="off"
          required
        />
        <label>Password</label>
      </div>

      <input type="submit" value="Sign In" className="sign-btn" />
    </div>
  </form>
    );
}

const SignUpForm = ({ onToggle }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    return (
  <form action="index.html" autoComplete="off">
    <div className="logo">
      <img src={logo} alt="easyclass" />
      <h4>FrontendFather</h4>
    </div>

    <div className="heading">
        <h2>Get Started</h2>
        <h6>Already have an account?</h6>
        <a href="#" className="toggle" onClick={onToggle}>Sign in</a>
      </div>

    <div className="actual-form">
      <div className="input-wrap">
        <input
          type="text"
          minLength="4"
          className="input-field"
          autoComplete="off"
          required
        />
        <label>Name</label>
      </div>

      <div className="input-wrap">
        <input
          type="email"
          className="input-field"
          autoComplete="off"
          required
        />
        <label>Email</label>
      </div>

      <div className="input-wrap">
        <input
          type="password"
          minLength="4"
          className="input-field"
          autoComplete="off"
          required
        />
        <label>Password</label>
      </div>

      <input type="submit" value="Sign Up" className="sign-btn" />
    </div>
  </form>
);
    }

    const Auth = () => {
        const [activeBullet, setActiveBullet] = useState(1);
        const textSliderRef = useRef(null);
        const [isSignUp, setIsSignUp] = useState(false);
      
        useEffect(() => {
          if (textSliderRef.current) {
            textSliderRef.current.style.transform = `translateY(${-(activeBullet - 1) * 2.2}rem)`;
          }
        }, [activeBullet]);
      
        const handleBulletClick = (index) => {
          setActiveBullet(index);
        };

        const handleToggle = (e) => {
            e.preventDefault();
            setIsSignUp(!isSignUp);
          };
      
        return (
            <main className={isSignUp ? 'sign-up-mode' : ''}>
            <div className="box">
              <div className="inner-box">
                <div className="forms-wrap">
                  {isSignUp ? <SignUpForm onToggle={handleToggle} /> : <SignInForm onToggle={handleToggle} />}
                </div>
      
                <div className="carousel">
                  <div className="images-wrapper">
                    <img src={image1} className={`image img-1 ${activeBullet === 1 ? 'show' : ''}`} alt="" />
                    <img src={image2} className={`image img-2 ${activeBullet === 2 ? 'show' : ''}`} alt="" />
                    <img src={image3} className={`image img-3 ${activeBullet === 3 ? 'show' : ''}`} alt="" />
                  </div>
      
                  <div className="text-slider">
                    <div className="text-wrap">
                      <div className="text-group" ref={textSliderRef}>
                        <h2>Найди себе занятие по душе</h2>
                        <h2>Не знаешь чем заниметься?</h2>
                        <h2>Тогда ты по адресу!)</h2>
                      </div>
                    </div>
      
                    <div className="bullets">
                      <span className={activeBullet === 1 ? 'active' : ''} onClick={() => handleBulletClick(1)}></span>
                      <span className={activeBullet === 2 ? 'active' : ''} onClick={() => handleBulletClick(2)}></span>
                      <span className={activeBullet === 3 ? 'active' : ''} onClick={() => handleBulletClick(3)}></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        );
      };
      
      export default Auth;