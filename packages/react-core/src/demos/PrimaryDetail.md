---
id: Primary-detail
section: patterns
---

import { Select as SelectDeprecated, SelectOption as SelectOptionDeprecated, SelectVariant } from '@patternfly/react-core/deprecated';
import DashboardWrapper from '@patternfly/react-core/src/demos/examples/DashboardWrapper';
import CodeBranchIcon from '@patternfly/react-icons/dist/esm/icons/code-branch-icon';
import TrashIcon from '@patternfly/react-icons/dist/esm/icons/trash-icon';
import CodeIcon from '@patternfly/react-icons/dist/esm/icons/code-icon';
import CubeIcon from '@patternfly/react-icons/dist/esm/icons/cube-icon';
import CheckCircleIcon from '@patternfly/react-icons/dist/esm/icons/check-circle-icon';
import ExclamationTriangleIcon from '@patternfly/react-icons/dist/esm/icons/exclamation-triangle-icon';
import FilterIcon from '@patternfly/react-icons/dist/esm/icons/filter-icon';
import SearchIcon from '@patternfly/react-icons/dist/esm/icons/search-icon';
import TimesCircleIcon from '@patternfly/react-icons/dist/esm/icons/times-circle-icon';
import pfIcon from './Card/pf-logo-small.svg';
import activeMQIcon from './Card/activemq-core_200x150.png';
import avroIcon from './Card/camel-avro_200x150.png';
import dropBoxIcon from './Card/camel-dropbox_200x150.png';
import infinispanIcon from './Card/camel-infinispan_200x150.png';
import saxonIcon from './Card/camel-saxon_200x150.png';
import sparkIcon from './Card/camel-spark_200x150.png';
import swaggerIcon from './Card/camel-swagger-java_200x150.png';
import azureIcon from './Card/FuseConnector_Icons_AzureServices.png';
import restIcon from './Card/FuseConnector_Icons_REST.png';
import EllipsisVIcon from '@patternfly/react-icons/dist/esm/icons/ellipsis-v-icon';

## Demos

### Primary-detail full page

```js isFullscreen
import React from 'react';
import {
  Button,
  ButtonVariant,
  DataList,
  DataListAction,
  DataListCell,
  DataListItem,
  DataListItemCells,
  DataListItemRow,
  Toolbar,
  ToolbarItem,
  ToolbarContent,
  ToolbarToggleGroup,
  ToolbarGroup,
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
  InputGroup,
  PageSection,
  PageSectionVariants,
  Progress,
  Stack,
  StackItem,
  Text,
  TextContent,
  TextInput,
  Title
} from '@patternfly/react-core';
import {
  Select as SelectDeprecated,
  SelectOption as SelectOptionDeprecated,
  SelectVariant
} from '@patternfly/react-core/deprecated';
import DashboardWrapper from '@patternfly/react-core/src/demos/examples/DashboardWrapper';
import CodeBranchIcon from '@patternfly/react-icons/dist/esm/icons/code-branch-icon';
import CodeIcon from '@patternfly/react-icons/dist/esm/icons/code-icon';
import CubeIcon from '@patternfly/react-icons/dist/esm/icons/cube-icon';
import CheckCircleIcon from '@patternfly/react-icons/dist/esm/icons/check-circle-icon';
import ExclamationTriangleIcon from '@patternfly/react-icons/dist/esm/icons/exclamation-triangle-icon';
import FilterIcon from '@patternfly/react-icons/dist/esm/icons/filter-icon';
import SearchIcon from '@patternfly/react-icons/dist/esm/icons/search-icon';
import TimesCircleIcon from '@patternfly/react-icons/dist/esm/icons/times-circle-icon';
import EllipsisVIcon from '@patternfly/react-icons/dist/esm/icons/ellipsis-v-icon';

class PrimaryDetailFullPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDrawerExpanded: false,
      drawerPanelBodyContent: '',
      isDropdownOpen: false,
      isKebabDropdownOpen: false,
      activeItem: 0,
      inputValue: '',
      statusIsExpanded: false,
      statusSelected: null,
      riskIsExpanded: false,
      riskSelected: null,
      selectedDataListItemId: ''
    };

    this.statusOptions = [
      { value: 'Status', disabled: false, isPlaceholder: true },
      { value: 'New', disabled: false },
      { value: 'Pending', disabled: false },
      { value: 'Running', disabled: false },
      { value: 'Cancelled', disabled: false }
    ];

    this.riskOptions = [
      { value: 'Risk', disabled: false, isPlaceholder: true },
      { value: 'Low', disabled: false },
      { value: 'Medium', disabled: false },
      { value: 'High', disabled: false }
    ];

    this.onInputChange = (newValue) => {
      this.setState({ inputValue: newValue });
    };

    this.onStatusToggle = (_event, isExpanded) => {
      this.setState({
        statusIsExpanded: isExpanded
      });
    };

    this.onStatusSelect = (event, selection, isPlaceholder) => {
      if (isPlaceholder) this.clearStatusSelection();
      this.setState({
        statusSelected: selection,
        statusIsExpanded: false
      });
    };

    this.clearStatusSelection = () => {
      this.setState({
        statusSelected: null,
        statusIsExpanded: false
      });
    };

    this.onRiskToggle = (_event, isExpanded) => {
      this.setState({
        riskIsExpanded: isExpanded
      });
    };

    this.onRiskSelect = (event, selection, isPlaceholder) => {
      if (isPlaceholder) this.clearRiskSelection();
      this.setState({
        riskSelected: selection,
        riskIsExpanded: false
      });
    };

    this.clearRiskSelection = () => {
      this.setState({
        riskSelected: null,
        riskIsExpanded: false
      });
    };

    this.onSelectDataListItem = (_event, id) => {
      this.setState({
        selectedDataListItemId: id,
        isDrawerExpanded: true,
        drawerPanelBodyContent: id.charAt(id.length - 1)
      });
    };

    this.onCloseDrawerClick = () => {
      this.setState({
        isDrawerExpanded: false,
        selectedDataListItemId: ''
      });
    };
  }

  render() {
    const {
      isDrawerExpanded,
      drawerPanelBodyContent,
      isDropdownOpen,
      isKebabDropdownOpen,
      activeItem,
      inputValue,
      statusIsExpanded,
      statusSelected,
      riskIsExpanded,
      riskSelected,
      selectedDataListItemId
    } = this.state;

    const toggleGroupItems = (
      <React.Fragment>
        <ToolbarItem>
          <InputGroup>
            <TextInput
              name="full-page-data-toolbar-input1"
              id="full-page-data-toolbar-input1"
              type="search"
              aria-label="search input example"
              onChange={this.onInputChange}
              value={inputValue}
            />
            <Button variant={ButtonVariant.control} aria-label="search button for search input">
              <SearchIcon />
            </Button>
          </InputGroup>
        </ToolbarItem>
        <ToolbarGroup variant="filter-group">
          <ToolbarItem>
            <SelectDeprecated
              variant={SelectVariant.single}
              aria-label="Select Input"
              onToggle={this.onStatusToggle}
              onSelect={this.onStatusSelect}
              selections={statusSelected}
              isExpanded={statusIsExpanded}
            >
              {this.statusOptions.map((option, index) => (
                <SelectOptionDeprecated isDisabled={option.disabled} key={index} value={option.value} />
              ))}
            </SelectDeprecated>
          </ToolbarItem>
          <ToolbarItem>
            <SelectDeprecated
              variant={SelectVariant.single}
              aria-label="Select Input"
              onToggle={this.onRiskToggle}
              onSelect={this.onRiskSelect}
              selections={riskSelected}
              isExpanded={riskIsExpanded}
            >
              {this.riskOptions.map((option, index) => (
                <SelectOptionDeprecated isDisabled={option.disabled} key={index} value={option.value} />
              ))}
            </SelectDeprecated>
          </ToolbarItem>
        </ToolbarGroup>
      </React.Fragment>
    );

    const ToolbarItems = (
      <ToolbarToggleGroup toggleIcon={<FilterIcon />} breakpoint="xl">
        {toggleGroupItems}
      </ToolbarToggleGroup>
    );

    const panelContent = (
      <DrawerPanelContent>
        <DrawerHead>
          <Title headingLevel="h2" size="xl">
            node-{drawerPanelBodyContent}
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
        <Toolbar id="full-page-data-toolbar" usePageInsets>
          <ToolbarContent>{ToolbarItems}</ToolbarContent>
        </Toolbar>
        <DataList
          aria-label="data list"
          selectedDataListItemId={selectedDataListItemId}
          onSelectDataListItem={this.onSelectDataListItem}
        >
          <DataListItem id="full-page-item1">
            <DataListItemRow>
              <DataListItemCells
                dataListCells={[
                  <DataListCell key="primary content">
                    <Flex direction={{ default: 'column' }}>
                      <FlexItem>
                        <p>patternfly</p>
                        <small>
                          Working repo for PatternFly 4 <a>https://pf4.patternfly.org/</a>
                        </small>
                      </FlexItem>
                      <Flex>
                        <FlexItem>
                          <CodeBranchIcon /> 10
                        </FlexItem>
                        <FlexItem>
                          <CodeIcon /> 4
                        </FlexItem>
                        <FlexItem>
                          <CubeIcon /> 5
                        </FlexItem>
                        <FlexItem>Updated 2 days ago</FlexItem>
                      </Flex>
                    </Flex>
                  </DataListCell>,
                  <DataListAction alignRight>
                    <Stack>
                      <StackItem>
                        <Button variant={ButtonVariant.secondary}>Secondary</Button>
                      </StackItem>
                      <StackItem>
                        <Button variant={ButtonVariant.link}>Link Button</Button>
                      </StackItem>
                    </Stack>
                  </DataListAction>
                ]}
              />
            </DataListItemRow>
          </DataListItem>
          <DataListItem id="full-page-item2">
            <DataListItemRow>
              <DataListItemCells
                dataListCells={[
                  <DataListCell key="primary content">
                    <Flex direction={{ default: 'column' }}>
                      <FlexItem>
                        <p>patternfly-elements</p>
                        <small>PatternFly elements</small>
                      </FlexItem>
                      <Flex>
                        <FlexItem>
                          <CodeBranchIcon /> 10
                        </FlexItem>
                        <FlexItem>
                          <CodeIcon /> 4
                        </FlexItem>
                        <FlexItem>
                          <CubeIcon /> 5
                        </FlexItem>
                        <FlexItem>
                          <CheckCircleIcon /> 7
                        </FlexItem>
                        <FlexItem>
                          <ExclamationTriangleIcon /> 5
                        </FlexItem>
                        <FlexItem>
                          <TimesCircleIcon /> 5
                        </FlexItem>
                        <FlexItem>Updated 2 days ago</FlexItem>
                      </Flex>
                    </Flex>
                  </DataListCell>,
                  <DataListAction alignRight>
                    <Stack>
                      <StackItem>
                        <Button variant={ButtonVariant.secondary}>Secondary</Button>
                      </StackItem>
                      <StackItem>
                        <Button variant={ButtonVariant.link}>Link Button</Button>
                      </StackItem>
                    </Stack>
                  </DataListAction>
                ]}
              />
            </DataListItemRow>
          </DataListItem>
          <DataListItem id="full-page-item3">
            <DataListItemRow>
              <DataListItemCells
                dataListCells={[
                  <DataListCell key="primary content">
                    <Flex direction={{ default: 'column' }}>
                      <FlexItem>
                        <p>patternfly</p>
                        <small>
                          Working repo for PatternFly 4 <a>https://pf4.patternfly.org/</a>
                        </small>
                      </FlexItem>
                      <Flex>
                        <FlexItem>
                          <CodeBranchIcon /> 10
                        </FlexItem>
                        <FlexItem>
                          <CodeIcon /> 4
                        </FlexItem>
                        <FlexItem>
                          <CubeIcon /> 5
                        </FlexItem>
                        <FlexItem>Updated 2 days ago</FlexItem>
                      </Flex>
                    </Flex>
                  </DataListCell>,
                  <DataListAction alignRight>
                    <Stack>
                      <StackItem>
                        <Button variant={ButtonVariant.secondary}>Secondary</Button>
                      </StackItem>
                      <StackItem>
                        <Button variant={ButtonVariant.link}>Link Button</Button>
                      </StackItem>
                    </Stack>
                  </DataListAction>
                ]}
              />
            </DataListItemRow>
          </DataListItem>
          <DataListItem id="full-page-item4">
            <DataListItemRow>
              <DataListItemCells
                dataListCells={[
                  <DataListCell key="primary content">
                    <Flex direction={{ default: 'column' }}>
                      <FlexItem>
                        <p>patternfly-elements</p>
                        <small>PatternFly elements</small>
                      </FlexItem>
                      <Flex>
                        <FlexItem>
                          <CodeBranchIcon /> 10
                        </FlexItem>
                        <FlexItem>
                          <CodeIcon /> 4
                        </FlexItem>
                        <FlexItem>
                          <CubeIcon /> 5
                        </FlexItem>
                        <FlexItem>
                          <CheckCircleIcon /> 7
                        </FlexItem>
                        <FlexItem>
                          <ExclamationTriangleIcon /> 5
                        </FlexItem>
                        <FlexItem>
                          <TimesCircleIcon /> 5
                        </FlexItem>
                        <FlexItem>Updated 2 days ago</FlexItem>
                      </Flex>
                    </Flex>
                  </DataListCell>,
                  <DataListAction alignRight>
                    <Stack>
                      <StackItem>
                        <Button variant={ButtonVariant.secondary}>Secondary</Button>
                      </StackItem>
                      <StackItem>
                        <Button variant={ButtonVariant.link}>Link Button</Button>
                      </StackItem>
                    </Stack>
                  </DataListAction>
                ]}
              />
            </DataListItemRow>
          </DataListItem>
        </DataList>
      </React.Fragment>
    );

    return (
      <DashboardWrapper mainContainerId="main-content-page-layout-default-nav">
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
        <PageSection variant={PageSectionVariants.light} padding={{ default: 'noPadding' }}>
          <Drawer isExpanded={isDrawerExpanded}>
            <DrawerContent panelContent={panelContent}>
              <DrawerContentBody>{drawerContent}</DrawerContentBody>
            </DrawerContent>
          </Drawer>
        </PageSection>
      </DashboardWrapper>
    );
  }
}
```

### Primary-detail content padding

```js isFullscreen
import React from 'react';
import {
  Button,
  ButtonVariant,
  DataList,
  DataListAction,
  DataListCell,
  DataListItem,
  DataListItemCells,
  DataListItemRow,
  Toolbar,
  ToolbarItem,
  ToolbarContent,
  ToolbarToggleGroup,
  ToolbarGroup,
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
  InputGroup,
  PageSection,
  PageSectionVariants,
  Progress,
  Stack,
  StackItem,
  Text,
  TextContent,
  TextInput,
  Title
} from '@patternfly/react-core';
import {
  Select as SelectDeprecated,
  SelectOption as SelectOptionDeprecated,
  SelectVariant
} from '@patternfly/react-core/deprecated';
import DashboardWrapper from '@patternfly/react-core/src/demos/examples/DashboardWrapper';
import CodeBranchIcon from '@patternfly/react-icons/dist/esm/icons/code-branch-icon';
import CodeIcon from '@patternfly/react-icons/dist/esm/icons/code-icon';
import CubeIcon from '@patternfly/react-icons/dist/esm/icons/cube-icon';
import CheckCircleIcon from '@patternfly/react-icons/dist/esm/icons/check-circle-icon';
import ExclamationTriangleIcon from '@patternfly/react-icons/dist/esm/icons/exclamation-triangle-icon';
import FilterIcon from '@patternfly/react-icons/dist/esm/icons/filter-icon';
import SearchIcon from '@patternfly/react-icons/dist/esm/icons/search-icon';
import TimesCircleIcon from '@patternfly/react-icons/dist/esm/icons/times-circle-icon';

class PrimaryDetailContentPadding extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDrawerExpanded: false,
      drawerPanelBodyContent: '',
      isDropdownOpen: false,
      isKebabDropdownOpen: false,
      activeItem: 0,
      inputValue: '',
      statusIsExpanded: false,
      statusSelected: null,
      riskIsExpanded: false,
      riskSelected: null,
      selectedDataListItemId: ''
    };

    this.statusOptions = [
      { value: 'Status', disabled: false, isPlaceholder: true },
      { value: 'New', disabled: false },
      { value: 'Pending', disabled: false },
      { value: 'Running', disabled: false },
      { value: 'Cancelled', disabled: false }
    ];

    this.riskOptions = [
      { value: 'Risk', disabled: false, isPlaceholder: true },
      { value: 'Low', disabled: false },
      { value: 'Medium', disabled: false },
      { value: 'High', disabled: false }
    ];

    this.onInputChange = (newValue) => {
      this.setState({ inputValue: newValue });
    };

    this.onStatusToggle = (_event, isExpanded) => {
      this.setState({
        statusIsExpanded: isExpanded
      });
    };

    this.onStatusSelect = (event, selection, isPlaceholder) => {
      if (isPlaceholder) this.clearStatusSelection();
      this.setState({
        statusSelected: selection,
        statusIsExpanded: false
      });
    };

    this.clearStatusSelection = () => {
      this.setState({
        statusSelected: null,
        statusIsExpanded: false
      });
    };

    this.onRiskToggle = (_event, isExpanded) => {
      this.setState({
        riskIsExpanded: isExpanded
      });
    };

    this.onRiskSelect = (event, selection, isPlaceholder) => {
      if (isPlaceholder) this.clearRiskSelection();
      this.setState({
        riskSelected: selection,
        riskIsExpanded: false
      });
    };

    this.clearRiskSelection = () => {
      this.setState({
        riskSelected: null,
        riskIsExpanded: false
      });
    };

    this.onSelectDataListItem = (_event, id) => {
      this.setState({
        selectedDataListItemId: id,
        isDrawerExpanded: true,
        drawerPanelBodyContent: id.charAt(id.length - 1)
      });
    };

    this.onCloseDrawerClick = () => {
      this.setState({
        isDrawerExpanded: false,
        selectedDataListItemId: ''
      });
    };
  }

  render() {
    const {
      isDrawerExpanded,
      drawerPanelBodyContent,
      isDropdownOpen,
      isKebabDropdownOpen,
      activeItem,
      inputValue,
      statusIsExpanded,
      statusSelected,
      riskIsExpanded,
      riskSelected,
      selectedDataListItemId
    } = this.state;

    const toggleGroupItems = (
      <React.Fragment>
        <ToolbarItem>
          <InputGroup>
            <TextInput
              name="content-padding-data-toolbar-input1"
              id="content-padding-data-toolbar-input1"
              type="search"
              aria-label="search input example"
              onChange={this.onInputChange}
              value={inputValue}
            />
            <Button variant={ButtonVariant.control} aria-label="search button for search input">
              <SearchIcon />
            </Button>
          </InputGroup>
        </ToolbarItem>
        <ToolbarGroup variant="filter-group">
          <ToolbarItem>
            <SelectDeprecated
              variant={SelectVariant.single}
              aria-label="Select Input"
              onToggle={this.onStatusToggle}
              onSelect={this.onStatusSelect}
              selections={statusSelected}
              isExpanded={statusIsExpanded}
            >
              {this.statusOptions.map((option, index) => (
                <SelectOptionDeprecated isDisabled={option.disabled} key={index} value={option.value} />
              ))}
            </SelectDeprecated>
          </ToolbarItem>
          <ToolbarItem>
            <SelectDeprecated
              variant={SelectVariant.single}
              aria-label="Select Input"
              onToggle={this.onRiskToggle}
              onSelect={this.onRiskSelect}
              selections={riskSelected}
              isExpanded={riskIsExpanded}
            >
              {this.riskOptions.map((option, index) => (
                <SelectOptionDeprecated isDisabled={option.disabled} key={index} value={option.value} />
              ))}
            </SelectDeprecated>
          </ToolbarItem>
        </ToolbarGroup>
      </React.Fragment>
    );

    const ToolbarItems = (
      <ToolbarToggleGroup toggleIcon={<FilterIcon />} breakpoint="xl">
        {toggleGroupItems}
      </ToolbarToggleGroup>
    );

    const panelContent = (
      <DrawerPanelContent>
        <DrawerHead>
          <Title headingLevel="h2" size="xl">
            node-{drawerPanelBodyContent}
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
        <Toolbar id="content-padding-data-toolbar" usePageInsets>
          <ToolbarContent>{ToolbarItems}</ToolbarContent>
        </Toolbar>
        <DataList
          aria-label="data list"
          selectedDataListItemId={selectedDataListItemId}
          onSelectDataListItem={this.onSelectDataListItem}
        >
          <DataListItem id="content-padding-item1">
            <DataListItemRow>
              <DataListItemCells
                dataListCells={[
                  <DataListCell key="primary content">
                    <Flex direction={{ default: 'column' }}>
                      <FlexItem>
                        <p>patternfly</p>
                        <small>
                          Working repo for PatternFly 4 <a>https://pf4.patternfly.org/</a>
                        </small>
                      </FlexItem>
                      <Flex>
                        <FlexItem>
                          <CodeBranchIcon /> 10
                        </FlexItem>
                        <FlexItem>
                          <CodeIcon /> 4
                        </FlexItem>
                        <FlexItem>
                          <CubeIcon /> 5
                        </FlexItem>
                        <FlexItem>Updated 2 days ago</FlexItem>
                      </Flex>
                    </Flex>
                  </DataListCell>,
                  <DataListAction alignRight>
                    <Stack>
                      <StackItem>
                        <Button variant={ButtonVariant.secondary}>Secondary</Button>
                      </StackItem>
                      <StackItem>
                        <Button variant={ButtonVariant.link}>Link Button</Button>
                      </StackItem>
                    </Stack>
                  </DataListAction>
                ]}
              />
            </DataListItemRow>
          </DataListItem>
          <DataListItem id="content-padding-item2">
            <DataListItemRow>
              <DataListItemCells
                dataListCells={[
                  <DataListCell key="primary content">
                    <Flex direction={{ default: 'column' }}>
                      <FlexItem>
                        <p>patternfly-elements</p>
                        <small>PatternFly elements</small>
                      </FlexItem>
                      <Flex>
                        <FlexItem>
                          <CodeBranchIcon /> 10
                        </FlexItem>
                        <FlexItem>
                          <CodeIcon /> 4
                        </FlexItem>
                        <FlexItem>
                          <CubeIcon /> 5
                        </FlexItem>
                        <FlexItem>
                          <CheckCircleIcon /> 7
                        </FlexItem>
                        <FlexItem>
                          <ExclamationTriangleIcon /> 5
                        </FlexItem>
                        <FlexItem>
                          <TimesCircleIcon /> 5
                        </FlexItem>
                        <FlexItem>Updated 2 days ago</FlexItem>
                      </Flex>
                    </Flex>
                  </DataListCell>,
                  <DataListAction alignRight>
                    <Stack>
                      <StackItem>
                        <Button variant={ButtonVariant.secondary}>Secondary</Button>
                      </StackItem>
                      <StackItem>
                        <Button variant={ButtonVariant.link}>Link Button</Button>
                      </StackItem>
                    </Stack>
                  </DataListAction>
                ]}
              />
            </DataListItemRow>
          </DataListItem>
          <DataListItem id="content-padding-item3">
            <DataListItemRow>
              <DataListItemCells
                dataListCells={[
                  <DataListCell key="primary content">
                    <Flex direction={{ default: 'column' }}>
                      <FlexItem>
                        <p>patternfly</p>
                        <small>
                          Working repo for PatternFly 4 <a>https://pf4.patternfly.org/</a>
                        </small>
                      </FlexItem>
                      <Flex>
                        <FlexItem>
                          <CodeBranchIcon /> 10
                        </FlexItem>
                        <FlexItem>
                          <CodeIcon /> 4
                        </FlexItem>
                        <FlexItem>
                          <CubeIcon /> 5
                        </FlexItem>
                        <FlexItem>Updated 2 days ago</FlexItem>
                      </Flex>
                    </Flex>
                  </DataListCell>,
                  <DataListAction alignRight>
                    <Stack>
                      <StackItem>
                        <Button variant={ButtonVariant.secondary}>Secondary</Button>
                      </StackItem>
                      <StackItem>
                        <Button variant={ButtonVariant.link}>Link Button</Button>
                      </StackItem>
                    </Stack>
                  </DataListAction>
                ]}
              />
            </DataListItemRow>
          </DataListItem>
          <DataListItem id="content-padding-item4">
            <DataListItemRow>
              <DataListItemCells
                dataListCells={[
                  <DataListCell key="primary content">
                    <Flex direction={{ default: 'column' }}>
                      <FlexItem>
                        <p>patternfly-elements</p>
                        <small>PatternFly elements</small>
                      </FlexItem>
                      <Flex>
                        <FlexItem>
                          <CodeBranchIcon /> 10
                        </FlexItem>
                        <FlexItem>
                          <CodeIcon /> 4
                        </FlexItem>
                        <FlexItem>
                          <CubeIcon /> 5
                        </FlexItem>
                        <FlexItem>
                          <CheckCircleIcon /> 7
                        </FlexItem>
                        <FlexItem>
                          <ExclamationTriangleIcon /> 5
                        </FlexItem>
                        <FlexItem>
                          <TimesCircleIcon /> 5
                        </FlexItem>
                        <FlexItem>Updated 2 days ago</FlexItem>
                      </Flex>
                    </Flex>
                  </DataListCell>,
                  <DataListAction alignRight>
                    <Stack>
                      <StackItem>
                        <Button variant={ButtonVariant.secondary}>Secondary</Button>
                      </StackItem>
                      <StackItem>
                        <Button variant={ButtonVariant.link}>Link Button</Button>
                      </StackItem>
                    </Stack>
                  </DataListAction>
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
        <PageSection padding={{ default: 'noPadding' }}>
          <Drawer isExpanded={isDrawerExpanded}>
            <DrawerContent panelContent={panelContent} className={'pf-m-no-background'}>
              <DrawerContentBody hasPadding>{drawerContent}</DrawerContentBody>
            </DrawerContent>
          </Drawer>
        </PageSection>
      </DashboardWrapper>
    );
  }
}
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
  Checkbox,
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
  Select,
  SelectOption,
  TextContent,
  Text,
  Title,
  Toolbar,
  ToolbarItem,
  ToolbarContent,
  ToolbarFilter
} from '@patternfly/react-core';
import DashboardWrapper from '@patternfly/react-core/src/demos/examples/DashboardWrapper';
import TrashIcon from '@patternfly/react-icons/dist/esm/icons/trash-icon';
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
      res: [],
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
      event.stopPropagation();
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

    this.onCardClick = (event) => {
      if (event.currentTarget.id === this.state.activeCard) {
        this.setState({
          isDrawerExpanded: !this.state.isDrawerExpanded,
          activeCard: null
        });
        return;
      }

      const newSelected = event.currentTarget.id;

      this.setState({
        activeCard: newSelected,
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
      this.setState((prevState) => ({
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
      event.stopPropagation();
      const filter = (getter) => (val) => getter(val) !== item.id;
      const filteredCards = this.state.res.filter(filter(({ id }) => id));
      this.setState({
        res: filteredCards,
        selectedItems: this.state.selectedItems.filter(filter((id) => id)),
        totalItemCount: this.state.totalItemCount - 1,
        isDrawerExpanded: false,
        activeCard: null
      });
    };

    this.onKeyDown = (event) => {
      if (event.target !== event.currentTarget) {
        return;
      }

      if (['Enter', ' '].includes(event.key)) {
        if (event.currentTarget.id === this.state.activeCard) {
          this.setState({
            isDrawerExpanded: !this.state.isDrawerExpanded,
            activeCard: null
          });
          return;
        }
        event.preventDefault();
        const newSelected = event.currentTarget.id;
        this.setState({
          activeCard: newSelected,
          isDrawerExpanded: true
        });
      }
    };
  }

  getAllItems() {
    const { res } = this.state;
    const collection = [];
    for (const items of res) {
      collection.push(items.id);
    }

    return collection;
  }

  fetch(page, perPage) {
    fetch(`https://my-json-server.typicode.com/jenny-s51/cardviewdata/posts?_page=${page}&_limit=${perPage}`)
      .then((resp) => resp.json())
      .then((resp) => this.setState({ res: resp, perPage, page }))
      .then(() => this.updateSelected())
      .catch((err) => this.setState({ error: err }));
  }

  componentDidMount() {
    this.fetch(this.state.page, this.state.perPage);
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
    const { isDrawerExpanded, isChecked, selectedItems, activeCard, isLowerToolbarKebabDropdownOpen, filters, res } =
      this.state;

    const toolbarKebabDropdownItems = (
      <>
        <DropdownItem itemId={0} key="action">
          Action
        </DropdownItem>
        <DropdownItem
          itemId={1}
          key="link"
          to="#default-link2"
          // Prevent the default onClick functionality for example purposes
          onClick={(ev) => ev.preventDefault()}
        >
          Link
        </DropdownItem>
        <DropdownItem itemId={2} isDisabled key="disabled action">
          Disabled Action
        </DropdownItem>
        <DropdownItem itemId={3} isDisabled key="disabled link" to="#default-link4">
          Disabled Link
        </DropdownItem>
        <Divider component="li" key="separator" />
        <DropdownItem itemId={4} key="separated action">
          Separated Action
        </DropdownItem>
        <DropdownItem itemId={5} key="separated link" to="#default-link6" onClick={(ev) => ev.preventDefault()}>
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
        ? res.filter((card) => filters.products.length === 0 || filters.products.includes(card.name))
        : res;

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
            onKeyDown={this.onKeyDown}
            onClick={this.onCardClick}
            onSelectableInputChange={this.onChange}
            isSelectableRaised
            isSelected={activeCard === 'card-view-' + key}
            hasSelectableInput
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
                    <Checkbox
                      checked={isChecked}
                      onClick={(event) => this.onCheckboxClick(event, product.id)}
                      value={product.id}
                      isChecked={selectedItems.includes(product.id)}
                      aria-label="card checkbox example"
                      id={`check-${product.id}`}
                    />
                  </>
                )
              }}
            >
              <img src={icons[product.icon]} alt={`${product.name} icon`} style={{ height: '50px' }} />
            </CardHeader>
            <CardTitle>{product.name}</CardTitle>
            <CardBody>{product.description}</CardBody>
          </Card>
        ))}
      </Gallery>
    );

    const panelContent = (
      <DrawerPanelContent>
        <DrawerHead>
          <Title headingLevel="h2" size="xl">
            node-{activeCard && activeCard.charAt(activeCard.length - 1)}
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
              <Progress value={activeCard && activeCard.charAt(activeCard.length - 1) * 10} title="Title" />
            </FlexItem>
            <FlexItem>
              <Progress value={activeCard && activeCard.charAt(activeCard.length - 1) * 5} title="Title" />
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
            <DrawerContent panelContent={panelContent} className={'pf-m-no-background'}>
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

```js isFullscreen
import React from 'react';
import {
  Button,
  ButtonVariant,
  DataList,
  DataListAction,
  DataListCell,
  DataListItem,
  DataListItemCells,
  DataListItemRow,
  Toolbar,
  ToolbarItem,
  ToolbarContent,
  ToolbarToggleGroup,
  ToolbarGroup,
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
  InputGroup,
  PageSection,
  PageSectionVariants,
  Progress,
  Stack,
  StackItem,
  Text,
  TextContent,
  TextInput,
  Title
} from '@patternfly/react-core';
import {
  Select as SelectDeprecated,
  SelectOption as SelectOptionDeprecated,
  SelectVariant
} from '@patternfly/react-core/deprecated';
import DashboardWrapper from '@patternfly/react-core/src/demos/examples/DashboardWrapper';
import CodeBranchIcon from '@patternfly/react-icons/dist/esm/icons/code-branch-icon';
import CodeIcon from '@patternfly/react-icons/dist/esm/icons/code-icon';
import CubeIcon from '@patternfly/react-icons/dist/esm/icons/cube-icon';
import CheckCircleIcon from '@patternfly/react-icons/dist/esm/icons/check-circle-icon';
import ExclamationTriangleIcon from '@patternfly/react-icons/dist/esm/icons/exclamation-triangle-icon';
import FilterIcon from '@patternfly/react-icons/dist/esm/icons/filter-icon';
import SearchIcon from '@patternfly/react-icons/dist/esm/icons/search-icon';
import TimesCircleIcon from '@patternfly/react-icons/dist/esm/icons/times-circle-icon';

class PrimaryDetailInlineModifier extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDrawerExpanded: false,
      drawerPanelBodyContent: '',
      isDropdownOpen: false,
      isKebabDropdownOpen: false,
      activeItem: 0,
      inputValue: '',
      statusIsExpanded: false,
      statusSelected: null,
      riskIsExpanded: false,
      riskSelected: null,
      selectedDataListItemId: ''
    };

    this.statusOptions = [
      { value: 'Status', disabled: false, isPlaceholder: true },
      { value: 'New', disabled: false },
      { value: 'Pending', disabled: false },
      { value: 'Running', disabled: false },
      { value: 'Cancelled', disabled: false }
    ];

    this.riskOptions = [
      { value: 'Risk', disabled: false, isPlaceholder: true },
      { value: 'Low', disabled: false },
      { value: 'Medium', disabled: false },
      { value: 'High', disabled: false }
    ];

    this.onInputChange = (newValue) => {
      this.setState({ inputValue: newValue });
    };

    this.onStatusToggle = (_event, isExpanded) => {
      this.setState({
        statusIsExpanded: isExpanded
      });
    };

    this.onStatusSelect = (event, selection, isPlaceholder) => {
      if (isPlaceholder) this.clearStatusSelection();
      this.setState({
        statusSelected: selection,
        statusIsExpanded: false
      });
    };

    this.clearStatusSelection = () => {
      this.setState({
        statusSelected: null,
        statusIsExpanded: false
      });
    };

    this.onRiskToggle = (_event, isExpanded) => {
      this.setState({
        riskIsExpanded: isExpanded
      });
    };

    this.onRiskSelect = (event, selection, isPlaceholder) => {
      if (isPlaceholder) this.clearRiskSelection();
      this.setState({
        riskSelected: selection,
        riskIsExpanded: false
      });
    };

    this.clearRiskSelection = () => {
      this.setState({
        riskSelected: null,
        riskIsExpanded: false
      });
    };

    this.onSelectDataListItem = (_event, id) => {
      this.setState({
        selectedDataListItemId: id,
        isDrawerExpanded: true,
        drawerPanelBodyContent: id.charAt(id.length - 1)
      });
    };

    this.onCloseDrawerClick = () => {
      this.setState({
        isDrawerExpanded: false,
        selectedDataListItemId: ''
      });
    };
  }

  render() {
    const {
      isDrawerExpanded,
      drawerPanelBodyContent,
      isDropdownOpen,
      isKebabDropdownOpen,
      activeItem,
      inputValue,
      statusIsExpanded,
      statusSelected,
      riskIsExpanded,
      riskSelected,
      selectedDataListItemId
    } = this.state;

    const toggleGroupItems = (
      <React.Fragment>
        <ToolbarItem>
          <InputGroup>
            <TextInput
              name="inline-modifier-input"
              id="inline-modifier-input"
              type="search"
              aria-label="search input example"
              onChange={this.onInputChange}
              value={inputValue}
            />
            <Button variant={ButtonVariant.control} aria-label="search button for search input">
              <SearchIcon />
            </Button>
          </InputGroup>
        </ToolbarItem>
        <ToolbarGroup variant="filter-group">
          <ToolbarItem>
            <SelectDeprecated
              variant={SelectVariant.single}
              aria-label="Select Input"
              onToggle={this.onStatusToggle}
              onSelect={this.onStatusSelect}
              selections={statusSelected}
              isExpanded={statusIsExpanded}
            >
              {this.statusOptions.map((option, index) => (
                <SelectOptionDeprecated isDisabled={option.disabled} key={index} value={option.value} />
              ))}
            </SelectDeprecated>
          </ToolbarItem>
          <ToolbarItem>
            <SelectDeprecated
              variant={SelectVariant.single}
              aria-label="Select Input"
              onToggle={this.onRiskToggle}
              onSelect={this.onRiskSelect}
              selections={riskSelected}
              isExpanded={riskIsExpanded}
            >
              {this.riskOptions.map((option, index) => (
                <SelectOptionDeprecated isDisabled={option.disabled} key={index} value={option.value} />
              ))}
            </SelectDeprecated>
          </ToolbarItem>
        </ToolbarGroup>
      </React.Fragment>
    );

    const ToolbarItems = (
      <ToolbarToggleGroup toggleIcon={<FilterIcon />} breakpoint="xl">
        {toggleGroupItems}
      </ToolbarToggleGroup>
    );

    const panelContent = (
      <DrawerPanelContent>
        <DrawerHead>
          <Title headingLevel="h2" size="xl">
            node-{drawerPanelBodyContent}
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
        <Toolbar id="inline-modifier-data-toolbar" usePageInsets>
          <ToolbarContent>{ToolbarItems}</ToolbarContent>
        </Toolbar>
        <DataList
          aria-label="data list"
          selectedDataListItemId={selectedDataListItemId}
          onSelectDataListItem={this.onSelectDataListItem}
        >
          <DataListItem id="inline-modifier-item1">
            <DataListItemRow>
              <DataListItemCells
                dataListCells={[
                  <DataListCell key="primary content">
                    <Flex direction={{ default: 'column' }}>
                      <FlexItem>
                        <p>patternfly</p>
                        <small>
                          Working repo for PatternFly 4 <a>https://pf4.patternfly.org/</a>
                        </small>
                      </FlexItem>
                      <Flex>
                        <FlexItem>
                          <CodeBranchIcon /> 10
                        </FlexItem>
                        <FlexItem>
                          <CodeIcon /> 4
                        </FlexItem>
                        <FlexItem>
                          <CubeIcon /> 5
                        </FlexItem>
                        <FlexItem>Updated 2 days ago</FlexItem>
                      </Flex>
                    </Flex>
                  </DataListCell>,
                  <DataListAction alignRight>
                    <Stack>
                      <StackItem>
                        <Button variant={ButtonVariant.secondary}>Secondary</Button>
                      </StackItem>
                      <StackItem>
                        <Button variant={ButtonVariant.link}>Link Button</Button>
                      </StackItem>
                    </Stack>
                  </DataListAction>
                ]}
              />
            </DataListItemRow>
          </DataListItem>
          <DataListItem id="inline-modifier-item2">
            <DataListItemRow>
              <DataListItemCells
                dataListCells={[
                  <DataListCell key="primary content">
                    <Flex direction={{ default: 'column' }}>
                      <FlexItem>
                        <p>patternfly-elements</p>
                        <small>PatternFly elements</small>
                      </FlexItem>
                      <Flex>
                        <FlexItem>
                          <CodeBranchIcon /> 10
                        </FlexItem>
                        <FlexItem>
                          <CodeIcon /> 4
                        </FlexItem>
                        <FlexItem>
                          <CubeIcon /> 5
                        </FlexItem>
                        <FlexItem>
                          <CheckCircleIcon /> 7
                        </FlexItem>
                        <FlexItem>
                          <ExclamationTriangleIcon /> 5
                        </FlexItem>
                        <FlexItem>
                          <TimesCircleIcon /> 5
                        </FlexItem>
                        <FlexItem>Updated 2 days ago</FlexItem>
                      </Flex>
                    </Flex>
                  </DataListCell>,
                  <DataListAction alignRight>
                    <Stack>
                      <StackItem>
                        <Button variant={ButtonVariant.secondary}>Secondary</Button>
                      </StackItem>
                      <StackItem>
                        <Button variant={ButtonVariant.link}>Link Button</Button>
                      </StackItem>
                    </Stack>
                  </DataListAction>
                ]}
              />
            </DataListItemRow>
          </DataListItem>
          <DataListItem id="inline-modifier-item3">
            <DataListItemRow>
              <DataListItemCells
                dataListCells={[
                  <DataListCell key="primary content">
                    <Flex direction={{ default: 'column' }}>
                      <FlexItem>
                        <p>patternfly</p>
                        <small>
                          Working repo for PatternFly 4 <a>https://pf4.patternfly.org/</a>
                        </small>
                      </FlexItem>
                      <Flex>
                        <FlexItem>
                          <CodeBranchIcon /> 10
                        </FlexItem>
                        <FlexItem>
                          <CodeIcon /> 4
                        </FlexItem>
                        <FlexItem>
                          <CubeIcon /> 5
                        </FlexItem>
                        <FlexItem>Updated 2 days ago</FlexItem>
                      </Flex>
                    </Flex>
                  </DataListCell>,
                  <DataListAction alignRight>
                    <Stack>
                      <StackItem>
                        <Button variant={ButtonVariant.secondary}>Secondary</Button>
                      </StackItem>
                      <StackItem>
                        <Button variant={ButtonVariant.link}>Link Button</Button>
                      </StackItem>
                    </Stack>
                  </DataListAction>
                ]}
              />
            </DataListItemRow>
          </DataListItem>
          <DataListItem id="inline-modifier-item4">
            <DataListItemRow>
              <DataListItemCells
                dataListCells={[
                  <DataListCell key="primary content">
                    <Flex direction={{ default: 'column' }}>
                      <FlexItem>
                        <p>patternfly-elements</p>
                        <small>PatternFly elements</small>
                      </FlexItem>
                      <Flex>
                        <FlexItem>
                          <CodeBranchIcon /> 10
                        </FlexItem>
                        <FlexItem>
                          <CodeIcon /> 4
                        </FlexItem>
                        <FlexItem>
                          <CubeIcon /> 5
                        </FlexItem>
                        <FlexItem>
                          <CheckCircleIcon /> 7
                        </FlexItem>
                        <FlexItem>
                          <ExclamationTriangleIcon /> 5
                        </FlexItem>
                        <FlexItem>
                          <TimesCircleIcon /> 5
                        </FlexItem>
                        <FlexItem>Updated 2 days ago</FlexItem>
                      </Flex>
                    </Flex>
                  </DataListCell>,
                  <DataListAction alignRight>
                    <Stack>
                      <StackItem>
                        <Button variant={ButtonVariant.secondary}>Secondary</Button>
                      </StackItem>
                      <StackItem>
                        <Button variant={ButtonVariant.link}>Link Button</Button>
                      </StackItem>
                    </Stack>
                  </DataListAction>
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
        <PageSection variant={PageSectionVariants.light} padding={{ default: 'noPadding' }}>
          <Drawer isExpanded={isDrawerExpanded} isInline>
            <DrawerContent panelContent={panelContent}>
              <DrawerContentBody>{drawerContent}</DrawerContentBody>
            </DrawerContent>
          </Drawer>
        </PageSection>
      </DashboardWrapper>
    );
  }
}
```
