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
  DrawerContentBody,
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
  Tabs,
  Tab
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
  };

  const onClickCard = () => {
    setIsExpanded(true);
  };

  const panelContent = (
    <DrawerPanelContent>
      <DrawerHead>
        <Text component="h1">ajay-test</Text>
        <DrawerActions>
          <DrawerCloseButton onClick={onCloseClick} />
        </DrawerActions>
      </DrawerHead>
      <DrawerPanelBody>
        <Tabs activeKey={0} variant={'default'} aria-label="Tabs in the box light variation example" role="region">
          <Tab eventKey={0} title="Overview">
            <DescriptionList isFillColumns columnModifier={{ default: '2Col', lg: '2Col' }}>
              <DescriptionListGroup>
                <DescriptionListTerm>Name</DescriptionListTerm>
                <DescriptionListDescription>ajay-test</DescriptionListDescription>
              </DescriptionListGroup>
              <DescriptionListGroup>
                <DescriptionListTerm>Namespace</DescriptionListTerm>
                <DescriptionListDescription>
                  <a href="#">mary-test</a>
                </DescriptionListDescription>
              </DescriptionListGroup>
              <DescriptionListGroup>
                <DescriptionListTerm>Labels</DescriptionListTerm>
                <DescriptionListDescription>app=ajay-test</DescriptionListDescription>
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
          </Tab>
          <Tab eventKey={1} title="Activity" disabled>
            content
          </Tab>
        </Tabs>
      </DrawerPanelBody>
    </DrawerPanelContent>
  );

  const drawerContent = (
    <Gallery hasGutter>
      {Array.from({ length: 30 }).map((_value, index) => (
        <GalleryItem key={index}>
          <Card key={index} onClick={onClickCard}>
            <CardBody>Click here to open drawer</CardBody>
          </Card>
        </GalleryItem>
      ))}
    </Gallery>
  );

  return (
    <DashboardWrapper>
      <PageSection variant={PageSectionVariants.light}>
        <TextContent>
          <Text component="h1">Main title</Text>
          <Text component="p">This is a full page demo.</Text>
        </TextContent>
      </PageSection>
      <PageSection>
        <Drawer isExpanded={isExpanded} onExpand={onExpand}>
          <DrawerContent panelContent={panelContent}>
            <DrawerContentBody>{drawerContent}</DrawerContentBody>
          </DrawerContent>
        </Drawer>
      </PageSection>
    </DashboardWrapper>
  );
};
