import React from 'react';

import './style.css';

export default function Message({ type, children }) {
  let divClass;
  if (type === 'send') {
    divClass = 'message-send';
  } else {
    divClass = 'message-receive';
  }
  return (
    <>
      <div className={divClass}>
        <p className={type}>{children}</p>
      </div>
    </>
  );
}
