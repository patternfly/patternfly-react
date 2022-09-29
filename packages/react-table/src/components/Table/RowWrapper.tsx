import * as React from 'react';
import { OUIAProps } from '@patternfly/react-core/dist/esm/helpers/OUIA/ouia';
import { debounce, canUseDOM } from '@patternfly/react-core/dist/esm/helpers/util';
import { Tr } from '../TableComposable/Tr';
import { IRow } from './TableTypes';

// legacy export now, RowWrapperRow can simply be typed as IRow in the future
export interface RowWrapperRow {
  isOpen?: boolean;
  isExpanded?: boolean;
  isEditable?: boolean;
}

export interface RowWrapperProps extends OUIAProps {
  children?: React.ReactNode;
  trRef?: React.Ref<any> | Function;
  className?: string;
  onScroll?: React.UIEventHandler;
  onResize?: React.UIEventHandler;
  row?: IRow;
  rowProps?: {
    rowIndex: number;
    rowKey: string;
  };
  /** Value to set the data-ouia-component-id.*/
  ouiaId?: number | string;
}

export class RowWrapper extends React.Component<RowWrapperProps> {
  static displayName = 'RowWrapper';
  static defaultProps = {
    className: '' as string,
    row: {
      isOpen: undefined as boolean,
      isExpanded: undefined as boolean,
      isHeightAuto: undefined as boolean,
      isEditable: undefined as boolean
    } as IRow,
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

    if (canUseDOM) {
      if (this.props.onScroll) {
        window.addEventListener('scroll', this.handleScroll);
      }
      if (this.props.onResize) {
        window.addEventListener('resize', this.handleResize);
      }
    }
  }

  componentWillUnmount() {
    this._unmounted = true;

    if (canUseDOM) {
      if (this.props.onScroll) {
        window.removeEventListener('scroll', this.handleScroll);
      }
      if (this.props.onResize) {
        window.removeEventListener('resize', this.handleResize);
      }
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
      row: { isExpanded, isEditable, isHoverable, isRowSelected },
      rowProps,
      /* eslint-enable @typescript-eslint/no-unused-vars */
      trRef,
      className,
      ouiaId,
      ...props
    } = this.props;

    return (
      <Tr
        {...props}
        ref={trRef as React.Ref<any>}
        isExpanded={isExpanded}
        isEditable={isEditable}
        className={className}
        ouiaId={ouiaId}
        isHoverable={isHoverable}
        isRowSelected={isRowSelected}
      />
    );
  }
}
