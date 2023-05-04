import * as React from 'react';
import { TextInput } from '@patternfly/react-core/dist/esm/components/TextInput';
import inlineStyles from '@patternfly/react-styles/css/components/InlineEdit/inline-edit';
import formStyles from '@patternfly/react-styles/css/components/Form/form';
import { css } from '@patternfly/react-styles';
import { EditableTextCellProps } from './base/types';

export interface IEditableTextCell extends React.HTMLProps<HTMLDivElement> {
  /** The current value of the text input */
  value: string;
  /** Row index of this text cell */
  rowIndex: number;
  /** Cell index of this text cell */
  cellIndex: number;
  /** Props to build the input */
  props: EditableTextCellProps;
  /** Event handler which fires when user changes the text in this cell */
  handleTextInputChange: (
    newValue: string,
    event: React.FormEvent<HTMLInputElement>,
    rowIndex: number,
    cellIndex: number
  ) => void;
  /** accessible label of the text input */
  inputAriaLabel: string;
  /** flag indicating if the text input is disabled */
  isDisabled?: boolean;
}

export const EditableTextCell: React.FunctionComponent<IEditableTextCell> = ({
  value,
  rowIndex,
  cellIndex,
  props,
  handleTextInputChange,
  inputAriaLabel,
  isDisabled = false
}: IEditableTextCell) => (
  <React.Fragment>
    <div className={inlineStyles.inlineEditValue}>{value}</div>
    <div className={inlineStyles.inlineEditInput}>
      <TextInput
        isDisabled={isDisabled}
        value={props.editableValue !== undefined ? props.editableValue : value}
        validated={props.isValid !== false ? 'default' : 'error'}
        type="text"
        onChange={(event, newValue) => {
          handleTextInputChange(newValue, event, rowIndex, cellIndex);
        }}
        aria-label={inputAriaLabel}
      />
      <div className={css(formStyles.formHelperText, formStyles.modifiers.error)} aria-live="polite">
        {props.errorText}
      </div>
    </div>
  </React.Fragment>
);
EditableTextCell.displayName = 'EditableTextCell';
