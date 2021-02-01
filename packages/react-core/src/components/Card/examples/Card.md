---
id: Card
section: components
cssPrefix: pf-c-card
propComponents: ['Card', 'CardHeaderMain', 'CardTitle', 'CardBody', 'CardFooter', 'CardExpandableContent']
ouia: true
---

import pfLogo from './pfLogo.svg';
import pfLogoSmall from './pf-logo-small.svg';

## Examples

### Basic

```js
import React from 'react';
import { Card, CardTitle, CardBody, CardFooter } from '@patternfly/react-core';

<Card>
  <CardTitle>Header</CardTitle>
  <CardBody>Body</CardBody>
  <CardFooter>Footer</CardFooter>
</Card>;
```

### Modifiers

```js
import React from 'react';
import { Card, CardTitle, CardBody, CardFooter, Checkbox } from '@patternfly/react-core';

CardModifiers = () => {
  const mods = [
    'isHoverable',
    'isCompact',
    'isFlat',
    'isRounded',
    'isLarge',
  ];
  const [modifiers, setModifiers] = React.useState({});

  return (
    <React.Fragment>
      <div style={{ marginBottom: '12px' }}>
        {mods.map(mod => 
          <Checkbox
            id={mod}
            key={mod}
            label={mod}
            isChecked={modifiers[mod]}
            onChange={checked => {
              modifiers[mod] = checked;
              setModifiers({...modifiers});
            }}
          />
        )}
      </div>
      <Card {...modifiers}>
        <CardTitle>Header</CardTitle>
        <CardBody>Body</CardBody>
        <CardFooter>Footer</CardFooter>
      </Card>
    </React.Fragment>
  );
}
```

### With image and actions

```js
import React from 'react';
import {
  Brand,
  Card,
  CardHeader,
  CardHeaderMain,
  CardActions,
  CardTitle,
  CardBody,
  CardFooter,
  Checkbox,
  Dropdown,
  DropdownToggle,
  DropdownItem,
  DropdownSeparator,
  KebabToggle
} from '@patternfly/react-core';
import pfLogo from './pfLogo.svg';

class KebabDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      check1: false
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
    this.onClick = (checked, event) => {
      const target = event.target;
      const value = target.type === 'checkbox' ? target.checked : target.value;
      const name = target.name;
      this.setState({ [name]: value });
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
        Disabled Link
      </DropdownItem>,
      <DropdownItem key="disabled action" isDisabled component="button">
        Disabled Action
      </DropdownItem>,
      <DropdownSeparator key="separator" />,
      <DropdownItem key="separated link">Separated Link</DropdownItem>,
      <DropdownItem key="separated action" component="button">
        Separated Action
      </DropdownItem>
    ];
    return (
      <Card>
        <CardHeader>
          <CardHeaderMain>
            <Brand src={pfLogo} alt="PatternFly logo" style={{ height: '50px' }} />
          </CardHeaderMain>
          <CardActions>
            <Dropdown
              onSelect={this.onSelect}
              toggle={<KebabToggle onToggle={this.onToggle} />}
              isOpen={isOpen}
              isPlain
              dropdownItems={dropdownItems}
              position={'right'}
            />
            <Checkbox
              isChecked={this.state.check1}
              onChange={this.onClick}
              aria-label="card checkbox example"
              id="check-1"
              name="check1"
            />
          </CardActions>
        </CardHeader>
        <CardTitle>Header</CardTitle>
        <CardBody>Body</CardBody>
        <CardFooter>Footer</CardFooter>
      </Card>
    );
  }
}
```

### Card header in card head

```js
import React from 'react';
import {
  Card,
  CardHeader,
  CardActions,
  CardTitle,
  CardBody,
  CardFooter,
  Checkbox,
  Dropdown,
  DropdownToggle,
  DropdownItem,
  DropdownSeparator,
  KebabToggle
} from '@patternfly/react-core';

class KebabDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      check1: false
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
    this.onClick = (checked, event) => {
      const target = event.target;
      const value = target.type === 'checkbox' ? target.checked : target.value;
      const name = target.name;
      this.setState({ [name]: value });
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
        Disabled Link
      </DropdownItem>,
      <DropdownItem key="disabled action" isDisabled component="button">
        Disabled Action
      </DropdownItem>,
      <DropdownSeparator key="separator" />,
      <DropdownItem key="separated link">Separated Link</DropdownItem>,
      <DropdownItem key="separated action" component="button">
        Separated Action
      </DropdownItem>
    ];
    return (
      <Card>
        <CardHeader>
          <CardActions>
            <Dropdown
              onSelect={this.onSelect}
              toggle={<KebabToggle onToggle={this.onToggle} />}
              isOpen={isOpen}
              isPlain
              dropdownItems={dropdownItems}
              position={'right'}
            />
            <Checkbox
              isChecked={this.state.check1}
              onChange={this.onClick}
              aria-label="card checkbox example"
              id="check-2"
              name="check2"
            />
          </CardActions>
          <CardTitle>
            This is a really really really really really really really really really really long header
          </CardTitle>
        </CardHeader>
        <CardBody>Body</CardBody>
        <CardFooter>Footer</CardFooter>
      </Card>
    );
  }
}
```

### Only actions in card head (no header/footer)

```js
import React from 'react';
import {
  Checkbox,
  Dropdown,
  DropdownToggle,
  DropdownItem,
  DropdownSeparator,
  KebabToggle,
  Card,
  CardHeader,
  CardActions,
  CardTitle,
  CardBody
} from '@patternfly/react-core';

class KebabDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      check1: false
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
    this.onClick = (checked, event) => {
      const target = event.target;
      const value = target.type === 'checkbox' ? target.checked : target.value;
      const name = target.name;
      this.setState({ [name]: value });
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
        Disabled Link
      </DropdownItem>,
      <DropdownItem key="disabled action" isDisabled component="button">
        Disabled Action
      </DropdownItem>,
      <DropdownSeparator key="separator" />,
      <DropdownItem key="separated link">Separated Link</DropdownItem>,
      <DropdownItem key="separated action" component="button">
        Separated Action
      </DropdownItem>
    ];
    return (
      <Card>
        <CardHeader>
          <CardActions>
            <Dropdown
              onSelect={this.onSelect}
              toggle={<KebabToggle onToggle={this.onToggle} />}
              isOpen={isOpen}
              isPlain
              dropdownItems={dropdownItems}
              position={'right'}
            />
            <Checkbox
              isChecked={this.state.check1}
              onChange={this.onClick}
              aria-label="card checkbox example"
              id="check-3"
              name="check3"
            />
          </CardActions>
        </CardHeader>
        <CardBody>This is the card body, there is only actions in the card head.</CardBody>
      </Card>
    );
  }
}
```

### Only image in the card head

```js
import React from 'react';
import { Brand, Card, CardBody, CardFooter, CardHeader, CardHeaderMain, CardTitle } from '@patternfly/react-core';

<Card>
  <CardHeader>
    <CardHeaderMain>
      <Brand src={pfLogo} alt="PatternFly logo" style={{ height: '50px' }} />
    </CardHeaderMain>
  </CardHeader>
  <CardTitle>Header</CardTitle>
  <CardBody>Body</CardBody>
  <CardFooter>Footer</CardFooter>
</Card>;
```

### With no footer

```js
import React from 'react';
import { Card, CardTitle, CardBody } from '@patternfly/react-core';

<Card>
  <CardTitle>Header</CardTitle>
  <CardBody>This card has no footer</CardBody>
</Card>;
```

### With no header

```js
import React from 'react';
import { Card, CardBody, CardFooter } from '@patternfly/react-core';

<Card>
  <CardBody>This card has no header</CardBody>
  <CardFooter>Footer</CardFooter>
</Card>;
```

### With only a content section

```js
import React from 'react';
import { Card, CardBody } from '@patternfly/react-core';

<Card>
  <CardBody>Body</CardBody>
</Card>;
```

### With multiple body sections

```js
import React from 'react';
import { Card, CardTitle, CardBody, CardFooter } from '@patternfly/react-core';

<Card>
  <CardTitle>Header</CardTitle>
  <CardBody>Body</CardBody>
  <CardBody>Body</CardBody>
  <CardBody>Body</CardBody>
  <CardFooter>Footer</CardFooter>
</Card>;
```

### With only one body that fills

```js
import React from 'react';
import { Card, CardTitle, CardBody, CardFooter } from '@patternfly/react-core';

<Card style={{ minHeight: '30em' }}>
  <CardTitle>Header</CardTitle>
  <CardBody isFilled={false}>Body pf-m-no-fill</CardBody>
  <CardBody isFilled={false}>Body pf-m-no-fill</CardBody>
  <CardBody>Body</CardBody>
  <CardFooter>Footer</CardFooter>
</Card>;
```

### Selectable and selected

```js
import React from 'react';
import {
  Card,
  CardHeader,
  CardActions,
  CardTitle,
  CardBody,
  Dropdown,
  DropdownToggle,
  DropdownItem,
  DropdownSeparator,
  KebabToggle
} from '@patternfly/react-core';

class SelectableCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: null
    };
    this.onKeyDown = event => {
      if (event.target !== event.currentTarget) {
        return;
      }
      if ([13, 32].includes(event.keyCode)) {
        const newSelected = event.currentTarget.id === this.state.selected ? null : event.currentTarget.id;
        this.setState({
          selected: newSelected
        });
      }
    };
    this.onClick = event => {
      const newSelected = event.currentTarget.id === this.state.selected ? null : event.currentTarget.id;
      this.setState({
        selected: newSelected
      });
    };
    this.onToggle = (isOpen, event) => {
      event.stopPropagation();
      this.setState({
        isOpen
      });
    };
    this.onSelect = event => {
      event.stopPropagation();
      this.setState({
        isOpen: !this.state.isOpen
      });
    };
  }
  render() {
    const { selected, isOpen } = this.state;
    const dropdownItems = [
      <DropdownItem key="link">Link</DropdownItem>,
      <DropdownItem key="action" component="button">
        Action
      </DropdownItem>,
      <DropdownItem key="disabled link" isDisabled>
        Disabled Link
      </DropdownItem>,
      <DropdownItem key="disabled action" isDisabled component="button">
        Disabled Action
      </DropdownItem>,
      <DropdownSeparator key="separator" />,
      <DropdownItem key="separated link">Separated Link</DropdownItem>,
      <DropdownItem key="separated action" component="button">
        Separated Action
      </DropdownItem>
    ];
    return (
      <>
        <Card
          id="first-card"
          onKeyDown={this.onKeyDown}
          onClick={this.onClick}
          isSelectable
          isSelected={selected === 'first-card'}
        >
          <CardHeader>
            <CardActions>
              <Dropdown
                onSelect={this.onSelect}
                toggle={<KebabToggle onToggle={this.onToggle} />}
                isOpen={isOpen}
                isPlain
                dropdownItems={dropdownItems}
                position={'right'}
              />
            </CardActions>
          </CardHeader>
          <CardTitle>First card</CardTitle>
          <CardBody>This is a selectable card. Click me to select me. Click again to deselect me.</CardBody>
        </Card>
        <br />
        <Card
          id="second-card"
          onKeyDown={this.onKeyDown}
          onClick={this.onClick}
          isSelectable
          isSelected={selected === 'second-card'}
        >
          <CardTitle>Second card</CardTitle>
          <CardBody>This is a selectable card. Click me to select me. Click again to deselect me.</CardBody>
        </Card>
      </>
    );
  }
}
```

### With heading element

```js
import React from 'react';
import { Card, CardTitle, CardBody, CardFooter } from '@patternfly/react-core';

<Card>
  <CardTitle component="h4">Header</CardTitle>
  <CardBody>Body</CardBody>
  <CardFooter>Footer</CardFooter>
</Card>;
```

### Expandable

```js
import React from 'react';
import {
  Brand,
  Card,
  CardHeader,
  CardHeaderMain,
  CardActions,
  CardTitle,
  CardBody,
  CardFooter,
  CardExpandableContent,
  Checkbox,
  Dropdown,
  DropdownToggle,
  DropdownItem,
  DropdownSeparator,
  DropdownPosition,
  DropdownDirection,
  KebabToggle
} from '@patternfly/react-core';
import pfLogo from './pfLogo.svg';

class ExpandableCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      check1: false,
      isExpanded: false
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
    this.onClick = (checked, event) => {
      const target = event.target;
      const value = target.type === 'checkbox' ? target.checked : target.value;
      const name = target.name;
      this.setState({ [name]: value });
    };
    this.onExpand = (event, id) => {
      console.log(id);
      this.setState({
        isExpanded: !this.state.isExpanded
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
        Disabled Link
      </DropdownItem>,
      <DropdownItem key="disabled action" isDisabled component="button">
        Disabled Action
      </DropdownItem>,
      <DropdownSeparator key="separator" />,
      <DropdownItem key="separated link">Separated Link</DropdownItem>,
      <DropdownItem key="separated action" component="button">
        Separated Action
      </DropdownItem>
    ];
    return (
      <Card id="card1" isExpanded={this.state.isExpanded}>
        <CardHeader
          onExpand={this.onExpand}
          toggleButtonProps={{
            id: 'toggle-button',
            'aria-label': 'Details',
            'aria-labelledby': 'titleId toggle-button',
            'aria-expanded': this.state.isExpanded
          }}
        >
          <CardActions>
            <Dropdown
              onSelect={this.onSelect}
              toggle={<KebabToggle onToggle={this.onToggle} />}
              isOpen={isOpen}
              isPlain
              dropdownItems={dropdownItems}
              position={'right'}
            />
            <Checkbox
              isChecked={this.state.check1}
              onChange={this.onClick}
              aria-label="card checkbox example"
              id="check-1"
              name="check1"
            />
          </CardActions>
          <CardTitle id="titleId">Header</CardTitle>
        </CardHeader>
        <CardExpandableContent>
          <CardBody>Body</CardBody>
          <CardFooter>Footer</CardFooter>
        </CardExpandableContent>
      </Card>
    );
  }
}
```

### Expandable with icon

```js
import React from 'react';
import {
  Brand,
  Card,
  CardHeader,
  CardHeaderMain,
  CardActions,
  CardTitle,
  CardBody,
  CardFooter,
  CardExpandableContent,
  Checkbox,
  Dropdown,
  DropdownToggle,
  DropdownItem,
  DropdownSeparator,
  DropdownPosition,
  DropdownDirection,
  KebabToggle
} from '@patternfly/react-core';
import pfLogoSmall from './pf-logo-small';
import pfLogo from './pfLogo.svg';

class ExpandableIconCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      check1: false,
      isExpanded: false
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
    this.onClick = (checked, event) => {
      const target = event.target;
      const value = target.type === 'checkbox' ? target.checked : target.value;
      const name = target.name;
      this.setState({ [name]: value });
    };
    this.onExpand = (event, id) => {
      console.log(id);
      this.setState({
        isExpanded: !this.state.isExpanded
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
        Disabled Link
      </DropdownItem>,
      <DropdownItem key="disabled action" isDisabled component="button">
        Disabled Action
      </DropdownItem>,
      <DropdownSeparator key="separator" />,
      <DropdownItem key="separated link">Separated Link</DropdownItem>,
      <DropdownItem key="separated action" component="button">
        Separated Action
      </DropdownItem>
    ];
    return (
      <Card id="image-card" isExpanded={this.state.isExpanded}>
        <CardHeader
          onExpand={this.onExpand}
          toggleButtonProps={{
            id: 'toggle-button',
            'aria-label': 'PatternFly Details',
            'aria-expanded': this.state.isExpanded
          }}
        >
          <img src={pfLogoSmall} alt="PatternFly logo" width="27px" />
          <CardActions>
            <Dropdown
              onSelect={this.onSelect}
              toggle={<KebabToggle onToggle={this.onToggle} />}
              isOpen={isOpen}
              isPlain
              dropdownItems={dropdownItems}
              position={'right'}
            />
            <Checkbox
              isChecked={this.state.check1}
              onChange={this.onClick}
              aria-label="card checkbox example"
              id="check-1"
              name="check1"
            />
          </CardActions>
        </CardHeader>
        <CardExpandableContent>
          <CardBody>Body</CardBody>
          <CardFooter>Footer</CardFooter>
        </CardExpandableContent>
      </Card>
    );
  }
}
```
