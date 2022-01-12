---
id: Dropdown
section: components
cssPrefix: pf-c-dropdown
propComponents:
  ['Dropdown', 'DropdownGroup', 'DropdownItem', 'DropdownToggle', 'DropdownToggleCheckbox', 'DropdownToggleAction']
ouia: true
---

import ThIcon from '@patternfly/react-icons/dist/esm/icons/th-icon';
import CaretDownIcon from '@patternfly/react-icons/dist/esm/icons/caret-down-icon';
import CogIcon from '@patternfly/react-icons/dist/esm/icons/cog-icon';
import BellIcon from '@patternfly/react-icons/dist/esm/icons/bell-icon';
import CubesIcon from '@patternfly/react-icons/dist/esm/icons/cubes-icon';
import AngleLeftIcon from '@patternfly/react-icons/dist/esm/icons/angle-left-icon';
import { Link } from '@reach/router';
import avatarImg from '../../Avatar/examples/avatarImg.svg';

## Examples

### Basic

```js
import React from 'react';
import { Dropdown, DropdownToggle, DropdownItem, DropdownSeparator } from '@patternfly/react-core';
import CaretDownIcon from '@patternfly/react-icons/dist/esm/icons/caret-down-icon';

class SimpleDropdown extends React.Component {
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
      <DropdownItem key="link">Link</DropdownItem>,
      <DropdownItem key="action" component="button">
        Action
      </DropdownItem>,
      <DropdownItem key="disabled link" isDisabled href="www.google.com">
        Disabled link
      </DropdownItem>,
      <DropdownItem
        key="disabled action"
        isAriaDisabled
        component="button"
        tooltip="Tooltip for disabled item"
        tooltipProps={{ position: 'top' }}
      >
        Disabled action
      </DropdownItem>,
      <DropdownSeparator key="separator" />,
      <DropdownItem key="separated link">Separated link</DropdownItem>,
      <DropdownItem key="separated action" component="button">
        Separated action
      </DropdownItem>
    ];
    return (
      <Dropdown
        onSelect={this.onSelect}
        toggle={
          <DropdownToggle id="toggle-id" onToggle={this.onToggle} toggleIndicator={CaretDownIcon}>
            Dropdown
          </DropdownToggle>
        }
        isOpen={isOpen}
        dropdownItems={dropdownItems}
      />
    );
  }
}
```

### With initial selection

```js
import React from 'react';
import { Dropdown, DropdownToggle, DropdownItem, DropdownSeparator } from '@patternfly/react-core';

class IntialSelectionDropdown extends React.Component {
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
      const element = document.getElementById('toggle-id-2');
      element.focus();
    };
  }

  render() {
    const { isOpen } = this.state;
    const dropdownItems = [
      <DropdownItem key="link">Link</DropdownItem>,
      <DropdownItem key="action" component="button" autoFocus>
        Action
      </DropdownItem>,
      <DropdownItem key="disabled link" isDisabled>
        Disabled link
      </DropdownItem>,
      <DropdownItem key="disabled action" isDisabled component="button">
        Disabled action
      </DropdownItem>,
      <DropdownSeparator key="separator" />,
      <DropdownItem key="separated link">Separated link</DropdownItem>,
      <DropdownItem key="separated action" component="button">
        Separated action
      </DropdownItem>
    ];
    return (
      <Dropdown
        onSelect={this.onSelect}
        toggle={
          <DropdownToggle id="toggle-id-2" onToggle={this.onToggle}>
            Dropdown
          </DropdownToggle>
        }
        isOpen={isOpen}
        dropdownItems={dropdownItems}
        autoFocus={false}
      />
    );
  }
}
```

### With groups

```js
import React from 'react';
import { Dropdown, DropdownToggle, DropdownGroup, DropdownItem } from '@patternfly/react-core';

class GroupedDropdown extends React.Component {
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
      const element = document.getElementById('toggle-id-3');
      element.focus();
    };
  }

  render() {
    const { isOpen } = this.state;
    const dropdownItems = [
      <DropdownGroup key="group 1">
        <DropdownItem key="group 1 link">Link</DropdownItem>
        <DropdownItem key="group 1 action" component="button">
          Action
        </DropdownItem>
      </DropdownGroup>,
      <DropdownGroup label="Group 2" key="group 2">
        <DropdownItem key="group 2 link">Group 2 link</DropdownItem>
        <DropdownItem key="group 2 action" component="button">
          Group 2 action
        </DropdownItem>
      </DropdownGroup>,
      <DropdownGroup label="Group 3" key="group 3">
        <DropdownItem key="group 3 link">Group 3 link</DropdownItem>
        <DropdownItem key="group 3 action" component="button">
          Group 3 action
        </DropdownItem>
      </DropdownGroup>
    ];
    return (
      <Dropdown
        onSelect={this.onSelect}
        toggle={
          <DropdownToggle onToggle={this.onToggle} id="toggle-id-3">
            Dropdown
          </DropdownToggle>
        }
        isOpen={isOpen}
        dropdownItems={dropdownItems}
        isGrouped
      />
    );
  }
}
```

### Disabled

```js
import React from 'react';
import { Dropdown, DropdownToggle, DropdownItem, DropdownSeparator } from '@patternfly/react-core';

class DisabledDropdown extends React.Component {
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
    };
  }

  render() {
    const { isOpen } = this.state;
    const dropdownItems = [
      <DropdownItem key="link">Link</DropdownItem>,
      <DropdownItem key="action" component="button">
        Action
      </DropdownItem>,
      <DropdownItem key="disabled link" isDisabled>
        Disabled link
      </DropdownItem>,
      <DropdownItem key="disabled action" isDisabled component="button">
        Disabled action
      </DropdownItem>,
      <DropdownSeparator key="separator" />,
      <DropdownItem key="separated link">Separated link</DropdownItem>,
      <DropdownItem key="separated action" component="button">
        Separated action
      </DropdownItem>
    ];
    return (
      <Dropdown
        onSelect={this.onSelect}
        toggle={
          <DropdownToggle isDisabled onToggle={this.onToggle}>
            Dropdown
          </DropdownToggle>
        }
        isOpen={isOpen}
        dropdownItems={dropdownItems}
      />
    );
  }
}
```

### Primary toggle

```js
import React from 'react';
import { Dropdown, DropdownToggle, DropdownItem, DropdownSeparator } from '@patternfly/react-core';
import CaretDownIcon from '@patternfly/react-icons/dist/esm/icons/caret-down-icon';

class PrimaryDropdown extends React.Component {
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
      const element = document.getElementById('toggle-id-4');
      element.focus();
    };
  }

  render() {
    const { isOpen } = this.state;
    const dropdownItems = [
      <DropdownItem key="link">Link</DropdownItem>,
      <DropdownItem key="action" component="button">
        Action
      </DropdownItem>,
      <DropdownItem key="disabled link" isDisabled>
        Disabled link
      </DropdownItem>,
      <DropdownItem key="disabled action" isDisabled component="button">
        Disabled action
      </DropdownItem>,
      <DropdownSeparator key="separator" />,
      <DropdownItem key="separated link">Separated link</DropdownItem>,
      <DropdownItem key="separated action" component="button">
        Separated action
      </DropdownItem>
    ];
    return (
      <Dropdown
        onSelect={this.onSelect}
        toggle={
          <DropdownToggle onToggle={this.onToggle} toggleIndicator={CaretDownIcon} isPrimary id="toggle-id-4">
            Dropdown
          </DropdownToggle>
        }
        isOpen={isOpen}
        dropdownItems={dropdownItems}
      />
    );
  }
}
```

### Secondary toggle

```ts
import React from 'react';
import { Dropdown, DropdownToggle, DropdownItem, DropdownSeparator } from '@patternfly/react-core';
import CaretDownIcon from '@patternfly/react-icons/dist/esm/icons/caret-down-icon';

const SecondaryDropdown = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const onFocus = () => {
    const element = document.getElementById('toggle-id-secondary');
    element.focus();
  };

  const dropdownItems = [
    <DropdownItem key="link">Link</DropdownItem>,
    <DropdownItem key="action" component="button">
      Action
    </DropdownItem>,
    <DropdownItem key="disabled link" isDisabled>
      Disabled link
    </DropdownItem>,
    <DropdownItem key="disabled action" isDisabled component="button">
      Disabled action
    </DropdownItem>,
    <DropdownSeparator key="separator" />,
    <DropdownItem key="separated link">Separated link</DropdownItem>,
    <DropdownItem key="separated action" component="button">
      Separated action
    </DropdownItem>
  ];

  return (
    <Dropdown
      onSelect={() => {
        setIsOpen(!isOpen);
        onFocus();
      }}
      toggle={
        <DropdownToggle
          onToggle={next => setIsOpen(next)}
          toggleIndicator={CaretDownIcon}
          toggleVariant="secondary"
          id="toggle-id-secondary"
        >
          Dropdown
        </DropdownToggle>
      }
      isOpen={isOpen}
      dropdownItems={dropdownItems}
    />
  );
};
```

### Plain with text toggle

```ts
import React from 'react';
import { Dropdown, DropdownToggle, DropdownItem, DropdownSeparator } from '@patternfly/react-core';
import CaretDownIcon from '@patternfly/react-icons/dist/esm/icons/caret-down-icon';

const SecondaryDropdown = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const onFocus = () => {
    const element = document.getElementById('toggle-id-plain-text');
    element.focus();
  };

  const dropdownItems = [
    <DropdownItem key="link">Link</DropdownItem>,
    <DropdownItem key="action" component="button">
      Action
    </DropdownItem>,
    <DropdownItem key="disabled link" isDisabled>
      Disabled link
    </DropdownItem>,
    <DropdownItem key="disabled action" isDisabled component="button">
      Disabled action
    </DropdownItem>,
    <DropdownSeparator key="separator" />,
    <DropdownItem key="separated link">Separated link</DropdownItem>,
    <DropdownItem key="separated action" component="button">
      Separated action
    </DropdownItem>
  ];

  return (
    <Dropdown
      isText
      isPlain
      onSelect={() => {
        setIsOpen(!isOpen);
        onFocus();
      }}
      toggle={
        <DropdownToggle
          onToggle={next => setIsOpen(next)}
          toggleIndicator={CaretDownIcon}
          id="toggle-id-plain-text"
        >
          Dropdown
        </DropdownToggle>
      }
      isOpen={isOpen}
      dropdownItems={dropdownItems}
    />
  );
};
```

### Position right

```js
import React from 'react';
import { Dropdown, DropdownToggle, DropdownItem, DropdownSeparator, DropdownPosition } from '@patternfly/react-core';

class PositionRightDropdown extends React.Component {
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
      const element = document.getElementById('toggle-id-5');
      element.focus();
    };
  }

  render() {
    const { isOpen } = this.state;
    const dropdownItems = [
      <DropdownItem key="link">Link</DropdownItem>,
      <DropdownItem key="action" component="button">
        Action
      </DropdownItem>,
      <DropdownItem key="disabled link" isDisabled>
        Disabled link
      </DropdownItem>,
      <DropdownItem key="disabled action" isDisabled component="button">
        Disabled action
      </DropdownItem>,
      <DropdownSeparator key="separator" />,
      <DropdownItem key="separated link">Separated link</DropdownItem>,
      <DropdownItem key="separated action" component="button">
        Separated action
      </DropdownItem>
    ];
    return (
      <Dropdown
        onSelect={this.onSelect}
        position={DropdownPosition.right}
        toggle={<DropdownToggle onToggle={this.onToggle}>Dropdown</DropdownToggle>}
        isOpen={isOpen}
        dropdownItems={dropdownItems}
      />
    );
  }
}
```

### Alignments on different breakpoints

```js
import React from 'react';
import { Dropdown, DropdownToggle, DropdownItem, DropdownSeparator } from '@patternfly/react-core';

class AlignmentsDropdown extends React.Component {
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
      const element = document.getElementById('toggle-id-5');
      element.focus();
    };
  }

  render() {
    const { isOpen } = this.state;
    const dropdownItems = [
      <DropdownItem key="link">Link</DropdownItem>,
      <DropdownItem key="action" component="button">
        Action
      </DropdownItem>,
      <DropdownItem key="disabled link" isDisabled>
        Disabled link
      </DropdownItem>,
      <DropdownItem key="disabled action" isDisabled component="button">
        Disabled action
      </DropdownItem>,
      <DropdownSeparator key="separator" />,
      <DropdownItem key="separated link">Separated link</DropdownItem>,
      <DropdownItem key="separated action" component="button">
        Separated action
      </DropdownItem>
    ];
    return (
      <Dropdown
        onSelect={this.onSelect}
        alignments={{
          sm: 'left',
          md: 'right',
          lg: 'left',
          xl: 'right',
          '2xl': 'left'
        }}
        toggle={<DropdownToggle onToggle={this.onToggle}>Dropdown</DropdownToggle>}
        isOpen={isOpen}
        dropdownItems={dropdownItems}
      />
    );
  }
}
```

### Direction up

```js
import React from 'react';
import { Dropdown, DropdownToggle, DropdownItem, DropdownSeparator, DropdownDirection } from '@patternfly/react-core';

class DirectionUpDropdown extends React.Component {
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
    };
  }

  render() {
    const { isOpen } = this.state;
    const dropdownItems = [
      <DropdownItem key="link">Link</DropdownItem>,
      <DropdownItem key="action" component="button">
        Action
      </DropdownItem>,
      <DropdownItem key="disabled link" isDisabled>
        Disabled link
      </DropdownItem>,
      <DropdownItem key="disabled action" isDisabled component="button">
        Disabled action
      </DropdownItem>,
      <DropdownSeparator key="separator" />,
      <DropdownItem key="separated link">Separated link</DropdownItem>,
      <DropdownItem key="separated action" component="button">
        Separated action
      </DropdownItem>
    ];
    return (
      <Dropdown
        direction={DropdownDirection.up}
        onSelect={this.onSelect}
        toggle={
          <DropdownToggle onToggle={this.onToggle} id="toggle-id-5">
            Dropdown
          </DropdownToggle>
        }
        isOpen={isOpen}
        dropdownItems={dropdownItems}
      />
    );
  }
}
```

### With kebab

```js
import React from 'react';
import { Dropdown, DropdownItem, DropdownSeparator, KebabToggle } from '@patternfly/react-core';

class KebabDropdown extends React.Component {
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
      const element = document.getElementById('toggle-id-6');
      element.focus();
    };
  }

  render() {
    const { isOpen } = this.state;
    const dropdownItems = [
      <DropdownItem key="link">Link</DropdownItem>,
      <DropdownItem key="action" component="button">
        Action
      </DropdownItem>,
      <DropdownItem key="disabled link" isDisabled>
        Disabled link
      </DropdownItem>,
      <DropdownItem key="disabled action" isDisabled component="button">
        Disabled action
      </DropdownItem>,
      <DropdownSeparator key="separator" />,
      <DropdownItem key="separated link">Separated link</DropdownItem>,
      <DropdownItem key="separated action" component="button">
        Separated action
      </DropdownItem>
    ];
    return (
      <Dropdown
        onSelect={this.onSelect}
        toggle={<KebabToggle onToggle={this.onToggle} id="toggle-id-6" />}
        isOpen={isOpen}
        isPlain
        dropdownItems={dropdownItems}
      />
    );
  }
}
```

### With badge

```js
import React from 'react';
import { Dropdown, DropdownItem, BadgeToggle } from '@patternfly/react-core';
import AngleLeftIcon from '@patternfly/react-icons/dist/esm/icons/angle-left-icon';

class BadgeDropdown extends React.Component {
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
    );
  }
}
```

### Icon only

```js
import React from 'react';
import { Dropdown, DropdownToggle, DropdownItem, DropdownSeparator } from '@patternfly/react-core';
import ThIcon from '@patternfly/react-icons/dist/esm/icons/th-icon';

class IconDropdown extends React.Component {
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
      const element = document.getElementById('toggle-id-7');
      element.focus();
    };
  }

  render() {
    const { isOpen } = this.state;
    const dropdownItems = [
      <DropdownItem key="link">Link</DropdownItem>,
      <DropdownItem key="action" component="button">
        Action
      </DropdownItem>,
      <DropdownItem key="disabled link" isDisabled>
        Disabled link
      </DropdownItem>,
      <DropdownItem key="disabled action" isDisabled component="button">
        Disabled action
      </DropdownItem>,
      <DropdownSeparator key="separator" />,
      <DropdownItem key="separated link">Separated link</DropdownItem>,
      <DropdownItem key="separated action" component="button">
        Separated action
      </DropdownItem>
    ];
    return (
      <Dropdown
        onSelect={this.onSelect}
        toggle={
          <DropdownToggle toggleIndicator={null} onToggle={this.onToggle} aria-label="Applications" id="toggle-id-7">
            <ThIcon />
          </DropdownToggle>
        }
        isOpen={isOpen}
        isPlain
        dropdownItems={dropdownItems}
      />
    );
  }
}
```

### Split button

```js
import React from 'react';
import {
  Dropdown,
  DropdownToggle,
  DropdownToggleCheckbox,
  DropdownItem,
  DropdownSeparator
} from '@patternfly/react-core';

class SplitButtonDropdown extends React.Component {
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
      const element = document.getElementById('toggle-id-8');
      element.focus();
    };
  }

  render() {
    const { isOpen } = this.state;
    const dropdownItems = [
      <DropdownItem key="link">Link</DropdownItem>,
      <DropdownItem key="action" component="button">
        Action
      </DropdownItem>,
      <DropdownItem key="disabled link" isDisabled>
        Disabled link
      </DropdownItem>,
      <DropdownItem key="disabled action" isDisabled component="button">
        Disabled action
      </DropdownItem>,
      <DropdownSeparator key="separator" />,
      <DropdownItem key="separated link">Separated link</DropdownItem>,
      <DropdownItem key="separated action" component="button">
        Separated action
      </DropdownItem>
    ];
    return (
      <Dropdown
        onSelect={this.onSelect}
        toggle={
          <DropdownToggle
            splitButtonItems={[
              <DropdownToggleCheckbox id="example-checkbox-1" key="split-checkbox" aria-label="Select all" />
            ]}
            onToggle={this.onToggle}
            id="toggle-id-8"
          />
        }
        isOpen={isOpen}
        dropdownItems={dropdownItems}
      />
    );
  }
}
```

### Split button (with text)

```js
import React from 'react';
import {
  Dropdown,
  DropdownToggle,
  DropdownToggleCheckbox,
  DropdownItem,
  DropdownSeparator
} from '@patternfly/react-core';

class SplitButtonDropdown extends React.Component {
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
    };
  }

  render() {
    const { isOpen } = this.state;
    const dropdownItems = [
      <DropdownItem key="link">Link</DropdownItem>,
      <DropdownItem key="action" component="button">
        Action
      </DropdownItem>,
      <DropdownItem key="disabled link" isDisabled>
        Disabled link
      </DropdownItem>,
      <DropdownItem key="disabled action" isDisabled component="button">
        Disabled action
      </DropdownItem>,
      <DropdownSeparator key="separator" />,
      <DropdownItem key="separated link">Separated link</DropdownItem>,
      <DropdownItem key="separated action" component="button">
        Separated action
      </DropdownItem>
    ];
    return (
      <Dropdown
        onSelect={this.onSelect}
        toggle={
          <DropdownToggle
            splitButtonItems={[
              <DropdownToggleCheckbox id="example-checkbox-2" key="split-checkbox" aria-label="Select all">
                10 selected
              </DropdownToggleCheckbox>
            ]}
            onToggle={this.onToggle}
          />
        }
        isOpen={isOpen}
        dropdownItems={dropdownItems}
      />
    );
  }
}
```

### Split button (3rd state)

```js
import React from 'react';
import {
  Dropdown,
  DropdownToggle,
  DropdownToggleCheckbox,
  DropdownItem,
  DropdownSeparator
} from '@patternfly/react-core';
class SplitButtonDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      isChecked: null
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
    };
    this.onChange = isChecked => {
      this.setState({
        isChecked
      });
    };
  }
  render() {
    const { isOpen, isChecked } = this.state;
    const dropdownItems = [
      <DropdownItem key="link">Link</DropdownItem>,
      <DropdownItem key="action" component="button">
        Action
      </DropdownItem>,
      <DropdownItem key="disabled link" isDisabled>
        Disabled link
      </DropdownItem>,
      <DropdownItem key="disabled action" isDisabled component="button">
        Disabled action
      </DropdownItem>,
      <DropdownSeparator key="separator" />,
      <DropdownItem key="separated link">Separated link</DropdownItem>,
      <DropdownItem key="separated action" component="button">
        Separated action
      </DropdownItem>
    ];
    return (
      <Dropdown
        onSelect={this.onSelect}
        toggle={
          <DropdownToggle
            splitButtonItems={[
              <DropdownToggleCheckbox
                id="example-checkbox-3rd-state"
                key="split-checkbox"
                aria-label="Select all"
                onChange={checked => this.onChange(checked)}
                isChecked={isChecked}
              />
            ]}
            onToggle={this.onToggle}
          />
        }
        isOpen={isOpen}
        dropdownItems={dropdownItems}
      />
    );
  }
}
```

### Split button (disabled)

```js
import React from 'react';
import {
  Dropdown,
  DropdownToggle,
  DropdownToggleCheckbox,
  DropdownItem,
  DropdownSeparator
} from '@patternfly/react-core';

class SplitButtonDisabledDropdown extends React.Component {
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
    };
  }

  render() {
    const { isOpen } = this.state;
    const dropdownItems = [
      <DropdownItem key="link">Link</DropdownItem>,
      <DropdownItem key="action" component="button">
        Action
      </DropdownItem>,
      <DropdownItem key="disabled link" isDisabled>
        Disabled link
      </DropdownItem>,
      <DropdownItem key="disabled action" isDisabled component="button">
        Disabled action
      </DropdownItem>,
      <DropdownSeparator key="separator" />,
      <DropdownItem key="separated link">Separated link</DropdownItem>,
      <DropdownItem key="separated action" component="button">
        Separated action
      </DropdownItem>
    ];
    return (
      <Dropdown
        onSelect={this.onSelect}
        toggle={
          <DropdownToggle
            splitButtonItems={[
              <DropdownToggleCheckbox
                id="example-checkbox-3"
                key="disabled-checkbox"
                aria-label="Select all"
                isDisabled
              />
            ]}
            isDisabled
            onToggle={this.onToggle}
          />
        }
        isOpen={isOpen}
        dropdownItems={dropdownItems}
      />
    );
  }
}
```

### Split button action

```js
import React from 'react';
import { Dropdown, DropdownToggle, DropdownToggleAction, DropdownItem } from '@patternfly/react-core';
import CogIcon from '@patternfly/react-icons/dist/esm/icons/cog-icon';
import BellIcon from '@patternfly/react-icons/dist/esm/icons/bell-icon';
import CubesIcon from '@patternfly/react-icons/dist/esm/icons/cubes-icon';

class SplitButtonActionDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isActionOpen: false,
      isCogOpen: false
    };
    this.onActionToggle = isActionOpen => {
      this.setState({
        isActionOpen
      });
    };
    this.onCogToggle = isCogOpen => {
      this.setState({
        isCogOpen
      });
    };
    this.onActionClick = event => {
      window.alert('You selected an action button!');
    };
    this.onCogClick = event => {
      window.alert('You selected the Cog!');
    };
    this.onActionSelect = event => {
      this.setState({
        isActionOpen: !this.state.isActionOpen
      });
    };
    this.onCogSelect = event => {
      this.setState({
        isCogOpen: !this.state.isCogOpen
      });
    };
  }

  render() {
    const { isActionOpen, isCogOpen } = this.state;
    const dropdownItems = [
      <DropdownItem key="action" component="button" onClick={this.onActionClick}>
        Action
      </DropdownItem>,
      <DropdownItem key="disabled link" component="button" isDisabled onClick={this.onActionClick}>
        Disabled action
      </DropdownItem>,
      <DropdownItem key="other action" component="button" onClick={this.onActionClick}>
        Other action
      </DropdownItem>
    ];
    const dropdownIconItems = [
      <DropdownItem key="action" component="button" icon={<CogIcon />} onClick={this.onActionClick}>
        Action
      </DropdownItem>,
      <DropdownItem key="disabled link" component="button" icon={<BellIcon />} isDisabled onClick={this.onActionClick}>
        Disabled action
      </DropdownItem>,
      <DropdownItem key="other action" component="button" icon={<CubesIcon />} onClick={this.onActionClick}>
        Other action
      </DropdownItem>
    ];
    return (
      <React.Fragment>
        <Dropdown
          onSelect={this.onActionSelect}
          toggle={
            <DropdownToggle
              splitButtonItems={[
                <DropdownToggleAction key="action" onClick={this.onActionClick}>
                  Action
                </DropdownToggleAction>
              ]}
              splitButtonVariant="action"
              onToggle={this.onActionToggle}
            />
          }
          isOpen={isActionOpen}
          dropdownItems={dropdownItems}
        />{' '}
        <Dropdown
          onSelect={this.onCogSelect}
          toggle={
            <DropdownToggle
              splitButtonItems={[
                <DropdownToggleAction key="cog-action" aria-label="Action" onClick={this.onCogClick}>
                  <CogIcon />
                </DropdownToggleAction>
              ]}
              splitButtonVariant="action"
              onToggle={this.onCogToggle}
            />
          }
          isOpen={isCogOpen}
          dropdownItems={dropdownIconItems}
        />
      </React.Fragment>
    );
  }
}
```

### Split button primary action

```ts
import React from 'react';
import { Dropdown, DropdownToggle, DropdownToggleAction, DropdownItem } from '@patternfly/react-core';
import CogIcon from '@patternfly/react-icons/dist/esm/icons/cog-icon';
import BellIcon from '@patternfly/react-icons/dist/esm/icons/bell-icon';
import CubesIcon from '@patternfly/react-icons/dist/esm/icons/cubes-icon';

const PrimarySplitActionDropdown = () => {
  const [isActionOpen, setIsActionOpen] = React.useState(false);
  const [isCogOpen, setIsCogOpen] = React.useState(false);

  const onActionClick = () => {
    window.alert('You selected an action button!');
  };
  const onCogClick = () => {
    window.alert('You selected the Cog!');
  };

  const dropdownItems = [
    <DropdownItem key="action" component="button" onClick={onActionClick}>
      Action
    </DropdownItem>,
    <DropdownItem key="disabled link" component="button" isDisabled onClick={onActionClick}>
      Disabled action
    </DropdownItem>,
    <DropdownItem key="other action" component="button" onClick={onActionClick}>
      Other action
    </DropdownItem>
  ];
  const dropdownIconItems = [
    <DropdownItem key="action" component="button" icon={<CogIcon />} onClick={onActionClick}>
      Action
    </DropdownItem>,
    <DropdownItem key="disabled link" component="button" icon={<BellIcon />} isDisabled onClick={onActionClick}>
      Disabled action
    </DropdownItem>,
    <DropdownItem key="other action" component="button" icon={<CubesIcon />} onClick={onActionClick}>
      Other action
    </DropdownItem>
  ];

  return (
    <React.Fragment>
      <Dropdown
        onSelect={() => setIsActionOpen(!isActionOpen)}
        toggle={
          <DropdownToggle
            splitButtonItems={[
              <DropdownToggleAction key="action" onClick={onActionClick}>
                Action
              </DropdownToggleAction>
            ]}
            toggleVariant="primary"
            splitButtonVariant="action"
            onToggle={next => setIsActionOpen(next)}
          />
        }
        isOpen={isActionOpen}
        dropdownItems={dropdownItems}
      />{' '}
      <Dropdown
        onSelect={() => setIsCogOpen(!isCogOpen)}
        toggle={
          <DropdownToggle
            splitButtonItems={[
              <DropdownToggleAction key="cog-action" aria-label="Action" onClick={onCogClick}>
                <CogIcon />
              </DropdownToggleAction>
            ]}
            toggleVariant="primary"
            splitButtonVariant="action"
            onToggle={next => setIsCogOpen(next)}
          />
        }
        isOpen={isCogOpen}
        dropdownItems={dropdownIconItems}
      />
    </React.Fragment>
  );
};
```

### Basic panel

```js
import React from 'react';
import { Dropdown, DropdownToggle } from '@patternfly/react-core';

class DropdownPanel extends React.Component {
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
    };
  }

  render() {
    const { isOpen } = this.state;
    return (
      <Dropdown
        onSelect={this.onSelect}
        toggle={<DropdownToggle onToggle={this.onToggle}>Expanded dropdown</DropdownToggle>}
        isOpen={isOpen}
      >
        [Panel contents here]
      </Dropdown>
    );
  }
}
```

### Router link

```js
import React from 'react';
import { Dropdown, DropdownToggle, DropdownItem } from '@patternfly/react-core';
import { Link } from '@reach/router';
import CaretDownIcon from '@patternfly/react-icons/dist/esm/icons/caret-down-icon';

class RouterDropdown extends React.Component {
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
      const element = document.getElementById('toggle-id-8');
      element.focus();
    };
  }

  render() {
    const { isOpen } = this.state;
    const dropdownItems = [<DropdownItem key="routerlink" component={<Link to="/">@reach/router Link</Link>} />];

    return (
      <Dropdown
        onSelect={this.onSelect}
        toggle={
          <DropdownToggle id="toggle-id-8" onToggle={this.onToggle} toggleIndicator={CaretDownIcon}>
            Dropdown
          </DropdownToggle>
        }
        isOpen={isOpen}
        dropdownItems={dropdownItems}
      />
    );
  }
}
```

### Dropdown with image and text

```js
import React from 'react';
import {
  Avatar,
  Dropdown,
  DropdownGroup,
  DropdownToggle,
  DropdownItem,
  DropdownSeparator
} from '@patternfly/react-core';
import avatarImg from '../../Avatar/examples/avatarImg.svg';

class ImageTextDropdown extends React.Component {
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
      const element = document.getElementById('toggle-id-9');
      element.focus();
    };
  }

  render() {
    const { isOpen } = this.state;
    const dropdownItems = [
      <DropdownGroup key="group 1">
        <DropdownItem key="group 1 plaintext" component="div" isPlainText>
          Text
        </DropdownItem>
        <DropdownItem key="group 1 plaintext2" component="div" isPlainText>
          More text
        </DropdownItem>
      </DropdownGroup>,
      <DropdownSeparator key="dropdown separator" />,
      <DropdownGroup key="group 2">
        <DropdownItem key="group 2 profile">My profile</DropdownItem>
        <DropdownItem key="group 2 user" component="button">
          User management
        </DropdownItem>
        <DropdownItem key="group 2 logout">Logout</DropdownItem>
      </DropdownGroup>
    ];
    return (
      <Dropdown
        onSelect={this.onSelect}
        toggle={
          <DropdownToggle
            id="toggle-id-9"
            onToggle={this.onToggle}
            toggleIndicator={CaretDownIcon}
            icon={<Avatar src={avatarImg} alt="avatar"></Avatar>}
          >
            Ned Username
          </DropdownToggle>
        }
        isOpen={isOpen}
        dropdownItems={dropdownItems}
      />
    );
  }
}
```

### Append menu document body

```js
import React from 'react';
import { Dropdown, DropdownToggle, DropdownItem } from '@patternfly/react-core';
import CaretDownIcon from '@patternfly/react-icons/dist/esm/icons/caret-down-icon';

class MenuOnDocumentBodyDropdown extends React.Component {
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
      const element = document.getElementById('toggle-id-menu-document-body');
      element.focus();
    };
  }

  render() {
    const { isOpen } = this.state;
    const dropdownItems = [<DropdownItem key="link">1</DropdownItem>];
    return (
      <div style={{ height: '50px', overflow: 'hidden' }}>
        <Dropdown
          onSelect={this.onSelect}
          toggle={
            <DropdownToggle id="toggle-id-menu-document-body" onToggle={this.onToggle} toggleIndicator={CaretDownIcon}>
              Dropdown
            </DropdownToggle>
          }
          isOpen={isOpen}
          dropdownItems={dropdownItems}
          menuAppendTo={() => document.body}
        />
      </div>
    );
  }
}
```

### Dropdown with descriptions

```js
import React from 'react';
import { Dropdown, DropdownToggle, DropdownItem } from '@patternfly/react-core';
import BellIcon from '@patternfly/react-icons/dist/esm/icons/bell-icon';
import CaretDownIcon from '@patternfly/react-icons/dist/esm/icons/caret-down-icon';
import CubesIcon from '@patternfly/react-icons/dist/esm/icons/cubes-icon';

class SimpleDropdown extends React.Component {
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
      <DropdownItem key="link" description="This is a description" icon={<CubesIcon />}>
        Link
      </DropdownItem>,
      <DropdownItem
        key="action"
        component="button"
        icon={<BellIcon />}
        description="This is a very long description that describes the menu item"
      >
        Action
      </DropdownItem>,
      <DropdownItem key="disabled link" isDisabled description="Disabled link description">
        Disabled link
      </DropdownItem>,
      <DropdownItem key="disabled action" isDisabled component="button" description="This is a description">
        Disabled action
      </DropdownItem>
    ];
    return (
      <Dropdown
        onSelect={this.onSelect}
        toggle={
          <DropdownToggle id="toggle-id" onToggle={this.onToggle} toggleIndicator={CaretDownIcon}>
            Dropdown
          </DropdownToggle>
        }
        isOpen={isOpen}
        dropdownItems={dropdownItems}
      />
    );
  }
}
```
