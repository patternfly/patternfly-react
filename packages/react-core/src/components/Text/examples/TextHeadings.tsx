import React from 'react';
import { TextContent, Text, TextVariants } from '@patternfly/react-core';

export const TextHeadings: React.FunctionComponent = () => (
  <TextContent>
    <Text component={TextVariants.h1}>Hello World</Text>
    <Text component={TextVariants.h2}>Second level</Text>
    <Text component={TextVariants.h3}>Third level</Text>
    <Text component={TextVariants.h4}>Fourth level</Text>
    <Text component={TextVariants.h5}>Fifth level</Text>
    <Text component={TextVariants.h6}>Sixth level</Text>
  </TextContent>
);
