import React from 'react';
import { Pagination } from '@patternfly/react-core';
import { Table, Thead, Tr, Th, Tbody, Td } from '@patternfly/react-table';

export const TableAutomaticPagination: React.FunctionComponent = () => {
  const columns = {
    firstColumn: 'First column',
    secondColumn: 'Second column',
    thirdColumn: 'Third column'
  };

  const defaultRows = [
    { firstColumn: 'Row 1 column 1', secondColumn: 'Row 1 column 2', thirdColumn: 'Row 1 column 3' },
    { firstColumn: 'Row 2 column 1', secondColumn: 'Row 2 column 2', thirdColumn: 'Row 2 column 3' },
    { firstColumn: 'Row 3 column 1', secondColumn: 'Row 3 column 2', thirdColumn: 'Row 3 column 3' },
    { firstColumn: 'Row 4 column 1', secondColumn: 'Row 4 column 2', thirdColumn: 'Row 4 column 3' },
    { firstColumn: 'Row 5 column 1', secondColumn: 'Row 5 column 2', thirdColumn: 'Row 5 column 3' },
    { firstColumn: 'Row 6 column 1', secondColumn: 'Row 6 column 2', thirdColumn: 'Row 6 column 3' },
    { firstColumn: 'Row 7 column 1', secondColumn: 'Row 7 column 2', thirdColumn: 'Row 7 column 3' },
    { firstColumn: 'Row 8 column 1', secondColumn: 'Row 8 column 2', thirdColumn: 'Row 8 column 3' },
    { firstColumn: 'Row 9 column 1', secondColumn: 'Row 9 column 2', thirdColumn: 'Row 9 column 3' },
    { firstColumn: 'Row 10 column 1', secondColumn: 'Row 10 column 2', thirdColumn: 'Row 10 column 3' },
    { firstColumn: 'Row 11 column 1', secondColumn: 'Row 11 column 2', thirdColumn: 'Row 11 column 3' },
    { firstColumn: 'Row 12 column 1', secondColumn: 'Row 12 column 2', thirdColumn: 'Row 12 column 3' }
  ];
  const defaultPerPage = 10;

  const [perPage, setPerPage] = React.useState(defaultPerPage);
  const [page, setPage] = React.useState(1);
  const [rows, setRows] = React.useState(defaultRows.slice(0, defaultPerPage));

  const handleSetPage = (
    _evt: React.MouseEvent | React.KeyboardEvent | MouseEvent,
    newPage: number,
    _perPage: number,
    startIdx: number,
    endIdx: number
  ) => {
    setPage(newPage);
    setRows(defaultRows.slice(startIdx, endIdx));
  };

  const handlePerPageSelect = (
    _evt: React.MouseEvent | React.KeyboardEvent | MouseEvent,
    newPerPage: number,
    newPage: number,
    startIdx: number,
    endIdx: number
  ) => {
    setPerPage(newPerPage);
    setPage(newPage);
    setRows(defaultRows.slice(startIdx, endIdx));
  };

  const renderPagination = (variant = 'top') => (
    <Pagination
      isCompact
      itemCount={defaultRows.length}
      page={page}
      perPage={perPage}
      isLastFullPageShown
      onSetPage={handleSetPage}
      onPerPageSelect={handlePerPageSelect}
      perPageOptions={[
        { title: '3', value: 3 },
        { title: '5', value: 5 },
        { title: '12', value: 12 },
        { title: '20', value: 20 }
      ]}
      titles={{
        paginationAriaLabel: `${variant} pagination`
      }}
    />
  );

  return (
    <React.Fragment>
      {renderPagination()}
      <Table aria-label="Automated Pagination Table Demo">
        <Thead>
          <Tr>
            <Th>{columns.firstColumn}</Th>
            <Th>{columns.secondColumn}</Th>
            <Th>{columns.thirdColumn}</Th>
          </Tr>
        </Thead>
        <Tbody>
          {rows.map((row, rowIndex) => (
            <Tr key={rowIndex}>
              <>
                <Td dataLabel={columns.firstColumn}>{row.firstColumn}</Td>
                <Td dataLabel={columns.secondColumn}>{row.secondColumn}</Td>
                <Td dataLabel={columns.thirdColumn}>{row.thirdColumn}</Td>
              </>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </React.Fragment>
  );
};
