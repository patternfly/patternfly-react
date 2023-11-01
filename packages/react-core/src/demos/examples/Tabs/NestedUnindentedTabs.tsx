import React from 'react';
import {
  Card,
  CardHeader,
  CardBody,
  Grid,
  GridItem,
  PageSection,
  Tabs,
  Tab,
  TabContent,
  TabContentBody,
  TabTitleText,
  Title,
  Text,
  TextContent,
  TitleSizes,
  CardTitle
} from '@patternfly/react-core';
import DashboardWrapper from '@patternfly/react-core/src/demos/examples/DashboardWrapper';

export const NestedUnindentedTabs: React.FunctionComponent = () => {
  const [activeTabKey, setActiveTabKey] = React.useState(1);
  const [activeNestedTabKey, setActiveNestedTabKey] = React.useState(10);

  // Toggle currently active tab
  const handleTabClick = (tabIndex: number) => setActiveTabKey(tabIndex);

  // Toggle currently active nested tab
  const handleNestedTabClick = (tabIndex: number) => setActiveNestedTabKey(tabIndex);

  const tabContent = (
    <Grid hasGutter>
      <GridItem>
        <CardHeader>
          <Title headingLevel="h1" size={TitleSizes.lg}>
            Get started with Red Hat Enterprise Linux
          </Title>
        </CardHeader>
      </GridItem>
      <GridItem>
        <Tabs
          activeKey={activeNestedTabKey}
          isSecondary
          hasSecondaryBorderBottom
          onSelect={(_event, tabIndex) => handleNestedTabClick(Number(tabIndex))}
          id="nested-tabs-example-nested-tabs-list"
        >
          <Tab eventKey={10} title={<TabTitleText>x86 architecture</TabTitleText>} tabContentId={`tabContent${10}`} />
          <Tab
            eventKey={11}
            title={<TabTitleText>Additional Architectures</TabTitleText>}
            tabContentId={`tabContent${11}`}
          />
        </Tabs>
      </GridItem>
      <GridItem>
        <TabContent
          key={10}
          eventKey={10}
          id={`tabContent${10}`}
          activeKey={activeNestedTabKey}
          hidden={10 !== activeNestedTabKey}
        >
          <TabContentBody>
            <Grid hasGutter>
              <GridItem>
                <TextContent>
                  <Text>To perform a standard x86_64 installation using the GUI, you'll need to:</Text>
                </TextContent>
              </GridItem>
              <Grid md={6} xl2={3} hasGutter>
                <Card isFlat component="div">
                  <CardTitle>Check system requirements</CardTitle>
                  <CardBody>
                    Your physical or virtual machine should meet the <a href="#">system requirement</a>.
                  </CardBody>
                </Card>
                <Card isFlat component="div">
                  <CardTitle>Download an installation ISO image</CardTitle>
                  <CardBody>
                    {' '}
                    <a href="#">Download</a> the binary DVD ISO.
                  </CardBody>
                </Card>
                <Card isFlat component="div">
                  <CardTitle>Create a bootable installation media</CardTitle>
                  <CardBody>
                    {' '}
                    <a href="#">Create</a> a bootable installation media, for example a USB flash drive.
                  </CardBody>
                </Card>
              </Grid>
            </Grid>
          </TabContentBody>
        </TabContent>
        <TabContent
          key={11}
          eventKey={11}
          id={`tabContent${11}`}
          activeKey={activeNestedTabKey}
          hidden={11 !== activeNestedTabKey}
        >
          <TabContentBody>Additional architectures panel</TabContentBody>
        </TabContent>
        <TabContent
          key={12}
          eventKey={12}
          id={`tabContent${12}`}
          activeKey={activeNestedTabKey}
          hidden={12 !== activeNestedTabKey}
        >
          <TabContentBody>Operators panel</TabContentBody>
        </TabContent>
        <TabContent
          key={13}
          eventKey={13}
          id={`tabContent${13}`}
          activeKey={activeNestedTabKey}
          hidden={13 !== activeNestedTabKey}
        >
          <TabContentBody>Virtualization panel</TabContentBody>
        </TabContent>
      </GridItem>
    </Grid>
  );

  return (
    <DashboardWrapper hasPageTemplateTitle>
      <PageSection type="tabs" isWidthLimited variant="light">
        <Tabs
          activeKey={activeTabKey}
          onSelect={(_event, tabIndex) => handleTabClick(Number(tabIndex))}
          usePageInsets
          id="nested-tabs-example-tabs-list"
        >
          <Tab eventKey={0} title={<TabTitleText>What's new</TabTitleText>} tabContentId={`tabContent${0}`} />
          <Tab eventKey={1} title={<TabTitleText>Get started</TabTitleText>} tabContentId={`tabContent${1}`} />
          <Tab eventKey={2} title={<TabTitleText>Knowledge</TabTitleText>} tabContentId={`tabContent${2}`} />
          <Tab eventKey={3} title={<TabTitleText>Support</TabTitleText>} tabContentId={`tabContent${3}`} />
        </Tabs>
      </PageSection>
      <PageSection isWidthLimited variant="light">
        <TabContent key={0} eventKey={0} id={`tabContent${0}`} activeKey={activeTabKey} hidden={0 !== activeTabKey}>
          <TabContentBody>What's new panel</TabContentBody>
        </TabContent>
        <TabContent key={1} eventKey={1} id={`tabContent${1}`} activeKey={activeTabKey} hidden={1 !== activeTabKey}>
          <TabContentBody>{tabContent}</TabContentBody>
        </TabContent>
        <TabContent key={2} eventKey={2} id={`tabContent${2}`} activeKey={activeTabKey} hidden={2 !== activeTabKey}>
          <TabContentBody>Knowledge panel</TabContentBody>
        </TabContent>
        <TabContent key={3} eventKey={3} id={`tabContent${3}`} activeKey={activeTabKey} hidden={3 !== activeTabKey}>
          <TabContentBody>Support Panel</TabContentBody>
        </TabContent>
      </PageSection>
    </DashboardWrapper>
  );
};
