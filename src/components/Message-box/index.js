import React, { useRef, useEffect } from 'react';

import fire from '../../config/Fire';
import Message from '../Message';
import './style.css';

export default function MessageBox({ messages }) {
  const uid = fire.auth().currentUser.uid;
  const boxChat = useRef(null);

  useEffect(() => {
    boxChat.current.scrollTo(0, boxChat.current.scrollHeight);
  });

  return (
    <>
      <div className="message-box" ref={boxChat}>
        {messages.map((item, index) => (
          <Message key={index} type={item.uid === uid ? 'send' : 'receive'}>
            {item.text}
          </Message>
        ))}
      </div>
    </>
  );
}
