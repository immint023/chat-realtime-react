import React, { useState } from 'react';

import fire from '../config/Fire';

import LoginForm from '../components/Forms/Login';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isError, setError] = useState(false);

  const handleChange = ({ target: { type, value } }) => {
    type === 'text' ? setEmail(value) : setPassword(value);
  };

  const handleClick = () => {
    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(data => console.log(data))
      .catch(() => setError(true));
  };

  return (
    <>
      <LoginForm
        isAlert={isError ? 'alert' : ''}
        handleClick={handleClick}
        handleChange={handleChange}
      />
    </>
  );
}
