import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/ChipGroup/chip-group';

export interface ChipGroupToolbarItemProps extends React.HTMLProps<HTMLUListElement> {
  /**  Category name text */  
  categoryName?: string;
  /** Content rendered inside the chip text */
  children: React.ReactNode; 
  /** Additional classes added to the chip item */
  className?: string;   
}

export const ChipGroupToolbarItem: React.FunctionComponent<ChipGroupToolbarItemProps> = ({
  categoryName = '', 
  children = null, 
  className = '', 
  ...props
}: ChipGroupToolbarItemProps) => {
    if (React.Children.count(children)) {
      return(
        <ul className={css(styles.chipGroup, styles.modifiers.toolbar)} {...props}>
          <li>
            <h4 className={css(styles.chipGroupLabel)}>{categoryName}</h4>
            <ul className={css(styles.chipGroup)}>{children}</ul>
          </li>
        </ul>
      );
    }
    return null;
  }; 