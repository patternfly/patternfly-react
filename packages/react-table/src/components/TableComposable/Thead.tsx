import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Table/table';

export interface TheadProps extends React.HTMLProps<HTMLTableSectionElement> {
  /** Content rendered inside the <thead> row group */
  children?: React.ReactNode;
  /** Additional classes added to the <thead> element */
  className?: string;
  /** Won't wrap the table head if true */
  noWrap?: boolean;
  /** Forwarded ref */
  innerRef?: React.Ref<any>;
}

const TheadBase: React.FunctionComponent<TheadProps> = ({
  children,
  className,
  noWrap = false,
  innerRef,
  ...props
}: TheadProps) => (
  <thead className={css(className, noWrap && styles.modifiers.nowrap)} ref={innerRef} {...props}>
    {children}
  </thead>
);

export const Thead = React.forwardRef((props: TheadProps, ref: React.Ref<HTMLTableSectionElement>) => (
  <TheadBase {...props} innerRef={ref} />
));
Thead.displayName = 'Thead';
