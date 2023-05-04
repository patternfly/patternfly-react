---
id: Data list
section: components
---

import DashboardWrapper from '@patternfly/react-core/src/demos/examples/DashboardWrapper';

import FilterIcon from '@patternfly/react-icons/dist/esm/icons/filter-icon';
import TrashIcon from '@patternfly/react-icons/dist/esm/icons/trash-icon';
import PlusCircleIcon from '@patternfly/react-icons/dist/esm/icons/plus-circle-icon';
import pfIcon from './pf-logo-small.svg';
import activeMQIcon from './activemq-core_200x150.png';
import avroIcon from './camel-avro_200x150.png';
import dropBoxIcon from './camel-dropbox_200x150.png';
import infinispanIcon from './camel-infinispan_200x150.png';
import saxonIcon from './camel-saxon_200x150.png';
import sparkIcon from './camel-spark_200x150.png';
import swaggerIcon from './camel-swagger-java_200x150.png';
import azureIcon from './FuseConnector_Icons_AzureServices.png';
import restIcon from './FuseConnector_Icons_REST.png';
import EllipsisVIcon from '@patternfly/react-icons/dist/esm/icons/ellipsis-v-icon';

import {
Dropdown as DropdownDeprecated,
DropdownToggle,
DropdownItem as DropdownItemDeprecated,
DropdownSeparator,
DropdownPosition,
DropdownToggleCheckbox,
KebabToggle
} from '@patternfly/react-core/deprecated';
import CodeBranchIcon from '@patternfly/react-icons/dist/esm/icons/code-branch-icon';
import CodeIcon from '@patternfly/react-icons/dist/esm/icons/code-icon';
import CubeIcon from '@patternfly/react-icons/dist/esm/icons/cube-icon';
import ExclamationTriangleIcon from '@patternfly/react-icons/dist/esm/icons/exclamation-triangle-icon';
import CheckCircleIcon from '@patternfly/react-icons/dist/esm/icons/check-circle-icon';
import TimesCircleIcon from '@patternfly/react-icons/dist/esm/icons/times-circle-icon';
import AngleDownIcon from '@patternfly/react-icons/dist/esm/icons/angle-down-icon';
import AngleRightIcon from '@patternfly/react-icons/dist/esm/icons/angle-right-icon';

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
  Toolbar,
  ToolbarGroup,
  ToolbarItem,
  ToolbarExpandIconWrapper,
  ToolbarContent,
  SearchInput,
  Tooltip
} from '@patternfly/react-core';
import {
  Dropdown as DropdownDeprecated,
  DropdownItem as DropdownItemDeprecated,
  DropdownPosition,
  KebabToggle
} from '@patternfly/react-core/deprecated';
import CodeBranchIcon from '@patternfly/react-icons/dist/esm/icons/code-branch-icon';
import AngleRightIcon from '@patternfly/react-icons/dist/esm/icons/angle-right-icon';

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

    this.onToggle1 = (_event, isOpen1) => {
      this.setState({ isOpen1 });
    };

    this.onToggle2 = (_event, isOpen2) => {
      this.setState({ isOpen2 });
    };

    this.onToggle3 = (_event, isOpen3) => {
      this.setState({ isOpen3 });
    };

    this.onSelect1 = (event) => {
      this.setState((prevState) => ({
        isOpen1: !prevState.isOpen1
      }));
    };

    this.onSelect2 = (event) => {
      this.setState((prevState) => ({
        isOpen2: !prevState.isOpen2
      }));
    };

    this.onSelect3 = (event) => {
      this.setState((prevState) => ({
        isOpen3: !prevState.isOpen3
      }));
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
                    <ToolbarExpandIconWrapper>
                      <AngleRightIcon />
                    </ToolbarExpandIconWrapper>
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
                <DropdownDeprecated
                  isPlain
                  position={DropdownPosition.right}
                  isOpen={this.state.isOpen1}
                  onSelect={this.onSelect1}
                  toggle={<KebabToggle onToggle={this.onToggle1} />}
                  dropdownItems={[
                    <DropdownItemDeprecated key="link">Link</DropdownItemDeprecated>,
                    <DropdownItemDeprecated key="action" component="button">
                      Action
                    </DropdownItemDeprecated>,
                    <DropdownItemDeprecated key="disabled link" isDisabled>
                      Disabled Link
                    </DropdownItemDeprecated>
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
                <DropdownDeprecated
                  isPlain
                  position={DropdownPosition.right}
                  isOpen={this.state.isOpen2}
                  onSelect={this.onSelect2}
                  toggle={<KebabToggle onToggle={this.onToggle2} />}
                  dropdownItems={[
                    <DropdownItemDeprecated key="link">Link</DropdownItemDeprecated>,
                    <DropdownItemDeprecated key="action" component="button">
                      Action
                    </DropdownItemDeprecated>,
                    <DropdownItemDeprecated key="disabled link" isDisabled>
                      Disabled Link
                    </DropdownItemDeprecated>
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
                <DropdownDeprecated
                  isPlain
                  position={DropdownPosition.right}
                  isOpen={this.state.isOpen3}
                  onSelect={this.onSelect3}
                  toggle={<KebabToggle onToggle={this.onToggle3} />}
                  dropdownItems={[
                    <DropdownItemDeprecated key="link">Link</DropdownItemDeprecated>,
                    <DropdownItemDeprecated key="action" component="button">
                      Action
                    </DropdownItemDeprecated>,
                    <DropdownItemDeprecated key="disabled link" isDisabled>
                      Disabled Link
                    </DropdownItemDeprecated>
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

### Card view

```js isFullscreen
import React from 'react';
import {
  Badge,
  Button,
  DataList,
  DataListItem,
  DataListCell,
  DataListItemRow,
  DataListItemCells,
  Dropdown,
  DropdownList,
  Flex,
  FlexItem,
  MenuToggle,
  OverflowMenu,
  OverflowMenuControl,
  OverflowMenuItem,
  PageSection,
  PageSectionVariants,
  Pagination,
  Text,
  TextContent,
  TextVariants,
  Toolbar,
  ToolbarItem,
  ToolbarFilter,
  ToolbarContent,
  Select,
  SelectList
} from '@patternfly/react-core';
import {
  Dropdown as DropdownDeprecated,
  DropdownToggle,
  DropdownPosition,
  DropdownToggleCheckbox
} from '@patternfly/react-core/deprecated';
import EllipsisVIcon from '@patternfly/react-icons/dist/esm/icons/ellipsis-v-icon';
import DashboardWrapper from '@patternfly/react-core/src/demos/examples/DashboardWrapper';

import CodeBranchIcon from '@patternfly/react-icons/dist/esm/icons/code-branch-icon';
import CodeIcon from '@patternfly/react-icons/dist/esm/icons/code-icon';
import CubeIcon from '@patternfly/react-icons/dist/esm/icons/cube-icon';
import ExclamationTriangleIcon from '@patternfly/react-icons/dist/esm/icons/exclamation-triangle-icon';
import CheckCircleIcon from '@patternfly/react-icons/dist/esm/icons/check-circle-icon';
import TimesCircleIcon from '@patternfly/react-icons/dist/esm/icons/times-circle-icon';

class DataListViewBasic extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      filters: {
        products: []
      },
      res: [],
      isChecked: false,
      selectedItems: [],
      areAllSelected: false,
      isUpperToolbarDropdownOpen: false,
      isUpperToolbarKebabDropdownOpen: false,
      isLowerToolbarDropdownOpen: false,
      isLowerToolbarKebabDropdownOpen: false,
      isCardKebabDropdownOpen: false,
      activeItem: 0,
      splitButtonDropdownIsOpen: false,
      page: 1,
      perPage: 10,
      totalItemCount: 10
    };

    this.checkAllSelected = (selected, total) => {
      if (selected && selected < total) {
        return null;
      }
      return selected === total;
    };

    this.onToolbarDropdownToggle = () => {
      this.setState((prevState) => ({
        isLowerToolbarDropdownOpen: !prevState.isLowerToolbarDropdownOpen
      }));
    };

    this.onToolbarKebabDropdownToggle = () => {
      this.setState({
        isOpen: !this.state.isLowerToolbarKebabDropdownOpen
      });
    };

    this.onToolbarKebabDropdownSelect = () => {
      this.setState({
        isLowerToolbarKebabDropdownOpen: !this.state.isLowerToolbarKebabDropdownOpen
      });
    };

    this.onCardKebabDropdownToggle = (key, isCardKebabDropdownOpen) => {
      this.setState({
        [key]: isCardKebabDropdownOpen
      });
    };

    this.onCardKebabDropdownSelect = (key) => {
      this.setState({
        [key]: !this.state[key]
      });
    };

    this.deleteItem = (item) => () => {
      const filter = (getter) => (val) => getter(val) !== item.id;
      this.setState({
        res: this.state.res.filter(filter(({ id }) => id)),
        selectedItems: this.state.selectedItems.filter(filter((id) => id))
      });
    };

    this.onSetPage = (_event, pageNumber) => {
      this.setState({
        page: pageNumber
      });
    };

    this.onPerPageSelect = (_event, perPage) => {
      this.setState({
        perPage
      });
    };

    this.onSplitButtonToggle = (_event, isOpen) => {
      this.setState({
        splitButtonDropdownIsOpen: isOpen
      });
    };

    this.onSplitButtonSelect = () => {
      this.setState((prevState) => {
        return { splitButtonDropdownIsOpen: !prevState.splitButtonDropdownIsOpen };
      });
    };

    this.onNameSelect = (event, selection) => {
      const checked = event.target.checked;
      this.setState((prevState) => {
        const prevSelections = prevState.filters['products'];
        return {
          filters: {
            ...prevState.filters,
            ['products']: checked
              ? [...prevSelections, selection]
              : prevSelections.filter((value) => value !== selection)
          }
        };
      });
    };

    this.onDelete = (type = '', id = '') => {
      if (type) {
        this.setState((prevState) => {
          prevState.filters[type.toLowerCase()] = prevState.filters[type.toLowerCase()].filter((s) => s !== id);
          return {
            filters: prevState.filters
          };
        });
      } else {
        this.setState({
          filters: {
            products: []
          }
        });
      }
    };

    this.onKeyDown = (event, productId) => {
      console.log(productId);
      if (event.target !== event.currentTarget) {
        return;
      }
      if ([' ', 'Enter'].includes(event.key)) {
        event.preventDefault();
        this.setState((prevState) => {
          return prevState.selectedItems.includes(productId * 1)
            ? {
                selectedItems: [...prevState.selectedItems.filter((id) => productId * 1 != id)],
                areAllSelected: this.checkAllSelected(prevState.selectedItems.length - 1, prevState.totalItemCount)
              }
            : {
                selectedItems: [...prevState.selectedItems, productId * 1],
                areAllSelected: this.checkAllSelected(prevState.selectedItems.length + 1, prevState.totalItemCount)
              };
        });
      }
    };

    this.onClick = (productId) => {
      this.setState((prevState) => {
        return prevState.selectedItems.includes(productId * 1)
          ? {
              selectedItems: [...prevState.selectedItems.filter((id) => productId * 1 != id)],
              areAllSelected: this.checkAllSelected(prevState.selectedItems.length - 1, prevState.totalItemCount)
            }
          : {
              selectedItems: [...prevState.selectedItems, productId * 1],
              areAllSelected: this.checkAllSelected(prevState.selectedItems.length + 1, prevState.totalItemCount)
            };
      });
    };
  }

  selectedItems(e) {
    const { value, checked } = e.target;
    let { selectedItems } = this.state;

    if (checked) {
      selectedItems = [...selectedItems, value];
    } else {
      selectedItems = selectedItems.filter((el) => el !== value);
      if (this.state.areAllSelected) {
        this.setState({
          areAllSelected: !this.state.areAllSelected
        });
      }
    }
    this.setState({ selectedItems });
  }

  splitCheckboxSelectAll(e) {
    const { checked } = e.target;
    const {} = this.state;
    let collection = [];

    if (checked) {
      for (var i = 0; i <= 9; i++) collection = [...collection, i];
    }
  }

  renderPagination() {
    const { page, perPage, totalItemCount } = this.state;

    const defaultPerPageOptions = [
      {
        title: '1',
        value: 1
      },
      {
        title: '5',
        value: 5
      },
      {
        title: '10',
        value: 10
      }
    ];

    return (
      <Pagination
        itemCount={totalItemCount}
        page={page}
        perPage={perPage}
        perPageOptions={defaultPerPageOptions}
        onSetPage={(_evt, value) => {
          this.fetch(value, perPage);
        }}
        onPerPageSelect={(_evt, value) => {
          this.fetch(1, value);
        }}
        variant="top"
        isCompact
      />
    );
  }

  buildSelectDropdown() {
    const { splitButtonDropdownIsOpen, selectedItems, areAllSelected } = this.state;
    const numSelected = selectedItems.length;
    const anySelected = numSelected > 0;
    const splitButtonDropdownItems = [];

    return (
      <DropdownDeprecated
        position={DropdownPosition.left}
        onSelect={this.onSplitButtonSelect}
        toggle={
          <DropdownToggle
            splitButtonItems={[
              <DropdownToggleCheckbox
                id="example-checkbox-2"
                key="split-checkbox"
                aria-label={anySelected ? 'Deselect all' : 'Select all'}
                isChecked={areAllSelected}
                onClick={this.splitCheckboxSelectAll.bind(this)}
              >
                {numSelected !== 0 && `${numSelected} selected`}
              </DropdownToggleCheckbox>
            ]}
            onToggle={this.onSplitButtonToggle}
          ></DropdownToggle>
        }
        isOpen={splitButtonDropdownIsOpen}
        dropdownItems={splitButtonDropdownItems}
      />
    );
  }

  buildFilterDropdown() {
    const { isLowerToolbarDropdownOpen, filters } = this.state;

    const filterDropdownItems = <SelectList></SelectList>;

    return (
      <ToolbarFilter categoryName="Products" chips={filters.products} deleteChip={this.onDelete}>
        <Select
          aria-label="Products"
          role="menu"
          toggle={(toggleRef) => (
            <MenuToggle ref={toggleRef} onClick={this.onToolbarDropdownToggle} isExpanded={isLowerToolbarDropdownOpen}>
              My Project
              {filters.products.length > 0 && <Badge isRead>{filters.products.length}</Badge>}
            </MenuToggle>
          )}
          onSelect={this.onNameSelect}
          onOpenChange={(isOpen) => {
            this.setState(() => ({
              isLowerToolbarDropdownOpen: isOpen
            }));
          }}
          selected={filters.products}
          isOpen={isLowerToolbarDropdownOpen}
        >
          {filterDropdownItems}
        </Select>
      </ToolbarFilter>
    );
  }

  render() {
    const {
      isLowerToolbarKebabDropdownOpen,

      page
    } = this.state;

    const toolbarKebabDropdownItems = [];

    const toolbarItems = (
      <React.Fragment>
        <ToolbarItem variant="bulk-select">{this.buildSelectDropdown()}</ToolbarItem>
        <ToolbarItem breakpoint="xl">{this.buildFilterDropdown()}</ToolbarItem>
        <ToolbarItem variant="overflow-menu">
          <OverflowMenu breakpoint="md">
            <OverflowMenuItem>
              <Button variant="primary">Create instance</Button>
            </OverflowMenuItem>
            <OverflowMenuControl hasAdditionalOptions>
              <Dropdown
                onSelect={this.onToolbarKebabDropdownSelect}
                toggle={(toggleRef) => (
                  <MenuToggle
                    ref={toggleRef}
                    aria-label="Toolbar kebab overflow menu"
                    variant="plain"
                    onClick={this.onToolbarKebabDropdownToggle}
                    isExpanded={isLowerToolbarKebabDropdownOpen}
                  >
                    <EllipsisVIcon />
                  </MenuToggle>
                )}
                isOpen={isLowerToolbarKebabDropdownOpen}
              >
                <DropdownList>{toolbarKebabDropdownItems}</DropdownList>
              </Dropdown>
            </OverflowMenuControl>
          </OverflowMenu>
        </ToolbarItem>
        <ToolbarItem variant="pagination" align={{ default: 'alignRight' }}>
          {this.renderPagination()}
        </ToolbarItem>
      </React.Fragment>
    );

    return (
      <React.Fragment>
        <DashboardWrapper mainContainerId="main-content-datalist-view-default-nav" breadcrumb={null}>
          <PageSection variant={PageSectionVariants.light}>
            <TextContent>
              <Text component="h1">Projects</Text>
              <Text component="p">This is a demo that showcases PatternFly DataList.</Text>
            </TextContent>
          </PageSection>
          <PageSection isFilled>
            <Toolbar id="toolbar-group-types" clearAllFilters={this.onDelete}>
              <ToolbarContent>{toolbarItems}</ToolbarContent>
            </Toolbar>
            <DataList aria-label="Demo data list">
              <DataListItem aria-labelledby="Demo-item1">
                <DataListItemRow>
                  <DataListItemCells
                    dataListCells={[
                      <DataListCell isFilled={false} key="buttons1">
                        <Flex direction={{ default: 'column' }}>
                          <FlexItem>
                            <Text component={TextVariants.small}>patternfly</Text>
                          </FlexItem>
                          <FlexItem>
                            <Text component={TextVariants.small}>
                              Working repo for PatternFly 4{' '}
                              <Button variant="link" isInline>
                                https://pf4.patternfly.org/
                              </Button>
                            </Text>
                          </FlexItem>
                          <FlexItem>
                            <Flex>
                              <FlexItem>
                                <CodeBranchIcon /> \xa0 10
                              </FlexItem>
                              <FlexItem>
                                \xa0 <CodeIcon /> \xa0 4
                              </FlexItem>
                              <FlexItem>
                                \xa0 <CubeIcon /> \xa0 5
                              </FlexItem>
                              <FlexItem> \xa0 \xa0 Updated 2 days ago</FlexItem>
                            </Flex>
                          </FlexItem>
                        </Flex>
                      </DataListCell>,
                      <DataListCell isFilled={false} alignRight key="secondary content align">
                        <Flex>
                          <FlexItem>
                            <Button variant="secondary">Action</Button>
                          </FlexItem>
                          <FlexItem>
                            <Button variant="link" isInline>
                              Link
                            </Button>
                          </FlexItem>
                        </Flex>
                      </DataListCell>
                    ]}
                  />
                </DataListItemRow>
              </DataListItem>
              <DataListItem aria-labelledby="Demo-item2">
                <DataListItemRow>
                  <DataListItemCells
                    dataListCells={[
                      <DataListCell isFilled={false} key="buttons2">
                        <Flex direction={{ default: 'column' }}>
                          <FlexItem>
                            <Text component={TextVariants.small}>patternfly-elements</Text>
                          </FlexItem>
                          <FlexItem>
                            <Text component={TextVariants.small}>PatternFly elements</Text>
                          </FlexItem>
                          <FlexItem>
                            <Flex>
                              <FlexItem>
                                <CodeBranchIcon /> \xa0 5
                              </FlexItem>
                              <FlexItem>
                                \xa0 <CodeIcon /> \xa0 9
                              </FlexItem>
                              <FlexItem>
                                \xa0 <CubeIcon /> \xa0 2
                              </FlexItem>
                              <FlexItem>
                                \xa0 <CheckCircleIcon />
                                \xa0 11
                              </FlexItem>
                              <FlexItem>
                                \xa0 <ExclamationTriangleIcon /> \xa0 4
                              </FlexItem>
                              <FlexItem>
                                \xa0
                                <TimesCircleIcon /> \xa0 1
                              </FlexItem>
                              <FlexItem> \xa0 \xa0 Updated 2 days ago</FlexItem>
                            </Flex>
                          </FlexItem>
                        </Flex>
                      </DataListCell>,
                      <DataListCell isFilled={false} alignRight key="secondary content align">
                        <Flex>
                          <FlexItem>
                            <Button variant="secondary">Action</Button>
                          </FlexItem>
                          <FlexItem>
                            <Button variant="link" isInline>
                              Link
                            </Button>
                          </FlexItem>
                        </Flex>
                      </DataListCell>
                    ]}
                  />
                </DataListItemRow>
              </DataListItem>
              <DataListItem>
                <DataListItemRow>
                  <DataListItemCells
                    dataListCells={[
                      <DataListCell isFilled={false} key="Demo-item3">
                        <Flex direction={{ default: 'column' }}>
                          <FlexItem>
                            <Text component={TextVariants.small}>patternfly-unified-design-kit</Text>
                          </FlexItem>
                        </Flex>
                      </DataListCell>,
                      <DataListCell isFilled={false} alignRight key="buttons3">
                        <Flex>
                          <FlexItem>
                            <Button variant="secondary">Action</Button>
                          </FlexItem>
                          <FlexItem>
                            <Button variant="link" isInline>
                              Link
                            </Button>
                          </FlexItem>
                        </Flex>
                      </DataListCell>
                    ]}
                  />
                </DataListItemRow>
              </DataListItem>
              <DataListItem aria-labelledby="Demo-item4">
                <DataListItemRow>
                  <DataListItemCells
                    dataListCells={[
                      <DataListCell isFilled={false} key="buttons4">
                        <Flex direction={{ default: 'column' }}>
                          <FlexItem>
                            <Text component={TextVariants.small}>patternfly</Text>
                          </FlexItem>
                          <FlexItem>
                            <Text component={TextVariants.small}>
                              Working repo for PatternFly 4{' '}
                              <Button variant="link" isInline>
                                https://pf4.patternfly.org/
                              </Button>
                            </Text>
                          </FlexItem>
                          <FlexItem>
                            <Flex>
                              <FlexItem>
                                <CodeBranchIcon />
                                \xa0 10
                              </FlexItem>
                              <FlexItem>
                                \xa0 <CodeIcon /> \xa0 4
                              </FlexItem>
                              <FlexItem>
                                \xa0 <CubeIcon /> \xa0 5
                              </FlexItem>
                              <FlexItem> \xa0 \xa0 Updated 2 days ago</FlexItem>
                            </Flex>
                          </FlexItem>
                        </Flex>
                      </DataListCell>,
                      <DataListCell isFilled={false} alignRight key="secondary content align">
                        <Flex>
                          <FlexItem>
                            <Button variant="secondary">Action</Button>
                          </FlexItem>
                          <FlexItem>
                            <Button variant="link" isInline>
                              Link
                            </Button>
                          </FlexItem>
                        </Flex>
                      </DataListCell>
                    ]}
                  />
                </DataListItemRow>
              </DataListItem>
              <DataListItem aria-labelledby="Demo-item5">
                <DataListItemRow>
                  <DataListItemCells
                    dataListCells={[
                      <DataListCell isFilled={false} key="buttons5">
                        <Flex direction={{ default: 'column' }}>
                          <FlexItem>
                            <Text component={TextVariants.small}>patternfly-elements</Text>
                          </FlexItem>
                          <FlexItem>
                            <Text component={TextVariants.small}>PatternFly elements</Text>
                          </FlexItem>
                          <FlexItem>
                            <Flex>
                              <FlexItem>
                                <CodeBranchIcon /> \xa0 5
                              </FlexItem>
                              <FlexItem>
                                \xa0 <CodeIcon /> \xa0 9
                              </FlexItem>
                              <FlexItem>
                                \xa0 <CubeIcon /> \xa0 2
                              </FlexItem>
                              <FlexItem>
                                \xa0 <CheckCircleIcon />
                                \xa0 11
                              </FlexItem>
                              <FlexItem>
                                \xa0 <ExclamationTriangleIcon /> \xa0 4
                              </FlexItem>
                              <FlexItem>
                                \xa0 <TimesCircleIcon /> \xa0 1
                              </FlexItem>
                              <FlexItem> \xa0 \xa0 Updated 2 days ago</FlexItem>
                            </Flex>
                          </FlexItem>
                        </Flex>
                      </DataListCell>,
                      <DataListCell isFilled={false} alignRight key="secondary content align">
                        <Flex>
                          <FlexItem>
                            <Button variant="secondary">Action</Button>
                          </FlexItem>
                          <FlexItem>
                            <Button variant="link" isInline>
                              Link
                            </Button>
                          </FlexItem>
                        </Flex>
                      </DataListCell>
                    ]}
                  />
                </DataListItemRow>
              </DataListItem>
            </DataList>
          </PageSection>
          <PageSection isFilled={false} sticky="bottom" padding={{ default: 'noPadding' }} variant="light">
            <Pagination
              itemCount={this.state.totalItemCount}
              page={page}
              page={this.state.page}
              perPage={this.state.perPage}
              onPerPageSelect={this.onPerPageSelect}
              onSetPage={this.onSetPage}
              variant="bottom"
            />
          </PageSection>
        </DashboardWrapper>
      </React.Fragment>
    );
  }
}
```
