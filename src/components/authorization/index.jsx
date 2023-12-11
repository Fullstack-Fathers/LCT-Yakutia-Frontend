import image1 from '@assets/image1.png';
import image2 from '@assets/image2.png';
import image3 from '@assets/image3.png';

import { useEffect, useRef, useState } from 'react';
import './auth.css';
import { SignInForm } from './sign-in/index.jsx';
import { SignUpForm } from './sign-up/index.jsx';

export const Auth = ({ isSignIn = true }) => {
  const [activeBullet, setActiveBullet] = useState(1);
  const textSliderRef = useRef(null);
  const [isSignUp, setIsSignUp] = useState(!isSignIn);

  useEffect(() => {
    if (textSliderRef.current) {
      textSliderRef.current.style.transform = `translateY(${
        -(activeBullet - 1) * 2.2
      }rem)`;
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
            {isSignUp ? (
              <SignUpForm onToggle={handleToggle} />
            ) : (
              <SignInForm onToggle={handleToggle} />
            )}
          </div>

          <div className="carousel">
            <div className="images-wrapper">
              <img
                src={image1}
                className={`image img-1 ${activeBullet === 1 ? 'show' : ''}`}
                alt=""
              />
              <img
                src={image2}
                className={`image img-2 ${activeBullet === 2 ? 'show' : ''}`}
                alt=""
              />
              <img
                src={image3}
                className={`image img-3 ${activeBullet === 3 ? 'show' : ''}`}
                alt=""
              />
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
                <span
                  className={activeBullet === 1 ? 'active' : ''}
                  onClick={() => handleBulletClick(1)}
                ></span>
                <span
                  className={activeBullet === 2 ? 'active' : ''}
                  onClick={() => handleBulletClick(2)}
                ></span>
                <span
                  className={activeBullet === 3 ? 'active' : ''}
                  onClick={() => handleBulletClick(3)}
                ></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
