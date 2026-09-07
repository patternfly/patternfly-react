import { Table, Thead, Tfoot, Tr, Th, Tbody, Td, InnerScrollContainer } from '@patternfly/react-table';

export const TableStickyFooter: React.FunctionComponent = () => {
  const rows = Array.from({ length: 12 }, (_, index) => index + 1);

  return (
    <div style={{ height: '400px' }}>
      <InnerScrollContainer>
        <Table aria-label="Sticky footer table" gridBreakPoint="" isStickyFooter>
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
