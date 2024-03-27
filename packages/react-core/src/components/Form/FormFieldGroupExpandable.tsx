import { HTMLProps, ReactNode, FunctionComponent, useState } from 'react';
import { InternalFormFieldGroup } from './InternalFormFieldGroup';

export interface FormFieldGroupExpandableProps extends HTMLProps<HTMLDivElement> {
  /** Anything that can be rendered as form field group content. */
  children?: ReactNode;
  /** Additional classes added to the form field group. */
  className?: string;
  /** Form field group header */
  header?: ReactNode;
  /** Flag indicating if the form field group is initially expanded */
  isExpanded?: boolean;
  /** Aria-label to use on the form field group toggle button */
  toggleAriaLabel?: string;
}

export const FormFieldGroupExpandable: FunctionComponent<FormFieldGroupExpandableProps> = ({
  children,
  className,
  header,
  isExpanded = false,
  toggleAriaLabel,
  ...props
}: FormFieldGroupExpandableProps) => {
  const [localIsExpanded, setIsExpanded] = useState(isExpanded);

  return (
    <InternalFormFieldGroup
      className={className}
      header={header}
      isExpandable
      isExpanded={localIsExpanded}
      toggleAriaLabel={toggleAriaLabel}
      onToggle={() => setIsExpanded(!localIsExpanded)}
      {...props}
    >
      {children}
    </InternalFormFieldGroup>
  );
};
FormFieldGroupExpandable.displayName = 'FormFieldGroupExpandable';
