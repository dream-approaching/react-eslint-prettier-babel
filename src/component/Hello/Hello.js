import React from 'react';

export default class Hello extends React.Component {
  componentWillMount = () => {
    console.log(123);
  };

  render() {
    return <div>Hello React</div>;
  }
}
