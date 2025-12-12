import { Fragment, useState } from 'react';
import {
  Page,
  PageSidebar,
  PageSidebarBody,
  PageSection,
  MenuToggle,
  MenuToggleElement,
  Toolbar,
  ToolbarItem,
  ToolbarContent,
  ToolbarToggleGroup,
  ToolbarGroup,
  SearchInput,
  Select,
  SelectList,
  SelectOption,
  Title,
  Card,
  CardBody,
  Masthead,
  MastheadToggle,
  MastheadMain,
  MastheadBrand,
  MastheadContent,
  PageToggleButton
} from '@patternfly/react-core';
import FilterIcon from '@patternfly/react-icons/dist/esm/icons/filter-icon';
import BarsIcon from '@patternfly/react-icons/dist/esm/icons/bars-icon';

export const ToolbarInSidebar: React.FunctionComponent = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  // Sidebar toolbar state
  const [sidebarInputValue, setSidebarInputValue] = useState('');
  const [sidebarCategoryExpanded, setSidebarCategoryExpanded] = useState(false);
  const [sidebarCategorySelected, setSidebarCategorySelected] = useState('');

  // Main content toolbar state
  const [mainInputValue, setMainInputValue] = useState('');
  const [mainStatusExpanded, setMainStatusExpanded] = useState(false);
  const [mainStatusSelected, setMainStatusSelected] = useState('');
  const [mainRiskExpanded, setMainRiskExpanded] = useState(false);
  const [mainRiskSelected, setMainRiskSelected] = useState('');

  const categoryOptions = ['Documentation', 'Tutorials', 'Examples'];
  const statusOptions = ['New', 'Pending', 'Running', 'Cancelled'];
  const riskOptions = ['Low', 'Medium', 'High'];

  const Header = (
    <Masthead>
      <MastheadToggle>
        <PageToggleButton
          variant="plain"
          aria-label="Global navigation"
          isSidebarOpen={isSidebarOpen}
          onSidebarToggle={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          <BarsIcon />
        </PageToggleButton>
      </MastheadToggle>
      <MastheadMain>
        <MastheadBrand>
          <Title headingLevel="h1" size="xl">
            Container Query Demo
          </Title>
        </MastheadBrand>
      </MastheadMain>
      <MastheadContent>
        <span style={{ marginLeft: 'auto', padding: '0 var(--pf-t--global--spacer--md)' }}>
          Sidebar: {isSidebarOpen ? 'Open' : 'Closed'}
        </span>
      </MastheadContent>
    </Masthead>
  );

  const sidebarToolbarItems = (
    <Fragment>
      <ToolbarItem>
        <SearchInput
          aria-label="Sidebar search"
          placeholder="Search sidebar..."
          onChange={(_event, value) => setSidebarInputValue(value)}
          value={sidebarInputValue}
          onClear={() => setSidebarInputValue('')}
        />
      </ToolbarItem>
      <ToolbarGroup variant="filter-group">
        <ToolbarItem>
          <Select
            toggle={(toggleRef: React.Ref<MenuToggleElement>) => (
              <MenuToggle
                ref={toggleRef}
                onClick={() => setSidebarCategoryExpanded(!sidebarCategoryExpanded)}
                isExpanded={sidebarCategoryExpanded}
                style={{ width: '150px' } as React.CSSProperties}
              >
                {sidebarCategorySelected || 'Category'}
              </MenuToggle>
            )}
            onSelect={(_event, selection) => {
              setSidebarCategorySelected(selection as string);
              setSidebarCategoryExpanded(false);
            }}
            onOpenChange={(isOpen) => setSidebarCategoryExpanded(isOpen)}
            selected={sidebarCategorySelected}
            isOpen={sidebarCategoryExpanded}
          >
            <SelectList>
              {categoryOptions.map((option, index) => (
                <SelectOption key={index} value={option}>
                  {option}
                </SelectOption>
              ))}
            </SelectList>
          </Select>
        </ToolbarItem>
      </ToolbarGroup>
    </Fragment>
  );

  const Sidebar = (
    <PageSidebar isSidebarOpen={isSidebarOpen}>
      <PageSidebarBody>
        <div style={{ padding: 'var(--pf-t--global--spacer--md)' }}>
          <Title headingLevel="h2" size="lg" style={{ marginBottom: 'var(--pf-t--global--spacer--md)' }}>
            Sidebar Filters
          </Title>
          <p
            style={{
              marginBottom: 'var(--pf-t--global--spacer--sm)',
              fontSize: 'var(--pf-t--global--font--size--body--sm)',
              color: 'var(--pf-t--global--text--color--subtle)'
            }}
          >
            This toolbar uses <strong>container queries</strong> and responds to the sidebar width, not the viewport.
          </p>
          <Toolbar id="sidebar-toolbar" useContainerQuery containerQueryBreakpoint="md">
            <ToolbarContent>
              <ToolbarToggleGroup toggleIcon={<FilterIcon />} breakpoint="md">
                {sidebarToolbarItems}
              </ToolbarToggleGroup>
            </ToolbarContent>
          </Toolbar>
        </div>
      </PageSidebarBody>
    </PageSidebar>
  );

  const mainToolbarItems = (
    <Fragment>
      <ToolbarItem>
        <SearchInput
          aria-label="Main content search"
          placeholder="Search content..."
          onChange={(_event, value) => setMainInputValue(value)}
          value={mainInputValue}
          onClear={() => setMainInputValue('')}
        />
      </ToolbarItem>
      <ToolbarGroup variant="filter-group">
        <ToolbarItem>
          <Select
            toggle={(toggleRef: React.Ref<MenuToggleElement>) => (
              <MenuToggle
                ref={toggleRef}
                onClick={() => setMainStatusExpanded(!mainStatusExpanded)}
                isExpanded={mainStatusExpanded}
                style={{ width: '150px' } as React.CSSProperties}
              >
                {mainStatusSelected || 'Status'}
              </MenuToggle>
            )}
            onSelect={(_event, selection) => {
              setMainStatusSelected(selection as string);
              setMainStatusExpanded(false);
            }}
            onOpenChange={(isOpen) => setMainStatusExpanded(isOpen)}
            selected={mainStatusSelected}
            isOpen={mainStatusExpanded}
          >
            <SelectList>
              {statusOptions.map((option, index) => (
                <SelectOption key={index} value={option}>
                  {option}
                </SelectOption>
              ))}
            </SelectList>
          </Select>
        </ToolbarItem>
        <ToolbarItem>
          <Select
            toggle={(toggleRef: React.Ref<MenuToggleElement>) => (
              <MenuToggle
                ref={toggleRef}
                onClick={() => setMainRiskExpanded(!mainRiskExpanded)}
                isExpanded={mainRiskExpanded}
                style={{ width: '120px' } as React.CSSProperties}
              >
                {mainRiskSelected || 'Risk'}
              </MenuToggle>
            )}
            onSelect={(_event, selection) => {
              setMainRiskSelected(selection as string);
              setMainRiskExpanded(false);
            }}
            onOpenChange={(isOpen) => setMainRiskExpanded(isOpen)}
            selected={mainRiskSelected}
            isOpen={mainRiskExpanded}
          >
            <SelectList>
              {riskOptions.map((option, index) => (
                <SelectOption key={index} value={option}>
                  {option}
                </SelectOption>
              ))}
            </SelectList>
          </Select>
        </ToolbarItem>
      </ToolbarGroup>
    </Fragment>
  );

  return (
    <Page header={Header} sidebar={Sidebar}>
      <PageSection>
        <Card>
          <CardBody>
            <Title headingLevel="h2" size="lg" style={{ marginBottom: 'var(--pf-t--global--spacer--md)' }}>
              Main Content Filters
            </Title>
            <p
              style={{
                marginBottom: 'var(--pf-t--global--spacer--sm)',
                fontSize: 'var(--pf-t--global--font--size--body--sm)',
                color: 'var(--pf-t--global--text--color--subtle)'
              }}
            >
              This toolbar uses <strong>viewport media queries</strong> (default) and responds to the browser width.
            </p>
            <Toolbar id="main-content-toolbar">
              <ToolbarContent>
                <ToolbarToggleGroup toggleIcon={<FilterIcon />} breakpoint="lg">
                  {mainToolbarItems}
                </ToolbarToggleGroup>
              </ToolbarContent>
            </Toolbar>
          </CardBody>
        </Card>
        <Card style={{ marginTop: 'var(--pf-t--global--spacer--md)' }}>
          <CardBody>
            <Title headingLevel="h3" size="md" style={{ marginBottom: 'var(--pf-t--global--spacer--sm)' }}>
              How to test
            </Title>
            <ul style={{ paddingLeft: 'var(--pf-t--global--spacer--lg)' }}>
              <li>Toggle the sidebar open/closed using the hamburger menu</li>
              <li>The sidebar toolbar collapses based on sidebar width (container queries)</li>
              <li>The main content toolbar collapses based on viewport width (media queries)</li>
              <li>Resize your browser to see the main toolbar collapse independently</li>
            </ul>
          </CardBody>
        </Card>
      </PageSection>
    </Page>
  );
};
