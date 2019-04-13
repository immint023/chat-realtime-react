import React, { Component } from 'react';

import axios from 'axios';
import io from 'socket.io-client';
import MessageBox from '../components/Message-box';
import Form from '../components/Form';
import Button from '../components/Button';

const socket = io('localhost:3001');

export default class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: []
    };
    this.data = '';
    this.chatBox = React.createRef();
  }

  componentDidMount() {
    axios.get('https://c1c9770a.ngrok.io/messages')
      .then(res => {
        const messages = [];
        for (let key in res.data) {
          messages.push(res.data[key]);
        }
        this.setState({
          messages
        });
      })
      .catch(err => console.error(err));
  }
  componentWillMount() {
    socket.on('send', data => {
      this.setState({
        messages: this.state.messages.concat(data)
      })
    });
  }
  handlePress = (e) => {
    const { messages } = this.state;
    const { value } = document.querySelector('input');
    if (e.keyCode === 13 && value.trim() !== '') {
      socket.emit('send', { text: value });
      axios.post('https://c1c9770a.ngrok.io/messages', {
        text: value
      })
        .then(res => console.log(res))
        .catch(err => console.error(err));
      this.setState({
        messages: messages.concat({ text: value })
      });
      document.querySelector('input').value = '';
    }
  }
  render() {
    const { messages } = this.state;
    return (
      <>
        <MessageBox
          messages={messages}
        />
        <Form
          handlePress={this.handlePress}
        >
          <Button>Send</Button>
        </Form>
      </>
    )
  }
}