import { useRef, useState } from 'react';
import {
  Gallery,
  Content,
  PageSection,
  GalleryItem,
  Card,
  CardBody,
  DrawerHead,
  DrawerActions,
  DrawerCloseButton,
  DrawerPanelBody,
  DescriptionList,
  DescriptionListTerm,
  DescriptionListGroup,
  DescriptionListDescription,
  Button,
  Title
} from '@patternfly/react-core';
import { DashboardWrapper } from '@patternfly/react-core/dist/js/demos/DashboardWrapper';
import PlusCircleIcon from '@patternfly/react-icons/dist/esm/icons/plus-circle-icon';

export const DescriptionListInDrawer: React.FunctionComponent = () => {
  const drawerRef = useRef<HTMLDivElement>(null);
  const btnRef = useRef<HTMLDivElement>(null);
  const [isExpanded, setIsExpanded] = useState(true);

  const onExpand = () => {
    drawerRef.current && drawerRef.current.focus();
  };

  const onCloseClick = () => {
    setIsExpanded(false);
    btnRef.current && btnRef.current.focus();
  };

  const onToggleDrawer = () => {
    setIsExpanded((prevIsExpanded) => !prevIsExpanded);
  };

  const panelContent = (
    <>
      <DrawerHead>
        <Title headingLevel="h2">
          <span ref={drawerRef} tabIndex={isExpanded ? 0 : -1}>
            test
          </span>
        </Title>
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
            <DescriptionListDescription>Node selector is not available at this time</DescriptionListDescription>
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
    </>
  );

  const drawerContent = (
    <Gallery hasGutter>
      <GalleryItem key={0}>
        <Card>
          <CardBody>
            <Button variant="link" isInline onClick={onToggleDrawer} ref={btnRef}>
              {`${isExpanded ? 'Close' : 'Open'} drawer`}
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

  return (
    <DashboardWrapper
      notificationDrawer={panelContent}
      isNotificationDrawerExpanded={isExpanded}
      onNotificationDrawerExpand={onExpand}
    >
      <PageSection>
        <Content>
          <Content component="h1">Main title</Content>
          <Content component="p">This is a full page demo.</Content>
        </Content>
      </PageSection>
      <PageSection>{drawerContent}</PageSection>
    </DashboardWrapper>
  );
};
