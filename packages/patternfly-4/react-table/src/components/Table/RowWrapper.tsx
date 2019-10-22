import * as React from 'react';
import { InjectedOuiaProps, withOuiaContext, debounce } from '@patternfly/react-core';
import styles from '@patternfly/react-styles/css/components/Table/table';
import { css } from '@patternfly/react-styles';

// legacy export now, RowWrapperRow can simply be typed as IRow in the future
export interface RowWrapperRow {
  isOpen?: boolean;
  isExpanded?: boolean;
  isHeightAuto?: boolean;
}

export interface RowWrapperProps {
  trRef?: React.Ref<any> | Function;
  className?: string;
  onScroll?: React.UIEventHandler;
  onResize?: React.UIEventHandler;
  row?: RowWrapperRow;
  rowProps?: {
    rowIndex: number;
    rowKey: string;
  };
}

class RowWrapper extends React.Component<RowWrapperProps & InjectedOuiaProps, {}> {
  static defaultProps = {
    className: '' as string,
    row: {
      isOpen: undefined as boolean,
      isExpanded: undefined as boolean,
      isHeightAuto: undefined as boolean
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
      window.addEventListener('scroll', this.handleScroll);
    }
    if (this.props.onResize) {
      window.addEventListener('resize', this.handleResize);
    }
  }

  componentWillUnmount() {
    this._unmounted = true;

    if (this.props.onScroll) {
      window.removeEventListener('scroll', this.handleScroll);
    }
    if (this.props.onResize) {
      window.removeEventListener('resize', this.handleResize);
    }
  }

  handleScroll = (event: Event): void => {
    if (!this._unmounted) {
      this.props.onScroll((event as unknown) as React.UIEvent<Element>);
    }
  };

  handleResize = (event: Event) => {
    if (!this._unmounted) {
      this.props.onResize((event as unknown) as React.UIEvent<Element>);
    }
  };

  render() {
    const {
      trRef,
      className,
      onScroll,
      onResize,
      row: { isExpanded, isHeightAuto },
      rowProps,
      ouiaContext,
      ouiaId,
      ...props
    } = this.props;

    return (
      <tr
        {...props}
        ref={trRef as React.Ref<any>}
        className={css(
          className,
          isExpanded !== undefined && styles.tableExpandableRow,
          isExpanded && styles.modifiers.expanded,
          isHeightAuto && styles.modifiers.heightAuto
        )}
        hidden={isExpanded !== undefined && !isExpanded}
        {...ouiaContext.isOuia && {
          'data-ouia-component-type': 'TableRow',
          'data-ouia-component-id': ouiaId || ouiaContext.ouiaId
        }}
      />
    );
  }
}

const RowWrapperWithOuiaContext = withOuiaContext(RowWrapper);

export { RowWrapperWithOuiaContext as RowWrapper };
