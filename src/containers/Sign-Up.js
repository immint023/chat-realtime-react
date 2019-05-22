import React, { Component } from 'react';

import fire from '../config/Fire';

import SignUpForm from '../components/Forms/Sign-Up';

export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      username: '',
    };
  }
  handleChange = ({ target }) => {
    const { placeholder, value } = target;
    switch (placeholder) {
      case 'email':
        this.setState({
          email: value,
          password: this.state.password,
          username: this.state.username,
        });
        break;
      case 'password':
        this.setState({
          email: this.state.email,
          password: value,
          username: this.state.username,
        });
        break;
      default:
        this.setState({
          email: this.state.email,
          password: this.state.password,
          username: value,
        });
    }
  };
  handleClick = () => {
    const { email, password, username } = this.state;
    fire
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(data =>
        fire
          .database()
          .ref('/users/' + data.user.uid)
          .set({
            username,
            email,
            password,
          }),
      )
      .catch(err => console.error(err));
  };
  render() {
    return (
      <>
        <SignUpForm
          handleClick={this.handleClick}
          handleChange={this.handleChange}
        />
      </>
    );
  }
}
