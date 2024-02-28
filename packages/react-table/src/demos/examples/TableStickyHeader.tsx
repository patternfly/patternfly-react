import React from 'react';

import { Card, Label, PageSection } from '@patternfly/react-core';
import { Table, Thead, Tr, Th, Tbody, Td, TableText } from '@patternfly/react-table';
import { DashboardWrapper } from '@patternfly/react-table/dist/esm/demos/DashboardWrapper';
import { rows, columns } from '@patternfly/react-table/dist/esm/demos/sampleData';

export const TableStickyHeader: React.FunctionComponent = () => {
  const renderLabel = (labelText: string) => {
    switch (labelText) {
      case 'Running':
        return <Label color="green">{labelText}</Label>;
      case 'Stopped':
        return <Label color="orange">{labelText}</Label>;
      case 'Needs Maintenance':
        return <Label color="blue">{labelText}</Label>;
      case 'Down':
        return <Label color="red">{labelText}</Label>;
    }
  };

  return (
    <DashboardWrapper hasPageTemplateTitle>
      <PageSection padding={{ default: 'noPadding', xl: 'padding' }}>
        <Card component="div">
          <Table aria-label="Sticky Header Table Demo" isStickyHeader>
            <Thead>
              <Tr>
                <Th width={15}>{columns[0]}</Th>
                <Th width={10}>{columns[1]}</Th>
                <Th width={10}>{columns[2]}</Th>
                <Th width={10}>{columns[3]}</Th>
                <Th width={10}>{columns[4]}</Th>
                <Th width={15}>{columns[5]}</Th>
                <Th width={15}>{columns[6]}</Th>
                <Th width={10}>{columns[7]}</Th>
              </Tr>
            </Thead>
            <Tbody>
              {rows.map((row) => (
                <Tr key={row.name}>
                  <Td dataLabel={columns[0]}>{row.name}</Td>
                  <Td dataLabel={columns[1]}>{row.threads}</Td>
                  <Td dataLabel={columns[2]}>{row.applications}</Td>
                  <Td dataLabel={columns[3]}>{row.workspaces}</Td>
                  <Td dataLabel={columns[4]}>{renderLabel(row.status)}</Td>
                  <Td dataLabel={columns[5]}>{row.location}</Td>
                  <Td dataLabel={columns[6]}>{row.lastModified}</Td>
                  <Td dataLabel={columns[7]}>
                    <a href="#">
                      <TableText wrapModifier="truncate">{row.url} </TableText>
                    </a>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </Card>
      </PageSection>
    </DashboardWrapper>
  );
};
