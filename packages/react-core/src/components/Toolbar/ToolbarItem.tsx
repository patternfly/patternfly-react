import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/Toolbar/toolbar';
import { css } from '@patternfly/react-styles';

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
  /** Visibility at various breakpoints. */
  visiblity?: {
    default?: 'hidden' | 'visible';
    md?: 'hidden' | 'visible';
    lg?: 'hidden' | 'visible';
    xl?: 'hidden' | 'visible';
    '2xl'?: 'hidden' | 'visible';
  };
  /** Alignment at various breakpoints. */
  alignment?: {
    default?: 'alignRight' | 'alignLeft';
    md?: 'alignRight' | 'alignLeft';
    lg?: 'alignRight' | 'alignLeft';
    xl?: 'alignRight' | 'alignLeft';
    '2xl'?: 'alignRight' | 'alignLeft';
  };
  /** Spacers at various breakpoints. */
  spacer?: {
    default?: 'spacerNone' | 'spacerSm' | 'spacerMd' | 'spacerLg';
    md?: 'spacerNone' | 'spacerSm' | 'spacerMd' | 'spacerLg';
    lg?: 'spacerNone' | 'spacerSm' | 'spacerMd' | 'spacerLg';
    xl?: 'spacerNone' | 'spacerSm' | 'spacerMd' | 'spacerLg';
    '2xl'?: 'spacerNone' | 'spacerSm' | 'spacerMd' | 'spacerLg';
  };
  /** id for this data toolbar item */
  id?: string;
  /** Content to be rendered inside the data toolbar item */
  children?: React.ReactNode;
}

export const ToolbarItem: React.FunctionComponent<ToolbarItemProps> = ({
  className,
  variant,
  visiblity,
  alignment,
  spacer,
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
        formatBreakpointMods(visiblity, styles),
        formatBreakpointMods(alignment, styles),
        formatBreakpointMods(spacer, styles),
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
