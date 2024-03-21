import React from 'react';
import {
  Button,
  DescriptionList,
  DescriptionListTerm,
  DescriptionListGroup,
  DescriptionListDescription,
  PageSection,
  PageSectionVariants,
  Card,
  CardBody
} from '@patternfly/react-core';
import PlusCircleIcon from '@patternfly/react-icons/dist/esm/icons/plus-circle-icon';
import { DashboardWrapper } from '@patternfly/react-core/src/demos/DashboardWrapper';

export const DescriptionListBasic: React.FunctionComponent = () => (
  <DashboardWrapper>
    <PageSection variant={PageSectionVariants.light}>
      <Card>
        <CardBody> Details</CardBody>
      </Card>
      <Card>
        <CardBody>
          <DescriptionList isFillColumns columnModifier={{ default: '2Col', lg: '3Col' }}>
            <DescriptionListGroup>
              <DescriptionListTerm>Name</DescriptionListTerm>
              <DescriptionListDescription>Example</DescriptionListDescription>
            </DescriptionListGroup>
            <DescriptionListGroup>
              <DescriptionListTerm>Namespace</DescriptionListTerm>
              <DescriptionListDescription>
                <a href="#">mary-test</a>
              </DescriptionListDescription>
            </DescriptionListGroup>
            <DescriptionListGroup>
              <DescriptionListTerm>Labels</DescriptionListTerm>
              <DescriptionListDescription>example</DescriptionListDescription>
            </DescriptionListGroup>
            <DescriptionListGroup>
              <DescriptionListTerm>Pod selector</DescriptionListTerm>
              <DescriptionListDescription>
                <Button variant="link" isInline icon={<PlusCircleIcon />}>
                  app=MyApp
                </Button>
              </DescriptionListDescription>
            </DescriptionListGroup>
            <DescriptionListGroup>
              <DescriptionListTerm>Annotation</DescriptionListTerm>
              <DescriptionListDescription>2 Annotations</DescriptionListDescription>
            </DescriptionListGroup>
          </DescriptionList>
        </CardBody>
      </Card>
    </PageSection>
  </DashboardWrapper>
);
