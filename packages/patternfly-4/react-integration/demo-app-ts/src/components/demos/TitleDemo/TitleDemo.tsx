import { Title, TitleLevel, TitleProps } from '@patternfly/react-core';
import React, { Component } from 'react';

const myProps: TitleProps = {
  size: 'md',
  headingLevel: TitleLevel.h1
};

export class TitleDemo extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <React.Fragment>
        <Title size={myProps.size} headingLevel={myProps.headingLevel}>
          Integration Demo App
        </Title>
      </React.Fragment>
    );
  }
}
