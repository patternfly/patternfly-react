import { useLayoutEffect, useState, useRef } from 'react';
import { Pagination, PaginationVariant, Gallery, GalleryItem, Card, CardBody } from '@patternfly/react-core';

const useIsStuckFromScrollParent = ({
  shouldTrack,
  scrollParentRef
}: {
  /** Indicates whether to track the scroll top position of the scroll parent element */
  shouldTrack: boolean;
  /** Reference to the scroll parent element */
  scrollParentRef: React.RefObject<any>;
}): boolean => {
  const [isStuck, setIsStuck] = useState(false);

  useLayoutEffect(() => {
    if (!shouldTrack) {
      setIsStuck(false);
      return;
    }

    const scrollElement = scrollParentRef.current;
    if (!scrollElement) {
      setIsStuck(false);
      return;
    }

    const syncFromScroll = () => {
      setIsStuck(scrollElement.scrollTop + scrollElement.clientHeight < scrollElement.scrollHeight);
    };
    syncFromScroll();
    scrollElement.addEventListener('scroll', syncFromScroll, { passive: true });
    return () => scrollElement.removeEventListener('scroll', syncFromScroll);
  }, [shouldTrack, scrollParentRef]);

  return isStuck;
};

export const PaginationDynamicStickyBottom: React.FunctionComponent = () => {
  const scrollParentRef = useRef<HTMLDivElement>(null);
  const isStickyStuck = useIsStuckFromScrollParent({ shouldTrack: true, scrollParentRef });
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
