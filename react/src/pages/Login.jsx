import React, { useState } from 'react';

const Login = ({ users }) => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [result, setResult] = useState('');

  function login() {
    if (name === users.username && password === users.password) {
      setResult('login successful');
    } else {
      setResult('login failed');
    }
  }

  return (
    <div>
      <h1>Login Form</h1>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        placeholder="Enter name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      /><br/>
      <label htmlFor="password">Password:</label>
      <input type="password" id="password" placeholder="Enter password" value={password} onChange={(e) => setPassword(e.target.value)}/><br/>
      <button onClick={login}>login</button>
      <h3>{result}</h3>
    </div>
  );
};

export default Login;
