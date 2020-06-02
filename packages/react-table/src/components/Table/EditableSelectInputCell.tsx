import * as React from 'react';
import { Select, SelectOptionObject } from '@patternfly/react-core';
import inlineStyles from '@patternfly/react-styles/css/components/InlineEdit/inline-edit';
import formStyles from '@patternfly/react-styles/css/components/Form/form';
import classNames from 'classnames';

export interface IEditableSelectInputCell extends Omit<React.HTMLProps<HTMLElement | HTMLDivElement>, 'onSelect'> {
  /** Row index of this select input cell */
  rowIndex: number;
  /** Cell index of this select input cell */
  cellIndex: number;
  /** Data structure containing the value to display in the cell, the name of the select input,
   * and arbitrary data to pass to the internal select component in the editable select input cell */
  props: {
    name: string;
    value: string;
    [key: string]: any;
  };
  /** Event handler which fires when user selects an option in this cell */
  onSelect: (
    newValue: string | SelectOptionObject,
    event: React.MouseEvent | React.ChangeEvent,
    rowIndex: number,
    cellIndex: number
  ) => void;
  /** Options to display in the expandable select menu */
  options?: React.ReactElement[];
  /** accessible aria label for the select in the select input cell */
  inputAriaLabel?: string;
  /** Flag indicating the select input is disabled */
  isDisabled?: boolean;
  /** Current selected options to display as the read only value of the table cell */
  selections?: string | SelectOptionObject | (string | SelectOptionObject)[];
  /** Flag indicating the select menu is open */
  isOpen?: boolean;
  /** Event handler which fires when the select toggle is toggled */
  onToggle?: (isExpanded: boolean) => void;
}

export const EditableSelectInputCell: React.FunctionComponent<IEditableSelectInputCell> = ({
  value,
  rowIndex,
  cellIndex,
  props,
  onSelect = () => {},
  inputAriaLabel = "",
  isDisabled = false,
  isOpen = false,
  onToggle = () => {},
  selections = '',
  options = [] as React.ReactElement[]
}) => {
  const onSelectHandler = (event: React.MouseEvent | React.ChangeEvent, newValue: string | SelectOptionObject) => {
    onSelect(newValue, event, rowIndex, cellIndex);
  };

  const select = (
    <Select
      onSelect={onSelectHandler}
      aria-label={inputAriaLabel}
      isDisabled={isDisabled}
      isOpen={isOpen}
      onToggle={onToggle}
      selections={selections}
      {...props}
    >
      {options}
    </Select>
  );

  return (
    <React.Fragment>
      <div className={inlineStyles.inlineEditValue}>{value}</div>
      <div className={inlineStyles.inlineEditInput}>
        {select}
        <div className={classNames(formStyles.formHelperText, formStyles.modifiers.error)} aria-live="polite">
          {props.errorText}
        </div>
      </div>
    </React.Fragment>
  );
};
