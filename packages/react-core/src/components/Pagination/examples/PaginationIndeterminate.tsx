import React from 'react';
import { Pagination } from '@patternfly/react-core';

export const PaginationIndeterminate: React.FunctionComponent = () => {
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
      toggleTemplate={({ firstIndex, lastIndex }) => (
        <React.Fragment>
          <b>
            {firstIndex} - {lastIndex}
          </b>
          of
          <b>many</b>
        </React.Fragment>
      )}
      widgetId="indeterminate-example"
      perPage={perPage}
      page={page}
      onSetPage={onSetPage}
      onPerPageSelect={onPerPageSelect}
    />
  );
};
