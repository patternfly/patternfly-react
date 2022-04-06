import React from 'react';
import {
  Card,
  CardHeader,
  CardBody,
  Grid,
  GridItem,
  PageSection,
  PageSectionVariants,
  Tabs,
  Tab,
  TabContent,
  TabContentBody,
  TabTitleText,
  Title,
  Flex,
  FlexItem
} from '@patternfly/react-core';
import DashboardWrapper from '../DashboardWrapper';

export const NestedTabs: React.FunctionComponent = () => {
  const [activeTabKey, setActiveTabKey] = React.useState(1);
  const [activeNestedTabKey, setActiveNestedTabKey] = React.useState(10);

  // Toggle currently active tab
  const handleTabClick = (tabIndex: number) => setActiveTabKey(tabIndex);

  // Toggle currently active nested tab
  const handleNestedTabClick = (tabIndex: number) => setActiveNestedTabKey(tabIndex);

  const tabContent = (
    <Grid hasGutter>
      <GridItem>
        <Card>
          <CardHeader>
            <Title headingLevel="h2">Get started with Red Hat Enterprise Linux</Title>
          </CardHeader>
          <CardBody>
            <Flex direction={{ default: 'column' }}>
              <FlexItem>
                <Tabs
                  activeKey={activeNestedTabKey}
                  isSecondary
                  onSelect={(_event, tabIndex) => handleNestedTabClick(Number(tabIndex))}
                  id="nested-tabs-example-nested-tabs-list"
                >
                  <Tab
                    eventKey={10}
                    title={<TabTitleText>x86 architecture</TabTitleText>}
                    tabContentId={`tabContent${10}`}
                  />
                  <Tab
                    eventKey={11}
                    title={<TabTitleText>Additional Architectures</TabTitleText>}
                    tabContentId={`tabContent${11}`}
                  />
                </Tabs>
              </FlexItem>
              <FlexItem>
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
                        {"To perform a standard x86_64 installation using the GUI, you'll need to:"}{' '}
                        <Card isFullHeight>
                          <CardHeader>Check system requirements</CardHeader>
                          <CardBody>Your physical or virtual machine should meet the system requirement.</CardBody>
                        </Card>
                        <Card isFullHeight>
                          <CardHeader>Download an installation ISO image</CardHeader>
                          <CardBody>Download the binary DVD ISO.</CardBody>
                        </Card>
                        <Card isFullHeight>
                          <CardHeader>Create a bootable installation media</CardHeader>
                          <CardBody>Create a bootable installation media, for example a USB flash drive.</CardBody>
                        </Card>
                        <Card isFullHeight>
                          <CardHeader>Install and register your system</CardHeader>
                          <CardBody>
                            Boot the installation, register your system, attach RHEL subscriptions, and in stall
                            <a href="#">RHEL</a> from the Red Hat Content Delivery Network (CDN) using the GUI.
                          </CardBody>
                        </Card>
                      </GridItem>
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
                  <TabContentBody>Control plane panel</TabContentBody>
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
              </FlexItem>
            </Flex>
          </CardBody>
        </Card>
      </GridItem>
    </Grid>
  );

  return (
    <DashboardWrapper hasNoBreadcrumb>
      <PageSection isWidthLimited variant={PageSectionVariants.light}>
        <Title headingLevel="h1" size="2xl">
          Red Hat Enterprise Linux
        </Title>
      </PageSection>
      <PageSection type="tabs" isWidthLimited>
        <Tabs
          isBox
          isSecondary
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
      <TabContent key={0} eventKey={0} id={`tabContent${0}`} activeKey={activeTabKey} hidden={0 !== activeTabKey}>
        <TabContentBody>{}</TabContentBody>
      </TabContent>
      <TabContent key={1} eventKey={1} id={`tabContent${1}`} activeKey={activeTabKey} hidden={1 !== activeTabKey}>
        <TabContentBody>{tabContent}</TabContentBody>
      </TabContent>
    </DashboardWrapper>
  );
};
