import React from 'react';
import {
  DescriptionList,
  DescriptionListTerm,
  DescriptionListGroup,
  DescriptionListDescription,
  PageSection,
  Card,
  CardBody,
  CardHeader,
  Content,
  Title,
  Divider,
  Flex,
  FlexItem
} from '@patternfly/react-core';
import CheckCircleIcon from '@patternfly/react-icons/dist/esm/icons/check-circle-icon';
import { DashboardWrapper } from '@patternfly/react-core/dist/js/demos/DashboardWrapper';

export const DescriptionListBasic: React.FunctionComponent = () => (
  <DashboardWrapper>
    <PageSection>
      <Content>
        <Content component="h1">Projects</Content>
        <Content component="p">This is a full page demo</Content>
      </Content>
    </PageSection>
    <PageSection>
      <Card>
        <CardHeader>
          <Title headingLevel="h2" size="lg">
            Details
          </Title>
        </CardHeader>
        <Divider />
        <CardBody>
          <DescriptionList isAutoFit>
            <DescriptionListGroup>
              <DescriptionListTerm>Name</DescriptionListTerm>
              <DescriptionListDescription>mary-test</DescriptionListDescription>
            </DescriptionListGroup>
            <DescriptionListGroup>
              <DescriptionListTerm>Status</DescriptionListTerm>
              <DescriptionListDescription>
                <Flex>
                  <FlexItem spacer={{ lg: 'spacerSm' }}>
                    <CheckCircleIcon color="green" />
                  </FlexItem>
                  <FlexItem>Active</FlexItem>
                </Flex>
              </DescriptionListDescription>
            </DescriptionListGroup>
            <DescriptionListGroup>
              <DescriptionListTerm>Default pull secret</DescriptionListTerm>
              <DescriptionListDescription>Not configured</DescriptionListDescription>
            </DescriptionListGroup>
            <DescriptionListGroup>
              <DescriptionListTerm>Tolerations</DescriptionListTerm>
              <DescriptionListDescription>6 Tolerations</DescriptionListDescription>
            </DescriptionListGroup>
            <DescriptionListGroup>
              <DescriptionListTerm>Network Policies</DescriptionListTerm>
              <DescriptionListDescription>
                <a href="#">Network Policies</a>
              </DescriptionListDescription>
            </DescriptionListGroup>
            <DescriptionListGroup>
              <DescriptionListTerm>Display name</DescriptionListTerm>
              <DescriptionListDescription>mary</DescriptionListDescription>
            </DescriptionListGroup>
            <DescriptionListGroup>
              <DescriptionListTerm>Requester</DescriptionListTerm>
              <DescriptionListDescription>kube:admin</DescriptionListDescription>
            </DescriptionListGroup>
            <DescriptionListGroup>
              <DescriptionListTerm>Created at:</DescriptionListTerm>
              <DescriptionListDescription>3 minutes ago</DescriptionListDescription>
            </DescriptionListGroup>
          </DescriptionList>
        </CardBody>
      </Card>
    </PageSection>
  </DashboardWrapper>
);
