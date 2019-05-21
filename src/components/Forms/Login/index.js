import React from 'react';

import Input from '../../Input';
import Button from '../../Button';

import './style.css';

export default function LoginForm({ handleChange, handleClick }) {
  return (
    <div className="Login">
      <form>
        <h1>Login Page</h1>
        <Input type="text" placeholder="email" handleChange={handleChange} />
        <br />
        <Input
          type="password"
          placeholder="password"
          handleChange={handleChange}
        />
        <br />
        <Button handleClick={handleClick}>Sign In</Button>
      </form>
    </div>
  );
}
