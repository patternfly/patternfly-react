import {
  useState,
  type FunctionComponent,
  type MouseEvent as ReactMouseEvent,
  type KeyboardEvent as ReactKeyboardEvent
} from 'react';
import { Pagination } from '@patternfly/react-core';

export const PaginationOffset: FunctionComponent = () => {
  const [offset, setOffset] = useState(7);
  const [perPage, setPerPage] = useState(20);

  const onSetPage = (
    _event: ReactMouseEvent | ReactKeyboardEvent | MouseEvent,
    newPage: number,
    _perPage: number | undefined,
    startIdx: number | undefined
  ) => {
    setOffset(startIdx || 0);
  };
  const onPerPageSelect = (_event: ReactMouseEvent | ReactKeyboardEvent | MouseEvent, newPerPage: number) => {
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
