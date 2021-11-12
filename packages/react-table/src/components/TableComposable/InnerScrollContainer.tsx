import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Table/table-scrollable';

export interface InnerScrollContainerProps extends React.HTMLProps<HTMLDivElement> {
  /** Content rendered inside the inner scroll container */
  children?: React.ReactNode;
  /** Additional classes added to the container */
  className?: string;
}

export const InnerScrollContainer: React.FunctionComponent<InnerScrollContainerProps> = ({
  children,
  className,
  ...props
}: InnerScrollContainerProps) => (
  <div className={css(className, styles.scrollInnerWrapper)} {...props}>
    {children}
  </div>
);

InnerScrollContainer.displayName = 'InnerScrollContainer';
