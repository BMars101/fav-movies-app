import React, { useState } from 'react';
import axios from 'axios';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('https://movie-api11.herokuapp.com/login', {
      Username: username,
      Password: password
    })
      .then(response => {
        const data = response.data;
        props.onLoggedIn(data);
      })
      .catch(e => {
        alert('no such user');
      })
  }
  return (
    <form>
      <label>Username:</label>
      <input
        type="text"
        value={username}
        onChange={e => setUsername(e.target.value)} />
      <label>Password:</label>
      <input
        type="password"
        value={password}
        onChange={e => setPassword(e.target.value)} />
      <button type="submit" onClick={handleSubmit}>Login</button>
    </form>
  )
}

export default Login