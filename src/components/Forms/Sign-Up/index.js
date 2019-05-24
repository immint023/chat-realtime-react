import React, { useState } from 'react';

import Input from '../../Input';
import Button from '../../Button';

import './style.css';

export default function SignUpForm({ handleChange, handleClick }) {
  return (
    <div className="Login">
      <form>
        <h1>Sign Up</h1>
        <Input type="text" placeholder="email" handleChange={handleChange} />
        <br />
        <Input
          type="password"
          placeholder="password"
          handleChange={handleChange}
        />
        <br />
        <Input
          value="username"
          placeholder="username"
          handleChange={handleChange}
        />
        <br />
        <Button handleClick={handleClick}>Sign In</Button>
      </form>
    </div>
  );
}
