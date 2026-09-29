import { useLayoutEffect, useRef, useState } from 'react';
import { Table, Thead, Tfoot, Tr, Th, Tbody, Td, InnerScrollContainer } from '@patternfly/react-table';

const useIsStuckFromScrollParent = (scrollParentRef: React.RefObject<HTMLDivElement>): boolean => {
  const [isStuck, setIsStuck] = useState(false);

  useLayoutEffect(() => {
    const scrollElement = scrollParentRef.current;
    if (!scrollElement) {
      return;
    }

    const syncFromScroll = () => {
      setIsStuck(scrollElement.scrollTop + scrollElement.clientHeight < scrollElement.scrollHeight);
    };
    syncFromScroll();
    scrollElement.addEventListener('scroll', syncFromScroll, { passive: true });
    return () => scrollElement.removeEventListener('scroll', syncFromScroll);
  }, [scrollParentRef]);

  return isStuck;
};

export const TableStickyFooterDynamic: React.FunctionComponent = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const isStuck = useIsStuckFromScrollParent(scrollContainerRef);
  const rows = Array.from({ length: 12 }, (_, index) => index + 1);

  return (
    <div style={{ height: '400px' }}>
      <InnerScrollContainer ref={scrollContainerRef}>
        <Table aria-label="Dynamic sticky footer table" isStickyFooterBase isStickyFooterStuck={isStuck}>
          <Thead>
            <Tr>
              <Th>Item</Th>
              <Th>Value</Th>
            </Tr>
          </Thead>
          <Tbody>
            {rows.map((row) => (
              <Tr key={row}>
                <Td dataLabel="Item">Item {row}</Td>
                <Td dataLabel="Value">Value {row}</Td>
              </Tr>
            ))}
          </Tbody>
          <Tfoot>
            <Tr>
              <Td colSpan={2}>Total: {rows.length} items</Td>
            </Tr>
          </Tfoot>
        </Table>
      </InnerScrollContainer>
    </div>
  );
};
