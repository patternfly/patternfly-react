import { HTMLProps, ReactNode, FunctionComponent } from 'react';
import { InternalFormFieldGroup } from './InternalFormFieldGroup';

export interface FormFieldGroupProps extends Omit<HTMLProps<HTMLDivElement>, 'label'> {
  /** Anything that can be rendered as form field group content. */
  children?: ReactNode;
  /** Additional classes added to the form field group. */
  className?: string;
  /** Form field group header */
  header?: ReactNode;
}

export const FormFieldGroup: FunctionComponent<FormFieldGroupProps> = ({
  children,
  className,
  header,
  ...props
}: FormFieldGroupProps) => (
  <InternalFormFieldGroup className={className} header={header} {...props}>
    {children}
  </InternalFormFieldGroup>
);
FormFieldGroup.displayName = 'FormFieldGroup';
