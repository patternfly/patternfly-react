---
id: Data list
section: components
---

import CodeBranchIcon from '@patternfly/react-icons/dist/esm/icons/code-branch-icon';
import AngleDownIcon from '@patternfly/react-icons/dist/esm/icons/angle-down-icon';
import AngleRightIcon from '@patternfly/react-icons/dist/esm/icons/angle-right-icon';
import EllipsisVIcon from '@patternfly/react-icons/dist/esm/icons/ellipsis-v-icon';
import { css } from '@patternfly/react-styles';

## Demos

### Expandable control in toolbar

```js
import React from 'react';
import {
  Button,
  DataList,
  DataListItem,
  DataListItemRow,
  DataListCell,
  DataListAction,
  DataListToggle,
  DataListContent,
  DataListItemCells,
  Dropdown,
  DropdownItem,
  DropdownList,
  MenuToggle,
  Toolbar,
  ToolbarGroup,
  ToolbarItem,
  ToolbarExpandIconWrapper,
  ToolbarContent,
  SearchInput,
  Tooltip,
  Icon
} from '@patternfly/react-core';
import CodeBranchIcon from '@patternfly/react-icons/dist/esm/icons/code-branch-icon';
import AngleRightIcon from '@patternfly/react-icons/dist/esm/icons/angle-right-icon';
import EllipsisVIcon from '@patternfly/react-icons/dist/esm/icons/ellipsis-v-icon';

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

    this.onToggle1 = () => {
      this.setState((prevState) => ({ isOpen1: !prevState.isOpen1 }));
    };

    this.onToggle2 = () => {
      this.setState((prevState) => ({ isOpen2: !prevState.isOpen2 }));
    };

    this.onToggle3 = () => {
      this.setState((prevState) => ({ isOpen3: !prevState.isOpen3 }));
    };

    this.onSelect1 = () => {
      this.setState({
        isOpen1: false
      });
    };

    this.onSelect2 = () => {
      this.setState({
        isOpen2: false
      });
    };

    this.onSelect3 = () => {
      this.setState({
        isOpen3: false
      });
    };
  }

  renderToolbar() {
    return (
      <React.Fragment>
        <Toolbar>
          <ToolbarContent>
            <ToolbarGroup>
              <ToolbarItem variant="expand-all" isAllExpanded={this.state.allExpanded}>
                <Tooltip
                  position="right"
                  content={
                    <div>
                      {this.state.allExpanded && 'Collapse all rows'}
                      {!this.state.allExpanded && 'Expand all rows'}
                    </div>
                  }
                >
                  <Button
                    onClick={this.onToggleAll}
                    variant="plain"
                    aria-label={this.state.allExpanded ? 'Collapse all rows' : 'Expand all rows'}
                  >
                    <Icon shouldMirrorRTL>
                      <ToolbarExpandIconWrapper>
                        <AngleRightIcon />
                      </ToolbarExpandIconWrapper>
                    </Icon>
                  </Button>
                </Tooltip>
              </ToolbarItem>
              <ToolbarItem>
                <SearchInput aria-label="search input example" />
              </ToolbarItem>
              <ToolbarItem>
                <Button variant="secondary">Action</Button>
              </ToolbarItem>
              <ToolbarItem variant="separator" />
              <ToolbarItem>
                <Button variant="primary">Action</Button>
              </ToolbarItem>
            </ToolbarGroup>
          </ToolbarContent>
        </Toolbar>
      </React.Fragment>
    );
  }

  render() {
    const { isOpen1, isOpen2, isOpen3 } = this.state;
    const toggle = (id) => {
      const expanded = this.state.expanded;
      const index = expanded.indexOf(id);
      const newExpanded =
        index >= 0 ? [...expanded.slice(0, index), ...expanded.slice(index + 1, expanded.length)] : [...expanded, id];
      this.setState(() => ({ expanded: newExpanded }));
      if (newExpanded.length === 3) {
        this.setState(() => ({ allExpanded: true }));
      } else if (newExpanded.length === 0) {
        this.setState(() => ({ allExpanded: false }));
      }
    };

    return (
      <React.Fragment>
        {this.renderToolbar()}
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
                  isOpen={isOpen1}
                  onSelect={this.onSelect1}
                  popperProps={{ position: 'right' }}
                  onOpenChange={(isOpen) => this.setState({ isOpen1: isOpen })}
                  toggle={(toggleRef) => (
                    <MenuToggle
                      ref={toggleRef}
                      onClick={this.onToggle1}
                      isExpanded={isOpen1}
                      variant="plain"
                      aria-label="Primary content kebab toggle"
                    >
                      <EllipsisVIcon aria-hidden="true" />
                    </MenuToggle>
                  )}
                >
                  <DropdownList>
                    <DropdownItem value={0} key="action1">
                      Action
                    </DropdownItem>
                    <DropdownItem
                      value={1}
                      key="link1"
                      to="#default-link2"
                      // Prevent the default onClick functionality for example purposes
                      onClick={(ev) => ev.preventDefault()}
                    >
                      Link
                    </DropdownItem>
                    <DropdownItem value={2} isDisabled key="disabled action1">
                      Disabled Action
                    </DropdownItem>
                    <DropdownItem value={3} isDisabled key="disabled link1" to="#default-link4">
                      Disabled Link
                    </DropdownItem>
                  </DropdownList>
                </Dropdown>
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
                  isOpen={isOpen2}
                  onSelect={this.onSelect2}
                  popperProps={{ position: 'right' }}
                  onOpenChange={(isOpen) => this.setState({ isOpen2: isOpen })}
                  toggle={(toggleRef) => (
                    <MenuToggle
                      ref={toggleRef}
                      onClick={this.onToggle2}
                      isExpanded={isOpen2}
                      variant="plain"
                      aria-label="Secondary content kebab toggle"
                    >
                      <EllipsisVIcon aria-hidden="true" />
                    </MenuToggle>
                  )}
                >
                  <DropdownList>
                    <DropdownItem value={0} key="action2">
                      Action
                    </DropdownItem>
                    <DropdownItem
                      value={1}
                      key="link2"
                      to="#default-link2"
                      // Prevent the default onClick functionality for example purposes
                      onClick={(ev) => ev.preventDefault()}
                    >
                      Link
                    </DropdownItem>
                    <DropdownItem value={2} isDisabled key="disabled action2">
                      Disabled Action
                    </DropdownItem>
                    <DropdownItem value={3} isDisabled key="disabled link2" to="#default-link4">
                      Disabled Link
                    </DropdownItem>
                  </DropdownList>
                </Dropdown>
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
                  isOpen={isOpen3}
                  onSelect={this.onSelect3}
                  popperProps={{ position: 'right' }}
                  onOpenChange={(isOpen) => this.setState({ isOpen3: isOpen })}
                  toggle={(toggleRef) => (
                    <MenuToggle
                      ref={toggleRef}
                      onClick={this.onToggle3}
                      isExpanded={isOpen3}
                      variant="plain"
                      aria-label="Tertiary content kebab toggle"
                    >
                      <EllipsisVIcon aria-hidden="true" />
                    </MenuToggle>
                  )}
                >
                  <DropdownList>
                    <DropdownItem value={0} key="action3">
                      Action
                    </DropdownItem>
                    <DropdownItem
                      value={1}
                      key="link3"
                      to="#default-link2"
                      // Prevent the default onClick functionality for example purposes
                      onClick={(ev) => ev.preventDefault()}
                    >
                      Link
                    </DropdownItem>
                    <DropdownItem value={2} isDisabled key="disabled action3">
                      Disabled Action
                    </DropdownItem>
                    <DropdownItem value={3} isDisabled key="disabled link3" to="#default-link4">
                      Disabled Link
                    </DropdownItem>
                  </DropdownList>
                </Dropdown>
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
