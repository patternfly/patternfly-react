import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/Table/table';
import { css } from '@patternfly/react-styles';
import { Tooltip } from '@patternfly/react-core';

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

  const tableText = (
    <Component className={css(className, wrapModifier && styles.modifiers[wrapModifier], styles.tableText)} {...props}>
      {children}
    </Component>
  );

  return wrapModifier === WrapModifier.truncate ? <Tooltip content={children}>{tableText}</Tooltip> : tableText;
};
