import { HTMLProps, ReactNode, FunctionComponent } from 'react';
import progressStyle from '@patternfly/react-styles/css/components/Progress/progress';

export interface ProgressHelperTextProps extends HTMLProps<HTMLDivElement> {
  /** Content which can be used to convey additional information about the progress component.
   * We recommend the helper text component as it was designed for this purpose.
   */
  children?: ReactNode;
}

export const ProgressHelperText: FunctionComponent<ProgressHelperTextProps> = ({
  children,
  ...props
}: ProgressHelperTextProps) => (
  <div className={progressStyle.progressHelperText} {...props}>
    {children}
  </div>
);

ProgressHelperText.displayName = 'ProgressHelperText';
