import React, { useState, useEffect, useRef } from 'react';

import { Container, Row, Col, Button } from 'reactstrap';
import MessagesBox from '../components/Message-box';
import TypeMessage from '../components/Forms/Type-Message';

import fire from '../config/Fire';

export default function Chat() {
  const [messages, setMessage] = useState([]);

  const messagesDbRef = useRef(fire.database().ref('messages'));
  useEffect(() => {
    messagesDbRef.current.limitToLast(10).on('value', snap => {
      const transformedMessages = Object.values(snap.val());
      setMessage(transformedMessages);
    });

    return () => {
      messagesDbRef.current.off();
    };
  }, []);

  const handleKeyDown = ({ which, target }) => {
    const { value } = target;
    const uid = fire.auth().currentUser.uid;
    const message = {
      text: value,
      uid,
    };
    if (which === 13 && value.trim() !== '') {
      messagesDbRef.current
        .push()
        .set(message)
        .then(() => console.log('sent'))
        .catch(err => console.error(err));

      setMessage(messages.concat(message));
      target.value = '';
    }
  };

  const handleClick = () => {};

  const handleSignOut = () => {
    fire
      .auth()
      .signOut()
      .then(() => console.log('Success'))
      .catch(err => console.error(err));
  };

  return (
    <>
      <Button onClick={handleSignOut}>Log out</Button>
      <Container>
        <Row>
          <Col sm="12" md={{ size: 8, offset: 2 }}>
            <MessagesBox messages={messages} />
            <TypeMessage
              handleKeyDown={handleKeyDown}
              handleClick={handleClick}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
}
