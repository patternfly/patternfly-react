import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/OverflowMenu/overflow-menu';

export interface OverflowMenuControlProps extends React.HTMLProps<HTMLDivElement> {
  children: any;
  className?: string;
  additionalOptions?: boolean;
}

export const OverflowMenuControl: React.SFC<OverflowMenuControlProps> = ({
  className,
  children,
  additionalOptions = false,
  ...props
}) => (
  <div {...props} className={css(
    styles.overflowMenuControl,
    additionalOptions && styles.modifiers.additionalOptions,
    className)
  }>
    {children}
  </div>
);