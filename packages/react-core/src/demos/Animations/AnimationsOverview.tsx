import { Fragment, FunctionComponent } from 'react';
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
  Icon,
  Label,
  PageSection,
  Title
} from '../..';
import ArrowRightIcon from '@patternfly/react-icons/dist/esm/icons/arrow-right-icon';
import PowerOffIcon from '@patternfly/react-icons/dist/esm/icons/power-off-icon';
import PortIcon from '@patternfly/react-icons/dist/esm/icons/port-icon';
import CubeIcon from '@patternfly/react-icons/dist/esm/icons/cube-icon';
import AutomationIcon from '@patternfly/react-icons/dist/esm/icons/automation-icon';
import MultiContentCard from '@patternfly/react-component-groups/dist/dynamic/MultiContentCard';
import AnimationsOverviewCardStatus from './AnimationsOverviewCardStatus';
import AnimationsOverviewEventsCard from './AnimationsOverviewEventsCard';

export const AnimationsOverview: FunctionComponent = () => {
  const cards = [
    // Card 1: Performance
    <Card isFullHeight isPlain key="card-1">
      <CardHeader>
        <Content>
          <Label variant="outline" color="blue" icon={<PortIcon />}>
            Performance
          </Label>
        </Content>
      </CardHeader>
      <CardBody>
        <Content component={ContentVariants.p} className="pf-v6-u-mb-sm">
          Upgrade your kernel version to remediate ntpd time sync issues, kernel panics, network instabilities and
          issues with system performance
        </Content>
        <Content className="pf-v6-u-mb-md">
          <a href="#">378 systems</a>
        </Content>
        <Content className="pf-v6-u-mb-md">
          <Label status="danger" variant="outline">
            Incident
          </Label>
        </Content>
        <Content className="pf-v6-u-mb-md">
          <Icon size="md" isInline>
            <PowerOffIcon />
          </Icon>
          <span>
            {' '}
            System reboot <b>is not</b> required
          </span>
        </Content>
      </CardBody>
      <CardFooter>
        <Button variant="link" icon={<ArrowRightIcon />} iconPosition="end" isInline>
          View pathway
        </Button>
      </CardFooter>
    </Card>,
    // Card 2: Stability
    <Card isFullHeight isPlain key="card-2">
      <CardHeader>
        <Content>
          <Label variant="outline" color="blue" icon={<CubeIcon />}>
            Stability
          </Label>
        </Content>
      </CardHeader>
      <CardBody>
        <Content component={ContentVariants.p} className="pf-v6-u-mb-sm">
          Adjust your networking configuration to get ahead of network performance degradations and packet losses.
        </Content>
        <Content className="pf-v6-u-mb-md">
          <a href="#">211 systems</a>
        </Content>
        <Content className="pf-v6-u-mb-md">
          <Label status="danger" variant="outline">
            Incident
          </Label>
        </Content>
        <Content className="pf-v6-u-mb-md">
          <Icon size="md" isInline>
            <PowerOffIcon />
          </Icon>
          <span>
            {' '}
            System reboot <b>is</b> required
          </span>
        </Content>
      </CardBody>
      <CardFooter>
        <Button variant="link" icon={<ArrowRightIcon />} iconPosition="end" isInline>
          View pathway
        </Button>
      </CardFooter>
    </Card>,
    // Card 3: Availability
    <Card isFullHeight isPlain key="card-3">
      <CardHeader>
        <Content>
          <Label variant="outline" color="blue" icon={<AutomationIcon />}>
            Availability
          </Label>
        </Content>
      </CardHeader>
      <CardBody>
        <Content component={ContentVariants.p} className="pf-v6-u-mb-sm">
          Fine tune your Oracle DB configuration to improve database performance and avoid process failure
        </Content>
        <Content className="pf-v6-u-mb-md">
          <a href="#">166 systems</a>
        </Content>
        <Content className="pf-v6-u-mb-md">
          <Label status="danger" variant="outline">
            Incident
          </Label>
        </Content>
        <Content className="pf-v6-u-mb-md">
          <Icon size="md" isInline>
            <PowerOffIcon />
          </Icon>
          <span>
            {' '}
            System reboot <b>is not</b> required
          </span>
        </Content>
      </CardBody>
      <CardFooter>
        <Button variant="link" icon={<ArrowRightIcon />} iconPosition="end" isInline>
          View pathway
        </Button>
      </CardFooter>
    </Card>
  ];

  return (
    <Fragment>
      <PageSection id="overview">
        <MultiContentCard isExpandable={true} cards={cards} toggleText="Improve recommended pathways" />
      </PageSection>
      <PageSection aria-label="Detail status events">
        <Grid hasGutter xl2={4}>
          <GridItem>
            <Card>
              <CardTitle>
                <Title headingLevel="h4" size="xl">
                  Details
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
          <GridItem>
            <AnimationsOverviewCardStatus />
          </GridItem>
          <GridItem>
            <AnimationsOverviewEventsCard />
          </GridItem>
        </Grid>
      </PageSection>
    </Fragment>
  );
};

export default AnimationsOverview;
