import React from 'react';
import { TableComposable, Thead, Tr, Th, Tbody, Td } from '@patternfly/react-table';

// This example has been simplified to focus on the text modifier props. In real usage,
// you may want to derive your rows from typed underlying data and minimal state. See other examples.

const columnNames = {
  truncate: 'Truncate (width 20%)',
  break: 'Break word',
  wrap: 'Wrapping table header text. This th text will wrap instead of truncate.',
  fit: 'Fit content',
  nowrap: 'No wrap'
};

export const ComposableTableControllingText: React.FunctionComponent = () => (
  <TableComposable aria-label="Controlling text">
    <Thead>
      <Tr>
        <Th width={20}>{columnNames.truncate}</Th>
        <Th>{columnNames.break}</Th>
        <Th modifier="wrap">{columnNames.wrap}</Th>
        <Th modifier="fitContent">{columnNames.fit}</Th>
        <Th>{columnNames.nowrap}</Th>
      </Tr>
    </Thead>
    <Tbody>
      <Tr>
        <Td dataLabel={columnNames.truncate} modifier="truncate">
          This text will truncate instead of wrap.
        </Td>
        <Td dataLabel={columnNames.break} modifier="breakWord">
          <a>http://thisisaverylongurlthatneedstobreakusethebreakwordmodifier.org</a>
        </Td>
        <Td dataLabel={columnNames.wrap}>
          <p>
            By default,
            <code>thead</code> cells will truncate and
            <code>tbody</code> cells will wrap. Use
            <code>.pf-m-wrap</code> on a<code>th</code> to change its behavior.
          </p>
        </Td>
        <Td dataLabel={columnNames.fit}>
          This cell's content will adjust itself to the parent th width. This modifier only affects table layouts.
        </Td>
        <Td dataLabel={columnNames.nowrap} modifier="nowrap">
          <a href="#">No wrap</a>
        </Td>
      </Tr>
    </Tbody>
  </TableComposable>
);
