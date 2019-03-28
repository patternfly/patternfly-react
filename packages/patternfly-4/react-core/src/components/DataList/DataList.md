---
title: "Data List"
cssPrefix: "pf-c-data-list"
---
## Simple Data List
```js
import React from 'react';
import { DataList, DataListItem, DataListCell } from '@patternfly/react-core';

SimpleDataList = () => (
  <DataList aria-label="Simple data list example">
    <DataListItem aria-labelledby="simple-item1">
      <DataListCell>
        <span id="simple-item1">Primary content</span>
      </DataListCell>
      <DataListCell>Secondary content</DataListCell>
    </DataListItem>
    <DataListItem aria-labelledby="simple-item2">
      <DataListCell>
        <span id="simple-item2">Second list item title</span>
      </DataListCell>
      <DataListCell>Secondary content</DataListCell>
    </DataListItem>
  </DataList>
);
```

## Data List Checkboxes, Actions and Additional Cells
```js
import React from 'react';
import { DataList, DataListItem, DataListCell, DataListCheck, DataListAction } from '@patternfly/react-core';

CheckboxActionDataList = () =>  (
  <DataList aria-label="Checkbox and action data list example">
    <DataListItem aria-labelledby="check-action-item1">
      <DataListCheck aria-labelledby="check-action-item1" name="check-action-check1" />
      <DataListCell>
        <span id="check-action-item1">Primary content</span>
      </DataListCell>
      <DataListCell>Secondary content</DataListCell>
      <DataListAction
        aria-labelledby="check-action-item1 check-action-action1"
        id="check-action-action1"
        aria-label="Actions"
      />
    </DataListItem>
    <DataListItem aria-labelledby="check-action-item2">
      <DataListCheck aria-labelledby="check-action-item2" name="check-action-check2" />
      <DataListCell>
        <span id="check-action-item2">Primary content - Lorem ipsum</span> dolor sit amet, consectetur adipisicing
        elit, sed do eiusmod.
      </DataListCell>
      <DataListCell>Secondary content</DataListCell>
      <DataListAction
        aria-labelledby="check-action-item2 check-action-action2"
        id="check-action-action2"
        aria-label="Actions"
      />
    </DataListItem>
  </DataList>
);
```

## Data List Actions: single and multiple
```js
import React from 'react';
import {
  Button,
  Dropdown,
  KebabToggle,
  DropdownItem,
  DataList,
  DataListItem,
  DataListCell,
  DataListCheck,
  DataListAction
} from '@patternfly/react-core';

class ActionsDataList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false, isDeleted: false };
  }
  render() {
    return (
      <React.Fragment>
        <DataList aria-label="single action data list example ">
          {!this.state.isDeleted && (
            <DataListItem aria-labelledby="single-action-item1">
              <DataListCell>
                <span id="single-action-item1">Single actionable Primary content</span>
              </DataListCell>
              <DataListCell>Single actionable Secondary content</DataListCell>
              <DataListAction
                aria-labelledby="single-action-item1 single-action-action1"
                id="single-action-action1"
                aria-label="Actions"
              >
                <Button
                  onClick={() => {
                    if (confirm('Are you sure?')) {
                      this.setState({ isDeleted: true });
                    }
                  }}
                  variant="primary"
                  key="delete-action"
                >
                  Delete
                </Button>
              </DataListAction>
            </DataListItem>
          )}
          <DataListItem aria-labelledby="multi-actions-item1">
            <DataListCell>
              <span id="multi-actions-item1">Multi actions Primary content</span>
            </DataListCell>
            <DataListCell>Multi actions Secondary content</DataListCell>
            <DataListAction
              aria-labelledby="multi-actions-item1 multi-actions-action1"
              id="multi-actions-action1"
              aria-label="Actions"
              actions={[
                <DropdownItem key="link">Link</DropdownItem>,
                <DropdownItem key="action" component="button">
                  Action
                </DropdownItem>,
                <DropdownItem key="disabled link" isDisabled>
                  Disabled Link
                </DropdownItem>
              ]}
            />
            } />
          </DataListItem>
        </DataList>
      </React.Fragment>
    );
  }
}
```

## Data List Expandable
```js
import React from 'react';
import {
  DataList,
  DataListItem,
  DataListCell,
  DataListToggle,
  DataListContent,
  DataListCheck,
  DataListAction
} from '@patternfly/react-core';

class ExpandableDataList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: ['ex-toggle1']
    };
  }

render() {
    const toggle = id => {
      const expanded = this.state.expanded;
      const index = expanded.indexOf(id);
      const newExpanded =
        index >= 0 ? [...expanded.slice(0, index), ...expanded.slice(index + 1, expanded.length)] : [...expanded, id];
      this.setState(() => ({ expanded: newExpanded }));
    };
    return (
      <DataList aria-label="Expandable data list example">
        <DataListItem aria-labelledby="ex-item1" isExpanded={this.state.expanded.includes('ex-toggle1')}>
          <DataListToggle
            onClick={() => toggle('ex-toggle1')}
            isExpanded={this.state.expanded.includes('ex-toggle1')}
            id="ex-toggle1"
            aria-controls="ex-expand1"
          />
          <DataListCheck aria-labelledby="ex-item1" name="ex-check1" />
          <DataListCell>
            <div id="ex-item1">Primary content</div>
            <a href="#">link</a>
          </DataListCell>
          <DataListCell>
            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
          </DataListCell>
          <DataListAction aria-labelledby="ex-item1 ex-action1" id="ex-action1" aria-label="Actions" />
          <DataListContent aria-label="Primary Content Details" id="ex-expand1" isHidden={!this.state.expanded.includes('ex-toggle1')}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </p>
          </DataListContent>
        </DataListItem>
        <DataListItem aria-labelledby="ex-item2" isExpanded={this.state.expanded.includes('ex-toggle2')}>
          <DataListToggle
            onClick={() => toggle('ex-toggle2')}
            isExpanded={this.state.expanded.includes('ex-toggle2')}
            id="ex-toggle2"
            aria-controls="ex-expand2"
          />
          <DataListCheck aria-labelledby="ex-item2" name="ex-check2" />
          <DataListCell>
            <div id="ex-item2">Primary content</div>
          </DataListCell>
          <DataListCell>
            <span>Lorem ipsum dolor sit amet.</span>
          </DataListCell>
          <DataListAction aria-labelledby="ex-item2 ex-action2" id="ex-action2" aria-label="Actions" />
          <DataListContent aria-label="Primary Content Details" id="ex-expand2" isHidden={!this.state.expanded.includes('ex-toggle2')}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </p>
          </DataListContent>
        </DataListItem>
      </DataList>
    );
  }
}
```

## Data List Width Modifiers
```js
import React from 'react';
import {
  DataList,
  DataListItem,
  DataListCell,
  DataListCheck,
  DataListAction,
  DataListToggle,
  DataListContent
} from '@patternfly/react-core';

class ModifiersDataList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { show: true };
  }
  render() {
    const previewPlaceholder = {
      display: 'block',
      width: '100%',
      padding: '.25rem .5rem',
      color: '#004e8a',
      backgroundColor: '#def3ff',
      border: '1px solid rgba(0,0,0,.1)',
      borderRadius: '4px'
    };

    return [
      <div key="example-1">
        <h2>Default fitting - example 1</h2>
        <DataList aria-label="Width modifier data list example 1">
          <DataListItem aria-labelledby="width-ex1-item1">
            <DataListCheck aria-labelledby="width-ex1-check1" name="width-ex1-item1" />
            <DataListCell>
              <div style={previewPlaceholder}>
                <b id="width-ex1-item1">default</b>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              </div>
            </DataListCell>
            <DataListCell>
              <div style={previewPlaceholder}>
                <b>default</b>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
                  et dolore magna aliqua.
                </p>
              </div>
            </DataListCell>
          </DataListItem>
        </DataList>
      </div>,
      <div key="example-2">
        <h2>Flex modifiers - example 2</h2>
        <DataList aria-label="Width modifier data list example 2">
          <DataListItem aria-labelledby="width-ex2-item1">
            <DataListCheck aria-labelledby="width-ex2-check1" name="width-ex2-check1" />
            <DataListCell width={2}>
              <div style={previewPlaceholder}>
                <b id="width-ex2-item1">width 2</b>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
              </div>
            </DataListCell>
            <DataListCell width={4}>
              <div style={previewPlaceholder}>
                <b>width 4</b>
                <p>Lorem ipsum dolor sit amet.</p>
              </div>
            </DataListCell>
            <DataListAction
              aria-labelledby="width-ex2-item1 width-ex2-action1"
              id="width-ex2-action1"
              aria-label="Actions"
            />
          </DataListItem>
        </DataList>
      </div>,
      <div key="example-3">
        <h2>Flex modifiers - example 3</h2>
        <DataList aria-label="Width modifier data list example 3">
          <DataListItem aria-labelledby="width-ex3-item1" isExpanded={this.state.show}>
            <DataListToggle
              isExpanded={this.state.show}
              id="width-ex3-toggle1"
              aria-controls="width-ex3-expand1"
              onClick={() => this.setState({ show: !this.state.show })}
            />
            <DataListCheck aria-labelledby="width-ex3-check1" name="width-ex3-check1" />
            <DataListCell width={5}>
              <div style={previewPlaceholder}>
                <b id="width-ex3-item1">width 5</b>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              </div>
            </DataListCell>
            <DataListCell width={2}>
              <div style={previewPlaceholder}>
                <b>width 2</b>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              </div>
            </DataListCell>
            <DataListCell>
              <div style={previewPlaceholder}>default</div>
            </DataListCell>
            <DataListAction
              aria-labelledby="width-ex3-item1 width-ex3-action1"
              id="width-ex3-action1"
              aria-label="Actions"
            />
            <DataListContent aria-label="Primary Content Details" id="width-ex3-expand1" isHidden={!this.state.show}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
              </p>
            </DataListContent>
          </DataListItem>
        </DataList>
      </div>
    ];
  }
}
```