import React from 'react';
import { Table, Thead, Tr, Th, Tbody, Td } from '@patternfly/react-table';
import {
  Bullseye,
  Card,
  EmptyState,
  EmptyStateVariant,
  EmptyStateIcon,
  EmptyStateBody,
  EmptyStateHeader,
  PageSection
} from '@patternfly/react-core';
import ExclamationCircleIcon from '@patternfly/react-icons/dist/esm/icons/exclamation-circle-icon';
import globalDangerColor200 from '@patternfly/react-tokens/dist/esm/global_danger_color_200';
import { DashboardWrapper } from '@patternfly/react-table/dist/esm/demos/DashboardWrapper';

export const TableEmptyStateError: React.FunctionComponent = () => (
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
                  <EmptyState variant={EmptyStateVariant.sm}>
                    <EmptyStateHeader
                      titleText="Unable to connect"
                      icon={<EmptyStateIcon icon={ExclamationCircleIcon} color={globalDangerColor200.value} />}
                      headingLevel="h2"
                    />
                    <EmptyStateBody>
                      There was an error retrieving data. Check your connection and reload the page.
                    </EmptyStateBody>
                  </EmptyState>
                </Bullseye>
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </Card>
    </PageSection>
  </DashboardWrapper>
);
