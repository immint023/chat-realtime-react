import React, { Component } from 'react';

import fire from '../../config/Fire';
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
    const uid = fire.auth().currentUser.uid;
    return (
      <>
        <h1 className="title">Chat Realtime</h1>
        <div className="message-box" ref={this.boxChat}>
          {messages.map((item, index) => (
            <Message key={index} type={item.uid === uid ? 'send' : 'receive'}>
              {item.text}
            </Message>
          ))}
        </div>
      </>
    );
  }
}
