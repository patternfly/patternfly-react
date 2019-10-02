import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/ChipGroup/chip-group';
import { ChipGroupContext } from './ChipGroup';

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
    return (
      <ChipGroupContext.Consumer>
        {(HeadingLevel: any) => {
          return (
            <ul className={css(styles.chipGroup, styles.modifiers.toolbar, className)} {...props}>
              <li>
                <HeadingLevel className={css(styles.chipGroupLabel)}>{categoryName}</HeadingLevel>
                <ul className={css(styles.chipGroup)}>{children}</ul>
              </li>
            </ul>
          );
        }}
      </ChipGroupContext.Consumer>
    );
  }
  return null;
};
