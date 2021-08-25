import * as React from 'react';
import {
  Card,
  CardBody,
  CardHeader,
  DescriptionList,
  DescriptionListDescription,
  DescriptionListGroup,
  DescriptionListTerm,
  Grid,
  GridItem,
  Spinner,
  Tab,
  Tabs,
  TabTitleText,
  Title
} from '@patternfly/react-core';
import ExclamationCircleIcon from '@patternfly/react-icons/dist/js/icons/exclamation-circle-icon';

const descriptionListData = [
  {
    status: 'Running',
    resourceName: 'Resource name that is long and can wrap',
    detail: '121 Systems',
    icon: <Spinner size="md" aria-valuetext="Loading..."></Spinner>
  },
  {
    status: 'Ready',
    resourceName: 'Resource name that is long and can wrap',
    detail: '123 Systems',
    icon: <ExclamationCircleIcon />
  },
  {
    status: 'Running',
    resourceName: 'Resource name that is long and can wrap',
    detail: '122 Systems',
    icon: <Spinner size="md" aria-valuetext="Loading..."></Spinner>
  },
  {
    status: 'Ready',
    resourceName: 'Resource name that is long and can wrap',
    detail: '124 Systems',
    icon: <ExclamationCircleIcon />
  }
];

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const StatusTabbedCard: React.FunctionComponent = () => {
  const [activeTabKey, setActiveTabKey] = React.useState(0);
  const handleTabClick = (event: React.MouseEvent<HTMLElement, MouseEvent>, tabIndex: number) => {
    setActiveTabKey(tabIndex);
  };
  return (
    <Card style={{ maxWidth: '800px' }}>
      <CardHeader>
        <Title headingLevel="h2" size="lg">
          Status
        </Title>
      </CardHeader>
      <CardBody>
        <Tabs isFilled id="status-tabs" activeKey={activeTabKey} onSelect={handleTabClick}>
          <Tab eventKey={0} title={<TabTitleText>Object 1</TabTitleText>}>
            <CardBody>
              <DescriptionList isHorizontal columnModifier={{ lg: '2Col' }}>
                {descriptionListData.map(({ status, resourceName, detail, icon }, idx) => (
                  <DescriptionListGroup key={idx}>
                    <DescriptionListTerm>
                      <Grid>
                        <GridItem span={3}>{icon}</GridItem>
                        <GridItem span={9}>
                          <Title headingLevel="h3" size="md">
                            {status}
                          </Title>
                        </GridItem>
                      </Grid>
                    </DescriptionListTerm>
                    <DescriptionListDescription>
                      <a href="#">{resourceName}</a>
                      <div>{detail}</div>
                    </DescriptionListDescription>
                  </DescriptionListGroup>
                ))}
              </DescriptionList>
            </CardBody>
          </Tab>
          <Tab eventKey={1} title={<TabTitleText>Object 2</TabTitleText>}>
            <CardBody>
              <DescriptionList isHorizontal columnModifier={{ lg: '2Col' }}>
                {descriptionListData.map(({ status, resourceName, detail, icon }, idx) => (
                  <DescriptionListGroup key={idx}>
                    <DescriptionListTerm>
                      <Grid>
                        <GridItem span={3}>{icon}</GridItem>
                        <GridItem span={9}>
                          <Title headingLevel="h3" size="md">
                            {status}
                          </Title>
                        </GridItem>
                      </Grid>
                    </DescriptionListTerm>
                    <DescriptionListDescription>
                      <a href="#">{resourceName}</a>
                      <div>{detail}</div>
                    </DescriptionListDescription>
                  </DescriptionListGroup>
                ))}
              </DescriptionList>
            </CardBody>
          </Tab>
          <Tab eventKey={2} title={<TabTitleText>Object 3</TabTitleText>}>
            <CardBody>
              <DescriptionList isHorizontal columnModifier={{ lg: '2Col' }}>
                {descriptionListData.map(({ status, resourceName, detail, icon }, idx) => (
                  <DescriptionListGroup key={idx}>
                    <DescriptionListTerm>
                      <Grid>
                        <GridItem span={3}>{icon}</GridItem>
                        <GridItem span={9}>
                          <Title headingLevel="h3" size="md">
                            {status}
                          </Title>
                        </GridItem>
                      </Grid>
                    </DescriptionListTerm>
                    <DescriptionListDescription>
                      <a href="#">{resourceName}</a>
                      <div>{detail}</div>
                    </DescriptionListDescription>
                  </DescriptionListGroup>
                ))}
              </DescriptionList>
            </CardBody>
          </Tab>
        </Tabs>
      </CardBody>
    </Card>
  );
};
