import React from 'react';
import { Content } from '@patternfly/react-core';

export const ContentVisited: React.FunctionComponent = () => (
  <>
    <Content>
      <h5>Link with isVisitedLink prop</h5>
      <p>
        <Content component="a" isVisitedLink href="#">
          Click to visit link
        </Content>
      </p>
    </Content>
    <br />
    <Content isVisitedLink>
      <h5>Links wrapped in Content with isVisitedLink prop</h5>
      <ul>
        <li>
          <a href="#1">Content link 1</a>
        </li>
        <li>
          <a href="#2">Content link 2</a>
        </li>
        <li>
          <a href="#3">Content link 3</a>
        </li>
      </ul>
    </Content>
  </>
);
