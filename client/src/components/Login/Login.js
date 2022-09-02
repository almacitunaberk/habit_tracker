import './Login.css';
import { FcGoogle } from 'react-icons/fc';
import { useState, usePassword } from 'react';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [visible, setVisible] = useState(false);

  const handleVisibilitySwitch = (e) => {
    setVisible((prev) => !prev);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUsername();
    setPassword();
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
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
    </div>
  );
}

export default Login;
