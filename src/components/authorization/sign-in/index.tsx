import { useEffect, useState } from 'react';
import logo from '@assets/logo.png';
import { useSignInMutation } from '../../../__data__/services/auth/index.js';
import { useNavigate } from 'react-router-dom';

export const SignInForm = ({ onToggle }: any) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [signIn, { error }] = useSignInMutation();
  const [isSend, setIsSend] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!error && email.length > 0 && password.length > 0 && isSend) {
      console.log('dadada');
      navigate('/main');
    }
    console.log(email, password);
  }, [error, isSend]);

  const handlerClick = async () => {
    if (email && password) {
      await signIn({ email, password });
      setIsSend(true);
    }
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
            type="email"
            minLength={4}
            className="input-field"
            autoComplete="off"
            required
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="input-wrap">
          <input
            type="password"
            minLength={4}
            className="input-field"
            autoComplete="off"
            required
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
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
