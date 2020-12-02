import { Popover } from '@patternfly/react-core';
import React, { Component } from 'react';
import { Instance as TippyInstance } from '@patternfly/react-core/dist/js/helpers/Popper/DeprecatedTippyTypes';

export class PopoverDemo extends Component {
  popoverRef: React.RefObject<HTMLButtonElement>;
  myPopoverProps = {
    headerContent: <div>Popover Header</div>,
    bodyContent: <div>Popover Body</div>,
    footerContent: 'Popover Footer',
    children: <div id="popoverTarget">Hello</div>
  };

  constructor(props: any) {
    super(props);
    this.popoverRef = React.createRef();
  }

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
        <Popover
          bodyContent="test deprecated props"
          tippyProps={{ duration: 0, delay: 0 }}
          shouldClose={(tip: TippyInstance) => !tip}
        >
          <button>Trigger</button>
        </Popover>
        <div>
          <button id="popover-selector">Popover attached via selector ref</button>
          <Popover
            headerContent={this.myPopoverProps.headerContent}
            bodyContent={this.myPopoverProps.bodyContent}
            footerContent={this.myPopoverProps.footerContent}
            reference={() => document.getElementById('popover-selector')}
          />
        </div>
        <div>
          <button ref={this.popoverRef} id="popover-ref">
            Popover attached via react ref
          </button>
          <Popover
            headerContent={this.myPopoverProps.headerContent}
            bodyContent={this.myPopoverProps.bodyContent}
            footerContent={this.myPopoverProps.footerContent}
            reference={this.popoverRef}
          />
        </div>
        <Popover
          id="popover-content-close"
          aria-label="Popover with button in the body that can close it"
          headerContent={<div>Popover header</div>}
          bodyContent={hide => (
            <div>
              <div>
                All the content props (headerContent, bodyContent, footerContent) can take a function which the Popover
                component passes the hide function to which can be used to close the Popover after some user
                interaction.
              </div>
              <div>
                <button id="popover-content-close-btn" onClick={hide}>
                  Close popover
                </button>
              </div>
            </div>
          )}
          footerContent="Popover footer"
        >
          <button id="popover-content-close-toggle">Toggle Popover</button>
        </Popover>
      </>
    );
  }
}
