import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Table/table';

export interface BaseBodyCellProps extends React.HTMLProps<HTMLTableDataCellElement> {
  /** Content rendered inside the <td> body cell */
  children?: React.ReactNode;
  /** Additional classes added to the <td> body cell  */
  className?: string;
  /**
   * The column header the cell corresponds to.
   * This attribute replaces table header in mobile viewport. It is rendered by ::before pseudo element.
   */
  dataLabel?: string;
  /** Cell key */
  dataKey?: number;
  /** Modifies cell to center its contents. */
  textCenter?: boolean;
  /** Style modifier to apply */
  modifier?: 'breakWord' | 'fitContent' | 'nowrap' | 'truncate' | 'wrap';
  /** Forwarded ref */
  innerRef?: React.Ref<any>;
}

const BaseBodyCellBase: React.FunctionComponent<BaseBodyCellProps> = ({
  children,
  className,
  dataLabel,
  dataKey,
  textCenter = false,
  modifier,
  innerRef,
  ...props
}: BaseBodyCellProps) => (
  <td
    data-label={dataLabel}
    data-key={dataKey}
    className={css(
      className,
      textCenter && styles.modifiers.center,
      modifier && styles.modifiers[modifier as 'breakWord' | 'fitContent' | 'nowrap' | 'truncate' | 'wrap']
    )}
    ref={innerRef}
    {...props}
  >
    {children}
  </td>
);

export const BaseBodyCell = React.forwardRef((props: BaseBodyCellProps, ref: React.Ref<HTMLTableDataCellElement>) => (
  <BaseBodyCellBase {...props} innerRef={ref} />
));
BaseBodyCell.displayName = 'BaseBodyCell';
