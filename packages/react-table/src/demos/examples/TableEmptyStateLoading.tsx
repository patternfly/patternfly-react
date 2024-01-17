import React from 'react';
import { Table, Thead, Tr, Th, Tbody, Td } from '@patternfly/react-table';
import { Bullseye, Card, EmptyState, PageSection, Spinner } from '@patternfly/react-core';
import { DashboardWrapper } from '@patternfly/react-core/dist/esm/demos/DashboardWrapper';

export const TableEmptyStateLoading: React.FunctionComponent = () => (
  <DashboardWrapper hasPageTemplateTitle>
    <PageSection padding={{ default: 'noPadding', xl: 'padding' }}>
      <Card component="div">
        <Table aria-label="Loading table demo">
          <Thead>
            <Tr>
              <Th>Repositories</Th>
              <Th>Branches</Th>
              <Th>Pull requests</Th>
              <Th>Workspaces</Th>
              <Th>Last commit</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td colSpan={8}>
                <Bullseye>
                  <EmptyState headingLevel="h2" titleText="Loading" icon={Spinner}></EmptyState>
                </Bullseye>
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </Card>
    </PageSection>
  </DashboardWrapper>
);
