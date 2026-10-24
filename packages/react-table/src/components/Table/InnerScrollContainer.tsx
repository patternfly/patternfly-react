import { forwardRef } from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Table/table-scrollable';

export interface InnerScrollContainerProps extends React.HTMLProps<HTMLDivElement> {
  /** Content rendered inside the inner scroll container */
  children?: React.ReactNode;
  /** Additional classes added to the container */
  className?: string;
  /** @hide Forwarded ref */
  innerRef?: React.Ref<HTMLDivElement>;
}

const InnerScrollContainerBase: React.FunctionComponent<InnerScrollContainerProps> = ({
  children,
  className,
  innerRef,
  ...props
}: InnerScrollContainerProps) => (
  <div ref={innerRef} className={css(className, styles.scrollInnerWrapper)} {...props}>
    {children}
  </div>
);

export const InnerScrollContainer = forwardRef((props: InnerScrollContainerProps, ref: React.Ref<HTMLDivElement>) => (
  <InnerScrollContainerBase innerRef={ref} {...props} />
));
InnerScrollContainer.displayName = 'InnerScrollContainer';
