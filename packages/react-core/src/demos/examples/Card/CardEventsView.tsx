/* eslint-disable camelcase */
import React from 'react';
import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  CardFooter,
  DescriptionList,
  DescriptionListGroup,
  DescriptionListTerm,
  DescriptionListDescription,
  Divider,
  Flex,
  FlexItem,
  Gallery,
  Icon,
  MenuToggle,
  Select,
  SelectList,
  SelectOption,
  Spinner,
  Timestamp,
  Title
} from '@patternfly/react-core';
import ExclamationCircleIcon from '@patternfly/react-icons/dist/esm/icons/exclamation-circle-icon';
import CheckCircleIcon from '@patternfly/react-icons/dist/esm/icons/check-circle-icon';
import flex from '@patternfly/react-styles/css/utilities/Flex/flex';
import l_gallery_GridTemplateColumns_min from '@patternfly/react-tokens/dist/esm/l_gallery_GridTemplateColumns_min';

export const CardEventsView: React.FunctionComponent = () => {
  const [isOpen, setIsOpen] = React.useState(false);

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

  const toggle = (toggleRef) => (
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
    <React.Fragment>
      <b>Note:</b> Custom CSS is used in this demo to align the card title and select toggle text to{' '}
      <code>baseline</code> alignment.
      <br />
      <br />
      <Gallery hasGutter style={{ [l_gallery_GridTemplateColumns_min.name]: '360px' } as React.CSSProperties}>
        <Card id="card-events-view-example">
          <CardHeader className={flex.alignItemsFlexStart} actions={{ actions: headerActions, hasNoOffset: true }}>
            <CardTitle>
              <Title headingLevel="h4" size="xl" style={{ paddingTop: '3px' }}>
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
                        <ExclamationCircleIcon aria-hidden="true" />
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
                        <CheckCircleIcon aria-hidden="true" />
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
                        <CheckCircleIcon aria-hidden="true" />
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
      </Gallery>
    </React.Fragment>
  );
};
