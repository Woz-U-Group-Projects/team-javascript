import React, { useState, useContext } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { AuthContext } from '../helpers/AuthContext';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { setAuthState } = useContext(AuthContext);

  let history = useHistory();

  const login = () => {
    const data = { username: username, password: password };
    axios.post('http://localhost:3001/users/login', data).then((response) => {
      if (response.data.error) {
        alert(response.data.error);
      } else {
        localStorage.setItem('accessToken', response.data.token);
        setAuthState({
          username: response.data.username,
          id: response.data.id,
          status: true,
        });
        history.push('/');
      }
    });
  };
  return (
    <div className='max-w-md mx-auto mt-20 border py-4 px-8'>
      <div className='loginContainer flex flex-col max-w-md justify-center align-center'>
        <label>Username:</label>
        <input
          type='text'
          className='py-2 my-2 border border rounded'
          onChange={(event) => {
            setUsername(event.target.value);
          }}
        />
        <label>Password:</label>
        <input
          type='password'
          className='py-2 my-2 border border rounded'
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />

        <button
          onClick={login}
          className='bg-blue-900 hover:bg-blue-800 py-2 rounded text-blue-50 mt-2'>
          {' '}
          Login{' '}
        </button>
      </div>
    </div>
  );
}

export default Login;
