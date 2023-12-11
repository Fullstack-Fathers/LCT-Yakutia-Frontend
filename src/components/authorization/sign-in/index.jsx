import logo from '@assets/logo.png';
import { useState } from 'react';
import { useLoginMutation } from '../../../__data__/services/auth/index.js';

export const SignInForm = ({ onToggle }) => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [signIn, { data }] = useLoginMutation();

  const handlerClick = async () => {
    await signIn(name, password);
    
  };

  return (
    <form action="index.html" autoComplete="off">
      <div className="logo">
        <img src={logo} alt="easyclass" />
        <h4>FrontendFather</h4>
      </div>

      <div className="heading">
        <h2>Welcome Back</h2>
        <h6>Not registred yet? </h6>
        <a href="#" className="toggle" onClick={onToggle}>
          Sign up
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
            onChange={(e) => setName(e.target.value)}
          />
          <label>Name</label>
        </div>

        <div className="input-wrap">
          <input
            type="password"
            minLength={4}
            className="input-field"
            autoComplete="off"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
          <label>Password</label>
        </div>

        <input
          type="button"
          value="Sign In"
          className="sign-btn"
          onClick={handlerClick}
        />
      </div>
    </form>
  );
};
