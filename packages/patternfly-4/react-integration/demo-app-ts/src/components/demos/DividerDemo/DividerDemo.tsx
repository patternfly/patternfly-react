import React from 'react';
import { Divider } from '@patternfly/react-core';

export class DividerDemo extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <React.Fragment>
        <Divider/>

        <ul>
          <li>List item one</li>
          <Divider component="li"/>
          <li>List item two</li>
        </ul>

        <Divider component="div"/>
      </React.Fragment>
    );
  }
}
