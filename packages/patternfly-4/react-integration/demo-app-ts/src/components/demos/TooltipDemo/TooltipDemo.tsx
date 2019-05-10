import { Tooltip, TooltipProps } from '@patternfly/react-core';
import React, { Component } from 'react';

const myProps: TooltipProps = {
  content: <div>World</div>,
  children: <div>Hello</div>
};

export class TooltipDemo extends Component {
  render() {
    return (
      <Tooltip content={myProps.content}>
        {myProps.children}
      </Tooltip>
    );
  };
}
