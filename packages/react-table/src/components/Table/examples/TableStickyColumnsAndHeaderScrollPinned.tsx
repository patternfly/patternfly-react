import { useLayoutEffect, useRef, useState } from 'react';
import {
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  InnerScrollContainer,
  OuterScrollContainer,
  ThProps,
  ISortBy
} from '@patternfly/react-table';
import BlueprintIcon from '@patternfly/react-icons/dist/esm/icons/blueprint-icon';

const useTheadPinnedFromScrollParent = ({ track, scrollRootRef, theadRef }): { isPinned } => {
  const [isPinned, setIsPinned] = useState(false);

  useLayoutEffect(() => {
    if (!track) {
      setIsPinned(false);
      return;
    }

    const scrollRoot = scrollRootRef.current;
    if (!scrollRoot) {
      setIsPinned(false);
      return;
    }

    const syncFromScroll = () => {
      setIsPinned(scrollRoot.scrollTop > 0);
    };
    syncFromScroll();
    scrollRoot.addEventListener('scroll', syncFromScroll, { passive: true });
    return () => scrollRoot.removeEventListener('scroll', syncFromScroll);
  }, [track, scrollRootRef, theadRef]);

  return { isPinned };
};

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
}

export const TableStickyColumnsAndHeaderScrollPinned: React.FunctionComponent = () => {
  const facts: Fact[] = Array.from({ length: 9 }, (_, index) => ({
    name: `Fact ${index + 1}`,
    state: `State ${index + 1}`,
    detail1: `Test cell ${index + 1}-3`,
    detail2: `Test cell ${index + 1}-4`,
    detail3: `Test cell ${index + 1}-5`,
    detail4: `Test cell ${index + 1}-6`,
    detail5: `Test cell ${index + 1}-7`,
    detail6: `Test cell ${index + 1}-8`,
    detail7: `Test cell ${index + 1}-9`
  }));

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

  const [activeSortIndex, setActiveSortIndex] = useState(-1);
  const [activeSortDirection, setActiveSortDirection] = useState<ISortBy['direction']>();

  const innerScrollRef = useRef<HTMLDivElement>(null);
  const theadRef = useRef<HTMLTableSectionElement>(null);

  const { isPinned } = useTheadPinnedFromScrollParent({
    track: true,
    scrollRootRef: innerScrollRef,
    theadRef
  });

  const getSortableRowValues = (fact: Fact): (string | number)[] => {
    const { name, state, detail1, detail2, detail3, detail4, detail5, detail6, detail7 } = fact;
    return [name, state, detail1, detail2, detail3, detail4, detail5, detail6, detail7];
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

  const getSortParams = (columnIndex: number): ThProps['sort'] => ({
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
    <div style={{ height: '400px' }}>
      <OuterScrollContainer>
        <InnerScrollContainer ref={innerScrollRef}>
          <Table aria-label="Sticky columns and header with scroll-pinned class" gridBreakPoint="" isStickyHeader>
            <Thead ref={theadRef} isPinned={isPinned}>
              <Tr>
                <Th isStickyColumn modifier="truncate" sort={getSortParams(0)}>
                  {columnNames.name}
                </Th>
                <Th
                  isStickyColumn
                  stickyMinWidth="120px"
                  stickyLeftOffset="120px"
                  hasRightBorder
                  modifier="truncate"
                  sort={getSortParams(1)}
                >
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
              {sortedFacts.map((fact) => (
                <Tr key={fact.name}>
                  <Th isStickyColumn modifier="truncate">
                    {fact.name}
                  </Th>
                  <Th isStickyColumn stickyMinWidth="120px" stickyLeftOffset="120px" modifier="truncate" hasRightBorder>
                    <BlueprintIcon />
                    {` ${fact.state}`}
                  </Th>
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
          </Table>
        </InnerScrollContainer>
      </OuterScrollContainer>
    </div>
  );
};
