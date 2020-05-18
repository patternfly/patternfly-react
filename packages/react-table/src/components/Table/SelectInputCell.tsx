import * as React from 'react';
import { Select, SelectOptionObject } from '@patternfly/react-core';
import inlineStyles from '@patternfly/react-styles/css/components/InlineEdit/inline-edit';
import formStyles from '@patternfly/react-styles/css/components/Form/form';
import classNames from 'classnames';

// eslint-disable-next-line @typescript-eslint/interface-name-prefix
export interface ISelectInputCell {
  value: string;
  rowIndex: number;
  cellIndex: number;
  props: any;
  onSelect: (
    newValue: string | SelectOptionObject,
    event: React.MouseEvent | React.ChangeEvent,
    rowIndex: number,
    cellIndex: number
  ) => void;
  options: React.ReactElement[];
  inputAriaLabel: string;
  isDisabled?: boolean;
  selections: string | SelectOptionObject | (string | SelectOptionObject)[];
  isExpanded: boolean;
  onToggle: (isExpanded: boolean) => void;
}

export const SelectInputCell: React.FunctionComponent<ISelectInputCell> = ({
  value,
  rowIndex,
  cellIndex,
  props,
  onSelect,
  inputAriaLabel,
  isDisabled = false,
  isExpanded,
  onToggle,
  selections,
  options
}) => {
  const onSelectHandler = (event: React.MouseEvent | React.ChangeEvent, newValue: string | SelectOptionObject) => {
    onSelect(newValue, event, rowIndex, cellIndex);
  };

  const select = (
    <Select
      onSelect={onSelectHandler}
      aria-label={inputAriaLabel}
      isDisabled={isDisabled}
      isExpanded={isExpanded}
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
