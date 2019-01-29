import { Avatar, AvatarProps, Tabs, Tab } from '@patternfly/react-core';
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavTest from './Nav';

class myProps implements AvatarProps {
  alt: string = 'avatar';
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Avatar src={logo} alt={new myProps().alt} />
          <NavTest />
        </header>
        <Tabs>
          <Tab eventKey={0} title="Tab item 1">
            Tab 1 section
          </Tab>
          <Tab eventKey={1} title="Tab item 2">
            Tab 2 section
          </Tab>
          <Tab eventKey={2} title="Tab item 3">
            Tab 3 section
          </Tab>
        </Tabs>
      </div>
    );
  }
}

export default App;
