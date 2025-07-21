import { Fragment, FunctionComponent, useState } from 'react';
import {
  Button,
  Content,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  ContentVariants,
  DescriptionList,
  DescriptionListDescription,
  DescriptionListGroup,
  DescriptionListTerm,
  Divider,
  Grid,
  GridItem,
  PageSection,
  Title
} from '../..';
import ArrowRightIcon from '@patternfly/react-icons/dist/esm/icons/arrow-right-icon';
import TimesIcon from '@patternfly/react-icons/dist/esm/icons/times-icon';
import MultiContentCard from '@patternfly/react-component-groups/dist/dynamic/MultiContentCard';
import AnimationsOverviewClusterInventory from './AnimationsOverviewClusterInventory';
import AnimationsOverviewNetworkActivity from './AnimationsOverviewNetworkActivity';
import AnimationsOverviewStorage from './AnimationsOverviewStorage';
import AnimationsOverviewMemoryUtilization from './AnimationsOverviewMemoryUtilization';

interface AnimationsOverviewProps {
  recentActivityCard?: React.ReactNode;
  openshiftLogo?: any;
}

export const AnimationsOverview: FunctionComponent<AnimationsOverviewProps> = ({
  recentActivityCard,
  openshiftLogo
}) => {
  const [displayMultiContentCard, setDisplayMultiContentCard] = useState(true);

  const handleCloseMultiContentCard = () => {
    setDisplayMultiContentCard(false);
  };

  const cards = [
    // Card 1: Performance
    <Card isFullHeight isPlain key="card-1">
      <CardHeader>
        <Content component={ContentVariants.h3}>Animations</Content>
      </CardHeader>
      <CardBody>
        <Content component={ContentVariants.p} className="pf-v6-u-mb-sm">
          Animations are a new way to interact with your data. They are a way to visualize your data in a way that is
          easy to understand and use.
        </Content>
      </CardBody>
      <CardFooter>
        <Button variant="link" icon={<ArrowRightIcon />} iconPosition="end" isInline>
          They're everywhere
        </Button>
      </CardFooter>
    </Card>,
    // Card 2: Stability
    <Card isFullHeight isPlain key="card-2">
      <CardHeader>
        <Content component={ContentVariants.h3}>Network security</Content>
      </CardHeader>
      <CardBody>
        <Content component={ContentVariants.p} className="pf-v6-u-mb-sm">
          Network security is a critical part of any organization's security posture.
        </Content>
      </CardBody>
      <CardFooter>
        <Button variant="link" icon={<ArrowRightIcon />} iconPosition="end" isInline>
          Security updates
        </Button>
      </CardFooter>
    </Card>,
    // Card 3: Availability
    <Card isFullHeight isPlain key="card-3">
      <CardHeader>
        <Content component={ContentVariants.h3}>Cluster alerting</Content>
      </CardHeader>
      <CardBody>
        <Content component={ContentVariants.p} className="pf-v6-u-mb-sm">
          Cluster alerting is a critical part of any organization's security posture.
        </Content>
      </CardBody>
      <CardFooter>
        <Button variant="link" icon={<ArrowRightIcon />} iconPosition="end" isInline>
          View logs
        </Button>
      </CardFooter>
    </Card>,
    // Card 4: Image
    <Card isFullHeight isPlain key="card-4">
      <CardBody>
        <img src={openshiftLogo} alt="OpenShift Logo" />
      </CardBody>
    </Card>
  ];

  return (
    <Fragment>
      {displayMultiContentCard && (
        <PageSection id="overview">
          <MultiContentCard
            isExpandable={true}
            withDividers
            cards={cards}
            toggleText="What's new in OpenShift?"
            actions={<Button icon={<TimesIcon />} variant="plain" onClick={handleCloseMultiContentCard} />}
          />
        </PageSection>
      )}
      <PageSection aria-label="Detail status events">
        <Grid hasGutter>
          <GridItem span={3} rowSpan={4}>
            <Card isFullHeight>
              <CardTitle>
                <Title headingLevel="h4" size="xl">
                  Cluster Details
                </Title>
              </CardTitle>
              <CardBody>
                <DescriptionList>
                  <DescriptionListGroup>
                    <DescriptionListTerm>Cluster API Address</DescriptionListTerm>
                    <DescriptionListDescription>
                      <a href="#">https://api1.devcluster.openshift.com</a>
                    </DescriptionListDescription>
                  </DescriptionListGroup>
                  <DescriptionListGroup>
                    <DescriptionListTerm>Cluster ID</DescriptionListTerm>
                    <DescriptionListDescription>63b97ac1-b850-41d9-8820-239becde9e86</DescriptionListDescription>
                  </DescriptionListGroup>
                  <DescriptionListGroup>
                    <DescriptionListTerm>Provide</DescriptionListTerm>
                    <DescriptionListDescription>AWS</DescriptionListDescription>
                  </DescriptionListGroup>
                  <DescriptionListGroup>
                    <DescriptionListTerm>OpenShift Version</DescriptionListTerm>
                    <DescriptionListDescription>4.5.0.ci-2020-06-16-015028</DescriptionListDescription>
                  </DescriptionListGroup>
                  <DescriptionListGroup>
                    <DescriptionListTerm>Update Channel</DescriptionListTerm>
                    <DescriptionListDescription>stable-4.5</DescriptionListDescription>
                  </DescriptionListGroup>
                </DescriptionList>
              </CardBody>
              <Divider />
              <CardFooter>
                <a href="#">View Settings</a>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem span={3} rowSpan={2}>
            <AnimationsOverviewClusterInventory />
          </GridItem>
          <GridItem span={2} rowSpan={2}>
            <AnimationsOverviewStorage />
          </GridItem>
          <GridItem span={4} rowSpan={2}>
            <AnimationsOverviewMemoryUtilization />
          </GridItem>
          <GridItem span={4} rowSpan={2}>
            <AnimationsOverviewNetworkActivity />
          </GridItem>
          {recentActivityCard && (
            <GridItem span={5} rowSpan={2}>
              {recentActivityCard}
            </GridItem>
          )}
        </Grid>
      </PageSection>
    </Fragment>
  );
};

export default AnimationsOverview;
