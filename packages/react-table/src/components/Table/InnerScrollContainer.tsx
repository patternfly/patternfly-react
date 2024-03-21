import { HTMLProps, ReactNode, FunctionComponent } from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Table/table-scrollable';

export interface InnerScrollContainerProps extends HTMLProps<HTMLDivElement> {
  /** Content rendered inside the inner scroll container */
  children?: ReactNode;
  /** Additional classes added to the container */
  className?: string;
}

export const InnerScrollContainer: FunctionComponent<InnerScrollContainerProps> = ({
  children,
  className,
  ...props
}: InnerScrollContainerProps) => (
  <div className={css(className, styles.scrollInnerWrapper)} {...props}>
    {children}
  </div>
);

InnerScrollContainer.displayName = 'InnerScrollContainer';
