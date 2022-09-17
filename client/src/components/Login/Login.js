import './Login.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../redux/slices/userSlice';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [visible, setVisible] = useState(false);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleVisibilitySwitch = (e) => {
    setVisible((prev) => !prev);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(
      loginUser({
        body: { username, password },
        successCallback: () => {
          navigate('/');
        },
        failureCallback: () => {
          setUsername('');
          setPassword('');
        },
      })
    );
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleRegister = (e) => {
    navigate('/register');
  };

  return (
    <div className="login__container">
      <h1 className="login__title">Login</h1>
      <form className="login__form" onSubmit={handleSubmit}>
        <div className="login__group">
          <label htmlFor="name">Username</label>
          <input
            name="username"
            type="text"
            value={username}
            placeholder="Enter your username"
            onChange={handleUsernameChange}
          />
        </div>
        <div className="login__group">
          <label htmlFor="password">Password</label>
          <div className="password__group">
            <input
              name="password"
              type={visible ? 'text' : 'password'}
              value={password}
              placeholder="Enter your password"
              onChange={handlePasswordChange}
            />
            <button type="button" onClick={handleVisibilitySwitch}>
              <span className="material-symbols-outlined">{visible ? 'visibility_off' : 'visibility'}</span>
            </button>
          </div>
        </div>
        <button className="button" type="submit">
          Sign In
        </button>
      </form>
      <div className="register__section">
        <span>Don't have an account?</span>
        <button onClick={handleRegister} className="register__button">
          Register
        </button>
      </div>
    </div>
  );
}

export default Login;
