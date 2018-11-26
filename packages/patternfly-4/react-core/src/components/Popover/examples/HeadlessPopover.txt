import React from 'react';
import {
  PopoverDialog,
  PopoverArrow,
  PopoverContent,
  PopoverCloseButton,
  PopoverHeader,
  PopoverBody
} from '@patternfly/react-core';

class HeadlessPopover extends React.Component {
  constructor(props) {
    super(props);
    this.popoverRef = React.createRef();
    this.outsideRef = React.createRef();
    this.state = { position: 'top', show: true };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClick, false);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClick, false);
  }

  handleClick(event) {
    const node = this.popoverRef && this.popoverRef.current;
    const outside = this.outsideRef && this.outsideRef.current;
    if (!outside || !outside.contains(event.target)) {
      return;
    }
    if (!node || !node.contains(event.target)) {
      this.setState({ show: false });
    }
  }

  render() {
    return (
      <div ref={this.outsideRef} style={{ padding: '50px' }}>
        <div ref={this.popoverRef}>
          {this.state.show && (
            <PopoverDialog position={'top'}>
              <PopoverArrow />
              <PopoverContent>
                <PopoverCloseButton onClose={() => this.setState({ show: false })} />
                <PopoverBody id="headless-popover-body">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id feugiat augue, nec fringilla
                  turpis.
                </PopoverBody>
              </PopoverContent>
            </PopoverDialog>
          )}
        </div>
      </div>
    );
  }
}

export default HeadlessPopover;
