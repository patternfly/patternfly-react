import * as React from 'react';
import { useOUIAProps, OUIAProps } from '@patternfly/react-core';
import styles from '@patternfly/react-styles/css/components/Table/table';
import inlineStyles from '@patternfly/react-styles/css/components/InlineEdit/inline-edit';
import { css } from '@patternfly/react-styles';
import { TableComposableContext } from './TableComposable';

export interface TrProps extends React.HTMLProps<HTMLTableRowElement>, OUIAProps {
  /** Content rendered inside the <tr> row */
  children?: React.ReactNode;
  /** Additional classes added to the <tr> row  */
  className?: string;
  /** Forwarded ref */
  innerRef?: React.Ref<any>;
  /** Flag indicating the Tr is hidden */
  isHidden?: boolean;
  /** Only applicable to Tr within the Tbody: Makes the row expandable and determines if it's expanded or not.
   * To prevent column widths from responding automatically when expandable rows are toggled, the width prop must also be passed into either the th or td component
   */
  isExpanded?: boolean;
  /** Only applicable to Tr within the Tbody: Whether the row is editable */
  isEditable?: boolean;
  /** Flag which adds hover styles for the table row */
  isHoverable?: boolean;
  /** Flag indicating the row is selected - adds selected styling */
  isRowSelected?: boolean;
  /** Flag indicating the row is striped */
  isStriped?: boolean;
  /** Flag indicating the row will act as a border. This is typically used for a table with a nested and sticky header. */
  isBorderRow?: boolean;
  /** An event handler for the row */
  onRowClick?: (event?: React.KeyboardEvent | React.MouseEvent) => void;
  /** Flag indicating that the row is selectable */
  isSelectable?: boolean;
  /** Flag indicating the spacing offset of the first cell should be reset */
  resetOffset?: boolean;
  /** Value to overwrite the randomly generated data-ouia-component-id.*/
  ouiaId?: number | string;
  /** Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false. */
  ouiaSafe?: boolean;
}

const TrBase: React.FunctionComponent<TrProps> = ({
  children,
  className,
  isExpanded,
  isEditable,
  isHidden = false,
  isHoverable = false,
  isRowSelected = false,
  isStriped = false,
  isBorderRow = false,
  innerRef,
  ouiaId,
  ouiaSafe = true,
  resetOffset = false,
  onRowClick,
  isSelectable,
  'aria-label': passedAriaLabel,
  ...props
}: TrProps) => {
  const ouiaProps = useOUIAProps('TableRow', ouiaId, ouiaSafe);
  const [computedAriaLabel, setComputedAriaLabel] = React.useState<string | undefined>('');

  let onKeyDown = null;
  if (onRowClick) {
    onKeyDown = (e: React.KeyboardEvent) => {
      if (e.key === 'Enter' || e.key === ' ') {
        onRowClick(e);
        e.preventDefault();
      }
    };
  }

  const rowIsHidden = isHidden || (isExpanded !== undefined && !isExpanded);

  const { registerSelectableRow } = React.useContext(TableComposableContext);

  React.useEffect(() => {
    if (isSelectable && !rowIsHidden) {
      setComputedAriaLabel(`${isRowSelected ? 'Row selected' : ''}`);
      registerSelectableRow();
    } else {
      setComputedAriaLabel(undefined);
    }
  }, [isRowSelected, isSelectable, registerSelectableRow, rowIsHidden]);

  const ariaLabel = passedAriaLabel || computedAriaLabel;

  return (
    <>
      {isSelectable && <output className="pf-screen-reader">{ariaLabel}</output>}
      <tr
        className={css(
          className,
          isExpanded !== undefined && styles.tableExpandableRow,
          isExpanded && styles.modifiers.expanded,
          isEditable && inlineStyles.modifiers.inlineEditable,
          isHoverable && styles.modifiers.hoverable,
          isRowSelected && styles.modifiers.selected,
          isStriped && styles.modifiers.striped,
          isBorderRow && styles.modifiers.borderRow,
          resetOffset && styles.modifiers.firstCellOffsetReset
        )}
        hidden={rowIsHidden}
        {...(isHoverable && { tabIndex: 0 })}
        aria-label={ariaLabel}
        ref={innerRef}
        {...(onRowClick && { onClick: onRowClick, onKeyDown })}
        {...ouiaProps}
        {...props}
      >
        {children}
      </tr>
    </>
  );
};

export const Tr = React.forwardRef((props: TrProps, ref: React.Ref<HTMLTableRowElement>) => (
  <TrBase {...props} innerRef={ref} />
));
Tr.displayName = 'Tr';
