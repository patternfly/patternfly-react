import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Table/table';

export interface THeadProps extends React.HTMLProps<HTMLTableSectionElement> {
  /** Content rendered inside the <tr> row */
  children?: React.ReactNode;
  /** Additional classes added to the <tr> row  */
  className?: string;
  /** Won't wrap the table head if true */
  noWrap?: boolean;
  /** Forwarded ref */
  innerRef?: React.Ref<any>;
}

const THeadBase: React.FunctionComponent<THeadProps> = ({
  children,
  className,
  noWrap = false,
  innerRef,
  ...props
}: THeadProps) => (
  <thead className={css(className, noWrap && styles.modifiers.nowrap)} ref={innerRef} {...props}>
    {children}
  </thead>
);

export const THead = React.forwardRef((props: THeadProps, ref: React.Ref<HTMLTableSectionElement>) => (
  <THeadBase {...props} innerRef={ref} />
));
THead.displayName = 'THead';
