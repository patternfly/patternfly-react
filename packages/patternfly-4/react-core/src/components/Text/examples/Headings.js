import React from 'react';
import { TextContent, Text, TextVariants } from '@patternfly/react-core';

class Headings extends React.Component {
  render() {
    return (
      <TextContent>
        <Text component={TextVariants.h1}>Hello World</Text>
        <Text component={TextVariants.h2}>Second level</Text>
        <Text component={TextVariants.h3}>Third level</Text>
        <Text component={TextVariants.h4}>Fourth level</Text>
        <Text component={TextVariants.h5}>Fifth level</Text>
        <Text component={TextVariants.h6}>Sixth level</Text>
      </TextContent>
    );
  }
}

export default Headings;
