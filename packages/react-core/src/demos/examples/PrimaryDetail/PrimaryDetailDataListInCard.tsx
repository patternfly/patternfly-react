import React from 'react';
import {
  Card,
  Content,
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
  Progress,
  Title
} from '@patternfly/react-core';
import { DashboardWrapper } from '@patternfly/react-core/src/demos/DashboardWrapper';

export const PrimaryDetailDataListInCard: React.FunctionComponent = () => {
  const [drawerPanelBodyContent, setDrawerPanelBodyContent] = React.useState(1);
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);
  const [selectedDataListItemId, setSelectedDataListItemId] = React.useState('dataListItem1');
  const [isExpanded, setIsExpanded] = React.useState(false);

  const onDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const onDropdownSelect = () => {
    setIsDropdownOpen(false);
    onDropdownFocus();
  };
  const onDropdownFocus = () => {
    const element = document.getElementById('toggle-id');
    element?.focus();
  };
  const onSelectDataListItem = (_event, id) => {
    setSelectedDataListItemId(id);
    setDrawerPanelBodyContent(id.charAt(id.length - 1));
    setIsExpanded(true);
  };
  const onClose = () => {
    setIsExpanded(false);
  };

  const panelContent = (
    <DrawerPanelContent widths={{ '2xl': 'width_75' }}>
      <DrawerHead>
        <Title size="lg" headingLevel="h2">
          Patternfly-elements
        </Title>
        <DrawerActions>
          <DrawerCloseButton onClick={onClose} />
        </DrawerActions>
      </DrawerHead>
      <DrawerPanelBody>
        <Flex spaceItems={{ default: 'spaceItemsLg' }} direction={{ default: 'column' }}>
          <FlexItem>
            <p>
              The content of the drawer really is up to you. It could have form fields, definition lists, text lists,
              labels, charts, progress bars, etc. Spacing recommendation is 24px margins. You can put tabs in here, and
              can also make the drawer scrollable.
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
      <Toolbar id="data-list-data-toolbar">
        <ToolbarContent>
          <ToolbarItem>
            <Dropdown
              onSelect={onDropdownSelect}
              isOpen={isDropdownOpen}
              onOpenChange={(isOpen) => setIsDropdownOpen(isOpen)}
              toggle={(toggleRef) => (
                <MenuToggle ref={toggleRef} isExpanded={isDropdownOpen} onClick={onDropdownToggle}>
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
        onSelectDataListItem={onSelectDataListItem}
      >
        <DataListItem aria-label="data-list-item1-in-card" id="data-list-item1">
          <DataListItemRow>
            <DataListItemCells
              dataListCells={[
                <DataListCell key="node 1">
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
                <DataListCell key="node 2">
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
                <DataListCell key="node 3">
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
                <DataListCell key="node 4">
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
                <DataListCell key="node 5">
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
      <PageSection>
        <Content>
          <h1>Main title</h1>
          <p>
            Body text should be Red Hat Text at 1rem(16px). It should have leading of 1.5rem(24px) because <br />
            of it’s relative line height of 1.5.
          </p>
        </Content>
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
};
