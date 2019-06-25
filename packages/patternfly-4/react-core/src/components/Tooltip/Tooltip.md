---
title: 'Tooltip'
cssPrefix: 'pf-c-tooltip'
typescript: true
propComponents: ['Tooltip']
---

import { Button, Checkbox, Tooltip, TooltipPosition } from '@patternfly/react-core';

## Simple tooltip
```js
import React from 'react';
import { Tooltip, TooltipPosition } from '@patternfly/react-core';

<Tooltip
  position="right"
  content={
    <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id feugiat augue, nec fringilla turpis.</div>
  }
>
  <span>I have a tooltip!</span>
</Tooltip>
```

## Tooltip positions
```js
import React from 'react';
import { Tooltip, TooltipPosition, Checkbox } from '@patternfly/react-core';

class TooltipPositions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      position: TooltipPosition.top,
      keepInViewChecked: true
    };
    this.handleKeepInViewChange = checked => {
      this.setState({ keepInViewChecked: checked });
    };
  }

  render() {
    return (
      <div>
        <div>
          <span style={{ paddingRight: '10px' }}>Tooltip Position</span>
          <select
            onChange={event => {
              this.setState({ position: event.target.value });
            }}
          >
            {Object.keys(TooltipPosition).map(key => (
              <option key={key} value={TooltipPosition[key]}>
                {TooltipPosition[key]}
              </option>
            ))}
          </select>
          <Checkbox
            label="Flip tooltip if the position falls outside the view"
            isChecked={this.state.keepInViewChecked}
            onChange={this.handleKeepInViewChange}
            aria-label="Keep in view"
            id="check-3"
          />
        </div>

        <div style={{ margin: '50px' }}>
          <Tooltip
            position={this.state.position}
            enableFlip={this.state.keepInViewChecked}
            content={
              <div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id feugiat augue, nec fringilla turpis.
              </div>
            }
          >
            <span>I have a tooltip!</span>
          </Tooltip>
        </div>
      </div>
    );
  }
}
```

## Tooltip over Link
```js
import React from 'react';
import { Tooltip } from '@patternfly/react-core';

class TooltipOverLink extends React.Component {
  render() {
    return (
      <Tooltip
        position="right"
        content={
          <div>PatternFly 4 is an open source design system built to drive consistency and unify teams.</div>
        }
      >
        <a tabIndex={-1} onClick={e => e.preventDefault()} href="https://www.patternfly.org/v4/">Patternfly 4 Website</a>
      </Tooltip>
    );
  }
}
```

## Tooltip shown on init
```js
import React from 'react';
import { Button, Tooltip } from '@patternfly/react-core';

class OpenedTooltip extends React.Component {
  render() {
    return (
    <Tooltip
      position="right"
      showOnInit
      aria="labelledby"
      trigger="manual"
      hideOnClick={false}
      content={
        <div role="info">Pressing esc key will always close opened tooltips.</div>
      }
    >
      <Button tabIndex={-1}>Tooltip shown on init</Button>
    </Tooltip>
    );
  }
}
```

## Tooltip using aria-labelledby announcement strategy
```js
import React from 'react';
import { Tooltip } from '@patternfly/react-core';

class LabelledbyTooltip extends React.Component {
  render() {
    return (
      <>
        <Tooltip
          aria="labelledby"
          position="top"
          content={
            <div role="status">This link uses aria-labelledby.</div>
          }
        >
          <label style={{marginRight: '6px'}} htmlFor="tooltip-input-1">This element is related to the Tooltip via aria-labelledby</label>
        </Tooltip>
        <input id="tooltip-input-1" type="text" placeholder="Example Input" />
      </>
    );
  }
}
```

## Tooltip that announces its content immediately via `alert` role
```js
import React from 'react';
import { Tooltip } from '@patternfly/react-core';

class TooltipAlertRole extends React.Component {
  render() {
    return (
    <Tooltip
      position="top"
      content={
        <div role="alert">This is a really important tooltip!</div>
      }
    >
      <span>Span With an Alert Tooltip</span>
    </Tooltip>
    );
  }
}
```
