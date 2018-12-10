import React from 'react';
import { PopoverDialog, Checkbox, Button } from '@patternfly/react-core';

class SimplePopover extends React.Component {
  constructor(props) {
    super(props);
    this.state = { position: 'auto', show: true, showArrowChecked: true, hideOnOutsideClick: true };
  }

  handleClick = () => {
    this.setState({
      show: !this.state.show
    });
  };

  handleArrowShowChange = checked => {
    this.setState({ showArrowChecked: checked });
  };

  handleOutSideClickChange = checked => {
    this.setState({ hideOnOutsideClick: checked });
  };

  render() {
    return (
      <div>
        <div>
          <span style={{ paddingRight: '10px' }}>Popover Position</span>
          <select
            onChange={event => {
              this.setState({ position: event.target.value });
            }}
          >
            <option value="auto">auto</option>
            <option value="top">top</option>
            <option value="bottom">bottom</option>
            <option value="left">left</option>
            <option value="right">right</option>
          </select>
          <Checkbox
            label="Show Arrow"
            isChecked={this.state.showArrowChecked}
            onChange={this.handleArrowShowChange}
            aria-label="Show Arrow"
            id="check-1"
          />
          <Checkbox
            label="Hide on outside click"
            isChecked={this.state.hideOnOutsideClick}
            onChange={this.handleOutSideClickChange}
            aria-label="Hide on outside click"
            id="check-2"
          />
        </div>

        <div style={{ margin: '230px 0 0 200px' }}>
          <PopoverDialog
            onHidden={() => this.setState({ show: false })}
            position={this.state.position}
            isVisible={this.state.show}
            showArrow={this.state.showArrowChecked}
            hideOnOutsideClick={this.state.hideOnOutsideClick}
            appendTo={document.getElementById('___gatsby')}
            headerContent={<div>Popover Header</div>}
            bodyContent={
              <div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id feugiat augue, nec fringilla turpis.
              </div>
            }
          >
            <Button onClick={this.handleClick}>Toggle Popover</Button>
          </PopoverDialog>
        </div>
      </div>
    );
  }
}

export default SimplePopover;
