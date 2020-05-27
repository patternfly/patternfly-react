import * as React from 'react';
import { getOUIAProps, OUIAProps } from '@patternfly/react-core/dist/js/helpers/ouia';
import { debounce } from '@patternfly/react-core/dist/js/helpers/util';
import styles from '@patternfly/react-styles/css/components/Table/table';
import inlineStyles from '@patternfly/react-styles/css/components/InlineEdit/inline-edit';
import { css } from '@patternfly/react-styles';

// legacy export now, RowWrapperRow can simply be typed as IRow in the future
export interface RowWrapperRow {
  isOpen?: boolean;
  isExpanded?: boolean;
  isEditable?: boolean;
}

export interface RowWrapperProps extends OUIAProps {
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

export class RowWrapper extends React.Component<RowWrapperProps, {}> {
  static defaultProps = {
    className: '' as string,
    row: {
      isOpen: undefined as boolean,
      isExpanded: undefined as boolean,
      isHeightAuto: undefined as boolean,
      isEditable: undefined as boolean
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
      /* eslint-disable @typescript-eslint/no-unused-vars */
      onScroll,
      onResize,
      row: { isExpanded, isEditable },
      rowProps,
      /* eslint-enable @typescript-eslint/no-unused-vars */
      trRef,
      className,
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
          isEditable && inlineStyles.modifiers.inlineEditable
        )}
        hidden={isExpanded !== undefined && !isExpanded}
        {...getOUIAProps('TableRow', ouiaId)}
      />
    );
  }
}
