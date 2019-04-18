import React, { Component } from 'react';

import Message from '../Message';
import './style.css';

export default class MessageBox extends Component {
  constructor(props) {
    super(props);
    this.boxChat = React.createRef();
  }
  componentDidUpdate() {
    this.boxChat.current.scrollTo(0, this.boxChat.current.scrollHeight);
  }
  render() {
    const { messages } = this.props;
    return (
      <>
        <h1 className="title">Chat Realtime</h1>
        <div className="message-box" ref={this.boxChat}>
          {messages.map((item, index) => (
            <Message key={index} type={'send'}>
              {item.text}
            </Message>
          ))}
        </div>
      </>
    );
  }
}
