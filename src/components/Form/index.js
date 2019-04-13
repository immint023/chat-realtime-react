import React, { Component } from 'react';
import './style.css';

class Form extends Component {
  render() {
    const { handleChanges, handlePress } = this.props;
    return (
      <>
        <div className="form">
          <input
            autoFocus
            type="text"
            placeholder="Type Message" 
            onChange={handleChanges}
            onKeyDown={handlePress}
          />
          <button type="button">Send</button>
        </div>
      </>
    )
  }
};

export default Form;