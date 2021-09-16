import React from 'react';
import { TableComposable, Thead, Tr, Th, Tbody, Td } from '@patternfly/react-table';

interface ExampleItem {
  one: string;
  two: React.ReactNode;
  three: React.ReactNode;
  four: string;
  five: React.ReactNode;
}

const columnNames: Record<keyof ExampleItem, string> = {
  one: 'Truncate (width 20%)',
  two: 'Break word',
  three: 'Wrapping table header text. This th text will wrap instead of truncate.',
  four: 'Fit content',
  five: 'No wrap'
};

export const ComposableTableCellWidth: React.FunctionComponent = () => {
  // In real usage, this data would come from some external source like an API via props.
  const exampleItems: ExampleItem[] = [
    {
      one: 'This text will truncate instead of wrap.',
      two: <a>http://thisisaverylongurlthatneedstobreakusethebreakwordmodifier.org</a>,
      three: (
        <p>
          By default,
          <code>thead</code> cells will truncate and
          <code>tbody</code> cells will wrap. Use
          <code>.pf-m-wrap</code> on a<code>th</code> to change its behavior.
        </p>
      ),
      four: "This cell's content will adjust itself to the parent th width. This modifier only affects table layouts.",
      five: <a href="#">No wrap</a>
    }
  ];

  return (
    <TableComposable aria-label="Simple table">
      <Thead>
        <Tr>
          <Th width={20}>{columnNames.one}</Th>
          <Th>{columnNames.two}</Th>
          <Th modifier="wrap">{columnNames.three}</Th>
          <Th modifier="fitContent">{columnNames.four}</Th>
          <Th>{columnNames.five}</Th>
        </Tr>
      </Thead>
      <Tbody>
        {exampleItems.map(item => (
          <Tr key={item.one}>
            <Td dataLabel={columnNames.one} modifier="truncate">
              {item.one}
            </Td>
            <Td dataLabel={columnNames.two} modifier="breakWord">
              {item.two}
            </Td>
            <Td dataLabel={columnNames.three}>{item.three}</Td>
            <Td dataLabel={columnNames.four}>{item.four}</Td>
            <Td dataLabel={columnNames.five} modifier="nowrap">
              {item.five}
            </Td>
          </Tr>
        ))}
      </Tbody>
    </TableComposable>
  );
};
