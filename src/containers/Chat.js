import React, { Component } from 'react';

import axios from 'axios';
import io from 'socket.io-client';
import MessageBox from '../components/Message-box';
import TypeMessageForm from '../components/Forms/Type-Message';

const socket = io('localhost:3001');

export default class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
    };
    this.data = '';
    this.chatBox = React.createRef();
  }

  componentDidMount() {
    axios
      .get('https://4bacb0c3.ngrok.io/api/messages')
      .then(res => {
        const messages = [];
        for (let key in res.data) {
          messages.push(res.data[key]);
        }
        this.setState({
          messages,
        });
      })
      .catch(err => console.error(err));
  }
  componentWillMount() {
    socket.on('send', data => {
      this.setState({
        messages: this.state.messages.concat(data),
      });
    });
  }
  handleKeyDown = e => {
    const { value } = document.querySelector('input');
    if (e.keyCode === 13 && value.trim() !== '') {
      const { messages } = this.state;
      socket.emit('send', { text: value });
      axios
        .post('https://4bacb0c3.ngrok.io/api/messages', {
          text: value,
        })
        .then(res => console.log(res))
        .catch(err => console.error(err));
      this.setState({
        messages: messages.concat({ text: value }),
      });
      document.querySelector('input').value = '';
    }
  };
  render() {
    const { messages } = this.state;
    return (
      <>
        <MessageBox messages={messages} />
        <TypeMessageForm handleKeyDown={this.handleKeyDown} />
      </>
    );
  }
}
