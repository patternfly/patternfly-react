import { Avatar, AvatarProps, Tooltip, Popover } from '@patternfly/react-core';
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavTest from './Nav';

class myProps implements AvatarProps {
  alt: string = "avatar";
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Avatar src={logo} alt={new myProps().alt} />
          <Tooltip content={<div>World</div>}><div>Hello</div></Tooltip>
          <Popover bodyContent={<div>World</div>}><div>Hello</div></Popover>
          <NavTest />
        </header>
      </div>
    );
  }
}

export default App;
