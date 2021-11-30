---
id: Tabs
section: components
---

import DashboardWrapper from './examples/DashboardWrapper';
import CheckCircleIcon from '@patternfly/react-icons/dist/js/icons/check-circle-icon';
import InfoCircleIcon from '@patternfly/react-icons/dist/js/icons/info-circle-icon';
import CodeIcon from '@patternfly/react-icons/dist/esm/icons/code-icon';
import CodeBranchIcon from '@patternfly/react-icons/dist/esm/icons/code-branch-icon';
import CubeIcon from '@patternfly/react-icons/dist/esm/icons/cube-icon';
import FilterIcon from '@patternfly/react-icons/dist/esm/icons/filter-icon';
import SortAmountDownIcon from '@patternfly/react-icons/dist/esm/icons/sort-amount-down-icon';

## Demos

### Open tabs

```js isFullscreen
import React from 'react';
import {
  PageSection,
  PageSectionVariants,
  PageBreadcrumb,
  Breadcrumb,
  BreadcrumbItem,
  Tabs,
  Tab,
  TabContent,
  TabContentBody,
  TabTitleText,
  Title,
  DescriptionList,
  DescriptionListGroup,
  DescriptionListTerm,
  DescriptionListDescription,
  Label,
  LabelGroup,
  Flex,
  FlexItem
} from '@patternfly/react-core';
import DashboardWrapper from './examples/DashboardWrapper';
import CheckCircleIcon from '@patternfly/react-icons/dist/js/icons/check-circle-icon';
import InfoCircleIcon from '@patternfly/react-icons/dist/js/icons/info-circle-icon';

TabsOpenDemo = () => {
  const [activeTabKey, setActiveTabKey] = React.useState(0);

  // Toggle currently active tab
  const handleTabClick = (event, tabIndex) => {
    setActiveTabKey(tabIndex);
  };

  const tabsBreadcrumb = (
    <PageBreadcrumb isWidthLimited>
      <Breadcrumb>
        <BreadcrumbItem to="#">Overview</BreadcrumbItem>
        <BreadcrumbItem to="#">Pods</BreadcrumbItem>
        <BreadcrumbItem to="#" isActive>
          Pod details{' '}
        </BreadcrumbItem>
      </Breadcrumb>
    </PageBreadcrumb>
  );

  const tabContent = (
    <Flex direction={{ default: 'column' }}>
      <FlexItem spacer={{ default: 'spacerLg' }}>
        <Title headingLevel="h2" size="lg" className="pf-u-mt-sm" id="open-tabs-example-tabs-list-details-title">
          Pod details
        </Title>
      </FlexItem>
      <FlexItem>
        <DescriptionList columnModifier={{ lg: '2Col' }} aria-labelledby="open-tabs-example-tabs-list-details-title">
          <DescriptionListGroup>
            <DescriptionListTerm>Name</DescriptionListTerm>
            <DescriptionListDescription>3scale-control-fccb6ddb9-phyqv9</DescriptionListDescription>
          </DescriptionListGroup>
          <DescriptionListGroup>
            <DescriptionListTerm>Status</DescriptionListTerm>
            <DescriptionListDescription>
              <Flex spacer={{ default: 'spacerLg' }}>
                <FlexItem>
                  <CheckCircleIcon />
                </FlexItem>
                <FlexItem>Running</FlexItem>
              </Flex>
            </DescriptionListDescription>
          </DescriptionListGroup>
          <DescriptionListGroup>
            <DescriptionListTerm>Namespace</DescriptionListTerm>
            <DescriptionListDescription>
              <Flex spaceItems={{ default: 'spaceItemsSm' }}>
                <FlexItem>
                  <Label color="cyan">NS</Label>
                </FlexItem>
                <FlexItem>
                  <a href="#">knative-serving-ingress</a>
                </FlexItem>
              </Flex>
            </DescriptionListDescription>
          </DescriptionListGroup>
          <DescriptionListGroup>
            <DescriptionListTerm>Restart policy</DescriptionListTerm>
            <DescriptionListDescription>Always restart</DescriptionListDescription>
          </DescriptionListGroup>
          <DescriptionListGroup>
            <DescriptionListTerm>Labels</DescriptionListTerm>
            <DescriptionListDescription>
              <LabelGroup>
                <Label>app=3scale-gateway</Label>
                <Label>pod-template-has=6747686899</Label>
              </LabelGroup>
            </DescriptionListDescription>
          </DescriptionListGroup>
          <DescriptionListGroup>
            <DescriptionListTerm>Active deadline seconds</DescriptionListTerm>
            <DescriptionListDescription>Not configured</DescriptionListDescription>
          </DescriptionListGroup>
          <DescriptionListGroup>
            <DescriptionListTerm>Tolerations</DescriptionListTerm>
            <DescriptionListDescription>stuff</DescriptionListDescription>
          </DescriptionListGroup>
          <DescriptionListGroup>
            <DescriptionListTerm>Pod IP</DescriptionListTerm>
            <DescriptionListDescription>10..345.2.197</DescriptionListDescription>
          </DescriptionListGroup>
          <DescriptionListGroup>
            <DescriptionListTerm>Annotations</DescriptionListTerm>
            <DescriptionListDescription>stuff</DescriptionListDescription>
          </DescriptionListGroup>
          <DescriptionListGroup>
            <DescriptionListTerm>Node</DescriptionListTerm>
            <DescriptionListDescription>
              <Flex spaceItems={{ default: 'spaceItemsSm' }}>
                <FlexItem>
                  <Label color="purple">N</Label>
                </FlexItem>
                <FlexItem>ip-10-0-233-118.us-east-2.computer.external</FlexItem>
              </Flex>
            </DescriptionListDescription>
          </DescriptionListGroup>
          <DescriptionListGroup>
            <DescriptionListTerm>Created at</DescriptionListTerm>
            <DescriptionListDescription>
              <time>Oct 15, 1:51 pm</time>
            </DescriptionListDescription>
          </DescriptionListGroup>
        </DescriptionList>
      </FlexItem>
    </Flex>
  );

  return (
    <DashboardWrapper hasNoBreadcrumb>
      {tabsBreadcrumb}
      <PageSection isWidthLimited variant={PageSectionVariants.light}>
        <Flex
          spaceItems={{ default: 'spaceItemsMd' }}
          alignItems={{ default: 'alignItemsFlexStart' }}
          flexWrap={{ default: 'noWrap' }}
        >
          <FlexItem>
            <Label color="blue">N</Label>
          </FlexItem>
          <FlexItem>
            <Title headingLevel="h1" size="2xl">
              3scale-control-fccb6ddb9-phyqv9
            </Title>
          </FlexItem>
          <FlexItem flex={{ default: 'flexNone' }}>
            <Label icon={<InfoCircleIcon />}>Running</Label>
          </FlexItem>
        </Flex>
      </PageSection>
      <PageSection type="tabs" variant={PageSectionVariants.light} isWidthLimited>
        <Tabs activeKey={activeTabKey} onSelect={handleTabClick} usePageInsets id="open-tabs-example-tabs-list">
          <Tab eventKey={0} title={<TabTitleText>Details</TabTitleText>} tabContentId={`tabContent${0}`} />
          <Tab eventKey={1} title={<TabTitleText>YAML</TabTitleText>} tabContentId={`tabContent${1}`} />
          <Tab eventKey={2} title={<TabTitleText>Environment</TabTitleText>} tabContentId={`tabContent${2}`} />
          <Tab eventKey={3} title={<TabTitleText>Events</TabTitleText>} tabContentId={`tabContent${3}`} />
          <Tab eventKey={4} title={<TabTitleText>Terminal</TabTitleText>} tabContentId={`tabContent${4}`} />
        </Tabs>
      </PageSection>
      <PageSection isWidthLimited variant={PageSectionVariants.light}>
        <TabContent key={0} eventKey={0} id={`tabContent${0}`} activeKey={activeTabKey} hidden={0 !== activeTabKey}>
          <TabContentBody>{tabContent}</TabContentBody>
        </TabContent>
        <TabContent key={1} eventKey={1} id={`tabContent${1}`} activeKey={activeTabKey} hidden={1 !== activeTabKey}>
          <TabContentBody>YAML panel</TabContentBody>
        </TabContent>
        <TabContent key={2} eventKey={2} id={`tabContent${2}`} activeKey={activeTabKey} hidden={2 !== activeTabKey}>
          <TabContentBody>Environment panel</TabContentBody>
        </TabContent>
        <TabContent key={3} eventKey={3} id={`tabContent${3}`} activeKey={activeTabKey} hidden={3 !== activeTabKey}>
          <TabContentBody>Events panel</TabContentBody>
        </TabContent>
        <TabContent key={4} eventKey={4} id={`tabContent${4}`} activeKey={activeTabKey} hidden={4 !== activeTabKey}>
          <TabContentBody>Terminal panel</TabContentBody>
        </TabContent>
      </PageSection>
    </DashboardWrapper>
  );
};
```

### Open tabs with secondary tabs

```js isFullscreen
import React from 'react';
import {
  PageSection,
  PageSectionVariants,
  PageBreadcrumb,
  Breadcrumb,
  BreadcrumbItem,
  Tabs,
  Tab,
  TabContent,
  TabContentBody,
  TabTitleText,
  Title,
  DescriptionList,
  DescriptionListGroup,
  DescriptionListTerm,
  DescriptionListDescription,
  Label,
  LabelGroup,
  Flex,
  FlexItem
} from '@patternfly/react-core';
import DashboardWrapper from './examples/DashboardWrapper';
import CheckCircleIcon from '@patternfly/react-icons/dist/js/icons/check-circle-icon';
import InfoCircleIcon from '@patternfly/react-icons/dist/js/icons/info-circle-icon';

TabsOpenWithSecondaryTabsDemo = () => {
  const [activeTabKey, setActiveTabKey] = React.useState(0);
  const [activeTabKeySecondary, setActiveTabKeySecondary] = React.useState(10);

  // Toggle currently active tab
  const handleTabClick = (event, tabIndex) => {
    setActiveTabKey(tabIndex);
  };

  // Toggle currently active secondary tab
  const handleTabClickSecondary = (event, tabIndex) => {
    setActiveTabKeySecondary(tabIndex);
  };

  const tabsBreadcrumb = (
    <PageBreadcrumb isWidthLimited>
      <Breadcrumb>
        <BreadcrumbItem to="#">Overview</BreadcrumbItem>
        <BreadcrumbItem to="#">Pods</BreadcrumbItem>
        <BreadcrumbItem to="#" isActive>
          Pod details{' '}
        </BreadcrumbItem>
      </Breadcrumb>
    </PageBreadcrumb>
  );

  const tabContent = (
    <Flex direction={{ default: 'column' }}>
      <FlexItem spacer={{ default: 'spacerLg' }}>
        <Title headingLevel="h2" size="lg" className="pf-u-mt-sm" id="open-tabs-example-tabs-list-details-title">
          Pod details
        </Title>
      </FlexItem>
      <FlexItem>
        <DescriptionList columnModifier={{ lg: '2Col' }} aria-labelledby="open-tabs-example-tabs-list-details-title">
          <DescriptionListGroup>
            <DescriptionListTerm>Name</DescriptionListTerm>
            <DescriptionListDescription>3scale-control-fccb6ddb9-phyqv9</DescriptionListDescription>
          </DescriptionListGroup>
          <DescriptionListGroup>
            <DescriptionListTerm>Status</DescriptionListTerm>
            <DescriptionListDescription>
              <Flex spacer={{ default: 'spacerLg' }}>
                <FlexItem>
                  <CheckCircleIcon />
                </FlexItem>
                <FlexItem>Running</FlexItem>
              </Flex>
            </DescriptionListDescription>
          </DescriptionListGroup>
          <DescriptionListGroup>
            <DescriptionListTerm>Namespace</DescriptionListTerm>
            <DescriptionListDescription>
              <Flex spaceItems={{ default: 'spaceItemsSm' }}>
                <FlexItem>
                  <Label color="cyan">NS</Label>
                </FlexItem>
                <FlexItem>
                  <a href="#">knative-serving-ingress</a>
                </FlexItem>
              </Flex>
            </DescriptionListDescription>
          </DescriptionListGroup>
          <DescriptionListGroup>
            <DescriptionListTerm>Restart policy</DescriptionListTerm>
            <DescriptionListDescription>Always restart</DescriptionListDescription>
          </DescriptionListGroup>
          <DescriptionListGroup>
            <DescriptionListTerm>Labels</DescriptionListTerm>
            <DescriptionListDescription>
              <LabelGroup>
                <Label>app=3scale-gateway</Label>
                <Label>pod-template-has=6747686899</Label>
              </LabelGroup>
            </DescriptionListDescription>
          </DescriptionListGroup>
          <DescriptionListGroup>
            <DescriptionListTerm>Active deadline seconds</DescriptionListTerm>
            <DescriptionListDescription>Not configured</DescriptionListDescription>
          </DescriptionListGroup>
          <DescriptionListGroup>
            <DescriptionListTerm>Tolerations</DescriptionListTerm>
            <DescriptionListDescription>stuff</DescriptionListDescription>
          </DescriptionListGroup>
          <DescriptionListGroup>
            <DescriptionListTerm>Pod IP</DescriptionListTerm>
            <DescriptionListDescription>10..345.2.197</DescriptionListDescription>
          </DescriptionListGroup>
          <DescriptionListGroup>
            <DescriptionListTerm>Annotations</DescriptionListTerm>
            <DescriptionListDescription>stuff</DescriptionListDescription>
          </DescriptionListGroup>
          <DescriptionListGroup>
            <DescriptionListTerm>Node</DescriptionListTerm>
            <DescriptionListDescription>
              <Flex spaceItems={{ default: 'spaceItemsSm' }}>
                <FlexItem>
                  <Label color="purple">N</Label>
                </FlexItem>
                <FlexItem>ip-10-0-233-118.us-east-2.computer.external</FlexItem>
              </Flex>
            </DescriptionListDescription>
          </DescriptionListGroup>
          <DescriptionListGroup>
            <DescriptionListTerm>Created at</DescriptionListTerm>
            <DescriptionListDescription>
              <time>Oct 15, 1:51 pm</time>
            </DescriptionListDescription>
          </DescriptionListGroup>
        </DescriptionList>
      </FlexItem>
    </Flex>
  );

  return (
    <DashboardWrapper hasNoBreadcrumb>
      {tabsBreadcrumb}
      <PageSection isWidthLimited variant={PageSectionVariants.light}>
        <Flex
          spaceItems={{ default: 'spaceItemsMd' }}
          alignItems={{ default: 'alignItemsFlexStart' }}
          flexWrap={{ default: 'noWrap' }}
        >
          <FlexItem>
            <Label color="blue">N</Label>
          </FlexItem>
          <FlexItem>
            <Title headingLevel="h1" size="2xl">
              3scale-control-fccb6ddb9-phyqv9
            </Title>
          </FlexItem>
          <FlexItem flex={{ default: 'flexNone' }}>
            <Label icon={<InfoCircleIcon />}>Running</Label>
          </FlexItem>
        </Flex>
      </PageSection>
      <PageSection type="tabs" variant={PageSectionVariants.light} isWidthLimited>
        <Tabs activeKey={activeTabKey} onSelect={handleTabClick} usePageInsets id="open-tabs-example-tabs-list">
          <Tab eventKey={0} title={<TabTitleText>Details</TabTitleText>} tabContentId={`tabContent${0}`} />
          <Tab eventKey={1} title={<TabTitleText>YAML</TabTitleText>} tabContentId={`tabContent${1}`} />
          <Tab eventKey={2} title={<TabTitleText>Environment</TabTitleText>} tabContentId={`tabContent${2}`} />
          <Tab eventKey={3} title={<TabTitleText>Events</TabTitleText>} tabContentId={`tabContent${3}`} />
          <Tab eventKey={4} title={<TabTitleText>Terminal</TabTitleText>} tabContentId={`tabContent${4}`} />
        </Tabs>
      </PageSection>
      <PageSection isWidthLimited variant={PageSectionVariants.light}>
        <Flex direction={{ default: 'column' }}>
          <FlexItem>
            <TabContent key={0} eventKey={0} id={`tabContent${0}`} activeKey={activeTabKey} hidden={0 !== activeTabKey}>
              <TabContentBody>
                <Tabs
                  isSecondary
                  activeKey={activeTabKeySecondary}
                  onSelect={handleTabClickSecondary}
                  inset={{ default: 'insetNone' }}
                  id="open-with-secondary-tabs-example-tabs-list-secondary"
                >
                  <Tab
                    eventKey={10}
                    title={<TabTitleText>Pod information</TabTitleText>}
                    tabContentId={`tabContent${10}`}
                  />
                  <Tab
                    eventKey={11}
                    title={<TabTitleText>Editable aspects</TabTitleText>}
                    tabContentId={`tabContent${11}`}
                  />
                </Tabs>
                <TabContent
                  key={10}
                  eventKey={10}
                  id={`tabContent${10}`}
                  activeKey={activeTabKeySecondary}
                  hidden={10 !== activeTabKeySecondary}
                >
                  <TabContentBody>{tabContent}</TabContentBody>
                </TabContent>
                <TabContent
                  key={11}
                  eventKey={11}
                  id={`tabContent${11}`}
                  activeKey={activeTabKeySecondary}
                  hidden={11 !== activeTabKeySecondary}
                >
                  <TabContentBody>Editable aspects</TabContentBody>
                </TabContent>
              </TabContentBody>
            </TabContent>
          </FlexItem>
          <FlexItem>
            <TabContent key={1} eventKey={1} id={`tabContent${1}`} activeKey={activeTabKey} hidden={1 !== activeTabKey}>
              <TabContentBody>YAML panel</TabContentBody>
            </TabContent>
            <TabContent key={2} eventKey={2} id={`tabContent${2}`} activeKey={activeTabKey} hidden={2 !== activeTabKey}>
              <TabContentBody>Environment panel</TabContentBody>
            </TabContent>
            <TabContent key={3} eventKey={3} id={`tabContent${3}`} activeKey={activeTabKey} hidden={3 !== activeTabKey}>
              <TabContentBody>Events panel</TabContentBody>
            </TabContent>
            <TabContent key={4} eventKey={4} id={`tabContent${4}`} activeKey={activeTabKey} hidden={4 !== activeTabKey}>
              <TabContentBody>Terminal panel</TabContentBody>
            </TabContent>
          </FlexItem>
        </Flex>
      </PageSection>
    </DashboardWrapper>
  );
};
```

### Nested tabs
```js isFullscreen file="./Tabs/NestedTabsDemo.js"
```

### Tables and tabs

```js isFullscreen
import React from 'react';
import {
  Button,
  Drawer,
  DrawerContent,
  DrawerContentBody,
  DrawerPanelContent,
  DrawerHead,
  DrawerActions,
  DrawerCloseButton,
  Dropdown,
  Flex,
  FlexItem,
  KebabToggle,
  PageSection,
  Tabs,
  Tab,
  TabContent,
  TabContentBody,
  TabTitleText,
  Title,
  Toolbar,
  ToolbarItem,
  ToolbarContent,
  ToolbarToggleGroup,
  OptionsMenu,
  OptionsMenuToggle,
  OverflowMenu,
  OverflowMenuContent,
  OverflowMenuControl,
  OverflowMenuGroup,
  OverflowMenuItem,
  Select,
  SelectOption,
  Pagination
} from '@patternfly/react-core';
import { TableComposable, Thead, Tbody, Tr, Th, Td } from '@patternfly/react-table';
import DashboardWrapper from './examples/DashboardWrapper';
import CheckCircleIcon from '@patternfly/react-icons/dist/js/icons/check-circle-icon';
import InfoCircleIcon from '@patternfly/react-icons/dist/js/icons/info-circle-icon';
import CodeIcon from '@patternfly/react-icons/dist/esm/icons/code-icon';
import CodeBranchIcon from '@patternfly/react-icons/dist/esm/icons/code-branch-icon';
import CubeIcon from '@patternfly/react-icons/dist/esm/icons/cube-icon';
import FilterIcon from '@patternfly/react-icons/dist/esm/icons/filter-icon';
import SortAmountDownIcon from '@patternfly/react-icons/dist/esm/icons/sort-amount-down-icon';

TablesAndTabsDemo = () => {
  // tab properties
  const [activeTabKey, setActiveTabKey] = React.useState(0);
  // Toggle currently active tab
  const handleTabClick = (event, tabIndex) => {
    setActiveTabKey(tabIndex);
  };

  // drawer properties
  const [isExpanded, setIsExpanded] = React.useState(false);
  const drawerRef = React.createRef();
  const onExpand = () => {
    drawerRef.current && drawerRef.current.focus();
  };

  // toolbar properties
  const [nameIsExpanded, setNameIsExpanded] = React.useState(false);
  const [nameSelected, setNameSelected] = React.useState(null);

  // table properties
  // In real usage, this data would come from some external source like an API via props.
  const repositories = [
    { name: "Node 1", branches: 10, prs: 25, workspaces: 5, lastCommit: '2 days ago' },
    { name: "Node 2", branches: 8, prs: 30, workspaces: 2, lastCommit: '2 days ago' },
    { name: "Node 3", branches: 12, prs: 48, workspaces: 13, lastCommit: '30 days ago' },
    { name: "Node 4", branches: 3, prs: 8, workspaces: 20, lastCommit: '8 days ago' },
    { name: "Node 5", branches: 33, prs: 21, workspaces: 2, lastCommit: '26 days ago' },
  ];

  const columnNames = {
    name: 'Repositories',
    branches: 'Branches',
    prs: 'Pull requests',
    workspaces: 'Workspaces',
    lastCommit: 'Last commit'
  };

  // In this example, selected row is tracked by the repo name from each row. This could be any unique identifier.
  // This is to prevent state from being based on row order index in case we later add sorting.
  const [selectedRepoName, setSelectedRepoName] = React.useState('');
  const setRepoSelected = (repo, isSelecting = true) =>
    setSelectedRepoName(prevSelected => {
      const otherSelectedRepoName = (prevSelected !== repo.name);
      return isSelecting ? repo.name : otherSelectedRepoName;
    });
  const isRepoSelected = (repo) => selectedRepoName === repo.name;

  const defaultActions = [
    {
      title: 'Some action',
      onClick: (event, rowId, rowData, extra) => console.log('clicked on Some action, on row: ', rowId)
    },
    {
      title: <a href="https://www.patternfly.org">Link action</a>
    },
    {
      isSeparator: true
    },
    {
      title: 'Third action',
      onClick: (event, rowId, rowData, extra) => console.log('clicked on Third action, on row: ', rowId)
    }
  ];

  const toolbar = (
    <Toolbar id="page-layout-table-column-management-action-toolbar-top">
      <ToolbarContent>
        <ToolbarToggleGroup toggleIcon={<FilterIcon />} breakpoint="xl">
          <ToolbarItem>
            <Select
              variant={SelectVariant.single}
              aria-label="Select Input"
              placeholderText="Name"
            />
          </ToolbarItem>
        </ToolbarToggleGroup>
        <ToolbarItem>
          <OptionsMenu
            id="page-layout-table-column-management-action-toolbar-top-options-menu-toggle"
            isPlain
            menuItems={[]}
            toggle={
              <OptionsMenuToggle
                toggleTemplate={<SortAmountDownIcon aria-hidden="true" />}
                aria-label="Sort"
                hideCaret
              />
            }
          />
        </ToolbarItem>
        <ToolbarItem>
        <OverflowMenu breakpoint="md">
          <OverflowMenuContent>
            <OverflowMenuGroup groupType="button" isPersistent>
              <OverflowMenuItem isPersistent>
                <Button variant="primary">Action</Button>
              </OverflowMenuItem>
              <OverflowMenuItem isPersistent>
                <Button variant="secondary">Deploy</Button>
              </OverflowMenuItem>
            </OverflowMenuGroup>
          </OverflowMenuContent>
          <OverflowMenuControl hasAdditionalOptions>
            <Dropdown
              onSelect={() => {}}
              toggle={<KebabToggle onToggle={() => {}} />}
              isOpen={false}
              isPlain
              dropdownItems={[]}
            />
          </OverflowMenuControl>
        </OverflowMenu>
        </ToolbarItem>
        <ToolbarItem variant="pagination">
            <Pagination
              itemCount={36}
              widgetId="pagination-options-menu-bottom"
              page={1}
              variant={PaginationVariant.top}
              isCompact
            />
          </ToolbarItem>
      </ToolbarContent>
    </Toolbar>
  );

  const tableComposable = (
    <TableComposable aria-label="`Composable` table">
      <Thead noWrap>
        <Tr>
          <Th>{columnNames.name}</Th>
          <Th>{columnNames.branches}</Th>
          <Th>{columnNames.prs}</Th>
          <Th>{columnNames.workspaces}</Th>
          <Th>{columnNames.lastCommit}</Th>
        </Tr>
      </Thead>
      <Tbody>
        {repositories.map((repo, rowIndex) => (
          <Tr
            key={repo.name}
            onRowClick={() => {
                setRepoSelected(repo, !isRepoSelected(repo));
                setIsExpanded(!isRepoSelected(repo));
              }
            }
            isHoverable
            isRowSelected={isRepoSelected(repo)}
          >
            <Td dataLabel={columnNames.name}>
              {repo.name}
              <div>
                <a href="#">siemur/test-space</a>
              </div>
            </Td>
            <Td dataLabel={columnNames.branches}>
              <Flex>
                <FlexItem>
                  {repo.branches}
                </FlexItem>
                <FlexItem>
                  <CodeBranchIcon key="icon" />
                </FlexItem>
              </Flex>
            </Td>
            <Td dataLabel={columnNames.prs}>
              <Flex>
                <FlexItem>
                  {repo.prs}
                </FlexItem>
                <FlexItem>
                  <CodeIcon key="icon" />
                </FlexItem>
              </Flex>
            </Td>
            <Td dataLabel={columnNames.workspaces}>
              <Flex>
                <FlexItem>
                  {repo.workspaces}
                </FlexItem>
                <FlexItem>
                  <CubeIcon key="icon" />
                </FlexItem>
              </Flex>
            </Td>
            <Td dataLabel={columnNames.lastCommit}>
              {repo.lastCommit}
            </Td>
            <Td
              key={`${rowIndex}_5`}
              actions={{
                items: defaultActions
              }}
            />
          </Tr>
        ))}
      </Tbody>
    </TableComposable>
  );

  const panelContent = (
    <DrawerPanelContent>
      <DrawerHead>
        <span tabIndex={isExpanded ? 0 : -1} ref={drawerRef}>
            drawer-panel
          </span>
        <DrawerActions>
          <DrawerCloseButton onClick={() => {
            setRepoSelected('', false);
            setIsExpanded(false);
          }
        }/>
        </DrawerActions>
      </DrawerHead>
    </DrawerPanelContent>
  );

  const tabContent = (
    <Drawer isExpanded={isExpanded} isInline onExpand={onExpand}>
      <DrawerContent panelContent={panelContent}>
        <DrawerContentBody>
          {toolbar}
          {tableComposable}
          <Pagination
            isCompact
            id="page-layout-table-column-management-action-toolbar-bottom"
            itemCount={36}
            widgetId="pagination-options-menu-bottom"
            page={1}
            variant={PaginationVariant.bottom}
          />
        </DrawerContentBody>
      </DrawerContent>
    </Drawer>
  );

  return (
    <DashboardWrapper hasNoBreadcrumb>
      <PageSection isWidthLimited variant={PageSectionVariants.light}>
        <Title headingLevel="h1" size="2xl">
          Nodes
        </Title>
      </PageSection>
      <PageSection type="tabs" variant={PageSectionVariants.light} isWidthLimited>
        <Tabs activeKey={activeTabKey} onSelect={handleTabClick} usePageInsets id="open-tabs-example-tabs-list">
          <Tab eventKey={0} title={<TabTitleText>Nodes</TabTitleText>} tabContentId={`tabContent${0}`} />
          <Tab eventKey={1} title={<TabTitleText>Node connectors</TabTitleText>} tabContentId={`tabContent${1}`} />
        </Tabs>
      </PageSection>
      <PageSection isWidthLimited variant={PageSectionVariants.light}>
        <TabContent key={0} eventKey={0} id={`tabContent${0}`} activeKey={activeTabKey} hidden={0 !== activeTabKey}>
          <TabContentBody>{tabContent}</TabContentBody>
        </TabContent>
        <TabContent key={1} eventKey={1} id={`tabContent${1}`} activeKey={activeTabKey} hidden={1 !== activeTabKey}>
          <TabContentBody>Node connectors panel</TabContentBody>
        </TabContent>
      </PageSection>
    </DashboardWrapper>
  );
};
```
