/* eslint-disable no-console */
import React from 'react';
import {
  Button,
  Divider,
  Drawer,
  DrawerContent,
  DrawerContentBody,
  DrawerPanelContent,
  DrawerHead,
  DrawerActions,
  DrawerCloseButton,
  DrawerPanelBody,
  Dropdown,
  DropdownList,
  Flex,
  FlexItem,
  Label,
  LabelGroup,
  MenuToggle,
  OverflowMenu,
  OverflowMenuContent,
  OverflowMenuControl,
  OverflowMenuGroup,
  OverflowMenuItem,
  PageSection,
  Progress,
  ProgressSize,
  Tabs,
  Tab,
  TabContent,
  TabContentBody,
  TabTitleText,
  Title,
  Toolbar,
  ToolbarItem,
  ToolbarContent,
  ToolbarToggleGroup
} from '@patternfly/react-core';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  IAction,
  ActionsColumn,
  CustomActionsToggleProps
} from '@patternfly/react-table';
import EllipsisVIcon from '@patternfly/react-icons/dist/esm/icons/ellipsis-v-icon';
import CodeIcon from '@patternfly/react-icons/dist/esm/icons/code-icon';
import CodeBranchIcon from '@patternfly/react-icons/dist/esm/icons/code-branch-icon';
import CubeIcon from '@patternfly/react-icons/dist/esm/icons/cube-icon';
import FilterIcon from '@patternfly/react-icons/dist/esm/icons/filter-icon';
import SortAmountDownIcon from '@patternfly/react-icons/dist/esm/icons/sort-amount-down-icon';
import { KeyTypes } from '../../../helpers';
import { DashboardWrapper } from '@patternfly/react-core/src/demos/DashboardWrapper';

interface Repository {
  name: string;
  branches: number | null;
  prs: number | null;
  workspaces: number;
  lastCommit: string;
}

export const TablesAndTabs = () => {
  // secondary tab properties
  const [secondaryActiveTabKey, setSecondaryActiveTabKey] = React.useState<number>(10);
  const handleSecondaryTabClick = (tabIndex: number) => {
    setSecondaryActiveTabKey(tabIndex);
  };

  // drawer properties
  const [isExpanded, setIsExpanded] = React.useState<boolean>(true);

  // table properties
  // In real usage, this data would come from some external source like an API via props.
  const repositories: Repository[] = [
    { name: 'Node 1', branches: 10, prs: 25, workspaces: 5, lastCommit: '2 days ago' },
    { name: 'Node 2', branches: 8, prs: 30, workspaces: 2, lastCommit: '2 days ago' },
    { name: 'Node 3', branches: 12, prs: 48, workspaces: 13, lastCommit: '30 days ago' },
    { name: 'Node 4', branches: 3, prs: 8, workspaces: 20, lastCommit: '8 days ago' },
    { name: 'Node 5', branches: 33, prs: 21, workspaces: 2, lastCommit: '26 days ago' }
  ];

  const columnNames = {
    name: 'Repositories',
    branches: 'Branches',
    prs: 'Pull requests',
    workspaces: 'Workspaces',
    lastCommit: 'Last commit'
  };

  const [selectedRepoName, setSelectedRepoName] = React.useState<string>(repositories[0].name);
  const isRepoSelected = (repo: Repository) => repo.name === selectedRepoName;
  const setRepoSelected = (_event: React.FormEvent<HTMLInputElement>, repo: Repository) => {
    setSelectedRepoName(repo.name);
    setIsExpanded(true);
  };

  const defaultActions: IAction[] = [
    {
      title: 'Some action',
      onClick: (event) => {
        event.stopPropagation();
        console.log('clicked on Some action');
      }
    },
    {
      title: <a href="https://www.patternfly.org">Link action</a>,
      onClick: (event) => {
        event.stopPropagation();
        console.log('clicked on Link action');
      }
    },
    {
      isSeparator: true
    },
    {
      title: 'Third action',
      onClick: (event) => {
        event.stopPropagation();
        console.log('clicked on Third action');
      }
    }
  ];

  const firstActionRef = React.useRef<HTMLButtonElement>(null);

  /** Handles when the user clicks on the custom action toggle, stops propagation to prevent the drawer from opening */
  const handleActionsToggleClick = (event: React.MouseEvent, ActionsToggleProps: CustomActionsToggleProps) => {
    const { onToggle } = ActionsToggleProps;

    onToggle(event);
    event.stopPropagation();
  };

  /** Enables keyboard navigation of the custom actions toggle */
  const handleActionsToggleKeyDown = (event: React.KeyboardEvent, ActionsToggleProps: CustomActionsToggleProps) => {
    const { onToggle } = ActionsToggleProps;
    const { Enter, Space, Escape, ArrowDown, ArrowUp } = KeyTypes;

    const shouldToggle = [Enter, Space, Escape].includes(event.key);
    const shouldFocus = [ArrowDown, ArrowUp, Enter, Space].includes(event.key);

    if (shouldToggle) {
      onToggle(event);
    }

    if (shouldFocus) {
      setTimeout(() => {
        firstActionRef.current?.focus();
      }, 0);
    }
  };

  const handleDrawerClose = () => {
    setIsExpanded(false);
    setSelectedRepoName('');
  };

  const customActionsToggle = (props: CustomActionsToggleProps, toggleName: string) => (
    <MenuToggle
      isDisabled={props.isDisabled}
      onClick={(event: React.MouseEvent) => handleActionsToggleClick(event, props)}
      onKeyDown={(event: React.KeyboardEvent) => handleActionsToggleKeyDown(event, props)}
      variant="plain"
      aria-label={`${toggleName} actions`}
      aria-haspopup="menu"
      isExpanded={props.isOpen}
      ref={props.toggleRef}
      icon={<EllipsisVIcon />}
    />
  );

  const toolbar = (
    <Toolbar id="page-layout-table-column-management-action-toolbar-top">
      <ToolbarContent>
        <ToolbarToggleGroup toggleIcon={<FilterIcon />} breakpoint="xl">
          <ToolbarItem>
            <MenuToggle>Name</MenuToggle>
          </ToolbarItem>
        </ToolbarToggleGroup>
        <ToolbarItem>
          <MenuToggle variant="plain" aria-label="Sort columns" icon={<SortAmountDownIcon aria-hidden="true" />} />
        </ToolbarItem>
        <OverflowMenu breakpoint="md">
          <OverflowMenuContent>
            <OverflowMenuGroup groupType="button" isPersistent>
              <OverflowMenuItem isPersistent>
                <Button variant="primary">Generate</Button>
              </OverflowMenuItem>
              <OverflowMenuItem isPersistent>
                <Button variant="secondary">Deploy</Button>
              </OverflowMenuItem>
            </OverflowMenuGroup>
          </OverflowMenuContent>
          <OverflowMenuControl hasAdditionalOptions>
            <Dropdown
              onSelect={() => {}}
              toggle={(toggleRef) => (
                <MenuToggle
                  ref={toggleRef}
                  aria-label="overflow menu"
                  variant="plain"
                  onClick={() => {}}
                  isExpanded={false}
                  icon={<EllipsisVIcon />}
                />
              )}
              isOpen={false}
            >
              <DropdownList>{[]}</DropdownList>
            </Dropdown>
          </OverflowMenuControl>
        </OverflowMenu>
      </ToolbarContent>
    </Toolbar>
  );

  const table = (
    <Table aria-label="`Composable` table">
      <Thead noWrap>
        <Tr>
          <Th screenReaderText="Row select" />
          <Th>{columnNames.name}</Th>
          <Th>{columnNames.branches}</Th>
          <Th>{columnNames.prs}</Th>
          <Th>{columnNames.workspaces}</Th>
          <Th>{columnNames.lastCommit}</Th>
        </Tr>
      </Thead>
      <Tbody>
        {repositories.map((repo, rowIndex) => (
          <Tr key={repo.name}>
            <Td
              key={`${rowIndex}_0`}
              select={{
                rowIndex,
                onSelect: (event) => setRepoSelected(event, repo),
                isSelected: isRepoSelected(repo),
                variant: 'radio'
              }}
            />
            <Td dataLabel={columnNames.name}>
              {repo.name}
              <div>
                {/** Preventing default behavior for demo purposes only */}
                <a onClick={(event) => event.preventDefault()} href="#">
                  siemur/test-space
                </a>
              </div>
            </Td>
            <Td dataLabel={columnNames.branches}>
              <Flex>
                <FlexItem>{repo.branches}</FlexItem>
                <FlexItem>
                  <CodeBranchIcon key="icon" />
                </FlexItem>
              </Flex>
            </Td>
            <Td dataLabel={columnNames.prs}>
              <Flex>
                <FlexItem>{repo.prs}</FlexItem>
                <FlexItem>
                  <CodeIcon key="icon" />
                </FlexItem>
              </Flex>
            </Td>
            <Td dataLabel={columnNames.workspaces}>
              <Flex>
                <FlexItem>{repo.workspaces}</FlexItem>
                <FlexItem>
                  <CubeIcon key="icon" />
                </FlexItem>
              </Flex>
            </Td>
            <Td dataLabel={columnNames.lastCommit}>{repo.lastCommit}</Td>
            <Td key={`${rowIndex}_5`}>
              <ActionsColumn
                items={defaultActions}
                actionsToggle={(props: CustomActionsToggleProps) => customActionsToggle(props, repo.name)}
                firstActionItemRef={firstActionRef}
              />
            </Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );

  const panelContent = (
    <DrawerPanelContent widths={{ default: 'width_33', xl: 'width_33' }}>
      <DrawerHead>
        <DrawerActions>
          <DrawerCloseButton onClick={handleDrawerClose} />
        </DrawerActions>
        <Flex spaceItems={{ default: 'spaceItemsSm' }} direction={{ default: 'column' }}>
          <FlexItem>
            <Title headingLevel="h2" size="lg">
              {selectedRepoName}
            </Title>
          </FlexItem>
          <FlexItem>
            {/** Preventing default behavior for demo purposes only */}
            <a onClick={(event) => event.preventDefault()} href="#">
              siemur/test-space
            </a>
          </FlexItem>
        </Flex>
      </DrawerHead>
      <DrawerPanelBody hasNoPadding>
        <Tabs
          activeKey={secondaryActiveTabKey}
          onSelect={(_event, tabIndex) => handleSecondaryTabClick(Number(tabIndex))}
          isBox
          isFilled
          id="tabs-tables-secondary-tabs"
        >
          <Tab eventKey={10} title={<TabTitleText>Overview</TabTitleText>} tabContentId={`tabContent${10}`} />
          <Tab eventKey={11} title={<TabTitleText>Activity</TabTitleText>} tabContentId={`tabContent${11}`} />
        </Tabs>
      </DrawerPanelBody>
      <DrawerPanelBody>
        <TabContent
          key={10}
          eventKey={10}
          id={`tabContent${10}`}
          activeKey={secondaryActiveTabKey}
          hidden={10 !== secondaryActiveTabKey}
        >
          <TabContentBody>
            <Flex direction={{ default: 'column' }} spaceItems={{ default: 'spaceItemsLg' }}>
              <FlexItem>
                <p>
                  The content of the drawer really is up to you. It could have form fields, definition lists, text
                  lists, labels, charts, progress bars, etc. Spacing recommendation is 24px margins. You can put tabs in
                  here, and can also make the drawer scrollable.
                </p>
              </FlexItem>
              <FlexItem>
                <Progress value={33} title="Capacity" size={ProgressSize.sm} />
              </FlexItem>
              <FlexItem>
                <Progress value={66} title="Modules" size={ProgressSize.sm} />
              </FlexItem>
              <Flex direction={{ default: 'column' }}>
                <FlexItem>
                  <Title headingLevel="h3">Tags</Title>
                </FlexItem>
                <FlexItem>
                  <LabelGroup>
                    {[1, 2, 3, 4, 5].map((labelNumber) => (
                      <Label variant="outline" key={`label-${labelNumber}`}>{`Tag ${labelNumber}`}</Label>
                    ))}
                  </LabelGroup>
                </FlexItem>
              </Flex>
            </Flex>
          </TabContentBody>
        </TabContent>
        <TabContent
          key={11}
          eventKey={11}
          id={`tabContent${11}`}
          activeKey={secondaryActiveTabKey}
          hidden={11 !== secondaryActiveTabKey}
        >
          <TabContentBody>Activity panel</TabContentBody>
        </TabContent>
      </DrawerPanelBody>
    </DrawerPanelContent>
  );

  const tabContent = (
    <Drawer isExpanded={isExpanded} isInline>
      <DrawerContent panelContent={panelContent}>
        <DrawerContentBody>{table}</DrawerContentBody>
      </DrawerContent>
    </Drawer>
  );

  return (
    <DashboardWrapper>
      <React.Fragment>
        <PageSection>
          <Title headingLevel="h1" size="2xl">
            Nodes
          </Title>
        </PageSection>
        <PageSection padding={{ default: 'noPadding' }}>
          {toolbar}
          <Divider />
          {tabContent}
        </PageSection>
      </React.Fragment>
    </DashboardWrapper>
  );
};
