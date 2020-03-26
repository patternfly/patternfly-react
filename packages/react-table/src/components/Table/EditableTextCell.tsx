import * as React from 'react';
import { TextInput } from '@patternfly/react-core';
import inlineStyles from '@patternfly/react-styles/css/components/InlineEdit/inline-edit';
import formStyles from '@patternfly/react-styles/css/components/Form/form';
import classNames from 'classnames';

// eslint-disable-next-line @typescript-eslint/interface-name-prefix
export interface IEditableTextCell {
  value: string;
  rowIndex: number;
  cellIndex: number;
  props: any;
  handleTextInputChange: (
    newValue: string,
    event: React.FormEvent<HTMLInputElement>,
    rowIndex: number,
    cellIndex: number
  ) => void;
  inputAriaLabel: string;
  isDisabled?: boolean;
}

export const EditableTextCell: React.FunctionComponent<IEditableTextCell> = ({
  value,
  rowIndex,
  cellIndex,
  props,
  handleTextInputChange,
  inputAriaLabel,
  isDisabled
}) => (
  <React.Fragment>
    <div className={inlineStyles.inlineEditValue}>{value}</div>
    <div className={inlineStyles.inlineEditInput}>
      <TextInput
        isDisabled={isDisabled}
        value={props.editableValue !== undefined ? props.editableValue : value}
        validated={props.isValid !== false ? 'default' : 'error'}
        type="text"
        onChange={(newValue, event) => {
          handleTextInputChange(newValue, event, rowIndex, cellIndex);
        }}
        aria-label={inputAriaLabel}
      />
      <div className={classNames(formStyles.formHelperText, formStyles.modifiers.error)} aria-live="polite">
        {props.errorText}
      </div>
    </div>
  </React.Fragment>
);
