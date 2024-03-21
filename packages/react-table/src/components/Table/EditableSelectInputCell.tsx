import { HTMLProps, MouseEvent, ChangeEvent, ReactElement, KeyboardEvent, FunctionComponent, Fragment } from 'react';
import { css } from '@patternfly/react-styles';
import { Select, SelectOptionObject } from '@patternfly/react-core/dist/esm/deprecated/components/Select';
import inlineStyles from '@patternfly/react-styles/css/components/InlineEdit/inline-edit';
import formStyles from '@patternfly/react-styles/css/components/Form/form';
import { EditableSelectInputProps } from './base/types';

export interface IEditableSelectInputCell extends Omit<HTMLProps<HTMLElement | HTMLDivElement>, 'onSelect'> {
  /** Row index of this select input cell */
  rowIndex: number;
  /** Cell index of this select input cell */
  cellIndex: number;
  /** Props to build the select component */
  props: EditableSelectInputProps;
  /** Event handler which fires when user selects an option in this cell */
  onSelect: (
    event: MouseEvent | ChangeEvent,
    newValue: string | SelectOptionObject,
    rowIndex: number,
    cellIndex: number,
    isPlaceholder?: boolean
  ) => void;
  /** Options to display in the expandable select menu */
  options?: ReactElement[];
  /** Flag indicating the select input is disabled */
  isDisabled?: boolean;
  /** Current selected options to display as the read only value of the table cell */
  selections?: string | SelectOptionObject | (string | SelectOptionObject)[];
  /** Flag indicating the select menu is open */
  isOpen?: boolean;
  /** Event handler which fires when the select toggle is toggled */
  onToggle?: (event: MouseEvent | ChangeEvent | KeyboardEvent | Event, isExpanded: boolean) => void;
  /** Event handler which fires when the user clears the selections */
  clearSelection?: (event: MouseEvent, rowIndex: number, cellIndex: number) => void;
}

export const EditableSelectInputCell: FunctionComponent<IEditableSelectInputCell> = ({
  value,
  rowIndex,
  cellIndex,
  onSelect = () => {},
  clearSelection,
  isOpen = false,
  onToggle = () => {},
  selections = [''],
  options = [] as ReactElement[],
  props
}: IEditableSelectInputCell) => {
  const onSelectHandler = (
    event: MouseEvent | ChangeEvent,
    newValue: string | SelectOptionObject,
    isPlaceholder: boolean
  ) => {
    onSelect(event, newValue, rowIndex, cellIndex, isPlaceholder);
  };

  const onClear = (event: MouseEvent) => {
    clearSelection(event, rowIndex, cellIndex);
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
    <Fragment>
      <div className={inlineStyles.inlineEditValue}>{Array.isArray(value) ? value.join(', ') : value}</div>
      <div className={inlineStyles.inlineEditInput}>
        {select}
        <div className={css(formStyles.formHelperText, formStyles.modifiers.error)} aria-live="polite">
          {props.errorText}
        </div>
      </div>
    </Fragment>
  );
};
EditableSelectInputCell.displayName = 'EditableSelectInputCell';
