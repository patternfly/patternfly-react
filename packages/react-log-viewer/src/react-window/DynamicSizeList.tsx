import { createElement } from 'react';

import createListComponent, { defaultItemKey, State } from './createListComponent';
import ItemMeasurer from './ItemMeasurer';

import { Props, ScrollToAlign } from './createListComponent';

const DEFAULT_ESTIMATED_ITEM_SIZE = 50;

type DynamicProps = Props<any> & {
  estimatedItemSize: number;
};

export type HandleNewMeasurements = (index: number, newSize: number, isFirstMeasureAfterMounting: boolean) => void;

interface ItemMetadata {
  offset: number;
  size: number;
}
interface InstanceProps {
  estimatedItemSize: number;
  instance: any;
  itemOffsetMap: Record<number, number>;
  itemSizeMap: Record<number, number>;
  itemIsMeasured: Record<number, boolean>;
  lastPositionedIndex: number;
  totalMeasuredSize: number;
}

const getItemMetadata = (props: Props<any>, index: number, instanceProps: InstanceProps): ItemMetadata => {
  const { instance, itemOffsetMap, itemSizeMap, itemIsMeasured, lastPositionedIndex } = instanceProps;

  // If the specified item has not yet been measured,
  // Just return an estimated size for now.
  if (!itemIsMeasured[index]) {
    return {
      offset: itemOffsetMap[index],
      size: itemSizeMap[index]
    };
  }

  // Lazily update positions if they are stale.
  if (index > lastPositionedIndex) {
    if (lastPositionedIndex < 0) {
      itemOffsetMap[0] = 0;
    }

    for (let i = Math.max(1, lastPositionedIndex + 1); i <= index; i++) {
      const prevOffset = itemOffsetMap[i - 1];

      // In some browsers (e.g. Firefox) fast scrolling may skip rows.
      // In this case, our assumptions about last measured indices may be incorrect.
      // Handle this edge case to prevent NaN values from breaking styles.
      // Slow scrolling back over these skipped rows will adjust their sizes.
      const prevSize = itemSizeMap[i - 1] || 0;

      itemOffsetMap[i] = prevOffset + prevSize;

      // Reset cached style to clear stale position.
      delete instance._itemStyleCache[i];
    }

    instanceProps.lastPositionedIndex = index;
  }

  const offset = itemOffsetMap[index];
  const size = itemSizeMap[index];

  return { offset, size };
};

const findNearestItemBinarySearch = (
  props: Props<any>,
  instanceProps: InstanceProps,
  high: number,
  low: number,
  offset: number
): number => {
  while (low <= high) {
    const middle = low + Math.floor((high - low) / 2);
    const currentOffset = getItemMetadata(props, middle, instanceProps).offset;

    if (currentOffset === offset) {
      return middle;
    } else if (currentOffset < offset) {
      low = middle + 1;
    } else if (currentOffset > offset) {
      high = middle - 1;
    } else {
      return 0;
    }
  }

  if (low > 0) {
    return low - 1;
  } else {
    return 0;
  }
};

const getEstimatedTotalSize = (
  { itemCount }: Props<any>,
  { estimatedItemSize, itemIsMeasured, totalMeasuredSize }: InstanceProps
) => totalMeasuredSize + (itemCount - Object.keys(itemIsMeasured).length) * estimatedItemSize;

const getOffsetForIndexAndAlignment = (
  props: Props<any>,
  index: number,
  align: ScrollToAlign,
  scrollOffset: number,
  instanceProps: InstanceProps
): number => {
  const { direction, layout, height, width } = props;

  const size = ((direction === 'horizontal' || layout === 'horizontal' ? width : height) as any) as number;
  const itemMetadata = getItemMetadata(props, index, instanceProps);

  // Get estimated total size after ItemMetadata is computed,
  // To ensure it reflects actual measurements instead of just estimates.
  const estimatedTotalSize = getEstimatedTotalSize(props, instanceProps);

  // On certain situations estimatedTotalSize - size can be smaller than 0
  const maxOffset = Math.min(Math.max(0, estimatedTotalSize - size), itemMetadata.offset);

  // If the size of the item to render is bigger than the size of the list
  // minOffset result could be bigger than maxOffset,
  // this guarantees proper functioning
  const minOffset = Math.min(maxOffset, Math.max(0, itemMetadata.offset - size + itemMetadata.size));

  switch (align) {
    case 'start':
      return maxOffset;
    case 'end':
      return minOffset;
    case 'center':
      return Math.round(minOffset + (maxOffset - minOffset) / 2);
    case 'auto':
    default:
      if (scrollOffset >= minOffset && scrollOffset <= maxOffset) {
        return scrollOffset;
      } else if (scrollOffset - minOffset < maxOffset - scrollOffset) {
        return minOffset;
      } else {
        return maxOffset;
      }
  }
};

export const DynamicSizeList = createListComponent({
  getItemOffset: (props: Props<any>, index: number, instanceProps: InstanceProps): number =>
    getItemMetadata(props, index, instanceProps).offset,

  getItemSize: (_: Props<any>, __: number, ___: InstanceProps): number | null | undefined =>
    // Do not hard-code item dimensions.
    // We don't know them initially.
    // Even once we do, changes in item content or list size should reflow.
    undefined,
  getEstimatedTotalSize,

  getOffsetForIndexAndAlignment,

  getStartIndexForOffset: (props: Props<any>, offset: number, instanceProps: InstanceProps): number => {
    const { itemCount } = props;

    // Otherwise render a new batch of items starting from where we left off.
    return findNearestItemBinarySearch(props, instanceProps, itemCount - 1, 0, offset);
  },

  getStopIndexForStartIndex: (
    props: Props<any>,
    startIndex: number,
    scrollOffset: number,
    instanceProps: InstanceProps
  ): number => {
    const { direction, layout, height, itemCount, width } = props;

    const size = ((direction === 'horizontal' || layout === 'horizontal' ? width : height) as any) as number;
    const itemMetadata = getItemMetadata(props, startIndex, instanceProps);
    const maxOffset = scrollOffset + size;

    let offset = itemMetadata.offset + itemMetadata.size;
    let stopIndex = startIndex;

    while (stopIndex < itemCount - 1 && offset < maxOffset) {
      stopIndex++;
      offset += getItemMetadata(props, stopIndex, instanceProps).size;
    }

    return stopIndex;
  },

  initInstanceProps(props: Props<any>, instance: any): InstanceProps {
    const { itemCount } = (props as any) as DynamicProps;
    let { estimatedItemSize } = (props as any) as DynamicProps;
    const itemOffsetMap: any = {};
    const itemSizeMap: any = {};

    estimatedItemSize = estimatedItemSize || DEFAULT_ESTIMATED_ITEM_SIZE;

    for (let i = 0; i < itemCount; i++) {
      const offset = i === 0 ? 0 : itemOffsetMap[i - 1] + estimatedItemSize;

      itemOffsetMap[i] = offset;
      itemSizeMap[i] = estimatedItemSize;
    }

    const instanceProps: InstanceProps = {
      estimatedItemSize,
      instance,
      itemOffsetMap,
      itemSizeMap,
      itemIsMeasured: {},
      lastPositionedIndex: -1,
      totalMeasuredSize: 0
    };

    let debounceForceUpdateID: any = null;
    const debounceForceUpdate = () => {
      if (debounceForceUpdateID === null) {
        debounceForceUpdateID = setTimeout(() => {
          debounceForceUpdateID = null;
          instance.forceUpdate();
        }, 1);
      }
    };

    // This method is called before unmounting.
    instance._unmountHook = () => {
      if (debounceForceUpdateID !== null) {
        clearTimeout(debounceForceUpdateID);
        debounceForceUpdateID = null;
      }
    };

    let hasNewMeasurements: boolean = false;
    let sizeDeltaTotal = 0;

    // This method is called after mount and update.
    instance._commitHook = () => {
      if (hasNewMeasurements) {
        hasNewMeasurements = false;

        // Edge case where cell sizes changed, but cancelled each other out.
        // We still need to re-render in this case,
        // Even though we don't need to adjust scroll offset.
        if (sizeDeltaTotal === 0) {
          instance.forceUpdate();
          return;
        }

        let shouldForceUpdate: boolean;

        // In the setState commit hook, we'll decrement sizeDeltaTotal.
        // In case the state update is processed synchronously,
        // And triggers additional size updates itself,
        // We should only drecement by the amount we updated state for originally.
        const sizeDeltaForStateUpdate = sizeDeltaTotal;

        // If the user is scrolling up, we need to adjust the scroll offset,
        // To prevent items from "jumping" as items before them have been resized.
        instance.setState(
          (prevState: any) => {
            if (prevState.scrollDirection === 'backward' && !prevState.scrollUpdateWasRequested) {
              // TRICKY
              // If item(s) have changed size since they were last displayed, content will appear to jump.
              // To avoid this, we need to make small adjustments as a user scrolls to preserve apparent position.
              // This also ensures that the first item eventually aligns with scroll offset 0.
              return {
                scrollOffset: prevState.scrollOffset + sizeDeltaForStateUpdate
              };
            } else {
              // There's no state to update,
              // But we still want to re-render in this case.
              shouldForceUpdate = true;

              return null;
            }
          },
          () => {
            if (shouldForceUpdate) {
              instance.forceUpdate();
            } else {
              const { scrollOffset } = instance.state;
              const { direction, layout } = instance.props;

              // Adjusting scroll offset directly interrupts smooth scrolling for some browsers (e.g. Firefox).
              // The relative scrollBy() method doesn't interrupt (or at least it won't as of Firefox v65).
              // Other browsers (e.g. Chrome, Safari) seem to handle both adjustments equally well.
              // See https://bugzilla.mozilla.org/show_bug.cgi?id=1502059
              const element = (instance._outerRef as any) as HTMLDivElement;
              // $FlowFixMe Property scrollBy is missing in HTMLDivElement
              if (typeof element.scrollBy === 'function') {
                element.scrollBy(
                  direction === 'horizontal' || layout === 'horizontal' ? sizeDeltaForStateUpdate : 0,
                  direction === 'horizontal' || layout === 'horizontal' ? 0 : sizeDeltaForStateUpdate
                );
              } else if (direction === 'horizontal' || layout === 'horizontal') {
                element.scrollLeft = scrollOffset;
              } else {
                element.scrollTop = scrollOffset;
              }
            }

            sizeDeltaTotal -= sizeDeltaForStateUpdate;
          }
        );
      }
    };

    const handleNewMeasurements: HandleNewMeasurements = (
      index: number,
      newSize: number,
      isFirstMeasureAfterMounting: boolean
    ) => {
      const { itemSizeMap, itemIsMeasured, lastPositionedIndex } = instanceProps;

      // In some browsers (e.g. Firefox) fast scrolling may skip rows.
      // In this case, our assumptions about last measured indices may be incorrect.
      // Handle this edge case to prevent NaN values from breaking styles.
      // Slow scrolling back over these skipped rows will adjust their sizes.
      const oldSize = (itemSizeMap as any)[index] || 0;

      // Mark offsets after this as stale so that getItemMetadata() will lazily recalculate it.
      if (index < lastPositionedIndex) {
        instanceProps.lastPositionedIndex = index;
      }

      if (itemIsMeasured[index]) {
        if (oldSize === newSize) {
          return;
        }

        // Adjust total size estimate by the delta in size.
        instanceProps.totalMeasuredSize += newSize - oldSize;

        // Record the size delta here in case the user is scrolling up.
        // In that event, we need to adjust the scroll offset by thie amount,
        // To prevent items from "jumping" as items before them are resized.
        // We only do this for items that are newly measured (after mounting).
        // Ones that change size later do not need to affect scroll offset.
        if (isFirstMeasureAfterMounting) {
          sizeDeltaTotal += newSize - oldSize;
        }
      } else {
        instanceProps.itemIsMeasured[index] = true;
        instanceProps.totalMeasuredSize += newSize;
      }

      itemSizeMap[index] = newSize;

      // Even though the size has changed, we don't need to reset the cached style,
      // Because dynamic list items don't have constrained sizes.
      // This enables them to resize when their content (or container size) changes.
      // It also lets us avoid an unnecessary render in this case.

      if (isFirstMeasureAfterMounting) {
        hasNewMeasurements = true;
      } else {
        debounceForceUpdate();
      }
    };
    instance._handleNewMeasurements = handleNewMeasurements;

    instance.scrollTo = (scrollOffset: number, callback: any) => {
      scrollOffset = Math.max(0, scrollOffset);

      instance.setState(
        (prevState: Readonly<State>) => {
          if (prevState.scrollOffset === scrollOffset) {
            return null;
          }
          return {
            scrollDirection: prevState.scrollOffset < scrollOffset ? 'forward' : 'backward',
            scrollOffset,
            scrollUpdateWasRequested: true
          };
        },
        () => {
          instance._resetIsScrollingDebounced();
          if (callback) {
            callback(instance.state.scrollOffset);
          }
        }
      );
    };

    // Scrolling to an unmeasured area will create an offset at rendering due to
    // the new measurements, which can be solved by scrolling and measuring recursively.
    // Accurate estimated item sizes will reduce the number of iterations.
    instance.scrollToItem = (index: number, align: ScrollToAlign = 'auto') => {
      function adjustScrollWithNewMeasuments(newScroll: number) {
        const { itemCount } = instance.props;
        const { scrollOffset } = instance.state;

        index = Math.max(0, Math.min(index, itemCount - 1));

        const offsetForIndex = getOffsetForIndexAndAlignment(
          instance.props,
          index,
          align,
          scrollOffset,
          instance._instanceProps
        );

        // !isNaN check fixes the problem that may cause too many setState
        if (!isNaN(offsetForIndex) && offsetForIndex !== newScroll) {
          instance.scrollTo(offsetForIndex, adjustScrollWithNewMeasuments);
        }
      }

      adjustScrollWithNewMeasuments(-1);
    };

    // Override the item-rendering process to wrap items with ItemMeasurer.
    // This keep the external API simpler.
    instance._renderItems = () => {
      const {
        children,
        direction,
        layout,
        itemCount,
        itemData,
        itemKey = defaultItemKey,
        useIsScrolling
      } = instance.props;
      const { isScrolling } = instance.state;

      const [startIndex, stopIndex] = instance._getRangeToRender();

      const items = [];
      if (itemCount > 0) {
        for (let index = startIndex; index <= stopIndex; index++) {
          const { size } = getItemMetadata(instance.props, index, instanceProps);

          // It's important to read style after fetching item metadata.
          // getItemMetadata() will clear stale styles.
          const style = instance._getItemStyle(index);

          const item = createElement(children, {
            data: itemData,
            index,
            isScrolling: useIsScrolling ? isScrolling : undefined,
            style
          });

          // Always wrap children in a ItemMeasurer to detect changes in size.
          items.push(
            createElement(ItemMeasurer, {
              direction,
              layout,
              handleNewMeasurements,
              index,
              item,
              key: itemKey(index, itemData),
              size
            })
          );
        }
      }
      return items;
    };

    return instanceProps;
  },

  shouldResetStyleCacheOnItemSizeChange: false,

  validateProps: ({ itemSize }: Props<any>): void => {
    if (process.env.NODE_ENV !== 'production') {
      if (itemSize !== undefined) {
        throw Error('An unexpected "itemSize" prop has been provided.');
      }
    }
  }
});
