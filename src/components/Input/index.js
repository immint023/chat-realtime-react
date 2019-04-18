import React from 'react';

import './style.css';

export default function Input({ type, placeholder, handleKeyDown }) {
  return (
    <>
      <input type={type} placeholder={placeholder} onKeyDown={handleKeyDown} />
    </>
  );
}
