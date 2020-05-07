import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/Table/table';
import { css } from '@patternfly/react-styles';

export interface TableTextProps extends React.HTMLProps<HTMLDivElement> {
  /** Content rendered within the table button */
  children?: React.ReactNode;
  /** Additional classes added to the table button */
  className?: string;
  /** */
  component?: 'span' | 'div';
}

export const TableText: React.FunctionComponent<TableTextProps> = ({
  children = null,
  className = '',
  component = 'span',
  ...props
}: TableTextProps) => {
  const Component: any = component;

  return (
    <Component {...props} className={css(className, styles.tableText)}>
      {children}
    </Component>
  );
};
