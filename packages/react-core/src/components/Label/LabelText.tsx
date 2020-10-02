import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/Label/label';
import { css } from '@patternfly/react-styles';

export interface LabelTextProps extends React.HTMLProps<HTMLSpanElement> {
  /** Content rendered inside the label text. */
  children: React.ReactNode;
  /** Additional classes added to the label. */
  className?: string;
  /** Flag indicating the label text should be truncated. */
  isTruncated?: boolean;
}

export const LabelText: React.FunctionComponent<LabelTextProps> = ({
  children,
  className,
  isTruncated = false,
  ...props
}: LabelTextProps) =>
  isTruncated ? (
    <span className={css(styles.labelText, className)} {...props}>
      {children}
    </span>
  ) : (
    <>{children}</>
  );
LabelText.displayName = 'LabelText';
