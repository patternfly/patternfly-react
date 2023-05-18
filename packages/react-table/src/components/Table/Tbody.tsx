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
  /** @hide Forwarded ref */
  innerRef?: React.Ref<any>;
  /** Flag indicating the <tbody> contains oddly striped rows. */
  isOddStriped?: boolean;
  /** Flag indicating the <tbody> contains evenly striped rows. */
  isEvenStriped?: boolean;
}

const TbodyBase: React.FunctionComponent<TbodyProps> = ({
  children,
  className,
  isExpanded,
  innerRef,
  isEvenStriped = false,
  isOddStriped = false,
  ...props
}: TbodyProps) => (
  <tbody
    role="rowgroup"
    className={css(
      styles.tableTbody,
      className,
      isExpanded && styles.modifiers.expanded,
      isOddStriped && styles.modifiers.striped,
      isEvenStriped && styles.modifiers.stripedEven
    )}
    ref={innerRef}
    {...props}
  >
    {children}
  </tbody>
);

export const Tbody = React.forwardRef((props: TbodyProps, ref: React.Ref<HTMLTableSectionElement>) => (
  <TbodyBase {...props} innerRef={ref} />
));
Tbody.displayName = 'Tbody';
