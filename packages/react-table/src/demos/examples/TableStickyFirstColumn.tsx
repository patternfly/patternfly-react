import React from 'react';
import { Table, Thead, Tr, Th, Tbody, Td, InnerScrollContainer } from '@patternfly/react-table';
import { Card, PageSection } from '@patternfly/react-core';
import { DashboardWrapper } from '@patternfly/react-table/dist/esm/demos/DashboardWrapper';

type Direction = 'asc' | 'desc' | undefined;

interface Fact {
  name: string;
  state: string;
  detail1: string;
  detail2: string;
  detail3: string;
  detail4: string;
  detail5: string;
  detail6: string;
  detail7: string;
  detail8: string;
  detail9: string;
  detail10: string;
  detail11: string;
  detail12: string;
  detail13: string;
  detail14: string;
}

export const TableStickyFirstColumn = () => {
  const facts = Array.from(
    {
      length: 9
    },
    (_, index) => ({
      name: `Fact ${index + 1}`,
      state: `State ${index + 1}`,
      detail1: `Test cell ${index + 1}-3`,
      detail2: `Test cell ${index + 1}-4`,
      detail3: `Test cell ${index + 1}-5`,
      detail4: `Test cell ${index + 1}-6`,
      detail5: `Test cell ${index + 1}-7`,
      detail6: `Test cell ${index + 1}-8`,
      detail7: `Test cell ${index + 1}-9`,
      detail8: `Test cell ${index + 1}-10`,
      detail9: `Test cell ${index + 1}-11`,
      detail10: `Test cell ${index + 1}-12`,
      detail11: `Test cell ${index + 1}-13`,
      detail12: `Test cell ${index + 1}-14`,
      detail13: `Test cell ${index + 1}-15`,
      detail14: `Test cell ${index + 1}-16`
    })
  );
  const columnNames = {
    name: 'Fact',
    state: 'State',
    header3: 'Header 3',
    header4: 'Header 4',
    header5: 'Header 5',
    header6: 'Header 6',
    header7: 'Header 7',
    header8: 'Header 8',
    header9: 'Header 9',
    header10: 'Header 10',
    header11: 'Header 11',
    header12: 'Header 12',
    header13: 'Header 13',
    header14: 'Header 14',
    header15: 'Header 15',
    header16: 'Header 16'
  };

  const [activeSortIndex, setActiveSortIndex] = React.useState(-1);
  const [activeSortDirection, setActiveSortDirection] = React.useState<Direction>('asc');
  const getSortableRowValues = (fact: Fact) => {
    const {
      name,
      state,
      detail1,
      detail2,
      detail3,
      detail4,
      detail5,
      detail6,
      detail7,
      detail8,
      detail9,
      detail10,
      detail11,
      detail12,
      detail13,
      detail14
    } = fact;
    return [
      name,
      state,
      detail1,
      detail2,
      detail3,
      detail4,
      detail5,
      detail6,
      detail7,
      detail8,
      detail9,
      detail10,
      detail11,
      detail12,
      detail13,
      detail14
    ];
  };
  let sortedFacts = facts;
  if (activeSortIndex > -1) {
    sortedFacts = facts.sort((a, b) => {
      const aValue = getSortableRowValues(a)[activeSortIndex];
      const bValue = getSortableRowValues(b)[activeSortIndex];
      if (aValue === bValue) {
        return 0;
      }
      if (activeSortDirection === 'asc') {
        return aValue > bValue ? 1 : -1;
      } else {
        return bValue > aValue ? 1 : -1;
      }
    });
  }
  const getSortParams = (columnIndex: number) => ({
    sortBy: {
      index: activeSortIndex,
      direction: activeSortDirection
    },
    onSort: (_event: React.MouseEvent, index: number, direction: Direction) => {
      setActiveSortIndex(index);
      setActiveSortDirection(direction);
    },
    columnIndex
  });
  return (
    <DashboardWrapper hasPageTemplateTitle>
      <PageSection isWidthLimited padding={{ default: 'noPadding', xl: 'padding' }}>
        <Card component="div">
          <InnerScrollContainer>
            <Table aria-label="Sticky column table" gridBreakPoint="">
              <Thead>
                <Tr>
                  <Th
                    isStickyColumn
                    stickyMinWidth="100px"
                    hasRightBorder
                    modifier="fitContent"
                    sort={getSortParams(0)}
                  >
                    {columnNames.name}
                  </Th>
                  <Th modifier="fitContent" sort={getSortParams(1)}>
                    {columnNames.state}
                  </Th>
                  <Th>{columnNames.header3}</Th>
                  <Th>{columnNames.header4}</Th>
                  <Th>{columnNames.header5}</Th>
                  <Th>{columnNames.header6}</Th>
                  <Th>{columnNames.header7}</Th>
                  <Th>{columnNames.header8}</Th>
                  <Th>{columnNames.header9}</Th>
                  <Th>{columnNames.header10}</Th>
                  <Th>{columnNames.header11}</Th>
                  <Th>{columnNames.header12}</Th>
                  <Th>{columnNames.header13}</Th>
                  <Th>{columnNames.header14}</Th>
                  <Th>{columnNames.header15}</Th>
                  <Th>{columnNames.header16}</Th>
                </Tr>
              </Thead>
              <Tbody>
                {sortedFacts.map((fact) => (
                  <Tr key={fact.name}>
                    <Th isStickyColumn stickyMinWidth="100px" hasRightBorder modifier="truncate">
                      {fact.name}
                    </Th>
                    <Td modifier="nowrap" dataLabel={columnNames.state}>
                      {fact.state}
                    </Td>
                    <Td modifier="nowrap" dataLabel={columnNames.header3}>
                      {fact.detail1}
                    </Td>
                    <Td modifier="nowrap" dataLabel={columnNames.header4}>
                      {fact.detail2}
                    </Td>
                    <Td modifier="nowrap" dataLabel={columnNames.header5}>
                      {fact.detail3}
                    </Td>
                    <Td modifier="nowrap" dataLabel={columnNames.header6}>
                      {fact.detail4}
                    </Td>
                    <Td modifier="nowrap" dataLabel={columnNames.header7}>
                      {fact.detail5}
                    </Td>
                    <Td modifier="nowrap" dataLabel={columnNames.header8}>
                      {fact.detail6}
                    </Td>
                    <Td modifier="nowrap" dataLabel={columnNames.header9}>
                      {fact.detail7}
                    </Td>
                    <Td modifier="nowrap" dataLabel={columnNames.header10}>
                      {fact.detail8}
                    </Td>
                    <Td modifier="nowrap" dataLabel={columnNames.header11}>
                      {fact.detail9}
                    </Td>
                    <Td modifier="nowrap" dataLabel={columnNames.header12}>
                      {fact.detail10}
                    </Td>
                    <Td modifier="nowrap" dataLabel={columnNames.header13}>
                      {fact.detail11}
                    </Td>
                    <Td modifier="nowrap" dataLabel={columnNames.header14}>
                      {fact.detail12}
                    </Td>
                    <Td modifier="nowrap" dataLabel={columnNames.header15}>
                      {fact.detail13}
                    </Td>
                    <Td modifier="nowrap" dataLabel={columnNames.header16}>
                      {fact.detail14}
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </InnerScrollContainer>
        </Card>
      </PageSection>
    </DashboardWrapper>
  );
};
