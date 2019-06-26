import * as React from 'react';
import { debounce } from '@patternfly/react-core';
import styles from '@patternfly/react-styles/css/components/Table/table';
import { css } from '@patternfly/react-styles';

// legacy export now, RowWrapperRow can simply be typed as IRow in the future
export interface RowWrapperRow {
  isOpen?: Boolean;
  isExpanded?: Boolean;
}

export interface RowWrapperProps {
  trRef?: React.Ref<any> | Function;
  className?: string;
  onScroll?: React.UIEventHandler;
  onResize?: React.UIEventHandler;
  row?: RowWrapperRow;
  rowProps?: Object;
}

export class RowWrapper extends React.Component<RowWrapperProps, {}> {
  static defaultProps = {
    className: '' as string,
    row: {
      isOpen: undefined as boolean,
      isExpanded: undefined as boolean
    } as RowWrapperRow,
    rowProps: null as any
  };
  _unmounted: boolean;

  constructor(props: RowWrapperProps) {
    super(props);

    if (props.onScroll) {
      this.handleScroll = debounce(this.handleScroll, 100);
    }
    if (props.onResize) {
      this.handleResize = debounce(this.handleResize, 100);
    }
  }

  componentDidMount() {
    this._unmounted = false;

    if (this.props.onScroll) {
      window.addEventListener('scroll', this.handleScroll as any);
    }
    if (this.props.onResize) {
      window.addEventListener('resize', this.handleResize as any);
    }
  }

  componentWillUnmount() {
    this._unmounted = true;

    if (this.props.onScroll) {
      window.removeEventListener('scroll', this.handleScroll as any);
    }
    if (this.props.onResize) {
      window.removeEventListener('resize', this.handleResize as any);
    }
  }

  handleScroll = (event: React.UIEvent<Element>): void => {
    if (!this._unmounted) {
      this.props.onScroll(event);
    }
  };

  handleResize = (event: React.UIEvent<Element>) => {
    if (!this._unmounted) {
      this.props.onResize(event);
    }
  };

  render() {
    const {
      trRef,
      className,
      onScroll,
      onResize,
      row: { isExpanded },
      rowProps,
      ...props
    } = this.props;

    return (
      <tr
        {...props}
        ref={trRef as React.Ref<any>}
        className={css(
          className,
          isExpanded !== undefined && styles.tableExpandableRow,
          isExpanded && styles.modifiers.expanded
        )}
        hidden={isExpanded !== undefined && !isExpanded}
      />
    );
  }
};
