---
id: Primary-detail
section: patterns
---

import CodeBranchIcon from '@patternfly/react-icons/dist/esm/icons/code-branch-icon';
import TrashIcon from '@patternfly/react-icons/dist/esm/icons/trash-icon';
import CodeIcon from '@patternfly/react-icons/dist/esm/icons/code-icon';
import CubeIcon from '@patternfly/react-icons/dist/esm/icons/cube-icon';
import CheckCircleIcon from '@patternfly/react-icons/dist/esm/icons/check-circle-icon';
import ExclamationTriangleIcon from '@patternfly/react-icons/dist/esm/icons/exclamation-triangle-icon';
import FilterIcon from '@patternfly/react-icons/dist/esm/icons/filter-icon';
import SearchIcon from '@patternfly/react-icons/dist/esm/icons/search-icon';
import TimesCircleIcon from '@patternfly/react-icons/dist/esm/icons/times-circle-icon';
import pfIcon from './assets/pf-logo-small.svg';
import activeMQIcon from './assets/activemq-core_200x150.png';
import avroIcon from './assets/camel-avro_200x150.png';
import dropBoxIcon from './assets/camel-dropbox_200x150.png';
import infinispanIcon from './assets/camel-infinispan_200x150.png';
import saxonIcon from './assets/camel-saxon_200x150.png';
import sparkIcon from './assets/camel-spark_200x150.png';
import swaggerIcon from './assets/camel-swagger-java_200x150.png';
import azureIcon from './assets/FuseConnector_Icons_AzureServices.png';
import restIcon from './assets/FuseConnector_Icons_REST.png';
import EllipsisVIcon from '@patternfly/react-icons/dist/esm/icons/ellipsis-v-icon';
import { data } from '@patternfly/react-core/src/demos/Card/examples/CardData.jsx';
import DashboardWrapper from '@patternfly/react-core/src/demos/examples/DashboardWrapper';

## Demos

### Primary-detail full page

```js file="./examples/PrimaryDetail/PrimaryDetailFullPage.tsx" isFullscreen
```

### Primary-detail content padding

```js file="./examples/PrimaryDetail/PrimaryDetailContentPadding.tsx" isFullscreen

```

### Primary-detail card view

```js isFullscreen
import React from 'react';
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Divider,
  Drawer,
  DrawerActions,
  DrawerPanelBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerContentBody,
  DrawerHead,
  DrawerPanelContent,
  Dropdown,
  DropdownItem,
  DropdownList,
  Flex,
  FlexItem,
  Gallery,
  MenuToggle,
  MenuToggleCheckbox,
  PageSection,
  PageSectionVariants,
  Pagination,
  Progress,
  TextContent,
  Text,
  Title,
  Toolbar,
  ToolbarItem,
  ToolbarContent
} from '@patternfly/react-core';
import DashboardWrapper from '@patternfly/react-core/src/demos/examples/DashboardWrapper';
import TrashIcon from '@patternfly/react-icons/dist/esm/icons/trash-icon';
import pfIcon from './assets/pf-logo-small.svg';
import activeMQIcon from './assets/activemq-core_200x150.png';
import avroIcon from './assets/camel-avro_200x150.png';
import dropBoxIcon from './assets/camel-dropbox_200x150.png';
import infinispanIcon from './assets/camel-infinispan_200x150.png';
import saxonIcon from './assets/camel-saxon_200x150.png';
import sparkIcon from './assets/camel-spark_200x150.png';
import swaggerIcon from './assets/camel-swagger-java_200x150.png';
import azureIcon from './assets/FuseConnector_Icons_AzureServices.png';
import restIcon from './assets/FuseConnector_Icons_REST.png';
import EllipsisVIcon from '@patternfly/react-icons/dist/esm/icons/ellipsis-v-icon';
import { data } from '@patternfly/react-core/src/demos/Card/examples/CardData.jsx';

class PrimaryDetailCardView extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      page: 1,
      perPage: 10,
      totalItemCount: 10,
      isDrawerExpanded: false,
      isChecked: false,
      selectedItems: [],
      areAllSelected: false,
      splitButtonDropdownIsOpen: false,
      activeCard: null,
      filters: {
        products: []
      },
      cardData: data,
      isUpperToolbarDropdownOpen: false,
      isUpperToolbarKebabDropdownOpen: false,
      isLowerToolbarDropdownOpen: false,
      isLowerToolbarKebabDropdownOpen: false,
      isCardKebabDropdownOpen: false,
      activeItem: 0
    };

    this.onToolbarDropdownToggle = (_event, isLowerToolbarDropdownOpen) => {
      this.setState((prevState) => ({
        isLowerToolbarDropdownOpen
      }));
    };

    this.onToolbarDropdownSelect = (_event) => {
      this.setState({
        isLowerToolbarDropdownOpen: !this.state.isLowerToolbarDropdownOpen
      });
    };

    this.onToolbarKebabDropdownToggle = () => {
      this.setState((prevState) => ({
        isLowerToolbarKebabDropdownOpen: !prevState.isLowerToolbarKebabDropdownOpen
      }));
    };

    this.onToolbarKebabDropdownSelect = () => {
      this.setState({
        isLowerToolbarKebabDropdownOpen: false
      });
    };

    this.checkAllSelected = (selected, total) => {
      if (selected && selected < total) {
        return null;
      }
      return selected === total;
    };

    this.onNameSelect = (event, selection) => {
      const checked = event.target.checked;
      this.setState((prevState) => {
        const prevSelections = prevState.filters.products;
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

    this.onCloseDrawerClick = () => {
      this.setState({
        activeCard: null,
        isDrawerExpanded: false
      });
    };

    this.onCheckboxClick = (event, productId) => {
      this.setState((prevState) =>
        prevState.selectedItems.includes(productId * 1) || this.state.selectedItems.includes(productId * 1)
          ? {
              selectedItems: [...this.state.selectedItems.filter((id) => productId * 1 !== id)],
              areAllSelected: this.checkAllSelected(prevState.selectedItems.length - 1, prevState.totalItemCount)
            }
          : {
              selectedItems: [...prevState.selectedItems, productId * 1],
              areAllSelected: this.checkAllSelected(prevState.selectedItems.length + 1, prevState.totalItemCount)
            }
      );
    };

    this.onClick = (productId) => {
      this.setState((prevState) =>
        prevState.selectedItems.includes(productId * 1)
          ? {
              selectedItems: [...prevState.selectedItems.filter((id) => productId * 1 !== id)],
              areAllSelected: this.checkAllSelected(prevState.selectedItems.length - 1, prevState.totalItemCount)
            }
          : {
              selectedItems: [...prevState.selectedItems, productId * 1],
              areAllSelected: this.checkAllSelected(prevState.selectedItems.length + 1, prevState.totalItemCount)
            }
      );
    };

    this.onCardClick = (productId) => {

      if (productId === this.state.activeCard) {
        this.setState({
          isDrawerExpanded: !this.state.isDrawerExpanded,
          activeCard: null
        });
        return;
      }

      this.setState({
        activeCard: productId,
        isDrawerExpanded: true
      });
    };

    this.onChange = (_event, labelledById) => {
      if (labelledById === this.state.activeCard) {
        return;
      }

      this.setState({
        activeCard: labelledById,
        isDrawerExpanded: true
      });
    };

    this.onPerPageSelect = (_evt, perPage) => {
      this.setState({ page: 1, perPage });
    };

    this.onSetPage = (_evt, page) => {
      this.setState({ page });
    };

    this.selectPage = () => {
      const { totalItemCount, perPage } = this.state;
      let collection = [];

      collection = this.getAllItems();

      this.setState(
        {
          selectedItems: collection,
          areAllSelected: totalItemCount === perPage ? true : false
        },
        this.updateSelected
      );
    };

    this.selectAll = () => {
      let collection = [];
      for (let i = 0; i <= 9; i++) {
        collection = [...collection, i];
      }

      this.setState(
        {
          selectedItems: collection,
          isChecked: true,
          areAllSelected: true
        },
        this.updateSelected
      );
    };

    this.selectNone = () => {
      this.setState(
        {
          selectedItems: [],
          isChecked: false,
          areAllSelected: false,
          isDrawerExpanded: false,
          activeCard: null
        },
        this.updateSelected
      );
    };

    this.splitCheckboxSelectAll = (e) => {
      const { checked } = e.target;
      const { isChecked } = this.state;
      let collection = [];

      if (checked) {
        for (let i = 0; i <= 9; i++) {
          collection = [...collection, i];
        }
      }

      this.setState(
        {
          selectedItems: collection,
          areAllSelected: checked,
          isDrawerExpanded: false,
          activeCard: null,
          isChecked
        },
        this.updateSelected
      );
    };

    this.onSplitButtonSelect = () => {
      this.setState(() => ({
        splitButtonDropdownIsOpen: false,
        isDrawerExpanded: false,
        activeCard: null
      }));
    };

    this.onSplitButtonToggle = () => {
      this.setState((prevState) => ({
        splitButtonDropdownIsOpen: !prevState.splitButtonDropdownIsOpen
      }));
    };

    this.onCardKebabDropdownToggle = (key) => {
      this.setState((prevState) => ({
        [key]: !prevState[key]
      }));
    };

    this.onCardKebabDropdownSelect = (key) => {
      this.setState({
        [key]: false
      });
    };

    this.deleteItem = (event, item) => {
      const filter = (getter) => (val) => getter(val) !== item.id;
      const filteredCards = this.state.cardData.filter(filter(({ id }) => id));
      this.setState({
        cardData: filteredCards,
        selectedItems: this.state.selectedItems.filter(filter((id) => id)),
        totalItemCount: this.state.totalItemCount - 1,
        isDrawerExpanded: false,
        activeCard: null
      });
    };
  }

  getAllItems() {
    const { cardData } = this.state;
    const collection = [];
    for (const items of cardData) {
      collection.push(items.id);
    }

    return collection;
  }

  buildSelectDropdown() {
    const { splitButtonDropdownIsOpen, selectedItems, areAllSelected } = this.state;
    const numSelected = selectedItems.length;
    const allSelected = areAllSelected;
    const anySelected = numSelected > 0;
    const someChecked = anySelected ? null : false;
    const isChecked = allSelected ? true : someChecked;
    const splitButtonDropdownItems = (
      <>
        <DropdownItem key="item-1" onClick={this.selectNone.bind(this)}>
          Select none (0 items)
        </DropdownItem>
        <DropdownItem key="item-2" onClick={this.selectPage.bind(this)}>
          Select page ({this.state.perPage} items)
        </DropdownItem>
        <DropdownItem key="item-3" onClick={this.selectAll.bind(this)}>
          Select all ({this.state.totalItemCount} items)
        </DropdownItem>
      </>
    );

    return (
      <Dropdown
        onSelect={this.onSplitButtonSelect}
        isOpen={splitButtonDropdownIsOpen}
        onOpenChange={(isOpen) => this.setState({ splitButtonDropdownIsOpen: isOpen })}
        toggle={(toggleRef) => (
          <MenuToggle
            ref={toggleRef}
            isExpanded={splitButtonDropdownIsOpen}
            onClick={this.onSplitButtonToggle}
            aria-label="Select cards"
            splitButtonOptions={{
              items: [
                <MenuToggleCheckbox
                  id="split-dropdown-checkbox"
                  key="split-dropdown-checkbox"
                  aria-label={anySelected ? 'Deselect all cards' : 'Select all cards'}
                  isChecked={areAllSelected}
                  onClick={this.splitCheckboxSelectAll.bind(this)}
                >
                  {numSelected !== 0 && `${numSelected} selected`}
                </MenuToggleCheckbox>
              ]
            }}
          ></MenuToggle>
        )}
      >
        <DropdownList>{splitButtonDropdownItems}</DropdownList>
      </Dropdown>
    );
  }

  render() {
    const {
      isDrawerExpanded,
      isChecked,
      selectedItems,
      activeCard,
      isLowerToolbarKebabDropdownOpen,
      filters,
      cardData
    } = this.state;

    const toolbarKebabDropdownItems = (
      <>
        <DropdownItem value={0} key="action">
          Action
        </DropdownItem>
        <DropdownItem
          value={1}
          key="link"
          to="#default-link2"
          // Prevent the default onClick functionality for example purposes
          onClick={(ev) => ev.preventDefault()}
        >
          Link
        </DropdownItem>
        <DropdownItem value={2} isDisabled key="disabled action">
          Disabled Action
        </DropdownItem>
        <DropdownItem value={3} isDisabled key="disabled link" to="#default-link4">
          Disabled Link
        </DropdownItem>
        <Divider component="li" key="separator" />
        <DropdownItem value={4} key="separated action">
          Separated Action
        </DropdownItem>
        <DropdownItem value={5} key="separated link" to="#default-link6" onClick={(ev) => ev.preventDefault()}>
          Separated Link
        </DropdownItem>
      </>
    );
    const toolbarItems = (
      <React.Fragment>
        <ToolbarItem>{this.buildSelectDropdown()}</ToolbarItem>
        <ToolbarItem>
          <Button variant="primary">Create instance</Button>
        </ToolbarItem>
        <ToolbarItem>
          <Button variant="secondary">Action</Button>
        </ToolbarItem>
        <ToolbarItem>
          <Dropdown
            onSelect={this.onToolbarKebabDropdownSelect}
            isOpen={isLowerToolbarKebabDropdownOpen}
            onOpenChange={(isOpen) => this.setState({ isLowerToolbarKebabDropdownOpen: isOpen })}
            toggle={(toggleRef) => (
              <MenuToggle
                ref={toggleRef}
                isExpanded={isLowerToolbarKebabDropdownOpen}
                variant="plain"
                onClick={this.onToolbarKebabDropdownToggle}
                aria-label="Toolbar actions"
              >
                <EllipsisVIcon aria-hidden="true" />
              </MenuToggle>
            )}
          >
            <DropdownList>{toolbarKebabDropdownItems}</DropdownList>
          </Dropdown>
        </ToolbarItem>
      </React.Fragment>
    );

    const filtered =
      filters.products.length > 0
        ? cardData.filter((card) => filters.products.length === 0 || filters.products.includes(card.name))
        : cardData;

    const icons = {
      pfIcon,
      activeMQIcon,
      sparkIcon,
      avroIcon,
      azureIcon,
      saxonIcon,
      dropBoxIcon,
      infinispanIcon,
      restIcon,
      swaggerIcon
    };

    const drawerContent = (
      <Gallery hasGutter role="region" aria-label="Selectable card container">
        {filtered.map((product, key) => (
          <Card
            key={product.name}
            id={'card-view-' + key}
            isClickable
            isSelectable
            isSelected={activeCard === product.id}
          >
            <CardHeader
              actions={{
                actions: (
                  <>
                    <Dropdown
                      onSelect={() => this.onCardKebabDropdownSelect(key)}
                      isOpen={this.state[key] || false}
                      onOpenChange={(isOpen) => this.setState({ [key]: isOpen })}
                      popperProps={{ position: 'right' }}
                      toggle={(toggleRef) => (
                        <MenuToggle
                          ref={toggleRef}
                          isExpanded={this.state[key] || false}
                          aria-label={`${product.name} actions`}
                          variant="plain"
                          onClick={() => this.onCardKebabDropdownToggle(key)}
                        >
                          <EllipsisVIcon aria-hidden="true" />
                        </MenuToggle>
                      )}
                    >
                      <DropdownList>
                        <DropdownItem key="trash" onClick={(e) => this.deleteItem(e, product)}>
                          <TrashIcon />
                          Delete
                        </DropdownItem>
                      </DropdownList>
                    </Dropdown>
                  </>
                )
              }}
              selectableActions={{ isChecked: selectedItems.includes(product.id), selectableActionId: `selectable-actions-item-${product.id}`, selectableActionAriaLabelledby: `${'card-view-' + key}`, name: `check-${product.id}`, onChange: () => this.onClick(product.id) }}
            >
              <img src={icons[product.icon]} alt={`${product.name} icon`} style={{ height: '50px' }} />
            </CardHeader>
            <CardTitle>
              <Button variant="link" isInline onClick={() => this.onCardClick(product.id)} aria-expanded={activeCard === product.id}>
                {product.name}
              </Button>
            </CardTitle>
            <CardBody>{product.description}</CardBody>
          </Card>
        ))}
      </Gallery>
    );

    const panelContent = (
      <DrawerPanelContent>
        <DrawerHead>
          <Title headingLevel="h2" size="xl">
            node-{activeCard}
          </Title>
          <DrawerActions>
            <DrawerCloseButton onClick={this.onCloseDrawerClick} />
          </DrawerActions>
        </DrawerHead>
        <DrawerPanelBody>
          <Flex spaceItems={{ default: 'spaceItemsLg' }} direction={{ default: 'column' }}>
            <FlexItem>
              <p>
                The content of the drawer really is up to you. It could have form fields, definition lists, text lists,
                labels, charts, progress bars, etc. Spacing recommendation is 24px margins. You can put tabs in here,
                and can also make the drawer scrollable.
              </p>
            </FlexItem>
            <FlexItem>
              <Progress value={activeCard * 10} title="Title" />
            </FlexItem>
            <FlexItem>
              <Progress value={activeCard * 5} title="Title" />
            </FlexItem>
          </Flex>
        </DrawerPanelBody>
      </DrawerPanelContent>
    );

    return (
      <DashboardWrapper mainContainerId="main-content-card-view-default-nav" breadcrumb={null}>
        <PageSection variant={PageSectionVariants.light}>
          <TextContent>
            <Text component="h1">Projects</Text>
            <Text component="p">This is a demo that showcases Patternfly Cards.</Text>
          </TextContent>
        </PageSection>
        <PageSection isFilled padding={{ default: 'noPadding' }}>
          <Toolbar id="card-view-data-toolbar-group-types" usePageInsets clearAllFilters={this.onDelete}>
            <ToolbarContent>{toolbarItems}</ToolbarContent>
          </Toolbar>
          <Divider component="div" />
        </PageSection>
        <PageSection isFilled padding={{ default: 'noPadding' }}>
          <Drawer isExpanded={isDrawerExpanded} className={'pf-m-inline-on-2xl'}>
            <DrawerContent panelContent={panelContent} colorVariant="no-background">
              <DrawerContentBody hasPadding>{drawerContent}</DrawerContentBody>
            </DrawerContent>
          </Drawer>
        </PageSection>
        <PageSection isFilled={false} sticky="bottom" padding={{ default: 'noPadding' }} variant="light">
          <Pagination
            itemCount={filtered.length}
            page={this.state.page}
            perPage={this.state.perPage}
            onPerPageSelect={this.onPerPageSelect}
            onSetPage={this.onSetPage}
            variant="bottom"
          />
        </PageSection>
      </DashboardWrapper>
    );
  }
}
```

### Primary-detail simple list in card

```js isFullscreen
import React from 'react';
import {
  Card,
  CardBody,
  Divider,
  Drawer,
  DrawerActions,
  DrawerCloseButton,
  DrawerContent,
  DrawerContentBody,
  DrawerHead,
  DrawerPanelBody,
  DrawerPanelContent,
  Flex,
  FlexItem,
  PageSection,
  PageSectionVariants,
  Progress,
  SimpleList,
  SimpleListGroup,
  SimpleListItem,
  Text,
  TextContent,
  TextInput,
  Title
} from '@patternfly/react-core';
import DashboardWrapper from '@patternfly/react-core/src/demos/examples/DashboardWrapper';

class PrimaryDetailSimpleListInCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      drawerPanelBodyContent: 1,
      activeItem: 0,
      isKebabDropdownOpen: false,
      isDropdownOpen: false,
      isExpanded: false
    };

    this.onSelectListItem = (listItem, listItemProps) => {
      const id = listItemProps.id;
      this.setState({
        drawerPanelBodyContent: id.charAt(id.length - 1),
        isExpanded: true
      });
    };

    this.onClose = () => {
      this.setState({
        isExpanded: false
      });
    };
  }

  render() {
    const { drawerPanelBodyContent, selectedListItemId, activeItem, isExpanded } = this.state;

    const panelContent = (
      <DrawerPanelContent widthOnXl={75}>
        <DrawerHead>
          <Title headingLevel="h2" size="xl">
            {`List item ${drawerPanelBodyContent} details`}
          </Title>
          <DrawerActions>
            <DrawerCloseButton onClick={this.onClose} />
          </DrawerActions>
        </DrawerHead>
        <DrawerPanelBody>
          <Flex spaceItems={{ default: 'spaceItemsLg' }} direction={{ default: 'column' }}>
            <FlexItem>
              <p>
                The content of the drawer really is up to you. It could have form fields, definition lists, text lists,
                labels, charts, progress bars, etc. Spacing recommendation is 24px margins. You can put tabs in here,
                and can also make the drawer scrollable.
              </p>
            </FlexItem>
            <FlexItem>
              <Progress value={drawerPanelBodyContent * 10} title="Title" />
            </FlexItem>
            <FlexItem>
              <Progress value={drawerPanelBodyContent * 5} title="Title" />
            </FlexItem>
          </Flex>
        </DrawerPanelBody>
      </DrawerPanelContent>
    );

    const drawerContent = (
      <React.Fragment>
        <SimpleList onSelect={this.onSelectListItem}>
          <SimpleListGroup title="Section 1" id="simple-list-section-1">
            <SimpleListItem key="item1" id="simple-list-item1" isCurrent>
              List item 1
            </SimpleListItem>
            <SimpleListItem key="item2" id="simple-list-item2">
              List item 2
            </SimpleListItem>
            <SimpleListItem key="item3" id="simple-list-item3">
              List item 3
            </SimpleListItem>
            <SimpleListItem key="item4" id="simple-list-item4">
              List item 4
            </SimpleListItem>
          </SimpleListGroup>
          <SimpleListGroup title="Section 2" id="section-2">
            <SimpleListItem key="item5" id="simple-list-item5">
              List item 5
            </SimpleListItem>
            <SimpleListItem key="item6" id="simple-list-item6">
              List item 6
            </SimpleListItem>
            <SimpleListItem key="item7" id="simple-list-item7">
              List item 7
            </SimpleListItem>
            <SimpleListItem key="item8" id="simple-list-item8">
              List item 8
            </SimpleListItem>
            <SimpleListItem key="item9" id="simple-list-item9">
              List item 9
            </SimpleListItem>
          </SimpleListGroup>
        </SimpleList>
      </React.Fragment>
    );

    return (
      <DashboardWrapper>
        <PageSection variant={PageSectionVariants.light}>
          <TextContent>
            <Text component="h1">Main title</Text>
            <Text component="p">
              Body text should be Overpass Regular at 16px. It should have leading of 24px because <br />
              of it’s relative line height of 1.5.
            </Text>
          </TextContent>
        </PageSection>
        <Divider component="div" />
        <PageSection>
          <Card>
            <Drawer isStatic isExpanded={isExpanded}>
              <DrawerContent panelContent={panelContent}>
                <DrawerContentBody>{drawerContent}</DrawerContentBody>
              </DrawerContent>
            </Drawer>
          </Card>
        </PageSection>
      </DashboardWrapper>
    );
  }
}
```

### Primary-detail data list in card

```js isFullscreen
import React from 'react';
import {
  Card,
  DataList,
  DataListCell,
  DataListItem,
  DataListItemCells,
  DataListItemRow,
  Toolbar,
  ToolbarContent,
  ToolbarItem,
  Divider,
  Drawer,
  DrawerActions,
  DrawerCloseButton,
  DrawerContent,
  DrawerContentBody,
  DrawerHead,
  DrawerPanelBody,
  DrawerPanelContent,
  Dropdown,
  DropdownItem,
  DropdownList,
  Flex,
  FlexItem,
  MenuToggle,
  PageSection,
  PageSectionVariants,
  Progress,
  Text,
  TextContent,
  Title
} from '@patternfly/react-core';
import DashboardWrapper from '@patternfly/react-core/src/demos/examples/DashboardWrapper';

class PrimaryDetailDataListInCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      drawerPanelBodyContent: 1,
      activeItem: 0,
      isKebabDropdownOpen: false,
      isDropdownOpen: false,
      selectedDataListItemId: 'dataListItem1',
      isExpanded: false
    };

    this.onDropdownToggle = () => {
      this.setState((prevState) => ({
        isDropdownOpen: !prevState.isDropdownOpen
      }));
    };
    this.onDropdownSelect = () => {
      this.setState({
        isDropdownOpen: false
      });
      this.onDropdownFocus();
    };
    this.onDropdownFocus = () => {
      const element = document.getElementById('toggle-id');
      element.focus();
    };
    this.onSelectDataListItem = (_event, id) => {
      this.setState({
        selectedDataListItemId: id,
        drawerPanelBodyContent: id.charAt(id.length - 1),
        isExpanded: true
      });
    };
    this.onClose = () => {
      this.setState({
        isExpanded: false
      });
    };
  }

  render() {
    const {
      drawerPanelBodyContent,
      selectedListItemId,
      activeItem,
      isDropdownOpen,
      selectedDataListItemId,
      isExpanded
    } = this.state;

    const panelContent = (
      <DrawerPanelContent widthOn2Xl={75}>
        <DrawerHead>
          <Title size="lg" headingLevel="h2">
            Patternfly-elements
          </Title>
          <DrawerActions>
            <DrawerCloseButton onClick={this.onClose} />
          </DrawerActions>
        </DrawerHead>
        <DrawerPanelBody>
          <Flex spaceItems={{ default: 'spaceItemsLg' }} direction={{ default: 'column' }}>
            <FlexItem>
              <p>
                The content of the drawer really is up to you. It could have form fields, definition lists, text lists,
                labels, charts, progress bars, etc. Spacing recommendation is 24px margins. You can put tabs in here,
                and can also make the drawer scrollable.
              </p>
            </FlexItem>
            <FlexItem>
              <Progress value={drawerPanelBodyContent * 10} title="Title" />
            </FlexItem>
            <FlexItem>
              <Progress value={drawerPanelBodyContent * 5} title="Title" />
            </FlexItem>
          </Flex>
        </DrawerPanelBody>
      </DrawerPanelContent>
    );

    const drawerContent = (
      <React.Fragment>
        <Toolbar id="data-list-data-toolbar" usePageInsets>
          <ToolbarContent>
            <ToolbarItem>
              <Dropdown
                onSelect={this.onDropdownSelect}
                isOpen={isDropdownOpen}
                onOpenChange={(isOpen) => this.setState({ isDropdownOpen: isOpen })}
                toggle={(toggleRef) => (
                  <MenuToggle ref={toggleRef} isExpanded={isDropdownOpen} onClick={this.onDropdownToggle}>
                    Dropdown
                  </MenuToggle>
                )}
              >
                <DropdownList>
                  <DropdownItem key="option1">Option 1</DropdownItem>
                  <DropdownItem key="option2">Option 2</DropdownItem>
                </DropdownList>
              </Dropdown>
            </ToolbarItem>
          </ToolbarContent>
        </Toolbar>
        <DataList
          aria-label="selectable data list example"
          selectedDataListItemId={selectedDataListItemId}
          onSelectDataListItem={this.onSelectDataListItem}
        >
          <DataListItem aria-label="data-list-item1-in-card" id="data-list-item1">
            <DataListItemRow>
              <DataListItemCells
                dataListCells={[
                  <DataListCell>
                    <div>Node 1</div>
                    <a href="#">siemur/test-space</a>
                  </DataListCell>
                ]}
              />
            </DataListItemRow>
          </DataListItem>
          <DataListItem aria-label="data-list-item2-in-card" id="data-list-item2">
            <DataListItemRow>
              <DataListItemCells
                dataListCells={[
                  <DataListCell>
                    <div>Node 2</div>
                    <a href="#">siemur/test-space</a>
                  </DataListCell>
                ]}
              />
            </DataListItemRow>
          </DataListItem>
          <DataListItem aria-label="data-list-item3-in-card" id="data-list-item3">
            <DataListItemRow>
              <DataListItemCells
                dataListCells={[
                  <DataListCell>
                    <div>Node 3</div>
                    <a href="#">siemur/test-space</a>
                  </DataListCell>
                ]}
              />
            </DataListItemRow>
          </DataListItem>
          <DataListItem aria-label="data-list-item4-in-card" id="data-list-item4">
            <DataListItemRow>
              <DataListItemCells
                dataListCells={[
                  <DataListCell>
                    <div>Node 4</div>
                    <a href="#">siemur/test-space</a>
                  </DataListCell>
                ]}
              />
            </DataListItemRow>
          </DataListItem>
          <DataListItem aria-label="data-list-item5-in-card" id="data-list-item5">
            <DataListItemRow>
              <DataListItemCells
                dataListCells={[
                  <DataListCell>
                    <div>Node 5</div>
                    <a href="#">siemur/test-space</a>
                  </DataListCell>
                ]}
              />
            </DataListItemRow>
          </DataListItem>
        </DataList>
      </React.Fragment>
    );

    return (
      <DashboardWrapper>
        <PageSection variant={PageSectionVariants.light}>
          <TextContent>
            <Text component="h1">Main title</Text>
            <Text component="p">
              Body text should be Overpass Regular at 16px. It should have leading of 24px because <br />
              of it’s relative line height of 1.5.
            </Text>
          </TextContent>
        </PageSection>
        <Divider component="div" />
        <PageSection>
          <Card>
            <Drawer isStatic isExpanded={isExpanded}>
              <DrawerContent panelContent={panelContent}>
                <DrawerContentBody>{drawerContent}</DrawerContentBody>
              </DrawerContent>
            </Drawer>
          </Card>
        </PageSection>
      </DashboardWrapper>
    );
  }
}
```

### Primary-detail inline modifier

```js file="./examples/PrimaryDetail/PrimaryDetailInlineModifier.tsx" isFullscreen

```
