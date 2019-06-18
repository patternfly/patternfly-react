---
title: 'Tooltip'
cssPrefix: 'pf-c-tooltip'
typescript: true
propComponents: ['Tooltip']
---

import { Tooltip, TooltipPosition, Checkbox } from '@patternfly/react-core';

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

<Tooltip
  position="right"
  content={
    <div>Pancetta hamburger alcatra andouille shank frankfurter cow beef meatloaf shankle pork chop capicola tenderloin shoulder.</div>
  }
>
  <a href="">I'm a link with a tooltip!</a>
</Tooltip>
```
