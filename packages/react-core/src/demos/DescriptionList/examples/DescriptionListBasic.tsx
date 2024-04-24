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
  CardBody,
  CardHeader,
  TextContent,
  Text,
  Title
} from '@patternfly/react-core';
import PlusCircleIcon from '@patternfly/react-icons/dist/esm/icons/plus-circle-icon';
import { DashboardWrapper } from '@patternfly/react-core/dist/js/demos/DashboardWrapper';

export const DescriptionListBasic: React.FunctionComponent = () => (
  <DashboardWrapper>
    <PageSection variant={PageSectionVariants.light}>
      <TextContent>
        <Title headingLevel="h1">Projects</Title>
        <Text component="p">This is a full page demo</Text>
      </TextContent>
    </PageSection>
    <PageSection>
      <Card>
        <CardHeader>
          <Title headingLevel="h2">Details</Title>
        </CardHeader>
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
