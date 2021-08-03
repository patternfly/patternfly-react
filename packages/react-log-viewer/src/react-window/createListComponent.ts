import memoizeOne from 'memoize-one';
import { createElement, PureComponent } from 'react';
import { cancelTimeout, requestTimeout } from './timer';
import { getRTLOffsetType } from './domHelpers';

import { TimeoutID } from './timer';

export type ScrollToAlign = 'auto' | 'smart' | 'center' | 'start' | 'end';

export interface RowProps {
  data: any;
  index: number;
  isScrolling?: boolean;
  style: React.CSSProperties;
}
export interface VariableSizeProps {
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
type itemSize = number | ((index: number) => number);
// TODO Deprecate directions "horizontal" and "vertical"
type Direction = 'ltr' | 'rtl' | 'horizontal' | 'vertical';
type Layout = 'horizontal' | 'vertical';

interface RenderComponentProps<T> {
  data: T;
  index: number;
  isScrolling?: boolean;
  style: Object;
}
type RenderComponent<T> = React.ComponentType<RenderComponentProps<T>>;

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
type onScrollCallback = ({
  scrollDirection,
  scrollOffset,
  scrollUpdateWasRequested
}: {
  scrollDirection: ScrollDirection;
  scrollOffset: number;
  scrollUpdateWasRequested: boolean;
}) => void;

type ScrollEvent = React.SyntheticEvent<HTMLDivElement>;

interface OuterProps {
  children: React.ReactNode;
  className: string | void;
  onScroll: (ev: ScrollEvent) => void;
  style: {
    [key: string]: any;
  };
}

interface InnerProps {
  children: React.ReactNode;
  style: {
    [key: string]: any;
  };
}

export interface Props<T> {
  children: RenderComponent<T>;
  className?: string;
  direction: Direction;
  height: number;
  initialScrollOffset?: number;
  innerRef?: any;
  innerElementType?: string | React.Component<InnerProps, any>;
  innerTagName?: string; // deprecated
  itemCount: number;
  itemData: T;
  itemKey?: (index: number, data: T) => any;
  itemSize: itemSize;
  layout: Layout;
  onItemsRendered?: onItemsRenderedCallback;
  onScroll?: onScrollCallback;
  outerRef?: any;
  outerElementType?: string | React.Component<OuterProps, any>;
  outerTagName?: string; // deprecated
  overscanCount: number;
  style?: Object;
  useIsScrolling: boolean;
  width: number;
}

export interface State {
  instance: any;
  isScrolling: boolean;
  scrollDirection: ScrollDirection;
  scrollOffset: number;
  scrollUpdateWasRequested: boolean;
}

type GetItemOffset = (props: VariableSizeProps, index: number, instanceProps: any) => number;
type GetItemSize = (props: VariableSizeProps, index: number, instanceProps: any) => number;
type GetEstimatedTotalSize = (props: VariableSizeProps, instanceProps: any) => number;
type GetOffsetForIndexAndAlignment = (
  props: VariableSizeProps,
  index: number,
  align: ScrollToAlign,
  scrollOffset: number,
  instanceProps: any
) => number;
type GetStartIndexForOffset = (props: VariableSizeProps, offset: number, instanceProps: any) => number;
type GetStopIndexForStartIndex = (
  props: VariableSizeProps,
  startIndex: number,
  scrollOffset: number,
  instanceProps: InstanceProps
) => number;
type InitInstanceProps = (props: VariableSizeProps, instance: any) => any;
type ValidateProps = (props: Props<any>) => void;

const IS_SCROLLING_DEBOUNCE_INTERVAL = 150;

const defaultItemKey = (index: number, _data: any) => index;

// In DEV mode, this Set helps us only log a warning once per component instance.
// This avoids spamming the console every time a render happens.
let devWarningsDirection: WeakSet<State> = null;
let devWarningsTagName: WeakSet<State> = null;
if (process.env.NODE_ENV !== 'production') {
  if (typeof window !== 'undefined' && typeof window.WeakSet !== 'undefined') {
    devWarningsDirection = new WeakSet();
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
  return class List<T> extends PureComponent<VariableSizeProps, State> {
    _instanceProps = initInstanceProps(this.props, this);
    _outerRef?: HTMLDivElement;
    _resetIsScrollingTimeoutId: TimeoutID | null = null;

    static defaultProps = {
      direction: 'ltr',
      itemData: undefined as any,
      layout: 'vertical',
      overscanCount: 2,
      useIsScrolling: false
    };

    state: State = {
      instance: this,
      isScrolling: false,
      scrollDirection: 'forward',
      scrollOffset: typeof this.props.initialScrollOffset === 'number' ? this.props.initialScrollOffset : 0,
      scrollUpdateWasRequested: false
    };

    // Always use explicit constructor for React components.
    // It produces less code after transpilation. (#26)
    // eslint-disable-next-line no-useless-constructor
    constructor(props: VariableSizeProps) {
      super(props);
    }

    getDerivedStateFromProps(nextProps: Props<T>, prevState: State): State | null {
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

    componentDidMount() {
      const { direction, initialScrollOffset, layout } = this.props;

      if (typeof initialScrollOffset === 'number' && this._outerRef != null) {
        const outerRef = this._outerRef as HTMLElement;
        // TODO Deprecate direction "horizontal"
        if (direction === 'horizontal' || layout === 'horizontal') {
          outerRef.scrollLeft = initialScrollOffset;
        } else {
          outerRef.scrollTop = initialScrollOffset;
        }
      }

      this._callPropsCallbacks();
    }

    componentDidUpdate() {
      const { direction, layout } = this.props;
      const { scrollOffset, scrollUpdateWasRequested } = this.state;

      if (scrollUpdateWasRequested && this._outerRef != null) {
        const outerRef = this._outerRef as HTMLElement;

        // TODO Deprecate direction "horizontal"
        if (direction === 'horizontal' || layout === 'horizontal') {
          if (direction === 'rtl') {
            // TRICKY According to the spec, scrollLeft should be negative for RTL aligned elements.
            // This is not the case for all browsers though (e.g. Chrome reports values as positive, measured relative to the left).
            // So we need to determine which browser behavior we're dealing with, and mimic it.
            const { clientWidth, scrollWidth } = outerRef;
            switch (getRTLOffsetType()) {
              case 'negative':
                outerRef.scrollLeft = -scrollOffset;
                break;
              case 'positive-ascending':
                outerRef.scrollLeft = scrollOffset;
                break;
              default:
                outerRef.scrollLeft = scrollWidth - clientWidth - scrollOffset;
                break;
            }
          } else {
            outerRef.scrollLeft = scrollOffset;
          }
        } else {
          outerRef.scrollTop = scrollOffset;
        }
      }

      this._callPropsCallbacks();
    }

    componentWillUnmount() {
      if (this._resetIsScrollingTimeoutId !== null) {
        cancelTimeout(this._resetIsScrollingTimeoutId);
      }
    }

    render() {
      const {
        children,
        className,
        direction,
        height,
        innerRef,
        innerElementType,
        innerTagName,
        itemCount,
        itemData,
        itemKey = defaultItemKey,
        layout,
        outerElementType,
        outerTagName,
        style,
        useIsScrolling,
        width
      } = this.props;
      const { isScrolling } = this.state;

      // TODO Deprecate direction "horizontal"
      const isHorizontal = direction === 'horizontal' || layout === 'horizontal';

      const onScroll = isHorizontal ? this._onScrollHorizontal : this._onScrollVertical;

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
              style: this._getItemStyle(index)
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
          className,
          onScroll,
          ref: this._outerRefSetter,
          tabIndex: 0,
          style: {
            position: 'relative',
            height,
            width,
            overflow: 'auto',
            WebkitOverflowScrolling: 'touch',
            willChange: 'transform',
            direction,
            ...style
          }
        },
        createElement(innerElementType || innerTagName || 'div', {
          children: items,
          ref: innerRef,
          style: {
            height: isHorizontal ? '100%' : estimatedTotalSize,
            pointerEvents: isScrolling ? 'none' : undefined,
            width: isHorizontal ? estimatedTotalSize : '100%'
          }
        })
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
      (scrollDirection: ScrollDirection, scrollOffset: number, scrollUpdateWasRequested: boolean) =>
        this.props.onScroll({
          scrollDirection,
          scrollOffset,
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
        const { scrollDirection, scrollOffset, scrollUpdateWasRequested } = this.state;
        this._callOnScroll(scrollDirection, scrollOffset, scrollUpdateWasRequested);
      }
    }

    // Lazily create and cache item styles while scrolling,
    // So that pure component sCU will prevent re-renders.
    // We maintain this cache, and pass a style prop rather than index,
    // So that List can clear cached styles and force item re-render if necessary.
    _getItemStyle = (index: number): Object => {
      const { direction, itemSize, layout } = this.props;

      const itemStyleCache = this._getItemStyleCache(
        shouldResetStyleCacheOnItemSizeChange && itemSize,
        shouldResetStyleCacheOnItemSizeChange && layout,
        shouldResetStyleCacheOnItemSizeChange && direction
      );

      let style;
      if (itemStyleCache.hasOwnProperty(index)) {
        style = itemStyleCache[index];
      } else {
        const offset = getItemOffset(this.props, index, this._instanceProps);
        const size = getItemSize(this.props, index, this._instanceProps);

        // TODO Deprecate direction "horizontal"
        const isHorizontal = direction === 'horizontal' || layout === 'horizontal';

        const isRtl = direction === 'rtl';
        const offsetHorizontal = isHorizontal ? offset : 0;
        itemStyleCache[index] = style = {
          position: 'absolute',
          left: isRtl ? undefined : offsetHorizontal,
          right: isRtl ? offsetHorizontal : undefined,
          top: !isHorizontal ? offset : 0,
          height: !isHorizontal ? size : '100%',
          width: isHorizontal ? size : '100%'
        };
      }

      return style;
    };

    _getItemStyleCache = memoizeOne(() => ({})) as (
      itemSize?: any,
      layout?: any,
      direction?: any
    ) => { [key: number]: Object };

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

    _onScrollHorizontal = (event: ScrollEvent): void => {
      const { clientWidth, scrollLeft, scrollWidth } = event.currentTarget;
      this.setState(prevState => {
        if (prevState.scrollOffset === scrollLeft) {
          // Scroll position may have been updated by cDM/cDU,
          // In which case we don't need to trigger another render,
          // And we don't want to update state.isScrolling.
          return null;
        }

        const { direction } = this.props;

        let scrollOffset = scrollLeft;
        if (direction === 'rtl') {
          // TRICKY According to the spec, scrollLeft should be negative for RTL aligned elements.
          // This is not the case for all browsers though (e.g. Chrome reports values as positive, measured relative to the left).
          // It's also easier for this component if we convert offsets to the same format as they would be in for ltr.
          // So the simplest solution is to determine which browser behavior we're dealing with, and convert based on it.
          switch (getRTLOffsetType()) {
            case 'negative':
              scrollOffset = -scrollLeft;
              break;
            case 'positive-descending':
              scrollOffset = scrollWidth - clientWidth - scrollLeft;
              break;
          }
        }

        // Prevent Safari's elastic scrolling from causing visual shaking when scrolling past bounds.
        scrollOffset = Math.max(0, Math.min(scrollOffset, scrollWidth - clientWidth));

        return {
          isScrolling: true,
          scrollDirection: prevState.scrollOffset < scrollLeft ? 'forward' : 'backward',
          scrollOffset,
          scrollUpdateWasRequested: false
        };
      }, this._resetIsScrollingDebounced);
    };

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

        return {
          isScrolling: true,
          scrollDirection: prevState.scrollOffset < scrollOffset ? 'forward' : 'backward',
          scrollOffset,
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
        this._getItemStyleCache(-1, null);
      });
    };
  };
}

// NOTE: I considered further wrapping individual items with a pure ListItem component.
// This would avoid ever calling the render function for the same index more than once,
// But it would also add the overhead of a lot of components/fibers.
// I assume people already do this (render function returning a class component),
// So my doing it would just unnecessarily double the wrappers.

const validateSharedProps = (
  { children, direction, height, layout, innerTagName, outerTagName, width }: Props<any>,
  { instance }: State
): void => {
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

    // TODO Deprecate direction "horizontal"
    const isHorizontal = direction === 'horizontal' || layout === 'horizontal';

    switch (direction) {
      case 'horizontal':
      case 'vertical':
        if (devWarningsDirection && !devWarningsDirection.has(instance)) {
          devWarningsDirection.add(instance);
          // eslint-disable-next-line no-console
          console.warn(
            'The direction prop should be either "ltr" (default) or "rtl". ' +
              'Please use the layout prop to specify "vertical" (default) or "horizontal" orientation.'
          );
        }
        break;
      case 'ltr':
      case 'rtl':
        // Valid values
        break;
      default:
        throw Error(
          'An invalid "direction" prop has been specified. ' +
            'Value should be either "ltr" or "rtl". ' +
            `"${direction}" was specified.`
        );
    }

    switch (layout) {
      case 'horizontal':
      case 'vertical':
        // Valid values
        break;
      default:
        throw Error(
          'An invalid "layout" prop has been specified. ' +
            'Value should be either "horizontal" or "vertical". ' +
            `"${layout}" was specified.`
        );
    }

    if (children == null) {
      throw Error(
        'An invalid "children" prop has been specified. ' +
          'Value should be a React component. ' +
          `"${children === null ? 'null' : typeof children}" was specified.`
      );
    }

    if (isHorizontal && typeof width !== 'number') {
      throw Error(
        'An invalid "width" prop has been specified. ' +
          'Horizontal lists must specify a number for width. ' +
          `"${width === null ? 'null' : typeof width}" was specified.`
      );
    } else if (!isHorizontal && typeof height !== 'number') {
      throw Error(
        'An invalid "height" prop has been specified. ' +
          'Vertical lists must specify a number for height. ' +
          `"${height === null ? 'null' : typeof height}" was specified.`
      );
    }
  }
};
