import React from 'react';
import { Table, TableHeader, TableBody, cellWidth, TableText, TableProps } from '@patternfly/react-table';

// This example has been simplified to focus on the text modifier props. In real usage,
// you may want to derive your rows from typed underlying data and minimal state. See other examples.

export const LegacyTableTextModifiers: React.FunctionComponent = () => {
  const columns: TableProps['cells'] = [
    { title: 'Truncating text', transforms: [cellWidth(30)] },
    { title: 'Wrapping table header text. This th text will wrap instead of truncate.' }
  ];
  const rows: TableProps['rows'] = [
    [
      { title: <TableText wrapModifier="truncate">This text will truncate instead of wrap.</TableText> },
      {
        title: (
          <TableText wrapModifier="nowrap">
            <a href="#">This is a link that needs to be on one line and fully readable.</a>
          </TableText>
        )
      }
    ]
  ];

  return (
    <Table aria-label="Table text with modifiers" cells={columns} rows={rows}>
      <TableHeader />
      <TableBody />
    </Table>
  );
};
