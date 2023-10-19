import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loginUser } from '../features/userSlice';
import { Link, useNavigate } from 'react-router-dom';
import '../components/LoginForm.css';

const LoginForm = () => {
  const registeredUsers = useSelector((state) => state.user.registeredUsers);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({});
  const [loginMessage, setLoginMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: '' });
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.email) {
      newErrors.email = 'Email is required';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      const matchingUser = registeredUsers.find(
        (user) => user.email === formData.email && user.password === formData.password
      );

      if (matchingUser) {
        setLoginMessage('Login successful for user: ' + matchingUser.email);
        dispatch(loginUser(matchingUser));
        navigate('/rendigital');
      } else {
        setLoginMessage('Invalid credentials');
      }
    }
  };

  return (
    <div>
      <h1 className='Name'>Digital-WindFarm</h1>
    <div className="login-form">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
        />
        {errors.email && <span className="error">{errors.email}</span>}
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Password"
        />
        {errors.password && <span className="error">{errors.password}</span>}
        <button type="submit">Login</button>
      </form>
      <p>
        {loginMessage && <div className="login-message">{loginMessage}</div>}
        Don't have an account? <Link to="/registration">Register here</Link>
      </p>
    </div>
    </div>
  );
};

export default LoginForm;
