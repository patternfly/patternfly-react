import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Table/table';

export interface LightBodyCellProps {
  /** Content rendered inside the <td> body cell */
  children?: React.ReactNode;
  /** Additional classes added to the <td> body cell  */
  className?: string;
  /**
   * The column header the cell corresponds to.
   * This attribute replaces table header in mobile viewport. It is rendered by ::before pseudo element.
   */
  dataLabel?: string;
  /** Modifies cell to center its contents. */
  textCenter?: boolean;
}

export const LightBodyCell: React.FunctionComponent<LightBodyCellProps> = ({
  children,
  className,
  dataLabel,
  textCenter = false,
  ...props
}: LightBodyCellProps) => (
  <td role="cell" data-label={dataLabel} className={css(className, textCenter && styles.modifiers.center)} {...props}>
    {children}
  </td>
);
LightBodyCell.displayName = 'LightBodyCell';
