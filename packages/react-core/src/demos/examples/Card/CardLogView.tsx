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
  Gallery,
  MenuToggle,
  MenuToggleElement,
  Select,
  SelectList,
  SelectOption,
  Timestamp,
  Title
} from '@patternfly/react-core';
import flex from '@patternfly/react-styles/css/utilities/Flex/flex';
import l_gallery_GridTemplateColumns_min from '@patternfly/react-tokens/dist/esm/l_gallery_GridTemplateColumns_min';

export const CardLogView: React.FunctionComponent = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const selectItems = (
    <SelectList>
      <SelectOption key="option1" value="Last hour">
        Last hour
      </SelectOption>
      <SelectOption key="option2" value="Last 6 hours">
        Last 6 hours
      </SelectOption>
      <SelectOption key="option3" value="Last 24 hours">
        Last 24 hours
      </SelectOption>
      <SelectOption key="option4" value="Last 7 days">
        Last 7 days
      </SelectOption>
    </SelectList>
  );

  const toggle = (toggleRef: React.Ref<MenuToggleElement>) => (
    <MenuToggle ref={toggleRef} onClick={() => setIsOpen(!isOpen)} isExpanded={isOpen} variant="plainText">
      Filter
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
        <Card id="card-log-view-example">
          <CardHeader className={flex.alignItemsFlexStart} actions={{ actions: headerActions, hasNoOffset: true }}>
            <CardTitle>
              <Title headingLevel="h4" size="xl" style={{ paddingTop: '3px' }}>
                Activity
              </Title>
            </CardTitle>
          </CardHeader>
          <CardBody>
            <DescriptionList>
              <DescriptionListGroup>
                <DescriptionListTerm>Readiness probe failed</DescriptionListTerm>
                <DescriptionListDescription>
                  Readiness probe failed: Get https://10.131.0.7:5000/healthz: dial tcp 10.131.0.7:5000: connect:
                  connection refused
                </DescriptionListDescription>
                <DescriptionListDescription>
                  <Timestamp date={new Date('2023-06-17T11:02')} dateFormat="medium" timeFormat="short" />
                </DescriptionListDescription>
              </DescriptionListGroup>
              <DescriptionListGroup>
                <DescriptionListTerm>Successful assignment</DescriptionListTerm>
                <DescriptionListDescription>
                  Successfully assigned default/example to ip-10-0-130-149.ec2.internal
                </DescriptionListDescription>
                <DescriptionListDescription>
                  <Timestamp date={new Date('2023-06-17T11:13')} dateFormat="medium" timeFormat="short" />
                </DescriptionListDescription>
              </DescriptionListGroup>
              <DescriptionListGroup>
                <DescriptionListTerm>Pulling image</DescriptionListTerm>
                <DescriptionListDescription>Pulling image "openshift/hello-openshift"</DescriptionListDescription>
                <DescriptionListDescription>
                  <Timestamp date={new Date('2023-06-17T10:59')} dateFormat="medium" timeFormat="short" />
                </DescriptionListDescription>
              </DescriptionListGroup>
              <DescriptionListGroup>
                <DescriptionListTerm>Created container</DescriptionListTerm>
                <DescriptionListDescription>Created container hello-openshift</DescriptionListDescription>
                <DescriptionListDescription>
                  <Timestamp date={new Date('2023-06-17T10:45')} dateFormat="medium" timeFormat="short" />
                </DescriptionListDescription>
              </DescriptionListGroup>
            </DescriptionList>
          </CardBody>
          <Divider />
          <CardFooter>
            <a href="#">View all activity</a>
          </CardFooter>
        </Card>
      </Gallery>
    </React.Fragment>
  );
};
