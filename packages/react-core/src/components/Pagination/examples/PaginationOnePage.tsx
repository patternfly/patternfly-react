import React from 'react';
import { Pagination } from '@patternfly/react-core';

export const PaginationOnePage: React.FunctionComponent = () => {
  const [page, setPage] = React.useState(1);
  const [perPage, setPerPage] = React.useState(20);

  const onSetPage = (_event: React.MouseEvent | React.KeyboardEvent | MouseEvent, newPage: number) => {
    setPage(newPage);
  };

  const onPerPageSelect = (
    _event: React.MouseEvent | React.KeyboardEvent | MouseEvent,
    newPerPage: number,
    newPage: number
  ) => {
    setPerPage(newPerPage);
    setPage(newPage);
  };

  return (
    <Pagination
      perPageComponent="button"
      itemCount={15}
      perPage={perPage}
      page={page}
      onSetPage={onSetPage}
      widgetId="one-page-example"
      onPerPageSelect={onPerPageSelect}
    />
  );
};
