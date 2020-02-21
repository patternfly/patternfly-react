---
title: 'Card view'
section: 'demos'
experimentalStage: 'early'
---

import React from 'react';
import {
  Avatar,
  Brand,
  Button,
  ButtonVariant,
  Card,
  CardHead,
  CardActions,
  CardHeader,
  CardBody,
  Checkbox,
  Dropdown,
  DropdownToggle,
  DropdownItem,
  DropdownSeparator,
  DropdownPosition,
  DropdownDirection,
  Gallery,
  GalleryItem,
  KebabToggle,
  Nav,
  NavItem,
  NavList,
  NavVariants,
  Page,
  PageHeader,
  PageSection,
  PageSectionVariants,
  PageSidebar,
  SkipToContent,
  TextContent,
  Text,
  Toolbar,
  ToolbarGroup,
  ToolbarItem
} from '@patternfly/react-core';
// make sure you've installed @patternfly/patternfly
import accessibleStyles from '@patternfly/react-styles/css/utilities/Accessibility/accessibility';
import spacingStyles from '@patternfly/react-styles/css/utilities/Spacing/spacing';
import { css } from '@patternfly/react-styles';
import { BellIcon, CogIcon, FilterIcon, TrashIcon } from '@patternfly/react-icons';
import imgBrand from '@patternfly/react-core/src/demos/PageLayout/examples/imgBrand.svg';
import imgAvatar from '@patternfly/react-core/src/demos/PageLayout/examples/imgAvatar.svg';
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

This is a demo that showcases Patternfly cards.

## Examples

```js title=Basic isFullscreen
import React from 'react';
import {
  Avatar,
  Brand,
  Button,
  ButtonVariant,
  Card,
  CardHead,
  CardActions,
  CardHeader,
  CardBody,
  Checkbox,
  Dropdown,
  DropdownToggle,
  DropdownItem,
  DropdownSeparator,
  DropdownPosition,
  DropdownDirection,
  DropdownToggleCheckbox,
  Gallery,
  GalleryItem,
  KebabToggle,
  Nav,
  NavItem,
  NavList,
  NavVariants,
  Page,
  PageHeader,
  PageSection,
  PageSectionVariants,
  PageSidebar,
  Pagination,
  Select,
  SelectOption,
  SkipToContent,
  TextContent,
  Text,
  Toolbar,
  ToolbarGroup,
  ToolbarItem
} from '@patternfly/react-core';
import { DataToolbar, DataToolbarContent, DataToolbarToggleGroup, DataToolbarGroup, DataToolbarItem } from '@patternfly/react-core/dist/esm/experimental';
// make sure you've installed @patternfly/patternfly
import accessibleStyles from '@patternfly/react-styles/css/utilities/Accessibility/accessibility';
import spacingStyles from '@patternfly/react-styles/css/utilities/Spacing/spacing';
import { css } from '@patternfly/react-styles';
import { BellIcon, CogIcon, FilterIcon, TrashIcon } from '@patternfly/react-icons';
import imgBrand from '@patternfly/react-core/src/demos/PageLayout/examples/imgBrand.svg';
import imgAvatar from '@patternfly/react-core/src/demos/PageLayout/examples/imgAvatar.svg';
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

class CardViewDefaultNav extends React.Component {
  constructor(props) {
    super(props);

    this.handleCheckboxClick = this.handleCheckboxClick.bind(this);
    this.handleSelectClick = this.handleSelectClick.bind(this);


    this.state = {
      cardInfo: [
        {
          id: 1,
          name: "Patternfly",
          description: "PatternFly is a community project that promotes design commonality and improves user experience.",
          icon: pfIcon
        },
        {
          id: 2,
          name: "ActiveMQ",
          description: "The ActiveMQ component allows messages to be sent to a JMS Queue or Topic; or messages to be consumed from a JMS Queue or Topic using Apache ActiveMQ.",
          icon: activeMQIcon
        },
        {
          id: 3,
          name: "Apache Spark",
          description: "This documentation page covers the Apache Spark component for the Apache Camel.",
          icon: sparkIcon
        },
        {
          id: 4,
          name: "Avro",
          description: "This component provides a dataformat for avro, which allows serialization and deserialization of messages using Apache Avro’s binary dataformat. Moreover, it provides support for Apache Avro’s rpc, by providing producers and consumers endpoint for using avro over netty or http.",
          icon: avroIcon
        },
        {
          id: 5,
          name: "Azure Services",
          description: "The Camel Components for Windows Azure Services provide connectivity to Azure services from Camel.",
          icon: azureIcon
        },
        {
          id: 6,
          name: "Crypto",
          description: "For providing flexible endpoints to sign and verify exchanges using the Signature Service of the Java Cryptographic Extension.",
          icon: saxonIcon
        },
        {
          id: 7,
          name: "DropBox",
          description: "The dropbox component allows you to treat Dropbox remote folders as a producer or consumer of messages.",
          icon: dropBoxIcon
        },
        {
          id: 8,
          name: "JBoss Data Grid",
          description: "Read or write to a fully-supported distributed cache and data grid for faster integration services.",
          icon: infinispanIcon
        },
        {
          id: 9,
          name: "REST",
          description: "The rest component allows to define REST endpoints (consumer) using the Rest DSL and plugin to other Camel components as the REST transport. From Camel 2.18 onwards the rest component can also be used as a client (producer) to call REST services.",
          icon: restIcon
        },
        {
          id: 10,
          name: "SWAGGER",
          description: "Expose REST services and their APIs using Swagger specification.",
          icon: swaggerIcon
        }
     ],
      filters: {
          products: []
      },
      res: [],
      cardChecks: { key1: false, key2: false, key3: false,
       key4: false, key5: false, key6: false, key7: false,
      key8: false, key9: false, key10: false },
      selectedItems: [],
      areAllSelected: false,
      /* checkedListAll: [], */
      itemsChecked: false,
      numSelected: 0,
      isUpperToolbarDropdownOpen: false,
      isUpperToolbarKebabDropdownOpen: false,
      isLowerToolbarDropdownOpen: false,
      isLowerToolbarKebabDropdownOpen: false,
      isCardKebabDropdownOpen: false,
      check1: false,
      activeItem: 0,
      splitButtonDropdownIsOpen: false,
      page: 1,
      perPage: 20,
    };

    this.onPageDropdownToggle = isUpperToolbarDropdownOpen => {
      this.setState({
        isUpperToolbarDropdownOpen
      });
    };

    this.onPageDropdownSelect = event => {
      this.setState({
        isUpperToolbarDropdownOpen: !this.state.isUpperToolbarDropdownOpen
      });
    };

    this.onPageToolbarDropdownToggle = isPageToolbarDropdownOpen => {
      this.setState({
        isPageToolbarDropdownOpen
      });
    };

     this.onPageToolbarKebabDropdownToggle = isUpperToolbarKebabDropdownOpen => {
      this.setState({
        isUpperToolbarKebabDropdownOpen
      });
    };

    this.onToolbarDropdownToggle = isLowerToolbarDropdownOpen => {
      this.setState((prevState) => ({
        isLowerToolbarDropdownOpen
      }));
    };

   this.onToolbarDropdownSelect = event => {
      this.setState({
        isLowerToolbarDropdownOpen: !this.state.isLowerToolbarDropdownOpen
      });
    };

  this.onToolbarKebabDropdownToggle = (isLowerToolbarKebabDropdownOpen) => {
      this.setState({
        isLowerToolbarKebabDropdownOpen
      });
    };

    this.onToolbarKebabDropdownSelect = event => {
      this.setState({
        isLowerToolbarKebabDropdownOpen: !this.state.isLowerToolbarKebabDropdownOpen
      });
    };

    this.onCardKebabDropdownToggle = (key, isCardKebabDropdownOpen) => {
      this.setState({
        [key]: isCardKebabDropdownOpen
      });
    };

    /* this.isCardChecked = (key, isChecked) => {
      this.setState({
        [key]: isChecked
      });
    }; */

    this.onCardKebabDropdownSelect = (key, event) => {
      this.setState({
        [key]: !this.state[key]
      });
    };

    this.onNavSelect = result => {
      this.setState({
        activeItem: result.itemId
      });
    };

    this.deleteItem = (item) => event => {
    const { cardInfo } = this.state;
    cardInfo.splice(cardInfo.indexOf(item), 1);

    this.setState({
      cardInfo
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

    this.onSplitButtonToggle = isOpen => {
      this.setState({
        splitButtonDropdownIsOpen: isOpen
      });
    };

    this.onSplitButtonSelect = event => {
      this.setState({
        splitButtonDropdownIsOpen: !this.state.splitButtonDropdownIsOpen
      });
    };

    this.onNameSelect = (event, selection) => {
        const checked = event.target.checked;
        this.setState(prevState => {
          const prevSelections = prevState.filters['products'];
          return {
            filters: {
              ...prevState.filters,
              ['products']: checked ? [...prevSelections, selection] : prevSelections.filter(value => value !== selection)
            }
          };
        });
      };

    this.onDelete = (type = '', id = '') => {
      if (type) {
        this.setState(prevState => {
          prevState.filters[type.toLowerCase()] = prevState.filters[type.toLowerCase()].filter(s => s !== id);
          return {
            filters: prevState.filters
          };
        });
      } else {
        this.setState({
          filters: {
            products: [],
          }
        });
      }
    };
  }

    handleSelectClick(e, newState) {
      const { value, checked } = e.target;
      const { cardChecks } = this.state;
      const { collection } = [];
      let { selectedItems } = this.state;
      if (newState === 'none') {

        console.log(cardChecks);
        console.log(collection);

        this.setState(
          {
            cardChecks: Object.keys(cardChecks).forEach(key => cardChecks[key] = false),
            selectedItems: collection,

            /* ItemsChecked: checked */
          },
          /* this.updateSelected */
        );
      }
      /* else if (newState === 'page') {

        };

        this.setState((prevState, props) => {
          return {
            selectedItems: prevState.selectedItems.concat(newRows)
          };
        }, this.updateSelected); */
       else {
        console.log(cardChecks)

        this.getAllItems();

        this.setState(
          {
            cardChecks: Object.keys(cardChecks).forEach(key => cardChecks[key] = true),
            areAllSelected: checked,
            selectedItems: collection

            /* selectedItems: Object.keys(cardInfo).forEach(function(key) {
              console.log(key, obj[key]);
              }); */
          },
          /* this.updateSelected */
        );
      }
    };

  handleCheckboxClick(e) {
    /* e.preventDefault(); */

    const { value, checked } = e.target;

    if (checked) {
      const collection = this.getAllItems();
      this.setState(prevState => ({
        selectedItems: [...prevState.selectedItems, value * 1],
        areAllSelected: collection.length === prevState.selectedItems.length + 1
      }));
    } else {
      this.setState(prevState => ({
        selectedItems: prevState.selectedItems.filter(item => item != value),
        areAllSelected: false
      }));
    }
  };

  getAllItems() {
    const { cardInfo } = this.state;
    const collection = [];
      for (const items of cardInfo) {
        collection.push(items.id);
      }

    return collection;
    };

  selectAll(e) {
    const { checked } = e.target;
    let collection = [];

    if (checked) {
      collection = this.getAllItems();
    }

    this.setState({
      selectedItems: collection,
      areAllSelected: checked
    });
  };


  buildSelectDropdown() {
    const { splitButtonDropdownIsOpen, selectedItems, areAllSelected } = this.state;
    const numSelected = selectedItems.length;
    const allSelected = areAllSelected;
    const anySelected = numSelected > 0;
    const someChecked = anySelected ? null : false;
    const isChecked = allSelected ? true : someChecked;

    const splitButtonDropdownItems = [
      <DropdownItem key="item-1" onClick={() => this.handleSelectClick('none')}>
        Select none (0 items)
      </DropdownItem>,
      /* <DropdownItem key="item-2" onClick={() => this.handleSelectClick('page')}>
        Select page ({this.state.perPage} items)
      </DropdownItem>, */
      <DropdownItem key="item-3" checked="areAllSelected" onClick={() => this.selectAll.bind(this)}>Select all (10 items)</DropdownItem>,
    ];

    return (
      <Dropdown
        position={DropdownPosition.left}
        toggle={
          <DropdownToggle
            splitButtonItems={[
              <DropdownToggleCheckbox
                id="example-checkbox-2"
                onSelect={this.onSplitButtonSelect}
                key="split-checkbox"
                aria-label={anySelected ? 'Deselect all' : 'Select all'}
                isChecked={isChecked}
                onClick={() => {
                  anySelected ? this.handleSelectClick('none') : this.selectAll.bind(this);
                }}
              ></DropdownToggleCheckbox>
            ]}
            onToggle={this.onSplitButtonToggle}
          >
            {numSelected !== 0 && <React.Fragment>{numSelected} selected</React.Fragment>}
          </DropdownToggle>
        }
        isOpen={splitButtonDropdownIsOpen}
        dropdownItems={splitButtonDropdownItems}
      />
    );
  }

  updateSelected() {
  /* const { res, selectedItems } = this.state;
  let rows = res.map(post => {
    post.selected = selectedItems.includes(post.id);
    return post;
  });

  this.setState({
    res: rows
  }); */
};

  buildFilterDropdown() {
    const {isLowerToolbarDropdownOpen, filters} = this.state;

    const filterDropdownItems = [
            <SelectOption key="patternfly" value="Patternfly" />,
            <SelectOption key="activemq" value="ActiveMQ" />,
            <SelectOption key="apachespark" value="Apache Spark" />,
            <SelectOption key="avro" value="Avro" />,
            <SelectOption key="azureservices" value="Azure Services" />,
            <SelectOption key="crypto" value="Crypto" />,
            <SelectOption key="dropbox" value="DropBox" />,
            <SelectOption key="jbossdatagrid" value="JBoss Data Grid" />,
            <SelectOption key="rest" value="REST" />,
            <SelectOption key="swagger" value="SWAGGER" />
    ];

  return (

        <DataToolbarFilter
          categoryName="Products"
          chips={filters.products}
          deleteChip={this.onDelete}
        >
          <Select
              variant={SelectVariant.checkbox}
              aria-label="Products"
              onToggle={this.onToolbarDropdownToggle}
              onSelect={this.onNameSelect}
              selections={filters.products}
              isExpanded={isLowerToolbarDropdownOpen}
              placeholderText="Creator"
            >
            {filterDropdownItems}
          </Select>
        </DataToolbarFilter>
  );

  }

  render() {
    const { isUpperToolbarDropdownOpen,
            isLowerToolbarDropdownOpen,
            isUpperToolbarKebabDropdownOpen,
            isLowerToolbarKebabDropdownOpen,
            isCardKebabDropdownOpen,
            splitButtonDropdownIsOpen,
            cardInfo,
            activeItem,
            filters,
            res,
            cardChecks,
            selectedItems,
            itemsChecked } = this.state;

    const toolbarKebabDropdownItems = [
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

    const toolbarItems = <React.Fragment>
      <DataToolbarItem variant="bulk-select">{this.buildSelectDropdown()}
      </DataToolbarItem>
      <DataToolbarItem>{this.buildFilterDropdown()}
      </DataToolbarItem>
      <DataToolbarItem><Button variant="primary">Create a Project</Button></DataToolbarItem>
      <DataToolbarItem>
        <Dropdown
          onSelect={this.onToolbarKebabDropdownSelect}
          toggle={<KebabToggle onToggle={this.onToolbarKebabDropdownToggle} id="toggle-id-6"/>}
          isOpen={isLowerToolbarKebabDropdownOpen}
          isPlain
          dropdownItems={toolbarKebabDropdownItems}
        />
      </DataToolbarItem>
      <DataToolbarItem variant="pagination" breakpointMods={[{modifier:"align-right"}]}>
        <Pagination
          itemCount={10}
          perPage={this.state.perPage}
          page={this.state.page}
          onSetPage={this.onSetPage}
          widgetId="pagination-options-menu-top"
          onPerPageSelect={this.onPerPageSelect}
        />
      </DataToolbarItem>
    </React.Fragment>;

    const PageNav = (
      <Nav onSelect={this.onNavSelect} aria-label="Nav" theme="dark">
        <NavList>
          <NavItem itemId={0} isActive={activeItem === 0}>
            System Panel
          </NavItem>
          <NavItem itemId={1} isActive={activeItem === 1}>
            Policy
          </NavItem>
          <NavItem itemId={2} isActive={activeItem === 2}>
            Authentication
          </NavItem>
          <NavItem itemId={3} isActive={activeItem === 3}>
            Network Services
          </NavItem>
          <NavItem itemId={4} isActive={activeItem === 4}>
            Server
          </NavItem>
        </NavList>
      </Nav>
    );

    const userDropdownItems = [
      <DropdownItem>Link</DropdownItem>,
      <DropdownItem component="button">Action</DropdownItem>,
      <DropdownItem isDisabled>Disabled Link</DropdownItem>,
      <DropdownItem isDisabled component="button">
        Disabled Action
      </DropdownItem>,
      <DropdownSeparator />,
      <DropdownItem>Separated Link</DropdownItem>,
      <DropdownItem component="button">Separated Action</DropdownItem>
    ];

    const PageToolbar = (
      <Toolbar>
        <ToolbarGroup className={css(accessibleStyles.screenReader, accessibleStyles.visibleOnLg)}>
          <ToolbarItem>
            <Button id="default-example-uid-01" aria-label="Notifications actions" variant={ButtonVariant.plain}>
              <BellIcon />
            </Button>
          </ToolbarItem>
          <ToolbarItem>
            <Button id="default-example-uid-02" aria-label="Settings actions" variant={ButtonVariant.plain}>
              <CogIcon />
            </Button>
          </ToolbarItem>
        </ToolbarGroup>
        <ToolbarGroup>
          <ToolbarItem className={css(accessibleStyles.hiddenOnLg, spacingStyles.mr_0)}>
            <Dropdown
              isPlain
              position="right"
              onSelect={this.onKebabDropdownSelect}
              toggle={<KebabToggle onToggle={this.onPageToolbarKebabDropdownToggle} />}
              isOpen={isUpperToolbarKebabDropdownOpen}
              dropdownItems={toolbarKebabDropdownItems}
            />
          </ToolbarItem>
          <ToolbarItem className={css(accessibleStyles.screenReader, accessibleStyles.visibleOnMd)}>
            <Dropdown
              isPlain
              position="right"
              onSelect={this.onPageDropdownSelect}
              isOpen={isUpperToolbarDropdownOpen}
              toggle={<DropdownToggle onToggle={this.onPageDropdownToggle}>Kyle Baker</DropdownToggle>}
              dropdownItems={userDropdownItems}
            />
          </ToolbarItem>
        </ToolbarGroup>
      </Toolbar>
    );

    const Header = (
      <PageHeader
        logo={<Brand src={imgBrand} alt="Patternfly Logo" />}
        toolbar={PageToolbar}
        avatar={<Avatar src={imgAvatar} alt="Avatar image" />}
        showNavToggle
      />
    );
    const Sidebar = <PageSidebar nav={PageNav} theme="dark" />;
    const pageId = 'main-content-card-view-default-nav';
    const PageSkipToContent = <SkipToContent href={`#${pageId}`}>Skip to Content</SkipToContent>;

    const filtered =
      filters.products.length > 0 ? cardInfo.filter(card => {
            return ((filters.products.length === 0 || filters.products.includes(card.name))
            );
          })
        : cardInfo;

    const rows = res.map(post => ({
      selected: post.selected
    }));

    return (
      <React.Fragment>
        <Page
            header={Header}
            sidebar={Sidebar}
            isManagedSidebar
            skipToContent={PageSkipToContent}
            mainContainerId={pageId}
          >
            <PageSection variant={PageSectionVariants.light}>
              <TextContent>
                <Text component="h1">Projects</Text>
                <Text component="p">
                  This is a demo that showcases Patternfly Cards.
                </Text>
              </TextContent>
              <DataToolbar id="data-toolbar-group-types" clearAllFilters={this.onDelete}>
                <DataToolbarContent>{toolbarItems}</DataToolbarContent>
              </DataToolbar>
            </PageSection>
          <PageSection>
            <Gallery gutter="md">
              {filtered.map((product, key) => (
               <React.Fragment>
                    <Card isHoverable key={key}>
                          <CardHead>
                                <img src={product.icon} style={{height: "50px"}}/>
                                <CardActions>
                                    <Dropdown
                                      isPlain
                                      position="right"
                                      onSelect={(e) => this.onCardKebabDropdownSelect(key, e)}
                                      toggle={<KebabToggle onToggle={(isCardKebabDropdownOpen) => this.onCardKebabDropdownToggle(key, isCardKebabDropdownOpen)} />}
                                      isOpen={this.state[key]}
                                      dropdownItems={[
                                          <DropdownItem
                                            onClick={this.deleteItem(product)}
                                            position="right"
                                          >
                                          <TrashIcon />
                                            Delete
                                          </DropdownItem>
                                        ]}
                                    />
                                    <Checkbox
                                    onSelect={this.onCheckboxSelect}
                                    selectedItems={selectedItems}
                                    isChecked={false}
                                    handleCheckboxClick={this.props.handleCheckboxClick}
                                    defaultChecked={this.state.itemsChecked}
                                    onChange={this.props.handleCheckboxClick}
                                    aria-label="card checkbox example"
                                    id="check-1"
                                    name="check1"
                                    />
                                </CardActions>
                            </CardHead>
                          <CardHeader>{product.name}</CardHeader>
                        <CardBody>
                            {product.description}
                        </CardBody>
                    </Card>
               </React.Fragment>
              ))}
            </Gallery>
          </PageSection>
        </Page>
      </React.Fragment>
    );
  }
}
```
