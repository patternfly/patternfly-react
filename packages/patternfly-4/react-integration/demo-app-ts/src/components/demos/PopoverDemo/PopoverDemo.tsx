import { Popover } from '@patternfly/react-core';
import React, { Component } from 'react';

export class PopoverDemo extends Component {
  myPopoverProps = {
    headerContent: <div>Popover Header</div>,
    bodyContent: <div>Popover Body</div>,
    footerContent: 'Popover Footer',
    children: <div id="popoverTarget">Hello</div>
  };

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {

    return (
      <Popover
      headerContent={this.myPopoverProps.headerContent}
      bodyContent={this.myPopoverProps.bodyContent}
      footerContent={this.myPopoverProps.footerContent}
    >
      {this.myPopoverProps.children}
    </Popover>
  );
  };
}
