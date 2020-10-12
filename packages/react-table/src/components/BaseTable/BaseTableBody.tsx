import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Table/table';

export interface BaseTableBodyProps extends React.HTMLProps<HTMLTableSectionElement> {
  /** Content rendered inside the <tr> row */
  children?: React.ReactNode;
  /** Additional classes added to the <tr> row  */
  className?: string;
  /** Modifies the body to allow for expandable rows */
  isExpanded?: boolean;
  /** Forwarded ref */
  innerRef?: React.Ref<any>;
}

const BaseTableBodyBase: React.FunctionComponent<BaseTableBodyProps> = ({
  children,
  className,
  isExpanded,
  innerRef,
  ...props
}: BaseTableBodyProps) => (
  <tbody role="rowgroup" className={css(className, isExpanded && styles.modifiers.expanded)} ref={innerRef} {...props}>
    {children}
  </tbody>
);

export const BaseTableBody = React.forwardRef((props: BaseTableBodyProps, ref: React.Ref<HTMLTableSectionElement>) => (
  <BaseTableBodyBase {...props} innerRef={ref} />
));
BaseTableBody.displayName = 'BaseTableBody';
