import { Popover, PopoverTriggers } from '@patternfly/react-core';
import React, { Component } from 'react';

const PopoverTriggerDemo = ({children, headerContent, bodyContent, footerContent}) => (
      <Popover
        headerContent={headerContent}
        bodyContent={bodyContent}
        footerContent={footerContent}
        triggers={[PopoverTriggers.focus]}
      >
        {children}
      </Popover>
)

export class PopoverDemo extends Component {
  myPopoverProps = {
    headerContent: <div>Popover Header</div>,
    bodyContent: <div>Popover Body</div>,
    footerContent: 'Popover Footer',
    children: <div id="popoverTarget">Hello</div>,
    triggerDemoChildren: <div id="popoverTriggerTarget">Focus me</div>
  };

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <>
      <Popover
        headerContent={this.myPopoverProps.headerContent}
        bodyContent={this.myPopoverProps.bodyContent}
        footerContent={this.myPopoverProps.footerContent}
      >
        {this.myPopoverProps.children}
      </Popover>
      <PopoverTriggerDemo 
        headerContent={this.myPopoverProps.headerContent}
        bodyContent={this.myPopoverProps.bodyContent}
        footerContent={this.myPopoverProps.footerContent}
      >
        {this.myPopoverProps.triggerDemoChildren}
      </PopoverTriggerDemo>
      </>
    );
  }
}
