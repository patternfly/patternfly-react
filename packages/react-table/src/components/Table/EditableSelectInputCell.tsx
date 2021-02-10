import * as React from 'react';
import { css } from '@patternfly/react-styles';
import { Select, SelectOptionObject, SelectProps } from '@patternfly/react-core';
import inlineStyles from '@patternfly/react-styles/css/components/InlineEdit/inline-edit';
import formStyles from '@patternfly/react-styles/css/components/Form/form';

export interface IEditableSelectInputCell extends Omit<React.HTMLProps<HTMLElement | HTMLDivElement>, 'onSelect'> {
  /** Row index of this select input cell */
  rowIndex: number;
  /** Cell index of this select input cell */
  cellIndex: number;
  /** Data structure containing:
   * value - to display in the cell,
   * name - of the select input,
   * isSelectOpen - flag controlling isOpen state of select,
   * selected - string or SelectOptionObject, or an array of strings or SelectOptionObjects representing current selections
   * options - Array of react elements to display in the select menu,
   * editableSelectProps - props to be passed down to the Select component housed inside this editable select input cell
   * arbitrary data to pass to the internal select component in the editable select input cell */
  props: {
    name: string;
    value: string | string[];
    isSelectOpen: boolean;
    selected: string | SelectOptionObject | (string | SelectOptionObject)[];
    options: React.ReactElement[];
    editableSelectProps?: SelectProps;
    [key: string]: any;
  };
  /** Event handler which fires when user selects an option in this cell */
  onSelect: (
    newValue: string | SelectOptionObject,
    event: React.MouseEvent | React.ChangeEvent,
    rowIndex: number,
    cellIndex: number,
    isPlaceholder?: boolean
  ) => void;
  /** Options to display in the expandable select menu */
  options?: React.ReactElement[];
  /** Flag indicating the select input is disabled */
  isDisabled?: boolean;
  /** Current selected options to display as the read only value of the table cell */
  selections?: string | SelectOptionObject | (string | SelectOptionObject)[];
  /** Flag indicating the select menu is open */
  isOpen?: boolean;
  /** Event handler which fires when the select toggle is toggled */
  onToggle?: (isExpanded: boolean) => void;
  /** Event handler which fires when the user clears the selections */
  clearSelection?: (rowIndex: number, cellIndex: number, event?: React.MouseEvent) => void;
}

export const EditableSelectInputCell: React.FunctionComponent<IEditableSelectInputCell> = ({
  value,
  rowIndex,
  cellIndex,
  onSelect = () => {},
  clearSelection,
  isOpen = false,
  onToggle = () => {},
  selections = [''],
  options = [] as React.ReactElement[],
  props
}: IEditableSelectInputCell) => {
  const onSelectHandler = (
    event: React.MouseEvent | React.ChangeEvent,
    newValue: string | SelectOptionObject,
    isPlaceholder: boolean
  ) => {
    onSelect(newValue, event, rowIndex, cellIndex, isPlaceholder);
  };

  const onClear = (event: React.MouseEvent) => {
    clearSelection(rowIndex, cellIndex, event);
  };

  const select = (
    <Select
      {...props.editableSelectProps}
      onSelect={onSelectHandler}
      {...(clearSelection && { onClear })}
      isOpen={isOpen}
      onToggle={onToggle}
      selections={selections}
    >
      {options}
    </Select>
  );

  return (
    <React.Fragment>
      <div className={inlineStyles.inlineEditValue}>{Array.isArray(value) ? value.join(', ') : value}</div>
      <div className={inlineStyles.inlineEditInput}>
        {select}
        <div className={css(formStyles.formHelperText, formStyles.modifiers.error)} aria-live="polite">
          {props.errorText}
        </div>
      </div>
    </React.Fragment>
  );
};
EditableSelectInputCell.displayName = 'EditableSelectInputCell';
