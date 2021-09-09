import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Table/table';

export interface TbodyProps extends React.HTMLProps<HTMLTableSectionElement> {
  /** Content rendered inside the <tbody> row group */
  children?: React.ReactNode;
  /** Additional classes added to the <tbody> element  */
  className?: string;
  /** Modifies the body to allow for expandable rows */
  isExpanded?: boolean;
  /** Forwarded ref */
  innerRef?: React.Ref<any>;
}

const TbodyBase: React.FunctionComponent<TbodyProps> = ({
  children,
  className,
  isExpanded,
  innerRef,
  ...props
}: TbodyProps) => (
  <tbody role="rowgroup" className={css(className, isExpanded && styles.modifiers.expanded)} ref={innerRef} {...props}>
    {children}
  </tbody>
);

export const Tbody = React.forwardRef((props: TbodyProps, ref: React.Ref<HTMLTableSectionElement>) => (
  <TbodyBase {...props} innerRef={ref} />
));
Tbody.displayName = 'Tbody';
