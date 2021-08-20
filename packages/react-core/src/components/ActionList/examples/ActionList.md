---
id: Action list
section: components
cssPrefix: pf-c-action-list
propComponents: ['ActionList', 'ActionListGroup', 'ActionListItem']
---

import TimesIcon from '@patternfly/react-icons/dist/js/icons/times-icon';
import CheckIcon from '@patternfly/react-icons/dist/js/icons/check-icon';

## Examples

### Action list single group

```js
import React from 'react';
import {
  ActionList,
  ActionListItem,
  Button,
  Dropdown,
  DropdownItem,
  DropdownSeparator,
  KebabToggle
} from '@patternfly/react-core';

class BasicActionList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
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
      <React.Fragment>
        <ActionList>
          <ActionListItem>
            <Button variant="primary" id="next-button">
              Next
            </Button>
          </ActionListItem>
          <ActionListItem>
            <Button variant="secondary" id="back-button">
              Back
            </Button>
          </ActionListItem>
        </ActionList>
        <br />
        With kebab
        <ActionList>
          <ActionListItem>
            <Button variant="primary" id="next-button2">
              Next
            </Button>
          </ActionListItem>
          <ActionListItem>
            <Button variant="secondary" id="back-button2">
              Back
            </Button>
          </ActionListItem>
          <ActionListItem>
            <Dropdown
              onSelect={this.onSelect}
              toggle={<KebabToggle onToggle={this.onToggle} />}
              isOpen={this.state.isOpen}
              isPlain
              dropdownItems={dropdownItems}
              position="right"
            />
          </ActionListItem>
        </ActionList>
      </React.Fragment>
    );
  }
}
```

### Action list with icons

```js
import React from 'react';
import { ActionList, ActionListItem, Button } from '@patternfly/react-core';
import TimesIcon from '@patternfly/react-icons/dist/esm/icons/times-icon';
import CheckIcon from '@patternfly/react-icons/dist/esm/icons/check-icon';

class IconsActionList extends React.Component {
  render() {
    return (
      <ActionList isIconList>
        <ActionListItem>
          <Button variant="plain" id="times-button" aria-label="times icon button">
            <TimesIcon />
          </Button>
        </ActionListItem>
        <ActionListItem>
          <Button variant="plain" id="check-button" aria-label="check icon button">
            <CheckIcon />
          </Button>
        </ActionListItem>
      </ActionList>
    );
  }
}
```

### Action list multiple groups

```js
import React from 'react';
import { ActionList, ActionListGroup, ActionListItem, Button } from '@patternfly/react-core';

class GroupsActionList extends React.Component {
  render() {
    return (
      <ActionList>
        <ActionListGroup>
          <ActionListItem>
            <Button variant="primary" id="next-button">
              Next
            </Button>
          </ActionListItem>
          <ActionListItem>
            <Button variant="secondary" id="back-button">
              Back
            </Button>
          </ActionListItem>
        </ActionListGroup>
        <ActionListGroup>
          <ActionListItem>
            <Button variant="primary" id="submit-button">
              Submit
            </Button>
          </ActionListItem>
          <ActionListItem>
            <Button variant="link" id="cancel-button">
              Cancel
            </Button>
          </ActionListItem>
        </ActionListGroup>
      </ActionList>
    );
  }
}
```

### Action list with cancel button

```js
import React from 'react';
import { ActionList, ActionListGroup, ActionListItem, Button } from '@patternfly/react-core';

class CancelActionList extends React.Component {
  render() {
    return (
      <React.Fragment>
        In modals, forms, data lists
        <ActionList>
          <ActionListItem>
            <Button variant="primary" id="save-button">
              Save
            </Button>
          </ActionListItem>
          <ActionListItem>
            <Button variant="link" id="cancel-button">
              Cancel
            </Button>
          </ActionListItem>
        </ActionList>
        <br />
        In wizards
        <ActionList>
          <ActionListGroup>
            <ActionListItem>
              <Button variant="primary" id="next-button">
                Next
              </Button>
            </ActionListItem>
            <ActionListItem>
              <Button variant="secondary" id="back-button">
                Back
              </Button>
            </ActionListItem>
          </ActionListGroup>
          <ActionListGroup>
            <ActionListItem>
              <Button variant="link" id="cancel-button2">
                Cancel
              </Button>
            </ActionListItem>
          </ActionListGroup>
        </ActionList>
      </React.Fragment>
    );
  }
}
```
