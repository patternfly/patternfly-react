import { useLayoutEffect, useRef, useState } from 'react';
import { Table, Thead, Tr, Th, Tbody, Td, InnerScrollContainer } from '@patternfly/react-table';
import BlueprintIcon from '@patternfly/react-icons/dist/esm/icons/blueprint-icon';

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

const useIsStuckFromScrollParent = ({
  shouldTrack,
  scrollParentRef
}: {
  /** Indicates whether to track the scroll top position of the scroll parent element */
  shouldTrack: boolean;
  /** Reference to the scroll parent element */
  scrollParentRef: React.RefObject<any>;
}): boolean => {
  const [isStuck, setIsStuck] = useState(false);

  useLayoutEffect(() => {
    if (!shouldTrack) {
      setIsStuck(false);
      return;
    }

    const scrollElement = scrollParentRef.current;
    if (!scrollElement) {
      setIsStuck(false);
      return;
    }

    const syncFromScroll = () => {
      setIsStuck(scrollElement.scrollTop > 0);
    };
    syncFromScroll();
    scrollElement.addEventListener('scroll', syncFromScroll, { passive: true });
    return () => scrollElement.removeEventListener('scroll', syncFromScroll);
  }, [shouldTrack, scrollParentRef]);

  return isStuck;
};

export const TableStickyHeaderDynamic: React.FunctionComponent = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const isStuck = useIsStuckFromScrollParent({ shouldTrack: true, scrollParentRef: scrollContainerRef });

  // In real usage, this data would come from some external source like an API via props.
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

  return (
    <div style={{ height: '400px' }}>
      <InnerScrollContainer ref={scrollContainerRef}>
        <Table
          aria-label="Dynamic sticky header table"
          gridBreakPoint=""
          isStickyHeaderBase
          isStickyHeaderStuck={isStuck}
        >
          <Thead>
            <Tr>
              <Th modifier="truncate">{columnNames.name}</Th>
              <Th modifier="truncate">{columnNames.state}</Th>
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
            {facts.map((fact) => (
              <Tr key={fact.name}>
                <Td modifier="nowrap" dataLabel={columnNames.name}>
                  {fact.name}
                </Td>
                <Td modifier="nowrap" dataLabel={columnNames.state}>
                  <BlueprintIcon />
                  {` ${fact.state}`}
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
        </Table>
      </InnerScrollContainer>
    </div>
  );
};
