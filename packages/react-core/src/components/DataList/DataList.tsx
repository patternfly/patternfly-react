import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/DataList/data-list';
import { PickOptional } from '../../helpers/typeUtils';

const gridBreakpointClasses = {
  none: styles.modifiers.gridNone,
  always: 'pf-m-grid', // Placeholder per https://github.com/patternfly/patternfly-react/issues/4965#issuecomment-704984236
  sm: styles.modifiers.gridSm,
  md: styles.modifiers.gridMd,
  lg: styles.modifiers.gridLg,
  xl: styles.modifiers.gridXl,
  '2xl': styles.modifiers.grid_2xl
};

export enum DataListWrapModifier {
  nowrap = 'nowrap',
  truncate = 'truncate',
  breakWord = 'breakWord'
}

export interface DataListProps extends Omit<React.HTMLProps<HTMLUListElement>, 'ref'> {
  /** Content rendered inside the DataList list */
  children?: React.ReactNode;
  /** Additional classes added to the DataList list */
  className?: string;
  /** Adds accessible text to the DataList list */
  'aria-label': string;
  /** Optional callback to make DataList selectable, fired when DataListItem selected */
  onSelectDataListItem?: (event: React.MouseEvent | React.KeyboardEvent, id: string) => void;
  /** Id of DataList item currently selected */
  selectedDataListItemId?: string;
  /** Flag indicating if DataList should have compact styling */
  isCompact?: boolean;
  /** Specifies the grid breakpoints  */
  gridBreakpoint?: 'none' | 'always' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  /** Determines which wrapping modifier to apply to the DataList */
  wrapModifier?: DataListWrapModifier | 'nowrap' | 'truncate' | 'breakWord';
  /** Object that causes the data list to render hidden inputs which improve selectable item a11y */
  onSelectableRowChange?: (event: React.FormEvent<HTMLInputElement>, id: string) => void;
}

interface DataListContextProps {
  isSelectable: boolean;
  selectedDataListItemId: string;
  updateSelectedDataListItem: (event: React.MouseEvent | React.KeyboardEvent, id: string) => void;
  onSelectableRowChange?: (event: React.FormEvent<HTMLInputElement>, id: string) => void;
}

export const DataListContext = React.createContext<Partial<DataListContextProps>>({
  isSelectable: false
});

class DataList extends React.Component<DataListProps> {
  static displayName = 'DataList';
  static defaultProps: PickOptional<DataListProps> = {
    children: null,
    className: '',
    selectedDataListItemId: '',
    isCompact: false,
    gridBreakpoint: 'md',
    wrapModifier: null
  };
  ref = React.createRef<HTMLUListElement>();

  constructor(props: DataListProps) {
    super(props);
  }

  getIndex = (id: string) => Array.from(this.ref.current.children).findIndex((item) => item.id === id);

  render() {
    const {
      className,
      children,
      'aria-label': ariaLabel,
      onSelectDataListItem,
      selectedDataListItemId,
      isCompact,
      wrapModifier,
      gridBreakpoint,
      onSelectableRowChange,
      ...props
    } = this.props;
    const isSelectable = onSelectDataListItem !== undefined;

    const updateSelectedDataListItem = (event: React.MouseEvent | React.KeyboardEvent, id: string) => {
      onSelectDataListItem(event, id);
    };

    return (
      <DataListContext.Provider
        value={{
          isSelectable,
          selectedDataListItemId,
          updateSelectedDataListItem,
          onSelectableRowChange
        }}
      >
        <ul
          className={css(
            styles.dataList,
            isCompact && styles.modifiers.compact,
            gridBreakpointClasses[gridBreakpoint],
            wrapModifier && styles.modifiers[wrapModifier],
            className
          )}
          style={props.style}
          role="list"
          aria-label={ariaLabel}
          {...props}
          ref={this.ref}
        >
          {children}
        </ul>
      </DataListContext.Provider>
    );
  }
}

export { DataList };
