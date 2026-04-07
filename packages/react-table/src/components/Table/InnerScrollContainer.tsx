import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Table/table-scrollable';
import { forwardRef } from 'react';

export interface InnerScrollContainerProps extends React.HTMLProps<HTMLDivElement> {
  /** Content rendered inside the inner scroll container */
  children?: React.ReactNode;
  /** Additional classes added to the container */
  className?: string;
}

const InnerScrollContainerBase = (
  { children, className, ...props }: InnerScrollContainerProps,
  ref: React.ForwardedRef<HTMLDivElement>
) => (
  <div ref={ref} className={css(className, styles.scrollInnerWrapper)} {...props}>
    {children}
  </div>
);

export const InnerScrollContainer = forwardRef(InnerScrollContainerBase);
InnerScrollContainer.displayName = 'InnerScrollContainer';
