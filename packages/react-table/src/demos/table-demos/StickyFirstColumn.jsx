import React from 'react';
import { TableComposable, Thead, Tr, Th, Tbody, Td, InnerScrollContainer } from '@patternfly/react-table';
import { Card, PageSection } from '@patternfly/react-core';
import DashboardWrapper from '@patternfly/react-core/src/demos/examples/DashboardWrapper';

export const StickyFirstColumn = () => {
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
      detail7: `Test cell ${index + 1}-9`
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
    header9: 'Header 9'
  };
  const [activeSortIndex, setActiveSortIndex] = React.useState(null);
  const [activeSortDirection, setActiveSortDirection] = React.useState(null);
  const getSortableRowValues = fact => {
    const { name, state, detail1, detail2, detail3, detail4, detail5, detail6, detail7 } = fact;
    return [name, state, detail1, detail2, detail3, detail4, detail5, detail6, detail7];
  };
  let sortedFacts = facts;
  if (activeSortIndex !== null) {
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
  const getSortParams = columnIndex => ({
    sortBy: {
      index: activeSortIndex,
      direction: activeSortDirection
    },
    onSort: (_event, index, direction) => {
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
            <TableComposable aria-label="Sticky column table" gridBreakPoint="">
              <Thead>
                <Tr>
                  <Th isStickyColumn hasRightBorder modifier="truncate" sort={getSortParams(0)}>
                    {columnNames.name}
                  </Th>
                  <Th modifier="truncate" sort={getSortParams(1)}>
                    {columnNames.state}
                  </Th>
                  <Th modifier="truncate">{columnNames.header3}</Th>
                  <Th modifier="truncate">{columnNames.header4}</Th>
                  <Th modifier="truncate">{columnNames.header5}</Th>
                  <Th modifier="truncate">{columnNames.header6}</Th>
                  <Th modifier="truncate">{columnNames.header7}</Th>
                  <Th modifier="truncate">{columnNames.header8}</Th>
                  <Th modifier="truncate">{columnNames.header9}</Th>
                </Tr>
              </Thead>
              <Tbody>
                {sortedFacts.map(fact => (
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
                  </Tr>
                ))}
              </Tbody>
            </TableComposable>
          </InnerScrollContainer>
        </Card>
      </PageSection>
    </DashboardWrapper>
  );
};
