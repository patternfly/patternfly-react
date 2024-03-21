import {
  useState,
  type FunctionComponent,
  type MouseEvent as ReactMouseEvent,
  type KeyboardEvent as ReactKeyboardEvent
} from 'react';
import { Pagination, PaginationVariant, Gallery, GalleryItem, Card, CardBody } from '@patternfly/react-core';

export const PaginationSticky: FunctionComponent = () => {
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(100);
  const [isTopSticky, setIsTopSticky] = useState(true);
  const itemCount = 523;

  const onToggleSticky = () => {
    setIsTopSticky((prev) => !prev);
  };

  const onSetPage = (_event: ReactMouseEvent | ReactKeyboardEvent | MouseEvent, newPage: number) => {
    setPage(newPage);
  };

  const onPerPageSelect = (
    _event: ReactMouseEvent | ReactKeyboardEvent | MouseEvent,
    newPerPage: number,
    newPage: number
  ) => {
    setPerPage(newPerPage);
    setPage(newPage);
  };

  const buildCards = () => {
    const numberOfCards = (page - 1) * perPage + perPage - 1 >= itemCount ? itemCount - (page - 1) * perPage : perPage;

    return Array.from({ length: numberOfCards }).map((_value, index) => (
      <GalleryItem key={index}>
        <Card>
          <CardBody>This is a card</CardBody>
        </Card>
      </GalleryItem>
    ));
  };

  return isTopSticky ? (
    <>
      <Pagination
        itemCount={itemCount}
        perPage={perPage}
        page={page}
        onSetPage={onSetPage}
        widgetId="pagination-options-menu-top"
        onPerPageSelect={onPerPageSelect}
        isSticky
      >
        <button onClick={onToggleSticky}>Toggle to bottom position</button>
      </Pagination>
      <Gallery hasGutter>{buildCards()}</Gallery>
    </>
  ) : (
    <>
      <Gallery hasGutter>{buildCards()}</Gallery>
      <Pagination
        itemCount={itemCount}
        perPage={perPage}
        page={page}
        onSetPage={onSetPage}
        widgetId="pagination-options-menu-top"
        onPerPageSelect={onPerPageSelect}
        isSticky
        variant={PaginationVariant.bottom}
      >
        <button onClick={onToggleSticky}>Toggle to top position</button>
      </Pagination>
    </>
  );
};
