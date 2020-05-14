import { Title, TitleSizes } from '@patternfly/react-core';
import React, { Component } from 'react';

export class TitleDemo extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <React.Fragment>
        <Title headingLevel="h1" id="example1">
          h1 default to 2xl
        </Title>
        <Title headingLevel="h2" id="example2">
          h2 defaults to xl
        </Title>
        <Title headingLevel="h3" id="example3">
          h3 defaults to lg
        </Title>
        <Title headingLevel="h4" id="example4">
          h4 defaults to md
        </Title>
        <Title headingLevel="h5" id="example5">
          h5 defaults to md
        </Title>
        <Title headingLevel="h6" id="example6">
          h6 defaults to md
        </Title>
        <Title size="md" headingLevel="h2" id="example7">
          Overrides default h2 size of "xl" to "md"
        </Title>
        <Title size={TitleSizes['4xl']} headingLevel="h3" id="example8">
          Setting title size to "4xl" using TitleSizes
        </Title>
      </React.Fragment>
    );
  }
}
