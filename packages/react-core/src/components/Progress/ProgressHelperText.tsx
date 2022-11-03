import * as React from 'react';
import progressStyle from '@patternfly/react-styles/css/components/Progress/progress';
import { HelperText, HelperTextItem, HelperTextItemProps } from '../HelperText';
import { ProgressProps } from './Progress';

export interface ProgressHelperTextProps extends React.HTMLProps<HTMLDivElement> {
  /** Content rendered inside the progress helper text component. */
  children?: React.ReactNode;
  /** Variant of the progress component. Only applies if children is a string. */
  progressVariant?: ProgressProps['variant'];
}

export const ProgressHelperText: React.FunctionComponent<ProgressHelperTextProps> = ({
  children,
  progressVariant
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

  return <div className={progressStyle.progressHelperText}>{helperTextIsBasic ? basicHelperText : children}</div>;
};

ProgressHelperText.displayName = 'ProgressHelperText';
