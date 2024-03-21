import { HTMLProps, FunctionComponent } from 'react';

export interface FormSelectOptionProps extends Omit<HTMLProps<HTMLOptionElement>, 'disabled'> {
  /** additional classes added to the Select Option */
  className?: string;
  /** the value for the option */
  value?: any;
  /** the label for the option */
  label: string;
  /** flag indicating if the option is disabled */
  isDisabled?: boolean;
  /** flag indicating if option will have placeholder styling applied when selected **/
  isPlaceholder?: boolean;
}

export const FormSelectOption: FunctionComponent<FormSelectOptionProps> = ({
  className = '',
  value = '',
  isDisabled = false,
  label,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  isPlaceholder = false,
  ...props
}: FormSelectOptionProps) => (
  <option {...props} className={className} value={value} disabled={isDisabled}>
    {label}
  </option>
);
FormSelectOption.displayName = 'FormSelectOption';
