import React, { Component } from 'react';

export default class extends Component {
  state = {
    count: 0,
  };

  handleClick = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  render() {
    return (
      <div>
        this is home~ <br />
        当前计数: {this.state.count} <br />
        <button onClick={this.handleClick}>增加1</button>
      </div>
    );
  }
}
