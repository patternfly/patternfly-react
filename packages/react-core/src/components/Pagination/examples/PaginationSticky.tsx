import { Fragment, useState } from 'react';
import { Pagination, PaginationVariant, Gallery, GalleryItem, Card, CardBody } from '@patternfly/react-core';

export const PaginationSticky: React.FunctionComponent = () => {
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(100);
  const [isTopSticky, setIsTopSticky] = useState(true);
  const itemCount = 523;

  const onToggleSticky = () => {
    setIsTopSticky((prev) => !prev);
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

    return Array.from({ length: numberOfCards }).map((_value, index) => (
      <GalleryItem key={index}>
        <Card>
          <CardBody>This is a card</CardBody>
        </Card>
      </GalleryItem>
    ));
  };

  return isTopSticky ? (
    <Fragment>
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
    </Fragment>
  ) : (
    <Fragment>
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
    </Fragment>
  );
};
