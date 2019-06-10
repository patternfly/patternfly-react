import * as React from 'react';
import { css, getModifier } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/DataList/data-list';
import { Omit } from '../../helpers/typeUtils';

export interface DataListCellProps extends Omit<React.HTMLProps<HTMLDivElement>, 'width'> {
  children?: React.ReactNode;
  className?: string;
  width?: 1 | 2 | 3 | 4 | 5;
  isFilled?: boolean;
  alignRight?: boolean;
  isIcon?: boolean;
}

export const DataListCell: React.FunctionComponent<DataListCellProps> = ({
  children = null,
  className = '',
  width = 1,
  isFilled = true,
  alignRight = false,
  isIcon = false,
  ...props
}) => (
  <div
    className={css(
      styles.dataListCell,
      width > 1 && getModifier(styles, `flex_${width}`, ''),
      !isFilled && styles.modifiers.noFill,
      alignRight && styles.modifiers.alignRight,
      isIcon && styles.modifiers.icon,
      className
    )}
    {...props}
  >
    {children}
  </div>
);
