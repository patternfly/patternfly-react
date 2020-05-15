import * as React from 'react';
import { TextInput, TextInputProps } from '@patternfly/react-core';

export interface TableTextInputProps extends Omit<TextInputProps, 'defaultValue' | 'autoFocus' | 'onBlur'> {
  defaultValue?: string;
  autoFocus?: boolean;
  onBlur?(value: string, event: React.FormEvent<HTMLInputElement>): void;
}

export class TableTextInput extends React.Component<TableTextInputProps> {
  static defaultProps = {
    autoFocus: false
  };

  handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    this.props.onBlur(event.currentTarget.value, event);
  };

  render() {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { defaultValue, onBlur, autoFocus, value, onChange, ...textInputProps } = this.props;
    return (
      <TextInput
        {...textInputProps}
        value={undefined}
        defaultValue={defaultValue}
        onBlur={this.handleBlur}
        autoFocus={autoFocus}
      />
    );
  }
}
