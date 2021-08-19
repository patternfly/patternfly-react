import React, { cloneElement, Component } from 'react';
import { Direction, Layout } from './createListComponent';
import { HandleNewMeasurements } from './DynamicSizeList';
import ResizeObserver from 'resize-observer-polyfill';

interface ItemMeasurerProps {
  direction: Direction;
  layout: Layout;
  handleNewMeasurements: HandleNewMeasurements;
  index: number;
  item: React.ReactElement<React.ComponentProps<any>, any>;
  size: number;
}

let findDOMNodeWarningsSet = (null as any) as Set<any>;
if (process.env.NODE_ENV !== 'production') {
  findDOMNodeWarningsSet = new Set();
}

export default class ItemMeasurer extends Component<ItemMeasurerProps> {
  _didProvideValidRef: boolean = false;
  _node: HTMLElement | null = null;
  _resizeObserver: any = null;

  componentDidMount() {
    if (process.env.NODE_ENV !== 'production') {
      if (!this._didProvideValidRef) {
        const { item } = this.props;

        const displayName = item && item.type ? item.type.displayName || item.type.name || '(unknown)' : '(unknown)';

        if (!findDOMNodeWarningsSet.has(displayName)) {
          findDOMNodeWarningsSet.add(displayName);
        }
      }
    }

    // Force sync measure for the initial mount.
    // This is necessary to support the DynamicSizeList layout logic.
    this._measureItem(true, true);

    if (typeof ResizeObserver !== 'undefined') {
      // Watch for resizes due to changed content,
      // Or changes in the size of the parent container.
      this._resizeObserver = new ResizeObserver(this._onResize);
      if (this._node !== null) {
        this._resizeObserver.observe(this._node);
      }
    }
  }

  componentWillUnmount() {
    if (this._resizeObserver !== null) {
      this._resizeObserver.disconnect();
      this._resizeObserver = null;
    }
  }

  render() {
    return cloneElement(this.props.item, {
      ref: this._refSetter
    });
  }

  _measureItem = (isCommitPhase: boolean, isMount: boolean) => {
    const { direction, layout, handleNewMeasurements, index, size: oldSize } = this.props;

    const node = this._node;

    if (
      node &&
      node.ownerDocument &&
      node.ownerDocument.defaultView &&
      node instanceof node.ownerDocument.defaultView.HTMLElement
    ) {
      const newSize =
        direction === 'horizontal' || layout === 'horizontal'
          ? Math.ceil(node.offsetWidth)
          : Math.ceil(node.offsetHeight);

      if (oldSize !== newSize || isMount) {
        handleNewMeasurements(index, newSize, isCommitPhase);
      }
    }
  };

  _refSetter = (ref: any) => {
    if (this._resizeObserver !== null && this._node !== null) {
      this._resizeObserver.unobserve(this._node);
    }

    if (ref instanceof HTMLElement) {
      this._didProvideValidRef = true;
      this._node = ref;
    } else {
      this._node = null;
    }

    if (this._resizeObserver !== null && this._node !== null) {
      this._resizeObserver.observe(this._node);
    }
  };

  _onResize = () => {
    this._measureItem(false, false);
  };
}
