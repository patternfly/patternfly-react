import React from 'react';
import {
  DescriptionList,
  DescriptionListTerm,
  DescriptionListGroup,
  DescriptionListDescription,
  PageSection,
  PageSectionVariants,
  TextContent,
  Text,
  Grid,
  GridItem,
  Divider,
  Title
} from '@patternfly/react-core';
import { Table, Thead, Tr, Th, Tbody, Td } from '@patternfly/react-table';
import { DashboardWrapper } from '@patternfly/react-core/dist/js/demos/DashboardWrapper';

export const DescriptionListComplexContent: React.FunctionComponent = () => (
  <DashboardWrapper>
    <PageSection variant={PageSectionVariants.light}>
      <TextContent>
        <Text component="h1">Main title</Text>
        <Text component="p">This is a full page demo.</Text>
      </TextContent>
    </PageSection>
    <Divider component="div" />
    <PageSection variant={PageSectionVariants.light}>
      <Grid hasGutter>
        <GridItem span={4}>
          <Grid hasGutter>
            <GridItem>
              <Title headingLevel="h2">Service overview</Title>
            </GridItem>
            <GridItem>
              <DescriptionList columnModifier={{ default: '2Col', lg: '2Col' }}>
                <DescriptionListGroup>
                  <DescriptionListTerm>Name</DescriptionListTerm>
                  <DescriptionListDescription>Example</DescriptionListDescription>
                </DescriptionListGroup>
                <DescriptionListGroup>
                  <DescriptionListTerm>Label</DescriptionListTerm>
                  <DescriptionListDescription>No label</DescriptionListDescription>
                </DescriptionListGroup>
                <DescriptionListGroup>
                  <DescriptionListTerm>Annotations</DescriptionListTerm>
                  <DescriptionListDescription>2 Annotations</DescriptionListDescription>
                </DescriptionListGroup>
                <DescriptionListGroup>
                  <DescriptionListTerm>Created at:</DescriptionListTerm>
                  <DescriptionListDescription>3 minutes ago</DescriptionListDescription>
                </DescriptionListGroup>
                <DescriptionListGroup>
                  <DescriptionListTerm>Namespace</DescriptionListTerm>
                  <DescriptionListDescription>ajay-test</DescriptionListDescription>
                </DescriptionListGroup>
                <DescriptionListGroup>
                  <DescriptionListTerm>Pod selector</DescriptionListTerm>
                  <DescriptionListDescription>app=MyApp</DescriptionListDescription>
                </DescriptionListGroup>
                <DescriptionListGroup>
                  <DescriptionListTerm>Session affi nity</DescriptionListTerm>
                  <DescriptionListDescription>None</DescriptionListDescription>
                </DescriptionListGroup>
              </DescriptionList>
            </GridItem>
          </Grid>
        </GridItem>
        <GridItem span={8}>
          <Grid hasGutter>
            <GridItem>
              <Title headingLevel="h2">Service routing</Title>
            </GridItem>
            <GridItem>
              <DescriptionList isFillColumns columnModifier={{ default: '2Col', lg: '2Col' }}>
                <DescriptionListGroup>
                  <DescriptionListTerm>Service address</DescriptionListTerm>
                  <DescriptionListDescription>
                    <Table>
                      <Thead>
                        <Tr>
                          <Th key={0}>Type</Th>
                          <Th key={1}>Location</Th>
                        </Tr>
                      </Thead>
                      <Tbody>
                        <Tr key={0}>
                          <Td>Cluster IP</Td>
                          <Td>172.30.126.106</Td>
                        </Tr>
                        <Tr key={1}>
                          <Td>Accessible within the cluster only</Td>
                          <Td>n/a</Td>
                        </Tr>
                      </Tbody>
                    </Table>
                  </DescriptionListDescription>
                </DescriptionListGroup>
                <DescriptionListGroup>
                  <DescriptionListTerm>Service port mapping</DescriptionListTerm>
                  <DescriptionListDescription>
                    <Table>
                      <Thead>
                        <Tr key={0}>
                          <Th key={0}>Name</Th>
                          <Th key={1}>Port</Th>
                          <Th key={2}>Protocol</Th>
                          <Th key={3}>Pod port or ...</Th>
                        </Tr>
                      </Thead>
                      <Tbody>
                        <Tr key={1}>
                          <Td>test</Td>
                          <Td>80</Td>
                          <Td>TCP</Td>
                          <Td>80</Td>
                        </Tr>
                      </Tbody>
                    </Table>
                  </DescriptionListDescription>
                </DescriptionListGroup>
              </DescriptionList>
            </GridItem>
          </Grid>
        </GridItem>
      </Grid>
    </PageSection>
  </DashboardWrapper>
);
