import React from 'react';
import { TableComposable, Thead, Tr, Th, Tbody, Td } from '@patternfly/react-table';

// This example has been simplified to focus on the text modifier props.
// In real usage, you may want a type for your underlying data and a map of column names by key.
// See other examples.

const columnNames = [
  'Truncate (width 20%)',
  'Break word',
  'Wrapping table header text. This th text will wrap instead of truncate.',
  'Fit content',
  'No wrap'
];

export const ComposableTableCellWidth: React.FunctionComponent = () => (
  <TableComposable aria-label="Simple table">
    <Thead>
      <Tr>
        <Th width={20}>{columnNames[0]}</Th>
        <Th>{columnNames[1]}</Th>
        <Th modifier="wrap">{columnNames[2]}</Th>
        <Th modifier="fitContent">{columnNames[3]}</Th>
        <Th>{columnNames[4]}</Th>
      </Tr>
    </Thead>
    <Tbody>
      <Tr>
        <Td dataLabel={columnNames[0]} modifier="truncate">
          This text will truncate instead of wrap.
        </Td>
        <Td dataLabel={columnNames[1]} modifier="breakWord">
          <a>http://thisisaverylongurlthatneedstobreakusethebreakwordmodifier.org</a>
        </Td>
        <Td dataLabel={columnNames[2]}>
          <p>
            By default,
            <code>thead</code> cells will truncate and
            <code>tbody</code> cells will wrap. Use
            <code>.pf-m-wrap</code> on a<code>th</code> to change its behavior.
          </p>
        </Td>
        <Td dataLabel={columnNames[3]}>
          This cell's content will adjust itself to the parent th width. This modifier only affects table layouts.
        </Td>
        <Td dataLabel={columnNames[4]} modifier="nowrap">
          <a href="#">No wrap</a>
        </Td>
      </Tr>
    </Tbody>
  </TableComposable>
);
