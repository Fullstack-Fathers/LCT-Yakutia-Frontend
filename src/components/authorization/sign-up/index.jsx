import logo from '@assets/logo.png';
import { useState } from 'react';

export const SignUpForm = ({ onToggle }) => {
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
        <h6>Already have an account? </h6>
        <a href="#" className="toggle" onClick={onToggle}>
          Sign in
        </a>
      </div>

      <div className="actual-form">
        <div className="input-wrap">
          <input
            type="text"
            minLength={4}
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
            minLength={4}
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
};
