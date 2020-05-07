import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/Table/table';
import { css } from '@patternfly/react-styles';

export enum TableTextVariant {
  div = 'div',
  nav = 'nav'
}

export enum WrapModifier {
  wrap = 'wrap',
  nowrap = 'nowrap',
  truncate = 'truncate',
  breakWord = 'breakWord',
  fitContent = 'fitContent'
}

export interface TableTextProps extends React.HTMLProps<HTMLDivElement> {
  /** Content rendered within the table button */
  children?: React.ReactNode;
  /** Additional classes added to the table button */
  className?: string;
  /** Determines which element to render as a table text */
  variant?: TableTextVariant | 'span' | 'div';
  /** Determines which wrapping modifier to apply to the table text */
  wrapModifier?: WrapModifier | 'wrap' | 'nowrap' | 'truncate' | 'breakWord' | 'fitContent';
}

export const TableText: React.FunctionComponent<TableTextProps> = ({
  children = null,
  className = '',
  variant = 'span',
  wrapModifier = null,
  ...props
}: TableTextProps) => {
  const Component: TableTextVariant | 'span' | 'div' = variant;

  return (
    <Component {...props} className={css(className, wrapModifier && styles.modifiers[wrapModifier], styles.tableText)}>
      {children}
    </Component>
  );
};
