import React from 'react';
import { TableComposable, Thead, Tr, Th, Tbody, Td, TableText } from '@patternfly/react-table';

// This example has been simplified to focus on the text modifier props.
// In real usage, you may want a type for your underlying data and a map of column names by key.
// See other examples.

const columnNames = ['Truncating text', 'Wrapping table header text. This th text will wrap instead of truncate.'];

export const ComposableTableText: React.FunctionComponent = () => (
  <TableComposable aria-label="Table text">
    <Thead>
      <Tr>
        <Th width={30}>{columnNames[0]}</Th>
        <Th>{columnNames[1]}</Th>
      </Tr>
    </Thead>
    <Tbody>
      <Tr>
        <Td dataLabel={columnNames[0]}>
          <TableText wrapModifier="truncate">This text will truncate instead of wrap.</TableText>
        </Td>
        <Td dataLabel={columnNames[1]}>
          <TableText wrapModifier="nowrap">
            <a href="#">This is a link that needs to be on one line and fully readable.</a>
          </TableText>
        </Td>
      </Tr>
    </Tbody>
  </TableComposable>
);
