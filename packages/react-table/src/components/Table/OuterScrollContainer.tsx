import { HTMLProps, ReactNode, FunctionComponent } from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Table/table-scrollable';

export interface OuterScrollContainerProps extends HTMLProps<HTMLDivElement> {
  /** Content rendered inside the outer scroll container */
  children?: ReactNode;
  /** Additional classes added to the container */
  className?: string;
}

export const OuterScrollContainer: FunctionComponent<OuterScrollContainerProps> = ({
  children,
  className,
  ...props
}: OuterScrollContainerProps) => (
  <div className={css(className, styles.scrollOuterWrapper)} {...props}>
    {children}
  </div>
);

OuterScrollContainer.displayName = 'OuterScrollContainer';
