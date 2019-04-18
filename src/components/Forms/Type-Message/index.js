import React from 'react';

import Button from '../../Button';
import Input from '../../Input';

import './style.css';

function TypeMessageForm({ handleKeyDown, handleClick }) {
  return (
    <div>
      <Input
        type="text"
        handleKeyDown={handleKeyDown}
        placeholder="Type your message"
      />
      <Button handleClick={handleClick}>Send</Button>
    </div>
  );
}

export default TypeMessageForm;
