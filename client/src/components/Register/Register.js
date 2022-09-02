import './Register.css';
import { FcGoogle } from 'react-icons/fc';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUser } from '../../redux/slices/userSlice';

function Register() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [visible, setVisible] = useState(false);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleVisibilitySwitch = (e) => {
    setVisible((prev) => !prev);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:4000/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
        email_address: email,
        password,
        full_name: fullname,
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
      setEmail('');
      setFullname('');
    }
  };

  const handleInputChange = (e) => {
    switch (e.target.name) {
      case 'username':
        setUsername(e.target.value);
        break;
      case 'password':
        setPassword(e.target.value);
        break;
      case 'email':
        setEmail(e.target.value);
        break;
      case 'fullname':
        setFullname(e.target.value);
        break;
    }
  };

  const handleLogin = (e) => {
    navigate('/login');
  };

  return (
    <div className="login__container">
      <h1 className="login__title">Register</h1>
      <form className="login__form" onSubmit={handleSubmit}>
        <div className="login__group">
          <label htmlFor="name">Username</label>
          <input
            name="username"
            type="text"
            value={username}
            placeholder="Enter your username"
            onChange={handleInputChange}
          />
        </div>
        <div className="login__group">
          <label htmlFor="email">Email Address</label>
          <input
            name="email"
            type="text"
            value={email}
            placeholder="Enter your email address"
            onChange={handleInputChange}
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
              onChange={handleInputChange}
            />
            <button onClick={handleVisibilitySwitch}>
              <span className="material-symbols-outlined">{visible ? 'visibility_off' : 'visibility'}</span>
            </button>
          </div>
        </div>
        <div className="login__group">
          <label htmlFor="fullname">Full Name</label>
          <input
            name="fullname"
            type="text"
            value={fullname}
            placeholder="Enter your full name"
            onChange={handleInputChange}
          />
        </div>
        <button className="button" type="submit">
          Register
        </button>
      </form>
      <button className="button google__button">
        Register with Google <FcGoogle />
      </button>
      <div className="register__section">
        <span>Already have an account?</span>
        <button onClick={handleLogin} className="register__button">
          Sign In
        </button>
      </div>
    </div>
  );
}

export default Register;
