---
id: Data list
section: components
cssPrefix: pf-c-data-list
propComponents:
  [
    'DataList',
    'DataListAction',
    'DataListCell',
    'DataListCheck',
    'DataListItem',
    'DataListItemCells',
    'DataListItemRow',
    'DataListToggle',
    'DataListContent',
    'DataListDragButton',
    'DataListControl',
  ]
---

import CodeBranchIcon from '@patternfly/react-icons/dist/js/icons/code-branch-icon';
import AngleDownIcon from '@patternfly/react-icons/dist/js/icons/angle-down-icon';
import AngleRightIcon from '@patternfly/react-icons/dist/js/icons/angle-right-icon';
import { css } from '@patternfly/react-styles';

## Examples

### Basic

```js
import React from 'react';
import {
  Button,
  DataList,
  DataListItem,
  DataListItemRow,
  DataListItemCells,
  DataListCell,
  DataListCheck,
  DataListAction,
  DataListToggle,
  DataListContent,
  Dropdown,
  KebabToggle,
  DropdownItem
} from '@patternfly/react-core';

<DataList aria-label="Simple data list example">
  <DataListItem aria-labelledby="simple-item1">
    <DataListItemRow>
      <DataListItemCells
        dataListCells={[
          <DataListCell key="primary content">
            <span id="simple-item1">Primary content</span>
          </DataListCell>,
          <DataListCell key="secondary content">Secondary content</DataListCell>
        ]}
      />
    </DataListItemRow>
  </DataListItem>
  <DataListItem aria-labelledby="simple-item2">
    <DataListItemRow>
      <DataListItemCells
        dataListCells={[
          <DataListCell isFilled={false} key="secondary content fill">
            <span id="simple-item2">Secondary content (pf-m-no-fill)</span>
          </DataListCell>,
          <DataListCell isFilled={false} alignRight key="secondary content align">
            Secondary content (pf-m-align-right pf-m-no-fill)
          </DataListCell>
        ]}
      />
    </DataListItemRow>
  </DataListItem>
</DataList>
```

### Compact

```js
import React from 'react';
import {
  Button,
  DataList,
  DataListItem,
  DataListItemRow,
  DataListItemCells,
  DataListCell,
  DataListCheck,
  DataListAction,
  DataListToggle,
  DataListContent,
  Dropdown,
  KebabToggle,
  DropdownItem
} from '@patternfly/react-core';

<DataList aria-label="Compact data list example" isCompact>
  <DataListItem aria-labelledby="simple-item1">
    <DataListItemRow>
      <DataListItemCells
        dataListCells={[
          <DataListCell key="primary content">
            <span id="simple-item1">Primary content</span>
          </DataListCell>,
          <DataListCell key="secondary content">Secondary content</DataListCell>
        ]}
      />
    </DataListItemRow>
  </DataListItem>
  <DataListItem aria-labelledby="simple-item2">
    <DataListItemRow>
      <DataListItemCells
        dataListCells={[
          <DataListCell isFilled={false} key="secondary content fill">
            <span id="simple-item2">Secondary content (pf-m-no-fill)</span>
          </DataListCell>,
          <DataListCell isFilled={false} alignRight key="secondary content align">
            Secondary content (pf-m-align-right pf-m-no-fill)
          </DataListCell>
        ]}
      />
    </DataListItemRow>
  </DataListItem>
</DataList>
```

### Checkboxes, actions and additional cells

```js
import React from 'react';
import {
  Button,
  DataList,
  DataListActionModifiers,
  DataListItem,
  DataListItemCells,
  DataListItemRow,
  DataListCell,
  DataListCheck,
  DataListAction,
  Dropdown,
  DropdownItem,
  DropdownPosition,
  KebabToggle
} from '@patternfly/react-core';

class CheckboxActionDataList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isOpen1: false, isOpen2: false, isOpen3: false };

    this.onToggle1 = isOpen1 => {
      this.setState({ isOpen1 });
    };

    this.onSelect1 = event => {
      this.setState(prevState => ({
        isOpen1: !prevState.isOpen1
      }));
    };

    this.onToggle2 = isOpen2 => {
      this.setState({ isOpen2 });
    };

    this.onSelect2 = event => {
      this.setState(prevState => ({
        isOpen2: !prevState.isOpen2
      }));
    };

    this.onToggle3 = isOpen3 => {
      this.setState({ isOpen3 });
    };

    this.onSelect3 = event => {
      this.setState(prevState => ({
        isOpen3: !prevState.isOpen3
      }));
    };
  }

  render() {
    return (
      <DataList aria-label="Checkbox and action data list example">
        <DataListItem aria-labelledby="check-action-item1">
          <DataListItemRow>
            <DataListCheck aria-labelledby="check-action-item1" name="check-action-check1" />
            <DataListItemCells
              dataListCells={[
                <DataListCell key="primary content">
                  <span id="check-action-item1">Primary content</span> Dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod.
                </DataListCell>,
                <DataListCell key="secondary content 1">
                  Secondary content. Dolor sit amet, consectetur adipisicing elit, sed do eiusmod.
                </DataListCell>,
                <DataListCell key="secondary content 2">
                  <span>Tertiary content</span> Dolor sit amet, consectetur adipisicing elit, sed do eiusmod.
                </DataListCell>,
                <DataListCell key="more content 1">
                  <span>More content</span> Dolor sit amet, consectetur adipisicing elit, sed do eiusmod.
                </DataListCell>,
                <DataListCell key="more content 2">
                  <span>More content</span> Dolor sit amet, consectetur adipisicing elit, sed do eiusmod.
                </DataListCell>
              ]}
            />
            <DataListAction
              aria-labelledby="check-action-item1 check-action-action1"
              id="check-action-action1"
              aria-label="Actions"
              isPlainButtonAction
            >
              <Dropdown
                isPlain
                position={DropdownPosition.right}
                isOpen={this.state.isOpen1}
                onSelect={this.onSelect1}
                toggle={<KebabToggle onToggle={this.onToggle1} />}
                dropdownItems={[
                  <DropdownItem key="link">Link</DropdownItem>,
                  <DropdownItem key="action" component="button">
                    Action
                  </DropdownItem>,
                  <DropdownItem key="disabled link" isDisabled>
                    Disabled Link
                  </DropdownItem>
                ]}
              />
            </DataListAction>
          </DataListItemRow>
        </DataListItem>
        <DataListItem aria-labelledby="check-action-item2">
          <DataListItemRow>
            <DataListCheck aria-labelledby="check-action-item2" name="check-action-check2" />
            <DataListItemCells
              dataListCells={[
                <DataListCell key="primary content">
                  <span id="check-action-item2">Primary content - Lorem ipsum</span> dolor sit amet, consectetur
                  adipisicing elit, sed do eiusmod.
                </DataListCell>,
                <DataListCell key="secondary content">
                  Secondary content. Dolor sit amet, consectetur adipisicing elit, sed do eiusmod.
                </DataListCell>
              ]}
            />
            <DataListAction
              visibility={{ lg: 'hidden' }}
              aria-labelledby="check-action-item2 check-action-action2"
              id="check-action-action2"
              aria-label="Actions"
              isPlainButtonAction
            >
              <Dropdown
                isPlain
                position={DropdownPosition.right}
                isOpen={this.state.isOpen2}
                onSelect={this.onSelect2}
                toggle={<KebabToggle onToggle={this.onToggle2} />}
                dropdownItems={[
                  <DropdownItem key="pri-action2" component="button">
                    Primary
                  </DropdownItem>,
                  <DropdownItem key="sec-action2" component="button">
                    Secondary
                  </DropdownItem>
                ]}
              />
            </DataListAction>
            <DataListAction
              visibility={{ default: 'hidden', lg: 'visible' }}
              aria-labelledby="check-action-item2 check-action-action2"
              id="check-action-action2"
              aria-label="Actions"
            >
              <Button variant="primary">Primary</Button>
              <Button variant="secondary">Secondary</Button>
            </DataListAction>
          </DataListItemRow>
        </DataListItem>
        <DataListItem aria-labelledby="check-action-item3">
          <DataListItemRow>
            <DataListCheck aria-labelledby="check-action-item3" name="check-action-check3" />
            <DataListItemCells
              dataListCells={[
                <DataListCell key="primary content">
                  <span id="check-action-item3">Primary content - Lorem ipsum</span> dolor sit amet, consectetur
                  adipisicing elit, sed do eiusmod.
                </DataListCell>,
                <DataListCell key="secondary content">
                  Secondary content. Dolor sit amet, consectetur adipisicing elit, sed do eiusmod.
                </DataListCell>
              ]}
            />
            <DataListAction
              visibility={{ xl: 'hidden' }}
              aria-labelledby="check-action-item3 check-action-action3"
              id="check-action-action3"
              aria-label="Actions"
              isPlainButtonAction
            >
              <Dropdown
                isPlain
                position={DropdownPosition.right}
                isOpen={this.state.isOpen3}
                onSelect={this.onSelect3}
                toggle={<KebabToggle onToggle={this.onToggle3} />}
                dropdownItems={[
                  <DropdownItem key="pri-action3" component="button">
                    Primary
                  </DropdownItem>,
                  <DropdownItem key="sec1-action3" component="button">
                    Secondary
                  </DropdownItem>,
                  <DropdownItem key="sec2-action3" component="button">
                    Secondary
                  </DropdownItem>,
                  <DropdownItem key="sec3-action3" component="button">
                    Secondary
                  </DropdownItem>
                ]}
              />
            </DataListAction>
            <DataListAction
              visibility={{ default: 'hidden', xl: 'visible' }}
              aria-labelledby="check-action-item3 check-action-action3"
              id="check-action-action3"
              aria-label="Actions"
            >
              <Button variant="primary">Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="secondary">Secondary</Button>
            </DataListAction>
          </DataListItemRow>
        </DataListItem>
      </DataList>
    );
  }
}
```

### Actions: single and multiple

```js
import React from 'react';
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownPosition,
  KebabToggle,
  DataList,
  DataListItem,
  DataListCell,
  DataListItemRow,
  DataListCheck,
  DataListItemCells,
  DataListAction
} from '@patternfly/react-core';

class ActionsDataList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false, isDeleted: false };

    this.onToggle = isOpen => {
      this.setState({ isOpen });
    };

    this.onSelect = event => {
      this.setState(prevState => ({
        isOpen: !prevState.isOpen
      }));
    };
  }

  render() {
    return (
      <React.Fragment>
        <DataList aria-label="single action data list example ">
          {!this.state.isDeleted && (
            <DataListItem aria-labelledby="single-action-item1">
              <DataListItemRow>
                <DataListItemCells
                  dataListCells={[
                    <DataListCell key="primary content">
                      <span id="single-action-item1">Single actionable Primary content</span>
                    </DataListCell>,
                    <DataListCell key="secondary content">Single actionable Secondary content</DataListCell>
                  ]}
                />
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
              </DataListItemRow>
            </DataListItem>
          )}
          <DataListItem aria-labelledby="multi-actions-item1">
            <DataListItemRow>
              <DataListItemCells
                dataListCells={[
                  <DataListCell key="primary content">
                    <span id="multi-actions-item1">Multi actions Primary content</span>
                  </DataListCell>,
                  <DataListCell key="secondary content">Multi actions Secondary content</DataListCell>
                ]}
              />
              <DataListAction
                aria-labelledby="multi-actions-item1 multi-actions-action1"
                id="multi-actions-action1"
                aria-label="Actions"
                isPlainButtonAction
              >
                <Dropdown
                  isPlain
                  position={DropdownPosition.right}
                  isOpen={this.state.isOpen}
                  onSelect={this.onSelect}
                  toggle={<KebabToggle onToggle={this.onToggle} />}
                  dropdownItems={[
                    <DropdownItem key="link">Link</DropdownItem>,
                    <DropdownItem key="action" component="button">
                      Action
                    </DropdownItem>,
                    <DropdownItem key="disabled link" isDisabled>
                      Disabled Link
                    </DropdownItem>
                  ]}
                />
              </DataListAction>
            </DataListItemRow>
          </DataListItem>
        </DataList>
      </React.Fragment>
    );
  }
}
```

### Expandable

```js
import React from 'react';
import {
  Button,
  DataList,
  DataListItem,
  DataListItemRow,
  DataListCell,
  DataListCheck,
  DataListAction,
  DataListToggle,
  DataListContent,
  DataListItemCells,
  Dropdown,
  DropdownItem,
  DropdownPosition,
  KebabToggle
} from '@patternfly/react-core';
import CodeBranchIcon from '@patternfly/react-icons/dist/js/icons/code-branch-icon';
import AngleDownIcon from '@patternfly/react-icons/dist/js/icons/angle-down-icon';
import AngleRightIcon from '@patternfly/react-icons/dist/js/icons/angle-right-icon';

class ExpandableDataList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: ['ex-toggle1', 'ex-toggle3'],
      isOpen1: false,
      isOpen2: false,
      isOpen3: false,
      allExpanded: false
    };

    this.onToggleAll = () => {
      this.setState(
        {
          allExpanded: !this.state.allExpanded
        },
        () => {
          if (this.state.allExpanded) {
            this.setState({
              expanded: ['ex-toggle1', 'ex-toggle2', 'ex-toggle3']
            });
          } else {
            this.setState({
              expanded: []
            });
          }
        }
      );
    };

    this.onToggle1 = isOpen1 => {
      this.setState({ isOpen1 });
    };

    this.onToggle2 = isOpen2 => {
      this.setState({ isOpen2 });
    };

    this.onToggle3 = isOpen3 => {
      this.setState({ isOpen3 });
    };

    this.onSelect1 = event => {
      this.setState(prevState => ({
        isOpen1: !prevState.isOpen1
      }));
    };

    this.onSelect2 = event => {
      this.setState(prevState => ({
        isOpen2: !prevState.isOpen2
      }));
    };

    this.onSelect3 = event => {
      this.setState(prevState => ({
        isOpen3: !prevState.isOpen3
      }));
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
      <React.Fragment>
        <Button onClick={this.onToggleAll}>
          {this.state.allExpanded && <AngleDownIcon />}
          {!this.state.allExpanded && <AngleRightIcon />}
          Expand/Collapse All
        </Button>
        <br />
        <br />
        <DataList aria-label="Expandable data list example">
          <DataListItem aria-labelledby="ex-item1" isExpanded={this.state.expanded.includes('ex-toggle1')}>
            <DataListItemRow>
              <DataListToggle
                onClick={() => toggle('ex-toggle1')}
                isExpanded={this.state.expanded.includes('ex-toggle1')}
                id="ex-toggle1"
                aria-controls="ex-expand1"
              />
              <DataListItemCells
                dataListCells={[
                  <DataListCell isIcon key="icon">
                    <CodeBranchIcon />
                  </DataListCell>,
                  <DataListCell key="primary content">
                    <div id="ex-item1">Primary content</div>
                    <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
                    <a href="#">link</a>
                  </DataListCell>,
                  <DataListCell key="secondary content">
                    <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
                  </DataListCell>,
                  <DataListCell key="secondary content 2">
                    <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
                  </DataListCell>
                ]}
              />
              <DataListAction
                aria-labelledby="ex-item1 ex-action1"
                id="ex-action1"
                aria-label="Actions"
                isPlainButtonAction
              >
                <Dropdown
                  isPlain
                  position={DropdownPosition.right}
                  isOpen={this.state.isOpen1}
                  onSelect={this.onSelect1}
                  toggle={<KebabToggle onToggle={this.onToggle1} />}
                  dropdownItems={[
                    <DropdownItem key="link">Link</DropdownItem>,
                    <DropdownItem key="action" component="button">
                      Action
                    </DropdownItem>,
                    <DropdownItem key="disabled link" isDisabled>
                      Disabled Link
                    </DropdownItem>
                  ]}
                />
              </DataListAction>
            </DataListItemRow>
            <DataListContent
              aria-label="Primary Content Details"
              id="ex-expand1"
              isHidden={!this.state.expanded.includes('ex-toggle1')}
            >
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
              </p>
            </DataListContent>
          </DataListItem>
          <DataListItem aria-labelledby="ex-item2" isExpanded={this.state.expanded.includes('ex-toggle2')}>
            <DataListItemRow>
              <DataListToggle
                onClick={() => toggle('ex-toggle2')}
                isExpanded={this.state.expanded.includes('ex-toggle2')}
                id="ex-toggle2"
                aria-controls="ex-expand2"
              />
              <DataListItemCells
                dataListCells={[
                  <DataListCell isIcon key="icon">
                    <CodeBranchIcon />
                  </DataListCell>,
                  <DataListCell key="secondary content">
                    <div id="ex-item2">Secondary content</div>
                    <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
                  </DataListCell>,
                  <DataListCell key="secondary content 2">
                    <span>Lorem ipsum dolor sit amet.</span>
                  </DataListCell>,
                  <DataListCell key="secondary content3">
                    <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
                  </DataListCell>
                ]}
              />
              <DataListAction
                aria-labelledby="ex-item2 ex-action2"
                id="ex-action2"
                aria-label="Actions"
                isPlainButtonAction
              >
                <Dropdown
                  isPlain
                  position={DropdownPosition.right}
                  isOpen={this.state.isOpen2}
                  onSelect={this.onSelect2}
                  toggle={<KebabToggle onToggle={this.onToggle2} />}
                  dropdownItems={[
                    <DropdownItem key="link">Link</DropdownItem>,
                    <DropdownItem key="action" component="button">
                      Action
                    </DropdownItem>,
                    <DropdownItem key="disabled link" isDisabled>
                      Disabled Link
                    </DropdownItem>
                  ]}
                />
              </DataListAction>
            </DataListItemRow>
            <DataListContent
              aria-label="Primary Content Details"
              id="ex-expand2"
              isHidden={!this.state.expanded.includes('ex-toggle2')}
            >
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
              </p>
            </DataListContent>
          </DataListItem>
          <DataListItem aria-labelledby="ex-item3" isExpanded={this.state.expanded.includes('ex-toggle3')}>
            <DataListItemRow>
              <DataListToggle
                onClick={() => toggle('ex-toggle3')}
                isExpanded={this.state.expanded.includes('ex-toggle3')}
                id="ex-toggle3"
                aria-controls="ex-expand3"
              />
              <DataListItemCells
                dataListCells={[
                  <DataListCell isIcon key="icon">
                    <CodeBranchIcon />
                  </DataListCell>,
                  <DataListCell key="tertiary content">
                    <div id="ex-item3">Tertiary content</div>
                    <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
                  </DataListCell>,
                  <DataListCell key="secondary content">
                    <span>Lorem ipsum dolor sit amet.</span>
                  </DataListCell>,
                  <DataListCell key="secondary content 2">
                    <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
                  </DataListCell>
                ]}
              />
              <DataListAction
                aria-labelledby="ex-item3 ex-action3"
                id="ex-action3"
                aria-label="Actions"
                isPlainButtonAction
              >
                <Dropdown
                  isPlain
                  position={DropdownPosition.right}
                  isOpen={this.state.isOpen3}
                  onSelect={this.onSelect3}
                  toggle={<KebabToggle onToggle={this.onToggle3} />}
                  dropdownItems={[
                    <DropdownItem key="link">Link</DropdownItem>,
                    <DropdownItem key="action" component="button">
                      Action
                    </DropdownItem>,
                    <DropdownItem key="disabled link" isDisabled>
                      Disabled Link
                    </DropdownItem>
                  ]}
                />
              </DataListAction>
            </DataListItemRow>
            <DataListContent
              aria-label="Primary Content Details"
              id="ex-expand3"
              isHidden={!this.state.expanded.includes('ex-toggle3')}
              hasNoPadding
            >
              This expanded section has no padding.
            </DataListContent>
          </DataListItem>
        </DataList>
      </React.Fragment>
    );
  }
}
```

### Width modifiers

```js
import React from 'react';
import {
  Button,
  DataList,
  DataListItem,
  DataListCell,
  DataListCheck,
  DataListAction,
  DataListToggle,
  DataListContent,
  DataListItemCells,
  DataListItemRow,
  Dropdown,
  DropdownItem,
  KebabToggle
} from '@patternfly/react-core';

class ModifiersDataList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { show: true, isOpen1: false, isOpen2: false, isOpen3: false };

    this.onToggle1 = isOpen1 => {
      this.setState({ isOpen1 });
    };

    this.onToggle2 = isOpen2 => {
      this.setState({ isOpen2 });
    };

    this.onSelect1 = event => {
      this.setState(prevState => ({
        isOpen1: !prevState.isOpen1
      }));
    };

    this.onSelect2 = event => {
      this.setState(prevState => ({
        isOpen2: !prevState.isOpen2
      }));
    };
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
            <DataListItemRow>
              <DataListCheck aria-labelledby="width-ex1-item1" name="width-ex1-item1" />
              <DataListItemCells
                dataListCells={[
                  <DataListCell key="default">
                    <div style={previewPlaceholder}>
                      <b id="width-ex1-item1">default</b>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    </div>
                  </DataListCell>,
                  <DataListCell key="default2">
                    <div style={previewPlaceholder}>
                      <b>default</b>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua.
                      </p>
                    </div>
                  </DataListCell>
                ]}
              />
            </DataListItemRow>
          </DataListItem>
        </DataList>
      </div>,
      <div key="example-2">
        <h2>Flex modifiers - example 2</h2>
        <DataList aria-label="Width modifier data list example 2">
          <DataListItem aria-labelledby="width-ex2-item1">
            <DataListItemRow>
              <DataListCheck aria-labelledby="width-ex2-item1" name="width-ex2-item1" />
              <DataListItemCells
                dataListCells={[
                  <DataListCell width={2} key="width 2">
                    <div style={previewPlaceholder}>
                      <b id="width-ex2-item1">width 2</b>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
                    </div>
                  </DataListCell>,
                  <DataListCell width={4} key="width 4">
                    <div style={previewPlaceholder}>
                      <b>width 4</b>
                      <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                  </DataListCell>
                ]}
              />
              <DataListAction
                aria-labelledby="width-ex2-item1 width-ex2-action1"
                id="width-ex2-action1"
                aria-label="Actions"
                isPlainButtonAction
              >
                <Dropdown
                  isPlain
                  position={DropdownPosition.right}
                  isOpen={this.state.isOpen1}
                  onSelect={this.onSelect1}
                  toggle={<KebabToggle onToggle={this.onToggle1} />}
                  dropdownItems={[
                    <DropdownItem key="link">Link</DropdownItem>,
                    <DropdownItem key="action" component="button">
                      Action
                    </DropdownItem>,
                    <DropdownItem key="disabled link" isDisabled>
                      Disabled Link
                    </DropdownItem>
                  ]}
                />
              </DataListAction>
            </DataListItemRow>
          </DataListItem>
        </DataList>
      </div>,
      <div key="example-3">
        <h2>Flex modifiers - example 3</h2>
        <DataList aria-label="Width modifier data list example 3">
          <DataListItem aria-labelledby="width-ex3-item1" isExpanded={this.state.show}>
            <DataListItemRow>
              <DataListToggle
                isExpanded={this.state.show}
                id="width-ex3-toggle1"
                aria-controls="width-ex3-expand1"
                onClick={() => this.setState({ show: !this.state.show })}
              />
              <DataListCheck aria-labelledby="width-ex3-item1" name="width-ex3-item1" />
              <DataListItemCells
                dataListCells={[
                  <DataListCell width={5} key="width 5">
                    <div style={previewPlaceholder}>
                      <b id="width-ex3-item1">width 5</b>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    </div>
                  </DataListCell>,
                  <DataListCell width={2} key="width 2">
                    <div style={previewPlaceholder}>
                      <b>width 2</b>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    </div>
                  </DataListCell>,
                  <DataListCell key="default">
                    <div style={previewPlaceholder}>default</div>
                  </DataListCell>
                ]}
              />
              <DataListAction
                aria-labelledby="width-ex3-item1 width-ex3-action1"
                id="width-ex3-action1"
                aria-label="Actions"
                isPlainButtonAction
              >
                <Dropdown
                  isPlain
                  position={DropdownPosition.right}
                  isOpen={this.state.isOpen2}
                  onSelect={this.onSelect2}
                  toggle={<KebabToggle onToggle={this.onToggle2} />}
                  dropdownItems={[
                    <DropdownItem key="link">Link</DropdownItem>,
                    <DropdownItem key="action" component="button">
                      Action
                    </DropdownItem>,
                    <DropdownItem key="disabled link" isDisabled>
                      Disabled Link
                    </DropdownItem>
                  ]}
                />
              </DataListAction>
            </DataListItemRow>
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

### Selectable rows

```js
import React from 'react';
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownPosition,
  KebabToggle,
  DataList,
  DataListItem,
  DataListCell,
  DataListItemRow,
  DataListCheck,
  DataListItemCells,
  DataListAction
} from '@patternfly/react-core';

class SelectableDataList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen1: false,
      isOpen2: false,
      selectedDataListItemId: ''
    };

    this.onToggle1 = isOpen1 => {
      this.setState({ isOpen1 });
    };

    this.onToggle2 = isOpen2 => {
      this.setState({ isOpen2 });
    };

    this.onSelect1 = event => {
      this.setState(prevState => ({
        isOpen1: !prevState.isOpen1
      }));
    };

    this.onSelect2 = event => {
      this.setState(prevState => ({
        isOpen2: !prevState.isOpen2
      }));
    };

    this.onSelectDataListItem = id => {
      this.setState({ selectedDataListItemId: id });
    };
  }

  render() {
    return (
      <React.Fragment>
        <DataList
          aria-label="selectable data list example"
          selectedDataListItemId={this.state.selectedDataListItemId}
          onSelectDataListItem={this.onSelectDataListItem}
        >
          {!this.state.isDeleted && (
            <DataListItem aria-labelledby="selectable-action-item1" id="item1">
              <DataListItemRow>
                <DataListItemCells
                  dataListCells={[
                    <DataListCell key="primary content">
                      <span id="selectable-action-item1">Single actionable Primary content</span>
                    </DataListCell>,
                    <DataListCell key="secondary content">Single actionable Secondary content</DataListCell>
                  ]}
                />
                <DataListAction
                  aria-labelledby="selectable-action-item1 selectable-action-action1"
                  id="selectable-action-action1"
                  aria-label="Actions"
                  isPlainButtonAction
                >
                  <Dropdown
                    isPlain
                    position={DropdownPosition.right}
                    isOpen={this.state.isOpen1}
                    onSelect={this.onSelect1}
                    toggle={<KebabToggle onToggle={this.onToggle1} />}
                    dropdownItems={[
                      <DropdownItem key="link">Link</DropdownItem>,
                      <DropdownItem key="action" component="button">
                        Action
                      </DropdownItem>,
                      <DropdownItem key="disabled link" isDisabled>
                        Disabled Link
                      </DropdownItem>
                    ]}
                  />
                </DataListAction>
              </DataListItemRow>
            </DataListItem>
          )}
          <DataListItem aria-labelledby="selectable-actions-item2" id="item2">
            <DataListItemRow>
              <DataListItemCells
                dataListCells={[
                  <DataListCell key="primary content">
                    <span id="selectable-actions-item2">Selectable actions Primary content</span>
                  </DataListCell>,
                  <DataListCell key="secondary content">Selectable actions Secondary content</DataListCell>
                ]}
              />
              <DataListAction
                aria-labelledby="selectable-actions-item2 selectable-actions-action2"
                id="selectable-actions-action2"
                aria-label="Actions"
                isPlainButtonAction
              >
                <Dropdown
                  isPlain
                  position={DropdownPosition.right}
                  isOpen={this.state.isOpen2}
                  onSelect={this.onSelect2}
                  toggle={<KebabToggle onToggle={this.onToggle2} />}
                  dropdownItems={[
                    <DropdownItem key="link">Link</DropdownItem>,
                    <DropdownItem key="action" component="button">
                      Action
                    </DropdownItem>,
                    <DropdownItem key="disabled link" isDisabled>
                      Disabled Link
                    </DropdownItem>
                  ]}
                />
              </DataListAction>
            </DataListItemRow>
          </DataListItem>
        </DataList>
      </React.Fragment>
    );
  }
}
```

### Controlling text

```js
import React from 'react';
import {
  Button,
  DataList,
  DataListItem,
  DataListItemRow,
  DataListItemCells,
  DataListCell,
  DataListCheck,
  DataListAction,
  DataListWrapModifier
} from '@patternfly/react-core';

<DataList aria-label="Simple data list example">
  <DataListItem aria-labelledby="simple-item1">
    <DataListItemRow>
      <DataListItemCells
        dataListCells={[
          <DataListCell key="primary content" wrapModifier={DataListWrapModifier.breakWord}>
            <span id="simple-item1">Primary content</span>
          </DataListCell>,
          <DataListCell key="secondary content" wrapModifier={DataListWrapModifier.truncate}>
            Really really really really really really really really really really really really really really long
            description that should be truncated before it ends
          </DataListCell>
        ]}
      />
    </DataListItemRow>
  </DataListItem>
</DataList>
```

### Draggable

```js
import React from 'react';
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownPosition,
  KebabToggle,
  DataList,
  DataListItem,
  DataListCell,
  DataListItemRow,
  DataListCheck,
  DataListControl,
  DataListDragButton,
  DataListItemCells,
  DataListAction
} from '@patternfly/react-core';

class DraggableDataList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      liveText: '',
      id: '',
      itemOrder: ['data1', 'data2', 'data3', 'data4']
    };

    this.onDragStart = id => {
      this.setState({
        id: id,
        liveText: `Dragging started for item id: ${id}.`
      });
    };

    this.onDragMove = (oldIndex, newIndex) => {
      const { id } = this.state;
      this.setState({
        liveText: `Dragging item ${id}.`
      });
    };

    this.onDragCancel = () => {
      this.setState({
        liveText: `Dragging cancelled. List is unchanged.`
      });
    };

    this.onDragFinish = itemOrder => {
      this.setState({
        liveText: `Dragging finished`,
        itemOrder
      });
    };
  }

  render() {
    const { list, liveText } = this.state;
    return (
      <React.Fragment>
        <DataList
          aria-label="draggable data list example"
          isCompact
          onDragFinish={this.onDragFinish}
          onDragStart={this.onDragStart}
          onDragMove={this.onDragMove}
          onDragCancel={this.onDragCancel}
          itemOrder={this.state.itemOrder}
        >
          <DataListItem aria-labelledby="simple-item1" id="data1" key="1">
            <DataListItemRow>
              <DataListControl>
                <DataListDragButton
                  aria-label="Reorder"
                  aria-labelledby="simple-item1"
                  aria-describedby="Press space or enter to begin dragging, and use the arrow keys to navigate up or down. Press enter to confirm the drag, or any other key to cancel the drag operation."
                  aria-pressed="false"
                  isDisabled
                />
                <DataListCheck aria-labelledby="simple-item1" name="check1" otherControls />
              </DataListControl>
              <DataListItemCells
                dataListCells={[
                  <DataListCell key="item1">
                    <span id="simple-item1">Item 1</span>
                  </DataListCell>
                ]}
              />
            </DataListItemRow>
          </DataListItem>
          <DataListItem aria-labelledby="simple-item2" id="data2" key="2">
            <DataListItemRow>
              <DataListControl>
                <DataListDragButton
                  aria-label="Reorder"
                  aria-labelledby="simple-item2"
                  aria-describedby="Press space or enter to begin dragging, and use the arrow keys to navigate up or down. Press enter to confirm the drag, or any other key to cancel the drag operation."
                  aria-pressed="false"
                />
                <DataListCheck aria-labelledby="simple-item2" name="check2" otherControls />
              </DataListControl>
              <DataListItemCells
                dataListCells={[
                  <DataListCell key="item2">
                    <span id="simple-item2">Item 2</span>
                  </DataListCell>
                ]}
              />
            </DataListItemRow>
          </DataListItem>
          <DataListItem aria-labelledby="simple-item3" id="data3" key="3">
            <DataListItemRow>
              <DataListControl>
                <DataListDragButton
                  aria-label="Reorder"
                  aria-labelledby="simple-item3"
                  aria-describedby="Press space or enter to begin dragging, and use the arrow keys to navigate up or down. Press enter to confirm the drag, or any other key to cancel the drag operation."
                  aria-pressed="false"
                />
                <DataListCheck aria-labelledby="simple-item3" name="check3" otherControls />
              </DataListControl>
              <DataListItemCells
                dataListCells={[
                  <DataListCell key="item3">
                    <span id="simple-item3">Item 3</span>
                  </DataListCell>
                ]}
              />
            </DataListItemRow>
          </DataListItem>
          <DataListItem aria-labelledby="simple-item4" id="data4" key="4">
            <DataListItemRow>
              <DataListControl>
                <DataListDragButton
                  aria-label="Reorder"
                  aria-labelledby="simple-item4"
                  aria-describedby="Press space or enter to begin dragging, and use the arrow keys to navigate up or down. Press enter to confirm the drag, or any other key to cancel the drag operation."
                  aria-pressed="false"
                />
                <DataListCheck aria-labelledby="simple-item4" name="check4" otherControls />
              </DataListControl>
              <DataListItemCells
                dataListCells={[
                  <DataListCell key="item4">
                    <span id="simple-item4">Item 4</span>
                  </DataListCell>
                ]}
              />
            </DataListItemRow>
          </DataListItem>
        </DataList>
        <div className="pf-screen-reader" aria-live="assertive">
          {liveText}
        </div>
      </React.Fragment>
    );
  }
}
```

### Small grid breakpoint

```js
import React from 'react';
import {
  DataList,
  DataListItem,
  DataListItemRow,
  DataListItemCells,
  DataListCell,
  DataListGridBreakpoint
} from '@patternfly/react-core';

<DataList aria-label="Simple data list example" gridBreakpoint="sm">
  <DataListItem aria-labelledby="simple-item1">
    <DataListItemRow>
      <DataListItemCells
        dataListCells={[
          <DataListCell key="primary content">
            <span id="simple-item1">Primary content</span>
          </DataListCell>,
          <DataListCell key="secondary content">
            Really really really really really really really really really really really really really really long
            description that should be truncated before it ends
          </DataListCell>
        ]}
      />
    </DataListItemRow>
  </DataListItem>
</DataList>
```
