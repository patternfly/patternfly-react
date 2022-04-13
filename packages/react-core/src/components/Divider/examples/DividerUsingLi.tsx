import React from 'react';
import { Divider } from '@patternfly/react-core';

export const DividerUsingLi: React.FunctionComponent<React.PropsWithChildren<unknown>> = () => (
  <ul>
    <li>List item one</li>
    <Divider component="li" />
    <li>List item two</li>
  </ul>
);
