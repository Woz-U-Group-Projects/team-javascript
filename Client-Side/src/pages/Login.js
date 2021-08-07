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
    axios.post('http://localhost:3001/auth/login', data).then((response) => {
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
    <span className="span1">
    <div className='box'>
      <div className='loginContainer flex flex-col max-w-md justify-center align-center'>
        
        <input
          type='text'
          className='username1'
          placeholder='Username'
          onChange={(event) => {
            setUsername(event.target.value);
          }}
        />
        
        <input
          type='password'
          className='password1'
          placeholder='Password'
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
        

        <button
          className='submit1'
          onClick={login}
          >
          {' '}
          Login{' '}
        </button>
      </div>
    </div>
    </span>
  );
}

export default Login;
