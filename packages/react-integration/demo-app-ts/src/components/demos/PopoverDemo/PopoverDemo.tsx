import { Popover } from '@patternfly/react-core';
import React, { Component } from 'react';

export class PopoverDemo extends Component {
  popoverRef: React.RefObject<HTMLButtonElement>;
  myPopoverProps = {
    headerContent: <div>Popover Header</div>,
    bodyContent: <div>Popover Body</div>,
    footerContent: 'Popover Footer'
  };

  constructor(props: any) {
    super(props);
    this.popoverRef = React.createRef();
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    const { headerContent, bodyContent, footerContent } = this.myPopoverProps;
    return (
      <>
        <Popover headerContent={headerContent} bodyContent={bodyContent} footerContent={footerContent}>
          <button id="popoverTarget">Popover attached to children</button>
        </Popover>
        <div>
          <button id="popover-selector">Popover attached via selector ref</button>
          <Popover
            headerContent={headerContent}
            bodyContent={bodyContent}
            footerContent={footerContent}
            triggerRef={() => document.getElementById('popover-selector')}
          />
        </div>
        <div>
          <button ref={this.popoverRef} id="popover-ref">
            Popover attached via react ref
          </button>
          <Popover
            position="right-start"
            headerContent={headerContent}
            bodyContent={bodyContent}
            footerContent={footerContent}
            triggerRef={this.popoverRef}
          />
        </div>
        <Popover
          id="popover-content-close"
          aria-label="Popover with button in the body that can close it"
          headerContent={<div>Popover header</div>}
          position="right-start"
          bodyContent={(hide) => (
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
        <Popover
          id="popover-right-start"
          aria-label="Diagonal right top"
          headerContent={<div>Popover header</div>}
          bodyContent="I'm right top"
          footerContent="Popover footer"
          position="right-start"
        >
          <button id="popover-right-top-toggle">Toggle Popover</button>
        </Popover>
        <Popover
          id="popover-heading-level"
          aria-label="Popover heading level"
          headerContent={<div>Popover header</div>}
          bodyContent="I have a custom heading level."
          footerContent="Popover footer"
          headerComponent="h1"
          position="auto"
        >
          <button id="popover-heading-level-toggle">Toggle Popover</button>
        </Popover>
      </>
    );
  }
}

export default PopoverDemo;
