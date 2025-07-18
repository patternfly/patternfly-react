import { Fragment, FunctionComponent, useState } from 'react';
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  CardTitle,
  DescriptionList,
  DescriptionListDescription,
  DescriptionListGroup,
  DescriptionListTerm,
  Divider,
  Flex,
  FlexItem,
  Icon,
  MenuToggle,
  Select,
  SelectList,
  SelectOption,
  Spinner,
  Timestamp,
  Title
} from '../..';
import CheckCircleIcon from '@patternfly/react-icons/dist/esm/icons/check-circle-icon';
import ExclamationCircleIcon from '@patternfly/react-icons/dist/esm/icons/exclamation-circle-icon';

const AnimationsOverviewEventsCard: FunctionComponent = () => {
  const [isOpen, setIsOpen] = useState(false);

  const selectItems = (
    <SelectList>
      <SelectOption value="Success" key="option1">
        Success
      </SelectOption>
      <SelectOption value="Error" key="option2">
        Error
      </SelectOption>
      <SelectOption value="Warning" key="option3">
        Warning
      </SelectOption>
    </SelectList>
  );

  const toggle = (toggleRef: any) => (
    <MenuToggle ref={toggleRef} onClick={() => setIsOpen(!isOpen)} isExpanded={isOpen} variant="plainText">
      Status
    </MenuToggle>
  );

  const headerActions = (
    <Select onSelect={() => setIsOpen(!isOpen)} onOpenChange={setIsOpen} isOpen={isOpen} toggle={toggle}>
      {selectItems}
    </Select>
  );

  return (
    <Fragment>
      <Card id="card-events-view-example">
        <CardHeader actions={{ actions: headerActions, hasNoOffset: true }}>
          <CardTitle>
            <Title headingLevel="h4" size="xl">
              Events
            </Title>
          </CardTitle>
        </CardHeader>
        <CardBody>
          <DescriptionList>
            <DescriptionListGroup>
              <DescriptionListTerm>
                <Flex flexWrap={{ default: 'nowrap' }}>
                  <FlexItem>
                    <Icon status="danger">
                      <ExclamationCircleIcon />
                    </Icon>
                  </FlexItem>
                  <FlexItem>
                    <span>Readiness probe failed</span>
                  </FlexItem>
                </Flex>
              </DescriptionListTerm>
              <DescriptionListDescription>
                Readiness probe failed: Get https://10.131.0.7:5000/healthz: dial tcp 10.131.0.7:5000: connect:
                connection refused
              </DescriptionListDescription>
              <DescriptionListDescription>
                <Timestamp date={new Date('2023-06-17T11:02')} dateFormat="medium" timeFormat="short" />
              </DescriptionListDescription>
            </DescriptionListGroup>
            <DescriptionListGroup>
              <DescriptionListTerm>
                <Flex flexWrap={{ default: 'nowrap' }}>
                  <FlexItem>
                    <Icon status="success">
                      <CheckCircleIcon />
                    </Icon>
                  </FlexItem>
                  <FlexItem>
                    <span>Successful assignment</span>
                  </FlexItem>
                </Flex>
              </DescriptionListTerm>
              <DescriptionListDescription>
                Successfully assigned default/example to ip-10-0-130-149.ec2.internal
              </DescriptionListDescription>
              <DescriptionListDescription>
                <Timestamp date={new Date('2023-06-17T11:13')} dateFormat="medium" timeFormat="short" />
              </DescriptionListDescription>
            </DescriptionListGroup>
            <DescriptionListGroup>
              <DescriptionListTerm>
                <Flex flexWrap={{ default: 'nowrap' }}>
                  <FlexItem>
                    <Spinner size="md" aria-label="loading spinner" />
                  </FlexItem>
                  <FlexItem>
                    <span>Pulling image</span>
                  </FlexItem>
                </Flex>
              </DescriptionListTerm>
              <DescriptionListDescription>Pulling image "openshift/hello-openshift"</DescriptionListDescription>
              <DescriptionListDescription>
                <Timestamp date={new Date('2023-06-17T10:59')} dateFormat="medium" timeFormat="short" />
              </DescriptionListDescription>
            </DescriptionListGroup>
            <DescriptionListGroup>
              <DescriptionListTerm>
                <Flex flexWrap={{ default: 'nowrap' }}>
                  <FlexItem>
                    <Icon status="success">
                      <CheckCircleIcon />
                    </Icon>
                  </FlexItem>
                  <FlexItem>
                    <span>Created container</span>
                  </FlexItem>
                </Flex>
              </DescriptionListTerm>
              <DescriptionListDescription>Created container hello-openshift</DescriptionListDescription>
              <DescriptionListDescription>
                <Timestamp date={new Date('2023-06-17T10:45')} dateFormat="medium" timeFormat="short" />
              </DescriptionListDescription>
            </DescriptionListGroup>
          </DescriptionList>
        </CardBody>
        <Divider />
        <CardFooter>
          <a href="#">View all events</a>
        </CardFooter>
      </Card>
    </Fragment>
  );
};

export default AnimationsOverviewEventsCard;
