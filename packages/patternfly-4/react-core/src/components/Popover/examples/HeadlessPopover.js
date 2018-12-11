import React from 'react';
import { Popover, Button } from '@patternfly/react-core';

class HeadlessPopover extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    };
  }

  handleClick = () => {
    this.setState({
      show: !this.state.show
    });
  };

  render() {
    return (
      <Popover
        onHidden={() => this.setState({ show: false })}
        position="right"
        isVisible={this.state.show}
        bodyContent={
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id feugiat augue, nec fringilla turpis.
          </div>
        }
      >
        <Button onClick={this.handleClick}>Toggle Popover</Button>
      </Popover>
    );
  }
}

export default HeadlessPopover;
