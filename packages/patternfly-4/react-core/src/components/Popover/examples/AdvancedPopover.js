import React from 'react';
import { Popover, PopoverPosition, Checkbox, Button } from '@patternfly/react-core';

class AdvancedPopover extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      position: PopoverPosition.top,
      show: false,
      hideOnOutsideClickChecked: true,
      keepInViewChecked: true
    };
  }

  handleClick = () => {
    this.setState({
      show: !this.state.show
    });
  };

  handleOutSideClickChange = checked => {
    this.setState({ hideOnOutsideClickChecked: checked });
  };

  handleKeepInViewChange = checked => {
    this.setState({ keepInViewChecked: checked });
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
            {Object.keys(PopoverPosition).map(key => (
              <option value={PopoverPosition[key]}>{PopoverPosition[key]}</option>
            ))}
          </select>
          <Checkbox
            label="Hide on outside click"
            isChecked={this.state.hideOnOutsideClickChecked}
            onChange={this.handleOutSideClickChange}
            aria-label="Hide on outside click"
            id="check-2"
          />
          <Checkbox
            label="Keep in view"
            isChecked={this.state.keepInViewChecked}
            onChange={this.handleKeepInViewChange}
            aria-label="Keep in view"
            id="check-3"
          />
        </div>

        <div style={{ margin: '180px 0px 0px 270px' }}>
          <Popover
            onHidden={() => this.setState({ show: false })}
            position={this.state.position}
            isVisible={this.state.show}
            hideOnOutsideClick={this.state.hideOnOutsideClickChecked}
            enableFlip={this.state.keepInViewChecked}
            appendTo={document.getElementById('___gatsby')}
            headerContent={<div>Popover Header</div>}
            bodyContent={
              <div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id feugiat augue, nec fringilla turpis.
              </div>
            }
          >
            <Button onClick={this.handleClick}>Toggle Popover</Button>
          </Popover>
        </div>
      </div>
    );
  }
}

export default AdvancedPopover;
