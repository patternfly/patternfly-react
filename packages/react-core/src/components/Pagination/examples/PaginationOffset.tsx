import React from 'react';
import { Pagination } from '@patternfly/react-core';

export const PaginationOffset: React.FunctionComponent = () => {
  const [offset, setOffset] = React.useState(7);
  const [perPage, setPerPage] = React.useState(20);

  const onSetPage = (
    _event: React.MouseEvent | React.KeyboardEvent | MouseEvent,
    newPage: number,
    _perPage: number | undefined,
    startIdx: number | undefined
  ) => {
    setOffset(startIdx || 0);
  };
  const onPerPageSelect = (_event: React.MouseEvent | React.KeyboardEvent | MouseEvent, newPerPage: number) => {
    setPerPage(newPerPage);
    setOffset(0);
  };

  return (
    <Pagination
      itemCount={523}
      perPage={perPage}
      offset={offset}
      onSetPage={onSetPage}
      widgetId="offset-pagination-example"
      onPerPageSelect={onPerPageSelect}
      ouiaId="PaginationOffset"
    />
  );
};
