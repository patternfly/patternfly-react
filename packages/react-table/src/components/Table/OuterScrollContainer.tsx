import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Table/table-scrollable';

export interface OuterScrollContainerProps extends React.HTMLProps<HTMLDivElement> {
  /** Content rendered inside the outer scroll container */
  children?: React.ReactNode;
  /** Additional classes added to the container */
  className?: string;
}

export const OuterScrollContainer: React.FunctionComponent<OuterScrollContainerProps> = ({
  children,
  className,
  ...props
}: OuterScrollContainerProps) => (
  <div className={css(className, styles.scrollOuterWrapper)} {...props}>
    {children}
  </div>
);

OuterScrollContainer.displayName = 'OuterScrollContainer';
