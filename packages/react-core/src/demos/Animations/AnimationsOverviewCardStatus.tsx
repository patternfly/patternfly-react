import { FunctionComponent } from 'react';
import { Card, CardHeader, CardBody, Flex, FlexItem, Icon, Title, Grid, GridItem } from '../..';
import ExclamationCircleIcon from '@patternfly/react-icons/dist/esm/icons/exclamation-circle-icon';
import CheckCircleIcon from '@patternfly/react-icons/dist/esm/icons/check-circle-icon';

const AnimationsOverviewCardStatus: FunctionComponent = () => (
  <Card>
    {
      <CardHeader>
        <Title headingLevel="h4" size="lg">
          Status
        </Title>
      </CardHeader>
    }
    <CardBody>
      <Grid hasGutter md={6}>
        <GridItem>
          <Flex spaceItems={{ default: 'spaceItemsSm' }}>
            <FlexItem>
              <Icon status="success">
                <CheckCircleIcon />
              </Icon>
            </FlexItem>
            <FlexItem>
              <span>Cluster</span>
            </FlexItem>
          </Flex>
        </GridItem>
        <GridItem>
          <Flex spaceItems={{ default: 'spaceItemsSm' }}>
            <FlexItem>
              <Icon status="danger">
                <ExclamationCircleIcon />
              </Icon>
            </FlexItem>
            <FlexItem>
              <a href="#" onClick={(e) => e.preventDefault()}>
                Control Panel
              </a>
            </FlexItem>
          </Flex>
        </GridItem>
        <GridItem>
          <Flex spaceItems={{ default: 'spaceItemsSm' }}>
            <FlexItem>
              <Icon status="danger">
                <ExclamationCircleIcon />
              </Icon>
            </FlexItem>
            <Flex direction={{ default: 'column' }} spaceItems={{ default: 'spaceItemsNone' }}>
              <FlexItem>
                <a href="#">Operators</a>
              </FlexItem>
              <FlexItem>
                <span>1 degraded</span>
              </FlexItem>
            </Flex>
          </Flex>
        </GridItem>
        <GridItem>
          <Flex spaceItems={{ default: 'spaceItemsSm' }}>
            <FlexItem>
              <Icon status="success">
                <CheckCircleIcon />
              </Icon>
            </FlexItem>
            <Flex direction={{ default: 'column' }} spaceItems={{ default: 'spaceItemsNone' }}>
              <FlexItem>
                <a href="#">Image Vulnerabilities</a>
              </FlexItem>
              <FlexItem>
                <span>0 vulnerabilities</span>
              </FlexItem>
            </Flex>
          </Flex>
        </GridItem>
      </Grid>
    </CardBody>
  </Card>
);

export default AnimationsOverviewCardStatus;
