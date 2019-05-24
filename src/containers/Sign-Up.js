import React, { useState } from 'react';

import fire from '../config/Fire';

import SignUpForm from '../components/Forms/Sign-Up';

export default function SignUp() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target }) => {
    const { placeholder, value } = target;
    switch (placeholder) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        setUsername(value);
    }
  };
  const handleClick = () => {
    fire
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(data =>
        fire
          .database()
          .ref('/users/' + data.user.uid)
          .set({
            username,
            email,
            password,
          }),
      )
      .catch(err => console.error(err));
  };

  return (
    <>
      <SignUpForm handleClick={handleClick} handleChange={handleChange} />
    </>
  );
}
