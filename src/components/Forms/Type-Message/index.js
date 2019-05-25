import React from 'react';

import { Form, Input, Button } from 'reactstrap';

import './style.css';

function TypeMessageForm({ handleKeyDown, handleClick }) {
  return (
    <>
      <Form className="d-flex mt-3" onSubmit={e => e.preventDefault()}>
        <Input
          type="text"
          onKeyPress={handleKeyDown}
          className="shadow-none"
          placeholder="Type your message"
        />
        <Button
          type="button"
          color="primary"
          className="m-0 ml-3 shadow-none"
          onClick={handleClick}
        >
          Send
        </Button>
      </Form>
    </>
  );
}

export default TypeMessageForm;
