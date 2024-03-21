import { HTMLProps, ReactNode, FunctionComponent } from 'react';

export interface FormSelectOptionGroupProps extends Omit<HTMLProps<HTMLOptGroupElement>, 'disabled'> {
  /** content rendered inside the Select Option Group */
  children?: ReactNode;
  /** additional classes added to the Select Option */
  className?: string;
  /** the label for the option */
  label: string;
  /** flag indicating if the Option Group is disabled */
  isDisabled?: boolean;
}

export const FormSelectOptionGroup: FunctionComponent<FormSelectOptionGroupProps> = ({
  children = null,
  className = '',
  isDisabled = false,
  label,
  ...props
}: FormSelectOptionGroupProps) => (
  <optgroup {...props} disabled={!!isDisabled} className={className} label={label}>
    {children}
  </optgroup>
);
FormSelectOptionGroup.displayName = 'FormSelectOptionGroup';
