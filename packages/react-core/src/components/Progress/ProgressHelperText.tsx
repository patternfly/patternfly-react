import * as React from 'react';
import progressStyle from '@patternfly/react-styles/css/components/Progress/progress';
import { HelperText, HelperTextItem, HelperTextItemProps } from '../HelperText';
import { ProgressProps } from './Progress';

export interface ProgressHelperTextProps extends React.HTMLProps<HTMLDivElement> {
  /** Content rendered inside the progress helper text component. */
  children?: React.ReactNode;
  /** Variant of the progress component. */
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

  return (
    <div className={progressStyle.progressHelperText}>
      <HelperText isLiveRegion>
        <HelperTextItem variant={helperTextVariantMapping[progressVariant]}>{children}</HelperTextItem>
      </HelperText>
    </div>
  );
};

ProgressHelperText.displayName = 'ProgressHelperText';
