import memoizeOne from 'memoize-one';
import { createElement, PureComponent } from 'react';
import { cancelTimeout, requestTimeout } from './timer';

import { TimeoutID } from './timer';

export type ScrollToAlign = 'auto' | 'smart' | 'center' | 'start' | 'end';

export interface RowProps {
  data: any;
  index: number;
  isScrolling?: boolean;
  style: React.CSSProperties;
  ansiUp: any;
}

export interface ListProps {
  estimatedItemSize?: number;
  children: React.FunctionComponent<RowProps>;
  [key: string]: any;
}

export interface ItemMetadata {
  offset: number;
  size: number;
}

export interface InstanceProps {
  itemMetadataMap: { [index: number]: ItemMetadata };
  estimatedItemSize: number;
  lastMeasuredIndex: number;
}

type ScrollDirection = 'forward' | 'backward';

type onItemsRenderedCallback = ({
  overscanStartIndex,
  overscanStopIndex,
  visibleStartIndex,
  visibleStopIndex
}: {
  overscanStartIndex: number;
  overscanStopIndex: number;
  visibleStartIndex: number;
  visibleStopIndex: number;
}) => void;

type ScrollEvent = React.SyntheticEvent<HTMLDivElement>;

export interface State {
  instance: any;
  isScrolling: boolean;
  scrollDirection: ScrollDirection;
  scrollOffset: number;
  scrollOffsetToBottom: number;
  scrollUpdateWasRequested: boolean;
}

type GetItemOffset = (props: ListProps, index: number, instanceProps?: any) => number;
type GetItemSize = (props: ListProps, index?: number, instanceProps?: any) => number;
type GetEstimatedTotalSize = (props: ListProps, instanceProps?: any) => number;
type GetOffsetForIndexAndAlignment = (
  props: ListProps,
  index: number,
  align: ScrollToAlign,
  scrollOffset: number,
  instanceProps?: any
) => number;
type GetStartIndexForOffset = (props: ListProps, offset: number, instanceProps?: any) => number;
type GetStopIndexForStartIndex = (
  props: ListProps,
  startIndex: number,
  scrollOffset: number,
  instanceProps?: InstanceProps
) => number;
type InitInstanceProps = (props?: ListProps, instance?: any) => any;
type ValidateProps = (props: ListProps) => void;

const IS_SCROLLING_DEBOUNCE_INTERVAL = 150;

const defaultItemKey = (index: number, _data: any) => index;

// In DEV mode, this Set helps us only log a warning once per component instance.
// This avoids spamming the console every time a render happens.
let devWarningsTagName: WeakSet<State> = null;
if (process.env.NODE_ENV !== 'production') {
  if (typeof window !== 'undefined' && typeof window.WeakSet !== 'undefined') {
    devWarningsTagName = new WeakSet();
  }
}

export default function createListComponent({
  getItemOffset,
  getEstimatedTotalSize,
  getItemSize,
  getOffsetForIndexAndAlignment,
  getStartIndexForOffset,
  getStopIndexForStartIndex,
  initInstanceProps,
  shouldResetStyleCacheOnItemSizeChange,
  validateProps
}: {
  getItemOffset: GetItemOffset;
  getEstimatedTotalSize: GetEstimatedTotalSize;
  getItemSize: GetItemSize;
  getOffsetForIndexAndAlignment: GetOffsetForIndexAndAlignment;
  getStartIndexForOffset: GetStartIndexForOffset;
  getStopIndexForStartIndex: GetStopIndexForStartIndex;
  initInstanceProps: InitInstanceProps;
  shouldResetStyleCacheOnItemSizeChange: boolean;
  validateProps: ValidateProps;
}) {
  return class List extends PureComponent<ListProps, State> {
    _instanceProps = initInstanceProps(this.props, this);
    _outerRef?: HTMLDivElement;
    _resetIsScrollingTimeoutId: TimeoutID | null = null;

    static defaultProps = {
      itemData: undefined as any,
      overscanCount: 2,
      useIsScrolling: false
    };

    state: State = {
      instance: this,
      isScrolling: false,
      scrollDirection: 'forward',
      scrollOffset: typeof this.props.initialScrollOffset === 'number' ? this.props.initialScrollOffset : 0,
      scrollOffsetToBottom: -1,
      scrollUpdateWasRequested: false
    };

    // Always use explicit constructor for React components.
    // It produces less code after transpilation. (#26)
    // eslint-disable-next-line no-useless-constructor
    constructor(props: ListProps) {
      super(props);
    }

    static getDerivedStateFromProps(nextProps: ListProps, prevState: State): State | null {
      validateSharedProps(nextProps, prevState);
      validateProps(nextProps);
      return null;
    }

    scrollTo(scrollOffset: number): void {
      scrollOffset = Math.max(0, scrollOffset);

      this.setState(prevState => {
        if (prevState.scrollOffset === scrollOffset) {
          return null;
        }
        return {
          scrollDirection: prevState.scrollOffset < scrollOffset ? 'forward' : 'backward',
          scrollOffset,
          scrollUpdateWasRequested: true
        };
      }, this._resetIsScrollingDebounced);
    }

    scrollToItem(index: number, align: ScrollToAlign = 'auto'): void {
      const { itemCount } = this.props;
      const { scrollOffset } = this.state;

      index = Math.max(0, Math.min(index, itemCount - 1));

      this.scrollTo(getOffsetForIndexAndAlignment(this.props, index, align, scrollOffset, this._instanceProps));
    }

    scrollToBottom(): void {
      const outerRef = this._outerRef as HTMLElement;
      const { scrollHeight, clientHeight } = outerRef;

      this.scrollTo(scrollHeight - clientHeight);
    }

    onTextSelectionStart(): void {
      if (this._outerRef) {
        this._outerRef.style.overflowY = 'hidden';
      }
    }

    onTextSelectionStop(): void {
      if (this._outerRef) {
        this._outerRef.style.overflowY = 'auto';
      }
    }

    componentDidMount() {
      const { initialScrollOffset } = this.props;

      if (typeof initialScrollOffset === 'number' && this._outerRef != null) {
        const outerRef = this._outerRef as HTMLElement;
        outerRef.scrollTop = initialScrollOffset;
      }
      const innerRef = this._outerRef.firstChild; // innerRef will be 'pf-c-log-viewer__list'
      ['mousedown', 'touchstart'].forEach(event => {
        innerRef.addEventListener(event, this.onTextSelectionStart.bind(this));
      });
      // set mouseup event listener on the whole document
      // because the cursor could be out side of the log window when the mouse is up
      // in that case the window would not be able to scroll up and down because overflow-Y is not set back to 'auto'
      ['mouseup', 'touchend'].forEach(event => {
        document.addEventListener(event, this.onTextSelectionStop.bind(this));
      });
      this._callPropsCallbacks();
    }

    componentDidUpdate() {
      const { scrollOffset, scrollUpdateWasRequested } = this.state;

      if (scrollUpdateWasRequested && this._outerRef != null) {
        const outerRef = this._outerRef as HTMLElement;
        outerRef.scrollTop = scrollOffset;
      }

      this._callPropsCallbacks();
    }

    componentWillUnmount() {
      if (this._resetIsScrollingTimeoutId !== null) {
        cancelTimeout(this._resetIsScrollingTimeoutId);
      }
      const innerRef = this._outerRef.firstChild; // innerRef will be 'pf-c-log-viewer__list'
      ['mousedown', 'touchstart'].forEach(event => {
        innerRef.removeEventListener(event, this.onTextSelectionStart.bind(this));
      });
      ['mouseup', 'touchend'].forEach(event => {
        document.removeEventListener(event, this.onTextSelectionStop.bind(this));
      });
    }

    render() {
      const {
        children,
        outerClassName,
        innerClassName,
        height,
        innerRef,
        innerElementType,
        innerTagName,
        itemCount,
        itemData,
        itemKey = defaultItemKey,
        outerElementType,
        outerTagName,
        style,
        useIsScrolling,
        width,
        isTextWrapped,
        hasLineNumbers,
        indexWidth,
        ansiUp
      } = this.props;
      const { isScrolling } = this.state;

      const onScroll = this._onScrollVertical;

      const [startIndex, stopIndex] = this._getRangeToRender();

      const items = [];
      if (itemCount > 0) {
        for (let index = startIndex; index <= stopIndex; index++) {
          items.push(
            createElement(children, {
              data: itemData,
              key: itemKey(index, itemData),
              index,
              isScrolling: useIsScrolling ? isScrolling : undefined,
              style: this._getItemStyle(index),
              ansiUp
            })
          );
        }
      }

      // Read this value AFTER items have been created,
      // So their actual sizes (if variable) are taken into consideration.
      const estimatedTotalSize = getEstimatedTotalSize(this.props, this._instanceProps);

      return createElement(
        outerElementType || outerTagName || 'div',
        {
          className: outerClassName,
          onScroll,
          ref: this._outerRefSetter,
          tabIndex: 0,
          style: {
            height,
            paddingTop: 0,
            paddingBottom: 0,
            WebkitOverflowScrolling: 'touch',
            overflowX: isTextWrapped ? 'hidden' : 'auto',
            ...style
          }
        },
        createElement(
          innerElementType || innerTagName || 'div',
          {
            className: innerClassName,
            ref: innerRef,
            style: {
              height: estimatedTotalSize > height ? estimatedTotalSize : height,
              /* eslint-disable-next-line no-nested-ternary */
              width: isTextWrapped ? (hasLineNumbers ? width - indexWidth : width) : 'auto',
              pointerEvents: isScrolling ? 'none' : undefined
            }
          },
          items
        )
      );
    }

    _callOnItemsRendered = memoizeOne(
      (overscanStartIndex: number, overscanStopIndex: number, visibleStartIndex: number, visibleStopIndex: number) =>
        (this.props.onItemsRendered as onItemsRenderedCallback)({
          overscanStartIndex,
          overscanStopIndex,
          visibleStartIndex,
          visibleStopIndex
        })
    );

    _callOnScroll = memoizeOne(
      (
        scrollDirection: ScrollDirection,
        scrollOffset: number,
        scrollOffsetToBottom: number,
        scrollUpdateWasRequested: boolean
      ) =>
        this.props.onScroll({
          scrollDirection,
          scrollOffset,
          scrollOffsetToBottom,
          scrollUpdateWasRequested
        })
    );

    _callPropsCallbacks() {
      if (typeof this.props.onItemsRendered === 'function') {
        const { itemCount } = this.props;
        if (itemCount > 0) {
          const [overscanStartIndex, overscanStopIndex, visibleStartIndex, visibleStopIndex] = this._getRangeToRender();
          this._callOnItemsRendered(overscanStartIndex, overscanStopIndex, visibleStartIndex, visibleStopIndex);
        }
      }

      if (typeof this.props.onScroll === 'function') {
        const { scrollDirection, scrollOffset, scrollOffsetToBottom, scrollUpdateWasRequested } = this.state;
        this._callOnScroll(scrollDirection, scrollOffset, scrollOffsetToBottom, scrollUpdateWasRequested);
      }
    }

    // Lazily create and cache item styles while scrolling,
    // So that pure component sCU will prevent re-renders.
    // We maintain this cache, and pass a style prop rather than index,
    // So that List can clear cached styles and force item re-render if necessary.
    _getItemStyle = (index: number): Object => {
      const { itemSize } = this.props;

      const itemStyleCache = this._getItemStyleCache(shouldResetStyleCacheOnItemSizeChange && itemSize);

      let style;
      if (itemStyleCache.hasOwnProperty(index)) {
        style = itemStyleCache[index];
      } else {
        const offset = getItemOffset(this.props, index, this._instanceProps);
        const size = getItemSize(this.props, index, this._instanceProps);

        itemStyleCache[index] = style = {
          position: 'absolute',
          top: offset,
          height: size
        };
      }

      return style;
    };

    _getItemStyleCache = memoizeOne(() => ({})) as (itemSize?: any) => { [key: number]: Object };

    _getRangeToRender(): [number, number, number, number] {
      const { itemCount, overscanCount } = this.props;
      const { isScrolling, scrollDirection, scrollOffset } = this.state;

      if (itemCount === 0) {
        return [0, 0, 0, 0];
      }

      const startIndex = getStartIndexForOffset(this.props, scrollOffset, this._instanceProps);
      const stopIndex = getStopIndexForStartIndex(this.props, startIndex, scrollOffset, this._instanceProps);

      // Overscan by one item in each direction so that tab/focus works.
      // If there isn't at least one extra item, tab loops back around.
      const overscanBackward = !isScrolling || scrollDirection === 'backward' ? Math.max(1, overscanCount) : 1;
      const overscanForward = !isScrolling || scrollDirection === 'forward' ? Math.max(1, overscanCount) : 1;

      return [
        Math.max(0, startIndex - overscanBackward),
        Math.max(0, Math.min(itemCount - 1, stopIndex + overscanForward)),
        startIndex,
        stopIndex
      ];
    }

    _onScrollVertical = (event: ScrollEvent): void => {
      const { clientHeight, scrollHeight, scrollTop } = event.currentTarget;
      this.setState(prevState => {
        if (prevState.scrollOffset === scrollTop) {
          // Scroll position may have been updated by cDM/cDU,
          // In which case we don't need to trigger another render,
          // And we don't want to update state.isScrolling.
          return null;
        }

        // Prevent Safari's elastic scrolling from causing visual shaking when scrolling past bounds.
        const scrollOffset = Math.max(0, Math.min(scrollTop, scrollHeight - clientHeight));

        const scrollOffsetToBottom = scrollHeight - scrollTop - clientHeight;

        return {
          isScrolling: true,
          scrollDirection: prevState.scrollOffset < scrollOffset ? 'forward' : 'backward',
          scrollOffset,
          scrollOffsetToBottom,
          scrollUpdateWasRequested: false
        };
      }, this._resetIsScrollingDebounced);
    };

    _outerRefSetter = (ref: any): void => {
      const { outerRef } = this.props;

      this._outerRef = ref;

      if (typeof outerRef === 'function') {
        outerRef(ref);
      } else if (outerRef != null && typeof outerRef === 'object' && outerRef.hasOwnProperty('current')) {
        outerRef.current = ref;
      }
    };

    _resetIsScrollingDebounced = () => {
      if (this._resetIsScrollingTimeoutId !== null) {
        cancelTimeout(this._resetIsScrollingTimeoutId);
      }

      this._resetIsScrollingTimeoutId = requestTimeout(this._resetIsScrolling, IS_SCROLLING_DEBOUNCE_INTERVAL);
    };

    _resetIsScrolling = () => {
      this._resetIsScrollingTimeoutId = null;

      this.setState({ isScrolling: false }, () => {
        // Clear style cache after state update has been committed.
        // This way we don't break pure sCU for items that don't use isScrolling param.
        this._getItemStyleCache(-1);
      });
    };
  };
}

// NOTE: I considered further wrapping individual items with a pure ListItem component.
// This would avoid ever calling the render function for the same index more than once,
// But it would also add the overhead of a lot of components/fibers.
// I assume people already do this (render function returning a class component),
// So my doing it would just unnecessarily double the wrappers.

const validateSharedProps = ({ children, innerTagName, outerTagName }: ListProps, { instance }: State): void => {
  if (process.env.NODE_ENV !== 'production') {
    if (innerTagName != null || outerTagName != null) {
      if (devWarningsTagName && !devWarningsTagName.has(instance)) {
        devWarningsTagName.add(instance);
        // eslint-disable-next-line no-console
        console.warn(
          'The innerTagName and outerTagName props have been deprecated. ' +
            'Please use the innerElementType and outerElementType props instead.'
        );
      }
    }

    if (children == null) {
      throw Error(
        'An invalid "children" prop has been specified. ' +
          'Value should be a React component. ' +
          `"${children === null ? 'null' : typeof children}" was specified.`
      );
    }
  }
};
