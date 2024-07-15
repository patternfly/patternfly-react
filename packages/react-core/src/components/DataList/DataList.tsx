import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/DataList/data-list';

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

export interface DataListProps extends React.HTMLProps<HTMLUListElement> {
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
  /** @hide custom ref of the DataList */
  innerRef?: React.RefObject<HTMLUListElement>;
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

export const DataListBase: React.FunctionComponent<DataListProps> = ({
  children = null,
  className = '',
  'aria-label': ariaLabel,
  onSelectDataListItem,
  selectedDataListItemId = '',
  isCompact = false,
  gridBreakpoint = 'md',
  wrapModifier = null,
  onSelectableRowChange,
  innerRef,
  ...props
}: DataListProps) => {
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
        ref={innerRef}
        {...props}
      >
        {children}
      </ul>
    </DataListContext.Provider>
  );
};

DataListBase.displayName = 'DataListBase';

export const DataList = React.forwardRef((props: DataListProps, ref: React.Ref<HTMLUListElement>) => (
  <DataListBase innerRef={ref as React.MutableRefObject<any>} {...props} />
));

DataList.displayName = 'DataList';
