import { Popover, PopoverProps} from '@patternfly/react-core';
import React, { Component } from 'react';
export class PopoverDemo extends Component {
  myPopoverProps: PopoverProps = {
    bodyContent: <div>World</div>,
    children: <div>Hello</div>
  };

  render = () => {
    return <Popover bodyContent={this.myPopoverProps.bodyContent}>
      {this.myPopoverProps.children}
    </Popover>;
  };
}
