import React, { Component } from 'react';

import axios from 'axios';
import Cookies from 'universal-cookie';

import LoginForm from '../components/Forms/Login';

export default class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }
  handleChange = ({ target }) => {
    if (target.type === 'text') {
      this.setState({
        email: target.value,
        password: this.state.password,
      });
    } else {
      this.setState({
        email: this.state.email,
        password: target.value,
      });
    }
  };
  handleClick = () => {
    axios
      .post('https://ecd74bab.ngrok.io/api/auth/login', {
        email: this.state.email,
        password: this.state.password,
      })
      .then(res => {
        console.log(res.data);
      })
      .catch(err => {
        console.log(err.response);
      });
  };
  render() {
    return (
      <>
        <LoginForm
          handleClick={this.handleClick}
          handleChange={this.handleChange}
        />
      </>
    );
  }
}
