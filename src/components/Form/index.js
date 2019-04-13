import React, { Component } from 'react';
import './style.css';

class Form extends Component {
  render() {
    const { handleChanges, handlePress, children } = this.props;
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
          {children}
        </div>
      </>
    )
  }
};

export default Form;