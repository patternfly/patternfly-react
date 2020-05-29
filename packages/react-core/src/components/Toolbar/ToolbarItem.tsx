import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/Toolbar/toolbar';
import { css } from '@patternfly/react-styles';

import { ToolbarBreakpointMod } from './ToolbarUtils';
import { formatBreakpointMods, toCamel } from '../../helpers/util';
import { Divider } from '../Divider';

export enum ToolbarItemVariant {
  separator = 'separator',
  'bulk-select' = 'bulk-select',
  'overflow-menu' = 'overflow-menu',
  pagination = 'pagination',
  'search-filter' = 'search-filter',
  label = 'label',
  'chip-group' = 'chip-group'
}

export interface ToolbarItemProps extends React.HTMLProps<HTMLDivElement> {
  /** Classes applied to root element of the data toolbar item */
  className?: string;
  /** A type modifier which modifies spacing specifically depending on the type of item */
  variant?:
    | ToolbarItemVariant
    | 'bulk-select'
    | 'overflow-menu'
    | 'pagination'
    | 'search-filter'
    | 'label'
    | 'chip-group'
    | 'separator';
  /** An array of objects representing the various modifiers to apply to the data toolbar item at various breakpoints */
  breakpointMods?: (
    | {
        modifier:
          | 'hidden'
          | 'visible'
          | 'align-right'
          | 'align-left'
          | 'spacer-none'
          | 'spacer-sm'
          | 'spacer-md'
          | 'spacer-lg'
          | 'space-items-none'
          | 'space-items-sm'
          | 'space-items-md'
          | 'space-items-lg';
        breakpoint?: 'md' | 'lg' | 'xl' | '2xl';
      }
    | ToolbarBreakpointMod)[];
  /** id for this data toolbar item */
  id?: string;
  /** Content to be rendered inside the data toolbar item */
  children?: React.ReactNode;
}

export const ToolbarItem: React.FunctionComponent<ToolbarItemProps> = ({
  className,
  variant,
  breakpointMods,
  id,
  children,
  ...props
}: ToolbarItemProps) => {
  if (variant === ToolbarItemVariant.separator) {
    return <Divider className={css(styles.modifiers.vertical, className)} {...props} />;
  }

  return (
    <div
      className={css(
        styles.toolbarItem,
        variant &&
          styles.modifiers[
            toCamel(variant) as 'bulkSelect' | 'overflowMenu' | 'pagination' | 'searchFilter' | 'label' | 'chipGroup'
          ],
        formatBreakpointMods(breakpointMods, styles),
        className
      )}
      {...(variant === 'label' && { 'aria-hidden': true })}
      id={id}
      {...props}
    >
      {children}
    </div>
  );
};
