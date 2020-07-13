---
id: Popover
section: components
cssPrefix: pf-c-popover
propComponents: ['Popover']
---

## Examples
### Basic
```js
import { Popover, PopoverPosition, Button } from '@patternfly/react-core';

SimplePopover = () => (
  <div style={{ margin: '100px' }}>
    <Popover
      headerContent={<div>Popover Header</div>}
      bodyContent={
        <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id feugiat augue, nec fringilla turpis.</div>
      }
      footerContent="Popover Footer"
    >
      <Button>Toggle Popover</Button>
    </Popover>
  </div>
);
```

### Advanced
```js
import { Popover, PopoverPosition, Checkbox, Button } from '@patternfly/react-core';

class AdvancedPopover extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      position: 'auto',
      show: false,
      keepInViewChecked: true
    };
    this.handleKeepInViewChange = checked => {
      this.setState({ keepInViewChecked: checked });
    };
    this.handleProgrammaticChange = checked => {
      this.setState({
        show: checked
      });
    };
    this.shouldClose = () => {
      console.log('shouldClose');
      this.setState({ show: false });
    };
    this.shouldOpen = () => {
      console.log('shouldOpen');
      this.setState({ show: true });
    };
  }

  render() {
    return (
      <div>
        <div>
          <span style={{ paddingRight: '10px' }}>Popover Position</span>
          <select
            aria-label="Popover position"
            onChange={event => {
              this.setState({ position: event.target.value });
            }}
          >
            {Object.keys(PopoverPosition).map(key => (
              <option key={key} value={PopoverPosition[key]}>
                {PopoverPosition[key]}
              </option>
            ))}
          </select>
          <Checkbox
            label="Flip popover if the position falls outside the view"
            isChecked={this.state.keepInViewChecked}
            onChange={this.handleKeepInViewChange}
            aria-label="Keep in view"
            id="check-3"
          />
          <Checkbox
            label="Toggle popover from outside"
            isChecked={this.state.show}
            onChange={this.handleProgrammaticChange}
            aria-label="Toggle popover from outside"
            id="check-4"
          />
        </div>

        <div style={{ margin: '100px' }}>
          <Popover
            position={this.state.position}
            hideOnOutsideClick={false}
            isVisible={this.state.show}
            shouldClose={this.shouldClose}
            shouldOpen={this.shouldOpen}
            enableFlip={this.state.keepInViewChecked}
            appendTo={() => document.getElementById('___gatsby')}
            headerContent={<div>Popover Header</div>}
            bodyContent={
              <div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id feugiat augue, nec fringilla turpis.
              </div>
            }
            footerContent="Popover Footer"
          >
            <Button onClick={this.handleClick}>Toggle Popover</Button>
          </Popover>
        </div>
      </div>
    );
  }
}
```

### Headless
```js
import { Popover, PopoverPosition, Button } from '@patternfly/react-core';

HeadlessPopover = () => (
  <div style={{ margin: '100px' }}>
    <Popover
      bodyContent={
        <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id feugiat augue, nec fringilla turpis.</div>
      }
      aria-label="Headless Popover"
      closeBtnAriaLabel="Close Headless Popover"
      footerContent="Popover Footer"
    >
      <Button>Toggle Popover</Button>
    </Popover>
  </div>
);
```

### With Link
```js
import { Popover, PopoverPosition, Button } from '@patternfly/react-core';

HeadlessPopover = () => (
  <div style={{ margin: '100px' }}>
    <Popover
      bodyContent={
        <div><a href="https://www.patternfly.org/" target="_blank">PatternFly</a> is a community project that promotes design commonality and improved user experience. Its offerings include open source code, patterns, style guides, and an active community that helps support it all.</div>
      }
      aria-label="Popover with Link"
      closeBtnAriaLabel="Close Popover with Link"
      footerContent="Popover Footer"
    >
      <Button>Toggle Popover</Button>
    </Popover>
  </div>
);
```
