import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import Cookies from 'universal-cookie';
import LoginPage from './containers/Login';
import Chat from './containers/Chat';

import './App.css';

// const cookies = new Cookies();

// function AuthCookie() {
//   const cookie = cookies.get('jwt');
//   if (!cookie) {
//     return false;
//   }
// }

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Chat} />
            <Route path="/login" component={LoginPage} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
