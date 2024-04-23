import React from 'react';
import {
  Gallery,
  PageSection,
  GalleryItem,
  Card,
  CardBody,
  Drawer,
  DrawerPanelContent,
  DrawerContent,
  DrawerHead,
  DrawerActions,
  DrawerCloseButton,
  PageSectionVariants,
  TextContent,
  Text,
  DrawerPanelBody,
  DescriptionList,
  DescriptionListTerm,
  DescriptionListGroup,
  DescriptionListDescription,
  Button,
  Page,
  Title
} from '@patternfly/react-core';
import { DashboardWrapper } from '@patternfly/react-core/dist/js/demos/DashboardWrapper';
import PlusCircleIcon from '@patternfly/react-icons/dist/esm/icons/plus-circle-icon';

export const DescriptionListDrawer: React.FunctionComponent = () => {
  const drawerRef = React.useRef<HTMLDivElement>();
  const [isExpanded, setIsExpanded] = React.useState(true);

  const onExpand = () => {
    drawerRef.current && drawerRef.current.focus();
  };

  const onCloseClick = () => {
    setIsExpanded(false);
    drawerRef.current && drawerRef.current.focus();
  };

  const onOpenDrawer = () => {
    setIsExpanded(true);
  };

  const panelContent = (
    <DrawerPanelContent>
      <DrawerHead>
        <Title headingLevel="h2">test</Title>
        <DrawerActions>
          <DrawerCloseButton onClick={onCloseClick} />
        </DrawerActions>
      </DrawerHead>
      <DrawerPanelBody>
        <DescriptionList isFillColumns columnModifier={{ default: '2Col', lg: '2Col' }}>
          <DescriptionListGroup>
            <DescriptionListTerm>Name</DescriptionListTerm>
            <DescriptionListDescription>test</DescriptionListDescription>
          </DescriptionListGroup>
          <DescriptionListGroup>
            <DescriptionListTerm>Namespace</DescriptionListTerm>
            <DescriptionListDescription>
              <a href="#">mary-test</a>
            </DescriptionListDescription>
          </DescriptionListGroup>
          <DescriptionListGroup>
            <DescriptionListTerm>Labels</DescriptionListTerm>
            <DescriptionListDescription>app=test</DescriptionListDescription>
          </DescriptionListGroup>
          <DescriptionListGroup>
            <DescriptionListTerm>Pod selector</DescriptionListTerm>
            <DescriptionListDescription>Nod selector is not available at this time</DescriptionListDescription>
          </DescriptionListGroup>
          <DescriptionListGroup>
            <DescriptionListTerm>Tolerations</DescriptionListTerm>
            <DescriptionListDescription>No tolerations</DescriptionListDescription>
          </DescriptionListGroup>
          <DescriptionListGroup>
            <DescriptionListTerm>Annotations</DescriptionListTerm>
            <DescriptionListDescription>No annotaions</DescriptionListDescription>
          </DescriptionListGroup>
          <DescriptionListGroup>
            <DescriptionListTerm>Status</DescriptionListTerm>
            <DescriptionListDescription>Active</DescriptionListDescription>
          </DescriptionListGroup>
          <DescriptionListGroup>
            <DescriptionListTerm>Created at:</DescriptionListTerm>
            <DescriptionListDescription>3 minutes agot</DescriptionListDescription>
          </DescriptionListGroup>
          <DescriptionListGroup>
            <DescriptionListTerm>Pod selector</DescriptionListTerm>
            <DescriptionListDescription>
              <Button variant="link" isInline icon={<PlusCircleIcon />}>
                app=MyApp
              </Button>
            </DescriptionListDescription>
          </DescriptionListGroup>
          <DescriptionListGroup>
            <DescriptionListTerm>Session affinity</DescriptionListTerm>
            <DescriptionListDescription>None</DescriptionListDescription>
          </DescriptionListGroup>
          <DescriptionListGroup>
            <DescriptionListTerm>Latest version</DescriptionListTerm>
            <DescriptionListDescription>1.0</DescriptionListDescription>
          </DescriptionListGroup>
          <DescriptionListGroup>
            <DescriptionListTerm>Update strategy</DescriptionListTerm>
            <DescriptionListDescription>Rolling</DescriptionListDescription>
          </DescriptionListGroup>
          <DescriptionListGroup>
            <DescriptionListTerm>Timeout</DescriptionListTerm>
            <DescriptionListDescription>600 seconds</DescriptionListDescription>
          </DescriptionListGroup>
          <DescriptionListGroup>
            <DescriptionListTerm>Max available</DescriptionListTerm>
            <DescriptionListDescription>25% of 1 pod</DescriptionListDescription>
          </DescriptionListGroup>
          <DescriptionListGroup>
            <DescriptionListTerm>Max surge</DescriptionListTerm>
            <DescriptionListDescription>25% greater than 1 pod</DescriptionListDescription>
          </DescriptionListGroup>
        </DescriptionList>
      </DrawerPanelBody>
    </DrawerPanelContent>
  );

  const drawerContent = (
    <Gallery hasGutter>
      <GalleryItem key={0}>
        <Card>
          <CardBody>
            <Button variant="link" onClick={onOpenDrawer} tabIndex={isExpanded ? 0 : -1} ref={drawerRef}>
              Open drawer
            </Button>
          </CardBody>
        </Card>
      </GalleryItem>
      {Array.from({ length: 30 }).map((_value, index) => (
        <GalleryItem key={index + 1}>
          <Card>
            <CardBody>{`Card-${index + 1}`}</CardBody>
          </Card>
        </GalleryItem>
      ))}
    </Gallery>
  );

  const buildDrawer = (
    <Drawer isExpanded={isExpanded} onExpand={onExpand}>
      <DrawerContent panelContent={panelContent}></DrawerContent>
    </Drawer>
  );

  return (
    <DashboardWrapper notificationDrawer={buildDrawer} isNotificationDrawerExpanded={isExpanded}>
      <Page>
        <PageSection variant={PageSectionVariants.light}>
          <TextContent>
            <Text component="h1">Main title</Text>
            <Text component="p">This is a full page demo.</Text>
          </TextContent>
        </PageSection>
        <PageSection>{drawerContent}</PageSection>
      </Page>
    </DashboardWrapper>
  );
};
