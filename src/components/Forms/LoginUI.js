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
  Alert,
} from 'reactstrap';

export default function LoginForm({
  handleChange,
  handleClick,
  handleFocus,
  isError,
}) {
  return (
    <Container>
      <Row className="mt-5">
        <Col sm="12" md={{ size: 6, offset: 3 }}>
          <Form block="true">
            <FormGroup className="m-3 mr-sm-2 mb-sm-0">
              <Label for="exampleEmail" hidden>
                Email
              </Label>
              <Input
                type="email"
                name="email"
                id="exampleEmail"
                placeholder="Email"
                className="shadow-none"
                onChange={handleChange}
                onFocus={handleFocus}
              />
            </FormGroup>
            <FormGroup className="m-3 mr-sm-2 mb-sm-0">
              <Label for="examplePassword" hidden>
                Password
              </Label>
              <Input
                type="password"
                name="password"
                id="examplePassword"
                className="shadow-none"
                placeholder="Password"
                onChange={handleChange}
                onFocus={handleFocus}
              />
            </FormGroup>
            <Button
              className="shadow-none mt-3"
              color="primary"
              onClick={handleClick}
            >
              Login
            </Button>
          </Form>
          {isError ? (
            <Alert className="mt-3" color="danger">
              Email or password is not correct !
            </Alert>
          ) : (
            ''
          )}
        </Col>
      </Row>
    </Container>
  );
}
