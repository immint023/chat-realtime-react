import React, { useState } from 'react';

import fire from '../config/Fire';
import LoginForm from '../components/Forms/LoginUI';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isError, setError] = useState(false);

  const handlechange = ({ target: { type, value } }) => {
    type === 'email' ? setEmail(value) : setPassword(value);
  };

  const handleFocus = () => setError(false);

  const handleClick = () => {
    setError(false);
    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(data => console.log(data))
      .catch(err => {
        console.log(err);
        setError(true);
      });
  };

  return (
    <>
      <LoginForm
        handleChange={handlechange}
        handleFocus={handleFocus}
        handleClick={handleClick}
        isError={isError}
      />
    </>
  );
}
