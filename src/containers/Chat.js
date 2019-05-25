import React, { useState, useEffect, useRef } from 'react';

import fire from '../config/Fire';
import MessageBox from '../components/Message-box';
import TypeMessageForm from '../components/Forms/Type-Message';
import Button from '../components/Button';

export default function Chat() {
  let [messages, setMessage] = useState([]);

  const messagesDbRef = useRef(fire.database().ref('messages'));
  useEffect(() => {
    messagesDbRef.current.limitToLast(10).on('child_added', snap => {
      messages = messages.concat(snap.val());
      setMessage(messages);
    });
  }, []);

  const handleKeyDown = e => {
    const uid = fire.auth().currentUser.uid;
    const value = document.querySelector('input').value;
    const message = {
      text: value,
      uid,
    };
    if (e.keyCode === 13 && value.trim() !== '') {
      messagesDbRef.current
        .push()
        .set(message)
        .then(() => console.log('sent'))
        .catch(err => console.error(err));

      setMessage(messages.concat(message));
      document.querySelector('input').value = '';
    }
  };

  const handleSignOut = () => {
    fire
      .auth()
      .signOut()
      .then(() => console.log('Success'))
      .catch(err => console.error(err));
  };

  return (
    <>
      <Button handleClick={handleSignOut}>Log out</Button>
      <MessageBox messages={messages} />
      <TypeMessageForm handleKeyDown={handleKeyDown} />
    </>
  );
}
