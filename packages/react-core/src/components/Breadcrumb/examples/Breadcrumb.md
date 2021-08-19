---
id: Breadcrumb
section: components
cssPrefix: pf-c-breadcrumb
propComponents: ['Breadcrumb', 'BreadcrumbItem', 'BreadcrumbHeading']
ouia: true
---

import AngleLeftIcon from '@patternfly/react-icons/dist/esm/icons/angle-left-icon';

## Examples

### Basic

```js
import React from 'react';
import { Breadcrumb, BreadcrumbItem, BreadcrumbHeading } from '@patternfly/react-core';

<Breadcrumb>
  <BreadcrumbItem to="#">Section home</BreadcrumbItem>
  <BreadcrumbItem to="#">Section title</BreadcrumbItem>
  <BreadcrumbItem to="#">Section title</BreadcrumbItem>
  <BreadcrumbItem to="#" isActive>
    Section landing
  </BreadcrumbItem>
</Breadcrumb>;
```

### Without home link

```js
import React from 'react';
import { Breadcrumb, BreadcrumbItem, BreadcrumbHeading } from '@patternfly/react-core';

<Breadcrumb>
  <BreadcrumbItem>Section Home</BreadcrumbItem>
  <BreadcrumbItem to="#">Section title</BreadcrumbItem>
  <BreadcrumbItem to="#">Section title</BreadcrumbItem>
  <BreadcrumbItem to="#">Section title</BreadcrumbItem>
  <BreadcrumbItem to="#">Section title</BreadcrumbItem>
  <BreadcrumbItem to="#" isActive>
    Section landing
  </BreadcrumbItem>
</Breadcrumb>;
```

### With heading

```js
import React from 'react';
import { Breadcrumb, BreadcrumbItem, BreadcrumbHeading } from '@patternfly/react-core';

<Breadcrumb>
  <BreadcrumbItem to="#">Section home</BreadcrumbItem>
  <BreadcrumbItem to="#">Section title</BreadcrumbItem>
  <BreadcrumbItem to="#">Section title</BreadcrumbItem>
  <BreadcrumbItem to="#">Section title</BreadcrumbItem>
  <BreadcrumbHeading to="#">Section title</BreadcrumbHeading>
</Breadcrumb>;
```

### With dropdown

```js
import React from 'react';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbHeading,
  Dropdown,
  DropdownItem,
  BadgeToggle
} from '@patternfly/react-core';
import AngleLeftIcon from '@patternfly/react-icons/dist/esm/icons/angle-left-icon';

class BreadcrumbDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
    this.onToggle = isOpen => {
      this.setState({
        isOpen
      });
    };
    this.onSelect = event => {
      this.setState({
        isOpen: !this.state.isOpen
      });
      this.onFocus();
    };
    this.onFocus = () => {
      const element = document.getElementById('toggle-id');
      element.focus();
    };
  }

  render() {
    const { isOpen } = this.state;
    const dropdownItems = [
      <DropdownItem key="edit" component="button" icon={<AngleLeftIcon />}>
        Edit
      </DropdownItem>,
      <DropdownItem key="action" component="button" icon={<AngleLeftIcon />}>
        Deployment
      </DropdownItem>,
      <DropdownItem key="apps" component="button" icon={<AngleLeftIcon />}>
        Applications
      </DropdownItem>
    ];
    return (
      <Breadcrumb>
        <BreadcrumbItem comopnent="button">Section home</BreadcrumbItem>
        <BreadcrumbItem isDropdown>
          <Dropdown
            onSelect={this.onSelect}
            toggle={
              <BadgeToggle id="toggle-id" onToggle={this.onToggle}>
                {dropdownItems.length}
              </BadgeToggle>
            }
            isOpen={isOpen}
            dropdownItems={dropdownItems}
          />
        </BreadcrumbItem>
        <BreadcrumbHeading component="button">Section title</BreadcrumbHeading>
      </Breadcrumb>
    );
  }
}
```
