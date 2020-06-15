import * as React from 'react';

export interface FormSelectOptionProps extends Omit<React.HTMLProps<HTMLOptionElement>, 'disabled'> {
  /** additional classes added to the Select Option */
  className?: string;
  /** the value for the option */
  value?: any;
  /** the label for the option */
  label: string;
  /** flag indicating if the option is disabled */
  isDisabled?: boolean;
}

/**
 *
 */
export function FormSelectOption({
  className = '',
  value = '',
  isDisabled = false,
  label,
  ...props
}: FormSelectOptionProps) {
  return (
    <option {...props} className={className} value={value} disabled={isDisabled}>
      {label}
    </option>
  );
}
