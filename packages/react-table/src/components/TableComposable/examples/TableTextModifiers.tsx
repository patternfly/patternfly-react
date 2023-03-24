import React from 'react';
import { TableComposable, Thead, Tr, Th, Tbody, Td, TableText } from '@patternfly/react-table';

// This example has been simplified to focus on the text modifier props. In real usage,
// you may want to derive your rows from typed underlying data and minimal state. See other examples.

const columnNames = {
  truncate: 'Truncating text',
  wrap: 'Wrapping table header text. This th text will wrap instead of truncate.'
};

export const TableTextModifiers: React.FunctionComponent = () => (
  <TableComposable aria-label="Table text">
    <Thead>
      <Tr>
        <Th width={30}>{columnNames.truncate}</Th>
        <Th>{columnNames.wrap}</Th>
      </Tr>
    </Thead>
    <Tbody>
      <Tr>
        <Td dataLabel={columnNames.truncate}>
          <TableText wrapModifier="truncate">This text will truncate instead of wrap.</TableText>
        </Td>
        <Td dataLabel={columnNames.wrap}>
          <TableText wrapModifier="nowrap">
            <a href="#">This is a link that needs to be on one line and fully readable.</a>
          </TableText>
        </Td>
      </Tr>
    </Tbody>
  </TableComposable>
);
