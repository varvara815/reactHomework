import React from 'react';

import UiButton from '../ui/button';

import './login.css';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebase';

import { LoginProps } from '../../../custom';

const Login = ({ onSuccessfulSubmit }: LoginProps) => {
  const [email, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const handleReset = () => {
    setUsername('');
    setPassword('');
  };

  const handleSubmit = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      console.log('User submitted: ', userCredential);
      onSuccessfulSubmit?.();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className='login-title-container'>
        <h2 className='login-title'>Log in</h2>
      </div>

      <form
        className='login'
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <div className='username-container'>
          <label className='label-username' htmlFor='username'>
            User name
          </label>
          <input
            className='input-username'
            type='email'
            value={email}
            onChange={(e) => setUsername(e.target.value)}
            id='username'
            placeholder='Enter email'
            required
            pattern='.+@.+\..+'
            title='Please, enter a valid email'
            autoComplete='username'
          />
        </div>
        <div className='password-container'>
          <label className='label-password' htmlFor='password'>
            Password
          </label>
          <input
            className='input-password'
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            id='password'
            placeholder='Enter password'
            required
            autoComplete='current-password'
            minLength={8}
            pattern='^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{8,}$'
            title='The password must contain at least 8 characters, including english letters and numbers.'
          />
        </div>
        <div className='login-buttons-container'>
          <UiButton text='Submit' type='submit' size='submit' />
          <UiButton
            text='Cancel'
            type='inactive'
            size='cancel'
            onClick={handleReset}
          />
        </div>
      </form>
    </>
  );
};

export default Login;
