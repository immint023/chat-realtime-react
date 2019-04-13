import React from 'react';

import './style.css';

function Message({ type, children }) {
  return (
    <>
      <div className={type}>
        <p>{children}</p>
      </div>
    </>
  )
};

export default Message;
