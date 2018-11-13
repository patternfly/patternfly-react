import React from 'react';
import { Title } from '@patternfly/react-core';

class TitleSizes extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Title size="4xl">4xl Title</Title>
        <Title size="3xl">3xl Title</Title>
        <Title size="2xl">2xl Title</Title>
        <Title size="xl">xl Title</Title>
        <Title size="lg">lg Title</Title>
        <Title size="md">md Title</Title>
      </React.Fragment>
    );
  }
}

export default TitleSizes;
