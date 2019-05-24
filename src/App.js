import React, { Component } from 'react';

import fire from './config/Fire';

import Login from './containers/Login';
// import SignUp from './containers/Sign-Up';
import Chat from './containers/Chat';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
    };
  }

  componentDidMount() {
    this.authListener();
  }

  authListener() {
    fire.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({
          user,
        });
      } else {
        this.setState({
          user: null,
        });
      }
    });
  }
  render() {
    return <>{this.state.user ? <Chat /> : <Login />}</>;
    // return <SignUp />;
  }
}

export default App;
