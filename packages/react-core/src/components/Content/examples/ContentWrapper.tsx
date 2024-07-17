import React from 'react';
import { Content, ContentVariants } from '@patternfly/react-core';

export const ContentWrapper: React.FunctionComponent = () => (
  <Content>
    <Content component={ContentVariants.p}>
      Content with a component of type "p" still renders the same when wrapped with a TextContent.
    </Content>
    <p>If located within a wrapping TextContent, html elements are styled as well!</p>
  </Content>
);
