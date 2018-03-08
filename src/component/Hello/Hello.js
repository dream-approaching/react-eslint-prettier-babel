import React from 'react';

export default class Hello extends React.Component {
  componentWillMount = () => {
    console.log(12963);
  };

  render() {
    return <div>Hello React</div>;
  }
}
