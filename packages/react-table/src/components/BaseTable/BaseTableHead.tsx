import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Table/table';

export interface BaseTableHeadProps extends React.HTMLProps<HTMLTableSectionElement> {
  /** Content rendered inside the <tr> row */
  children?: React.ReactNode;
  /** Additional classes added to the <tr> row  */
  className?: string;
  /** Won't wrap the table head if true */
  noWrap?: boolean;
  /** Forwarded ref */
  innerRef?: React.Ref<any>;
}

const BaseTableHeadBase: React.FunctionComponent<BaseTableHeadProps> = ({
  children,
  className,
  noWrap = false,
  innerRef,
  ...props
}: BaseTableHeadProps) => (
  <thead className={css(className, noWrap && styles.modifiers.nowrap)} ref={innerRef} {...props}>
    {children}
  </thead>
);

export const BaseTableHead = React.forwardRef((props: BaseTableHeadProps, ref: React.Ref<HTMLTableSectionElement>) => (
  <BaseTableHeadBase {...props} innerRef={ref} />
));
BaseTableHead.displayName = 'BaseTableHead';
