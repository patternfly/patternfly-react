---
id: Tabs
section: components
---

import DashboardWrapper from './examples/DashboardWrapper';
import CheckCircleIcon from '@patternfly/react-icons/dist/js/icons/check-circle-icon';
import InfoCircleIcon from '@patternfly/react-icons/dist/js/icons/info-circle-icon';

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

### Open nested tabs

```js isFullscreen
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
  Label,
  LabelGroup,
  Flex,
  FlexItem
} from '@patternfly/react-core';
import DashboardWrapper from './examples/DashboardWrapper';
import CheckCircleIcon from '@patternfly/react-icons/dist/js/icons/check-circle-icon';
import InfoCircleIcon from '@patternfly/react-icons/dist/js/icons/info-circle-icon';

TabsOpenNestedDemo = () => {
  const [activeTabKey, setActiveTabKey] = React.useState(0);
  const [activeNestedTabKey, setActiveNestedTabKey] = React.useState(10);

  // Toggle currently active tab
  const handleTabClick = (event, tabIndex) =>
    setActiveTabKey(tabIndex);

  // Toggle currently active nested tab
  const handleNestedTabClick = (event, tabIndex) =>
    setActiveNestedTabKey(tabIndex);

  const tabContent = (
    <Grid hasGutter>
      <GridItem xl={8} md={6}>
        <Card>
          <CardHeader>
            <Title headingLevel="h2" >
              Status
            </Title>
          </CardHeader>
          <CardBody>
            <Flex direction={{ default: 'column' }}>
              <FlexItem>
                <Tabs activeKey={activeNestedTabKey} onSelect={handleNestedTabClick} id="open-nested-tabs-example-tabs-list">
                  <Tab eventKey={10} title={<TabTitleText>Cluster</TabTitleText>} tabContentId={`tabContent${10}`} />
                  <Tab eventKey={11} title={<TabTitleText>Control plane</TabTitleText>} tabContentId={`tabContent${11}`} />
                  <Tab eventKey={12} title={<TabTitleText>Operators</TabTitleText>} tabContentId={`tabContent${12}`} />
                  <Tab eventKey={13} title={<TabTitleText>Virtualization</TabTitleText>} tabContentId={`tabContent${13}`} />
                </Tabs>
              </FlexItem>
              <FlexItem>
                <TabContent key={10} eventKey={10} id={`tabContent${10}`} activeKey={activeNestedTabKey} hidden={10 !== activeNestedTabKey}>
                  <TabContentBody>
                    {"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce in odio porttitor, feugiat risus in, feugiat arcu. Nullam euismod enim eget fringilla condimentum. Maecenas tincidunt et metus id aliquet. Integer et fermentum purus. Nulla tempor velit arcu, vitae semper purus iaculis at. Sed malesuada auctor luctus. Pellentesque et leo urna. Aliquam vitae felis congue lacus mattis fringilla. Nullam et ultricies erat, sed dignissim elit. Cras mattis pulvinar aliquam. In ac est nulla. Pellentesque fermentum nibh ac sapien porta, ut congue orci aliquam. Sed nisl est, tempor eu pharetra eget, ullamcorper ut augue. Vestibulum eleifend libero eu nulla cursus lacinia."}
                  </TabContentBody>
                </TabContent>
                <TabContent key={11} eventKey={11} id={`tabContent${11}`} activeKey={activeNestedTabKey} hidden={11 !== activeNestedTabKey}>
                  <TabContentBody>Control plane panel</TabContentBody>
                </TabContent>
                <TabContent key={12} eventKey={12} id={`tabContent${12}`} activeKey={activeNestedTabKey} hidden={12 !== activeNestedTabKey}>
                  <TabContentBody>Operators panel</TabContentBody>
                </TabContent>
                <TabContent key={13} eventKey={13} id={`tabContent${13}`} activeKey={activeNestedTabKey} hidden={13 !== activeNestedTabKey}>
                  <TabContentBody>Virtualization panel</TabContentBody>
                </TabContent>
              </FlexItem>
            </Flex>
          </CardBody>
        </Card>
      </GridItem>
      <GridItem xl={4} md={6}>
        <Flex direction={{ default: 'column' }} className="pf-u-h-100">
          <FlexItem flex={{ default: 'flex_1' }}>
            <Card isFullHeight>
              <CardHeader>
                <Title headingLevel="h3" >
                  Title of Card
                </Title>
              </CardHeader>
            </Card>
          </FlexItem>
          <FlexItem flex={{ default: 'flex_1' }}>
            <Card isFullHeight>
              <CardHeader>
                <Title headingLevel="h3" >
                  Title of Card
                </Title>
              </CardHeader>
            </Card>
          </FlexItem>
        </Flex>
      </GridItem>
    </Grid>
  );

  return (
    <DashboardWrapper hasNoBreadcrumb>
      <PageSection isWidthLimited variant={PageSectionVariants.light}>
        <Title headingLevel="h1" size="2xl">
          Overview
        </Title>
      </PageSection>
      <PageSection type="tabs" variant={PageSectionVariants.light} isWidthLimited>
        <Tabs activeKey={activeTabKey} onSelect={handleTabClick} usePageInsets id="open-nested-tabs-example-tabs-list">
          <Tab eventKey={0} title={<TabTitleText>Cluster 1</TabTitleText>} tabContentId={`tabContent${0}`} />
          <Tab eventKey={1} title={<TabTitleText>Cluster 2</TabTitleText>} tabContentId={`tabContent${1}`} />
        </Tabs>
      </PageSection>
      <PageSection isWidthLimited variant={PageSectionVariants.light}>
        <TabContent key={0} eventKey={0} id={`tabContent${0}`} activeKey={activeTabKey} hidden={0 !== activeTabKey}>
          <TabContentBody>{tabContent}</TabContentBody>
        </TabContent>
        <TabContent key={1} eventKey={1} id={`tabContent${1}`} activeKey={activeTabKey} hidden={1 !== activeTabKey}>
          <TabContentBody>Cluster 2 panel</TabContentBody>
        </TabContent>
      </PageSection>
    </DashboardWrapper>
  );
};
```