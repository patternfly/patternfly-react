import React from 'react';
import { Content } from '@patternfly/react-core';

export const ContentWrapper: React.FunctionComponent = () => (
  <Content>
    <Content component="p">
      Content with a component of type "p" still renders the same when wrapped with a parent Content.
    </Content>
    <p>If located within a wrapping Content, html elements are styled as well!</p>
    <h6>This h6 html element is also styled, because it is inside Content.</h6>
    <blockquote>And this blockquote too!</blockquote>
  </Content>
);
