import React from 'react';
import {
  Container,
  Row,
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
} from 'reactstrap';

import './style.css';

export default function LoginForm({ handleChange, handleClick, isAlert }) {
  return (
    <div className="Login-form">
      <h1 className="Title">Login Page</h1>
      <form className={isAlert}>
        <Input type="text" placeholder="email" handleChange={handleChange} />
        <br />
        <Input
          type="password"
          placeholder="password"
          handleChange={handleChange}
        />
        <br />
        <Button color="primary">primary</Button>{' '}
      </form>
    </div>
    // <Container>
    //   <Row>
    //     <Col sm="12" md={{ size: 6, offset: 3 }}>
    //       <Form block>
    //         <FormGroup className="m-3 mr-sm-2 mb-sm-0">
    //           <Label for="exampleEmail" hidden>
    //             Email
    //           </Label>
    //           <Input
    //             type="email"
    //             name="email"
    //             id="exampleEmail"
    //             placeholder="Email"
    //           />
    //         </FormGroup>{' '}
    //         <FormGroup className="m-3 mr-sm-2 mb-sm-0">
    //           <Label for="examplePassword" hidden>
    //             Password
    //           </Label>
    //           <Input
    //             type="password"
    //             name="password"
    //             id="examplePassword"
    //             placeholder="Password"
    //           />
    //         </FormGroup>{' '}
    //         <Button onClick={handleClick}>Login</Button>
    //       </Form>
    //     </Col>
    //   </Row>
    // </Container>
  );
}
