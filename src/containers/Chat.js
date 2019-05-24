import React, { Component } from 'react';

import fire from '../config/Fire';
import MessageBox from '../components/Message-box';
import TypeMessageForm from '../components/Forms/Type-Message';

export default class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
    };
  }

  componentDidMount() {
    fire
      .database()
      .ref('/messages/')
      .once('value')
      .then(data => console.log(data.val()));
    fire
      .database()
      .ref('/messages/')
      .on('child_added', snap => {
        console.log(snap.val());
        this.setState({
          messages: this.state.messages.concat(snap.val()),
        });
      });
  }

  handleKeyDown = e => {
    const { value } = document.querySelector('input');
    const uid = fire.auth().currentUser.uid;
    if (e.keyCode === 13 && value.trim() !== '') {
      const { messages } = this.state;
      fire
        .database()
        .ref('/messages/')
        .push()
        .set({
          text: value,
          uid,
        })
        .then(() => console.log('sent'))
        .catch(err => console.error(err));

      this.setState({
        messages: messages.concat({ text: value, uid }),
      });
      document.querySelector('input').value = '';
    }
  };
  handleSignOut = () => {
    fire
      .auth()
      .signOut()
      .then(() => console.log('Success'))
      .catch(err => console.error(err));
  };
  render() {
    const { messages } = this.state;
    return (
      <>
        <button
          style={{
            float: 'right',
            width: '70px',
            height: '70px',
            borderRadius: '50%',
            margin: '10px',
          }}
          onClick={this.handleSignOut}
        >
          Log out
        </button>
        <MessageBox messages={messages} />
        <TypeMessageForm handleKeyDown={this.handleKeyDown} />
      </>
    );
  }
}
