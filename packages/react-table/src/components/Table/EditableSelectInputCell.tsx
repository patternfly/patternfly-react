import { Fragment } from 'react';
import { css } from '@patternfly/react-styles';
import { Select, SelectList } from '@patternfly/react-core/dist/esm/components/Select';
import { MenuToggle } from '@patternfly/react-core/dist/esm/components/MenuToggle';
import inlineStyles from '@patternfly/react-styles/css/components/InlineEdit/inline-edit';
import formStyles from '@patternfly/react-styles/css/components/Form/form';
import { EditableSelectInputProps } from './base/types';

export interface IEditableSelectInputCell extends Omit<React.HTMLProps<HTMLElement | HTMLDivElement>, 'onSelect'> {
  /** Row index of this select input cell */
  rowIndex: number;
  /** Cell index of this select input cell */
  cellIndex: number;
  /** Props to build the select component */
  props: EditableSelectInputProps;
  /** Event handler which fires when user selects an option in this cell */
  onSelect: (
    event: React.MouseEvent | React.ChangeEvent,
    newValue: any | any[],
    rowIndex: number,
    cellIndex: number,
    isPlaceholder?: boolean
  ) => void;
  /** Options to display in the expandable select menu */
  options?: React.ReactElement<any>[];
  /** Flag indicating the select input is disabled */
  isDisabled?: boolean;
  /** Flag indicating the toggle gets placeholder styles **/
  isPlaceholder?: boolean;
  /** Current selected options to display as the read only value of the table cell */
  selections?: any | any[];
  /** Flag indicating the select menu is open */
  isOpen?: boolean;
  /** Event handler which fires when the select toggle is toggled */
  onToggle?: (event: React.MouseEvent | undefined) => void;
  /** Event handler which fires when the user clears the selections */
  clearSelection?: (event: React.MouseEvent, rowIndex: number, cellIndex: number) => void;
}

export const EditableSelectInputCell: React.FunctionComponent<IEditableSelectInputCell> = ({
  value,
  rowIndex,
  cellIndex,
  onSelect = () => {},
  clearSelection,
  isOpen = false,
  isPlaceholder = false,
  onToggle = () => {},
  selections = [''],
  options = [] as React.ReactElement<any>[],
  props
}: IEditableSelectInputCell) => {
  const onSelectHandler = (event: React.MouseEvent | React.ChangeEvent, newValue: any | any[]) => {
    onSelect(event, newValue, rowIndex, cellIndex, isPlaceholder);
  };

  const onClear = (event: React.MouseEvent) => {
    clearSelection(event, rowIndex, cellIndex);
  };

  const select = (
    <Select
      onSelect={onSelectHandler}
      {...(clearSelection && { onClear })}
      isOpen={isOpen}
      selected={selections}
      toggle={(toggleRef: any) => (
        <MenuToggle ref={toggleRef} onClick={onToggle} isExpanded={isOpen} isPlaceholder={isPlaceholder}>
          {isOpen ? 'Expanded' : 'Collapsed'}
        </MenuToggle>
      )}
      {...props.editableSelectProps}
    >
      <SelectList>{options}</SelectList>
    </Select>
  );

  return (
    <Fragment>
      <div className={inlineStyles.inlineEditValue}>{Array.isArray(value) ? value.join(', ') : value}</div>
      <div className={inlineStyles.inlineEditInput}>
        {select}
        <div className={css(formStyles.formHelperText)} aria-live="polite">
          {props.errorText}
        </div>
      </div>
    </Fragment>
  );
};
EditableSelectInputCell.displayName = 'EditableSelectInputCell';
