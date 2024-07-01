import React from 'react';
import { TextContent, Text, TextVariants } from '@patternfly/react-core';

export const ContentWrapper: React.FunctionComponent = () => (
  <TextContent>
    <Text component={TextVariants.p}>
      Text with a component of type "p" still renders the same when wrapped with a TextContent.
    </Text>
    <p>If located within a wrapping TextContent, html elements are styled as well!</p>
  </TextContent>
);
