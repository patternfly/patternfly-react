import React from 'react';
import { Pagination, PaginationVariant, Gallery, GalleryItem, Card, CardBody } from '@patternfly/react-core';

export const PaginationSticky: React.FunctionComponent = () => {
  const [page, setPage] = React.useState(1);
  const [perPage, setPerPage] = React.useState(20);
  const [isTopSticky, setIsTopSticky] = React.useState(true);

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

  return (
    <div>
      {isTopSticky && (
        <React.Fragment>
          <Pagination
            itemCount={523}
            perPage={perPage}
            page={page}
            onSetPage={onSetPage}
            widgetId="sticky-example"
            onPerPageSelect={onPerPageSelect}
            isSticky
          >
            <button onClick={onToggleSticky}>Toggle to bottom position</button>
          </Pagination>
          <Gallery hasGutter>
            {Array.apply(0, Array(40)).map((x, i) => (
              <GalleryItem key={i}>
                <Card>
                  <CardBody>This is a card</CardBody>
                </Card>
              </GalleryItem>
            ))}
          </Gallery>
        </React.Fragment>
      )}
      {!isTopSticky && (
        <React.Fragment>
          <Gallery hasGutter>
            {Array.apply(0, Array(40)).map((x, i) => (
              <GalleryItem key={i}>
                <Card>
                  <CardBody>This is a card</CardBody>
                </Card>
              </GalleryItem>
            ))}
          </Gallery>
          <Pagination
            itemCount={523}
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
      )}
    </div>
  );
};
