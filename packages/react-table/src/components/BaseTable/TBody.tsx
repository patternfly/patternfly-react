import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Table/table';

export interface TBodyProps extends React.HTMLProps<HTMLTableSectionElement> {
  /** Content rendered inside the <tr> row */
  children?: React.ReactNode;
  /** Additional classes added to the <tr> row  */
  className?: string;
  /** Modifies the body to allow for expandable rows */
  isExpanded?: boolean;
  /** Forwarded ref */
  innerRef?: React.Ref<any>;
}

const TBodyBase: React.FunctionComponent<TBodyProps> = ({
  children,
  className,
  isExpanded,
  innerRef,
  ...props
}: TBodyProps) => (
  <tbody role="rowgroup" className={css(className, isExpanded && styles.modifiers.expanded)} ref={innerRef} {...props}>
    {children}
  </tbody>
);

export const TBody = React.forwardRef((props: TBodyProps, ref: React.Ref<HTMLTableSectionElement>) => (
  <TBodyBase {...props} innerRef={ref} />
));
TBody.displayName = 'TBody';
