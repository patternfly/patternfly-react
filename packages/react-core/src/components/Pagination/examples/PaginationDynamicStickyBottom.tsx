import { useState, useRef } from 'react';
import {
  Pagination,
  PaginationVariant,
  Gallery,
  GalleryItem,
  Card,
  CardBody,
  useIsStuckFromScrollParent
} from '@patternfly/react-core';

export const PaginationDynamicStickyBottom: React.FunctionComponent = () => {
  const scrollParentRef = useRef<HTMLDivElement>(null);
  const isStickyStuck = useIsStuckFromScrollParent({ shouldTrack: true, scrollParentRef, position: 'bottom' });
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(50);
  const itemCount = 523;

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
          <CardBody>This is card {(page - 1) * perPage + index + 1}</CardBody>
        </Card>
      </GalleryItem>
    ));
  };

  return (
    <div ref={scrollParentRef} style={{ overflowY: 'scroll', height: '400px' }}>
      <Gallery hasGutter>{buildCards()}</Gallery>
      <Pagination
        itemCount={itemCount}
        perPage={perPage}
        page={page}
        onSetPage={onSetPage}
        widgetId="dynamic-sticky-bottom-example"
        onPerPageSelect={onPerPageSelect}
        variant={PaginationVariant.bottom}
        isStickyBase
        isStickyStuck={isStickyStuck}
      />
    </div>
  );
};
