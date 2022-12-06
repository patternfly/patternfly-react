import React from 'react';
import { Pagination, PaginationVariant, Gallery, GalleryItem, Card, CardBody } from '@patternfly/react-core';

export const PaginationSticky: React.FunctionComponent = () => {
  const [page, setPage] = React.useState(1);
  const [perPage, setPerPage] = React.useState(100);
  const [isTopSticky, setIsTopSticky] = React.useState(true);
  const itemCount = 523;

  const onToggleSticky = () => {
    setIsTopSticky(prev => !prev);
  };

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

  const buildCards = () => {
    const numberOfCards = (page - 1) * perPage + perPage - 1 >= itemCount ? itemCount - (page - 1) * perPage : perPage;

    return Array.apply(0, Array(numberOfCards)).map((x, i) => (
      <GalleryItem key={i}>
        <Card>
          <CardBody>This is a card</CardBody>
        </Card>
      </GalleryItem>
    ));
  };

  return isTopSticky ? (
    <React.Fragment>
      <Pagination
        perPageComponent="button"
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
    </React.Fragment>
  ) : (
    <React.Fragment>
      <Gallery hasGutter>{buildCards()}</Gallery>
      <Pagination
        perPageComponent="button"
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
    </React.Fragment>
  );
};
