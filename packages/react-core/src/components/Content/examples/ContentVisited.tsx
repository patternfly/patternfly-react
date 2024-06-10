import React from 'react';
import { Content } from '@patternfly/react-core';

export const ContentVisited: React.FunctionComponent = () => (
  <>
    <Content component="h5">Link with isVisitedLink prop</Content>
    <p>
      <Content component="a" isVisitedLink href="#">
        Click to visit link
      </Content>
    </p>
    <br />
    <Content component="h5">Links wrapped in Content with isVisitedLink prop</Content>
    <Content component="ul" isVisitedLink>
      <li>
        <a href="#1">Content link 1</a>
      </li>
      <li>
        <a href="#2">Content link 2</a>
      </li>
      <li>
        <a href="#3">Content link 3</a>
      </li>
    </Content>
  </>
);
