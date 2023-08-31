import React from 'react';
import { cellWidth, truncate, breakWord, wrappable, fitContent, nowrap } from '@patternfly/react-table';
import { Table, TableHeader, TableBody, TableProps } from '@patternfly/react-table/deprecated';

// This example has been simplified to focus on the text modifier props. In real usage,
// you may want to derive your rows from typed underlying data and minimal state. See other examples.

export const LegacyTableControllingText: React.FunctionComponent = () => {
  const columns: TableProps['cells'] = [
    { title: 'Truncate (width 20%)', transforms: [cellWidth(20)], cellTransforms: [truncate] },
    { title: 'Break word', cellTransforms: [breakWord] },
    { title: 'Wrapping table header text. This th text will wrap instead of truncate.', transforms: [wrappable] },
    { title: 'Fit content', transforms: [fitContent] },
    { title: '', cellTransforms: [nowrap] }
  ];
  const rows: TableProps['rows'] = [
    [
      'This text will truncate instead of wrap.',
      { title: <a href="#">http://thisisaverylongurlthatneedstobreakusethebreakwordmodifier.org</a> },
      {
        title: (
          <p>
            By default,
            <code>thead</code> cells will truncate and
            <code>tbody</code> cells will wrap. Use
            <code>transforms</code> and/or <code>cellTransforms</code> to change the behavior.
          </p>
        )
      },
      "This cell's content will adjust itself to the parent th width. This modifier only affects table layouts.",
      { title: <a href="#">No wrap</a> }
    ]
  ];

  return (
    <Table aria-label="Controlling text" cells={columns} rows={rows}>
      <TableHeader />
      <TableBody />
    </Table>
  );
};
