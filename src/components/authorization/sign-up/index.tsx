import logo from '@assets/logo.png';
import { useEffect, useState } from 'react';
import { useSignUpMutation } from '../../../__data__/services/auth';
import { useNavigate } from 'react-router-dom';

export const SignUpForm = ({ onToggle }: any) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [signUp, { error }] = useSignUpMutation();
  const [isSend, setIsSend] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (
      !error &&
      email.length > 0 &&
      name.length > 0 &&
      password.length > 0 &&
      isSend
    ) {
      navigate('/main');
    }
  }, [error, isSend]);

  const handlerClick = async () => {
    if (name && email && password) {
      await signUp({
        email,
        name,
        password,
      });
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
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="input-wrap">
          <input
            type="email"
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
          value="Sign Up"
          className="sign-btn"
          onClick={handlerClick}
        />
      </div>
    </form>
  );
};
