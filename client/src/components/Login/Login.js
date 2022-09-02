import './Login.css';
import { FcGoogle } from 'react-icons/fc';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { setUser } from '../../redux/slices/userSlice';
import { useDispatch } from 'react-redux';

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
    const response = await fetch('http://localhost:4000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
        password,
      }),
    });
    if (response.ok) {
      const user = await response.json();
      dispatch(
        setUser({
          username: user.username,
          email: user.email_address,
          fullname: user.full_name,
        })
      );
      navigate('/');
    } else {
      setUsername('');
      setPassword('');
    }
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
            <button onClick={handleVisibilitySwitch}>
              <span className="material-symbols-outlined">{visible ? 'visibility_off' : 'visibility'}</span>
            </button>
          </div>
        </div>
        <button className="button" type="submit">
          Sign In
        </button>
      </form>
      <button className="button google__button">
        Sign in with Google <FcGoogle />
      </button>
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
