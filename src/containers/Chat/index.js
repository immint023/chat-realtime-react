import React, { Component } from 'react';

import axios from 'axios';
import Message from '../../components/Message';
import Form from '../../components/Form';
import './style.css';

import io from 'socket.io-client';
const socket = io('localhost:3001');

class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: []
    };
    this.data = '';
    this.chatBox = React.createRef();
  }

  componentDidMount() {
    axios.get('https://ce9091a6.ngrok.io/messages')
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
  componentDidUpdate() {
    this.chatBox.current.scrollTo(0, 3000);
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
      axios.post('https://ce9091a6.ngrok.io/messages', {
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
        <div className="container">
          <h1 className="title">Chat Realtime</h1>
          <div className="message-box" ref={this.chatBox}>
            {messages.map((item, index) => <Message key={index} type={'send'}>{item.text}</Message>)}
          </div>
          <Form
            handleChanges={this.handleChanges}
            handlePress={this.handlePress}
          />
        </div>
      </>
    )
  }
};

export default Chat;