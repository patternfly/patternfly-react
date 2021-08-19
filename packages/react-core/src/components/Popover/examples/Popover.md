---
id: Popover
section: components
cssPrefix: pf-c-popover
propComponents: ['Popover']
---

## Examples

### Basic

```js
import React from 'react';
import { Popover, PopoverPosition, Button } from '@patternfly/react-core';

<div style={{ margin: '50px' }}>
  <Popover
    aria-label="Basic popover"
    headerContent={<div>Popover header</div>}
    bodyContent={<div>Popovers are triggered by click rather than hover.</div>}
    footerContent="Popover footer"
  >
    <Button>Toggle popover</Button>
  </Popover>
</div>;
```

### Close popover from content (controlled)

```js
import React from 'react';
import { Popover, PopoverPosition, Button } from '@patternfly/react-core';

PopoverCloseControlled = () => {
  const [isVisible, setIsVisible] = React.useState(false);
  return (
    <div style={{ margin: '50px' }}>
      <Popover
        aria-label="Popover with button in the body that can close it"
        isVisible={isVisible}
        shouldOpen={() => setIsVisible(true)}
        shouldClose={() => setIsVisible(false)}
        headerContent={<div>Popover header</div>}
        bodyContent={
          <div>
            <div>
              All the content props (headerContent, bodyContent, footerContent) can take a function which the popover
              component passes the hide function to which can be used to close the popover after some user interaction.
            </div>
            <div>
              <button onClick={() => setIsVisible(false)}>Close popover</button>
            </div>
          </div>
        }
        footerContent="Popover footer"
      >
        <Button>Toggle popover</Button>
      </Popover>
    </div>
  );
};
```

### Close popover from content (uncontrolled)

Note: If you use the isVisible prop, either refer to the example above or if you want to use the hide callback from the content then be sure to keep isVisible in-sync.

```js
import React from 'react';
import { Popover, PopoverPosition, Button } from '@patternfly/react-core';

<div style={{ margin: '50px' }}>
  <Popover
    aria-label="Popover with button in the body that can close it"
    headerContent={<div>Popover header</div>}
    bodyContent={hide => (
      <div>
        <div>
          All the content props (headerContent, bodyContent, footerContent) can take a function which the popover
          component passes the hide function to which can be used to close the popover after some user interaction.
        </div>
        <div>
          <button onClick={hide}>Close popover</button>
        </div>
      </div>
    )}
    footerContent="Popover footer"
  >
    <Button>Toggle popover</Button>
  </Popover>
</div>;
```

### Without header/footer/close and no padding

```js
import React from 'react';
import { Popover, PopoverPosition, Button } from '@patternfly/react-core';

<div style={{ margin: '50px' }}>
  <Popover
    aria-label="Popover with no header, footer, close button, and padding"
    hasNoPadding
    showClose={false}
    bodyContent={hide => (
      <div>
        This popover has no padding and is intended for use with content that has its own spacing and should touch the
        edges of the popover container.
      </div>
    )}
    withFocusTrap={false /* no focusable content in this example */}
  >
    <Button>Toggle popover</Button>
  </Popover>
</div>;
```

### Width auto

```js
import React from 'react';
import { Popover, PopoverPosition, Button } from '@patternfly/react-core';

<div style={{ margin: '50px' }}>
  <Popover
    aria-label="Popover with auto-width"
    hasAutoWidth
    bodyContent={hide => <div>Removes fixed-width and allows width to be defined by contents</div>}
  >
    <Button>Toggle popover</Button>
  </Popover>
</div>;
```

### Popover react ref

```js
import React from 'react';
import { Popover } from '@patternfly/react-core';

PopoverReactRef = () => {
  const popoverRef = React.useRef();
  return (
    <div style={{ margin: '50px' }}>
      <button ref={popoverRef}>Popover attached via react ref</button>
      <Popover
        aria-label="Popover with react reference example"
        headerContent={<div>Popover header</div>}
        bodyContent={
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id feugiat augue, nec fringilla turpis.
          </div>
        }
        footerContent="Popover footer"
        reference={popoverRef}
      />
    </div>
  );
};
```

### Popover selector ref

```js
import React from 'react';
import { Popover } from '@patternfly/react-core';

<div style={{ margin: '50px' }}>
  <button id="popover-selector">Popover attached via selector ref</button>
  <Popover
    aria-label="Popover with selector reference example"
    headerContent={<div>Popover header</div>}
    bodyContent={
      <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id feugiat augue, nec fringilla turpis.</div>
    }
    footerContent="Popover footer"
    reference={() => document.getElementById('popover-selector')}
  />
</div>;
```

### Advanced

```js
import React from 'react';
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
          <span style={{ paddingRight: '10px' }}>Popover position</span>
          <select
            aria-label="Popover position"
            onChange={event => {
              this.setState({ position: event.target.value });
            }}
          >
            {
              Object.values(PopoverPosition).map(position => (
                <option key={position} value={position}>
                  {position}
                </option>
              ))
            }
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

        <div style={{ margin: '50px' }}>
          <Popover
            aria-label="Advanced popover usages example"
            position={this.state.position}
            hideOnOutsideClick={false}
            isVisible={this.state.show}
            shouldClose={this.shouldClose}
            shouldOpen={this.shouldOpen}
            enableFlip={this.state.keepInViewChecked}
            appendTo={() => document.body}
            headerContent={<div>Popover header</div>}
            bodyContent={
              <div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id feugiat augue, nec fringilla turpis.
              </div>
            }
            footerContent="Popover footer"
          >
            <Button>Toggle popover</Button>
          </Popover>
        </div>
      </div>
    );
  }
}
```
