import { Title,  TitleLevel } from '@patternfly/react-core';
import React, { Component } from 'react';

export class TitleDemo extends Component {
  render() {
    return (
    <React.Fragment>
      <Title size={'md'} headingLevel={TitleLevel.h1}>
        Integration Demo App
      </Title>
    </React.Fragment>
    );
  }
}
