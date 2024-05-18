import React, { useState } from 'react';
import './Login.css';

const Login = ({ setIsLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLogin(true);
    setEmail('');
    setPassword('');
  };

  return (
    <div className='container'>
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>
        <div className='input'>
          <label htmlFor='email'>Email:</label>
          <input
            type='email'
            id='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className='input-box'
          />
        </div>
        <div className='input'>
          <label htmlFor='password'>Password:</label>
          <input
            type='password'
            id='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className='input-box'
          />
        </div>
        <button type='submit' className='button'>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
