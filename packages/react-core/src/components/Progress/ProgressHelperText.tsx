import * as React from 'react';
import progressStyle from '@patternfly/react-styles/css/components/Progress/progress';

export interface ProgressHelperTextProps extends React.HTMLProps<HTMLDivElement> {
  /** Content which can be used to convey additional information about the progress component.
   * We recommend the helper text component as it was designed for this purpose.
   */
  children?: React.ReactNode;
}

export const ProgressHelperText: React.FunctionComponent<ProgressHelperTextProps> = ({
  children,
  ...props
}: ProgressHelperTextProps) => (
  <div className={progressStyle.progressHelperText} {...props}>
    {children}
  </div>
);

ProgressHelperText.displayName = 'ProgressHelperText';
