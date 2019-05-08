import { Title, TitleSize, TitleProps, TitleLevel } from '@patternfly/react-core';
import React, { Component } from 'react';

export class TitleDemo extends Component {
  myTitleProps: TitleProps = {
    size: TitleSize.md,
    headingLevel: TitleLevel.h1
  };

  render() {
    return (
    <React.Fragment>
      <Title size={this.myTitleProps.size} headingLevel={this.myTitleProps.headingLevel}>
        Integration Demo App
      </Title>
    </React.Fragment>
    );
  }
}
