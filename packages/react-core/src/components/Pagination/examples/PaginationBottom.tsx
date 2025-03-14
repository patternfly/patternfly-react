import { useState } from 'react';
import { Pagination, PaginationVariant } from '@patternfly/react-core';

export const PaginationBottom: React.FunctionComponent = () => {
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(10);

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
      itemCount={333}
      widgetId="bottom-example"
      perPage={perPage}
      page={page}
      variant={PaginationVariant.bottom}
      onSetPage={onSetPage}
      onPerPageSelect={onPerPageSelect}
    />
  );
};
