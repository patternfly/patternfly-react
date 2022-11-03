import * as React from 'react';
import progressStyle from '@patternfly/react-styles/css/components/Progress/progress';
import { HelperText, HelperTextItem, HelperTextItemProps } from '../HelperText';
import { ProgressProps } from './Progress';

export interface ProgressHelperTextProps extends React.HTMLProps<HTMLDivElement> {
  /** Content which can be used to convey additional information about the progress component.
   * Renders content inside of our helper text component with automatic helper text variant setting based on the
   * variant of the progress component when a string is passed, otherwise renders the content directly.
   */
  children?: React.ReactNode;
  /** Variant of the progress component. Only applies if children is a string. */
  progressVariant?: ProgressProps['variant'];
}

export const ProgressHelperText: React.FunctionComponent<ProgressHelperTextProps> = ({
  children,
  progressVariant,
  ...props
}: ProgressHelperTextProps) => {
  const helperTextVariantMapping: {
    [Property in ProgressProps['variant']]: HelperTextItemProps['variant'];
  } = {
    success: 'success',
    warning: 'warning',
    danger: 'error'
  };

  const helperTextIsBasic = typeof children === 'string';

  const basicHelperText = (
    <HelperText isLiveRegion>
      <HelperTextItem variant={helperTextVariantMapping[progressVariant]}>{children}</HelperTextItem>
    </HelperText>
  );

  return (
    <div className={progressStyle.progressHelperText} {...props}>
      {helperTextIsBasic ? basicHelperText : children}
    </div>
  );
};

ProgressHelperText.displayName = 'ProgressHelperText';
