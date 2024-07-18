import React from 'react';
import {
  Card,
  Content,
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
  Progress,
  SimpleList,
  SimpleListGroup,
  SimpleListItem,
  Title
} from '@patternfly/react-core';
import { DashboardWrapper } from '@patternfly/react-core/src/demos/DashboardWrapper';

export const PrimaryDetailSimpleListInCard: React.FunctionComponent = () => {
  const [drawerPanelBodyContent, setDrawerPanelBodyContent] = React.useState(1);
  const [isExpanded, setIsExpanded] = React.useState(false);

  const onSelectListItem = (_listItem, listItemProps) => {
    const id = listItemProps.children;
    setDrawerPanelBodyContent(id.charAt(id.length - 1));
    setIsExpanded(true);
  };

  const onClose = () => {
    setIsExpanded(false);
  };

  const panelContent = (
    <DrawerPanelContent widths={{ xl: 'width_75' }}>
      <DrawerHead>
        <Title headingLevel="h2" size="xl">
          {`List item ${drawerPanelBodyContent} details`}
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
      <SimpleList onSelect={onSelectListItem}>
        <SimpleListGroup title="Section 1" id="simple-list-section-1">
          <SimpleListItem key="item1" isActive>
            List item 1
          </SimpleListItem>
          <SimpleListItem key="item2">List item 2</SimpleListItem>
          <SimpleListItem key="item3">List item 3</SimpleListItem>
          <SimpleListItem key="item4">List item 4</SimpleListItem>
        </SimpleListGroup>
        <SimpleListGroup title="Section 2" id="section-2">
          <SimpleListItem key="item5">List item 5</SimpleListItem>
          <SimpleListItem key="item6">List item 6</SimpleListItem>
          <SimpleListItem key="item7">List item 7</SimpleListItem>
          <SimpleListItem key="item8">List item 8</SimpleListItem>
          <SimpleListItem key="item9">List item 9</SimpleListItem>
        </SimpleListGroup>
      </SimpleList>
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
