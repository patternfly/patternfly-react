import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/Toolbar/toolbar';
import { css } from '@patternfly/react-styles';
import { formatBreakpointMods, toCamel } from '../../helpers/util';
import { Divider } from '../Divider';
import { PageContext } from '../Page/PageContext';

export enum ToolbarItemVariant {
  separator = 'separator',
  pagination = 'pagination',
  label = 'label',
  'label-group' = 'label-group',
  'expand-all' = 'expand-all'
}

export interface ToolbarItemProps extends React.HTMLProps<HTMLDivElement> {
  /** Classes applied to root element of the data toolbar item */
  className?: string;
  /** A type modifier which modifies spacing specifically depending on the type of item */
  variant?: ToolbarItemVariant | 'pagination' | 'label' | 'label-group' | 'separator' | 'expand-all';
  /** Visibility at various breakpoints. */
  visibility?: {
    default?: 'hidden' | 'visible';
    md?: 'hidden' | 'visible';
    lg?: 'hidden' | 'visible';
    xl?: 'hidden' | 'visible';
    '2xl'?: 'hidden' | 'visible';
  };
  /** Applies to a child of a flex layout, and aligns that child (and any adjacent children on the other side of it) to one side of the main axis */
  align?: {
    default?: 'alignEnd' | 'alignStart' | 'alignCenter';
    md?: 'alignEnd' | 'alignStart' | 'alignCenter';
    lg?: 'alignEnd' | 'alignStart' | 'alignCenter';
    xl?: 'alignEnd' | 'alignStart' | 'alignCenter';
    '2xl'?: 'alignEnd' | 'alignStart' | 'alignCenter';
  };
  /** Vertical alignment of children */
  alignItems?: 'start' | 'center' | 'baseline' | 'default' | 'end' | 'stretch';
  /** Vertical alignment */
  alignSelf?: 'start' | 'center' | 'baseline' | 'default' | 'end' | 'stretch';
  /** Sets both the column and row gap at various breakpoints. */
  gap?: {
    default?: 'gapNone' | 'gapXs' | 'gapSm' | 'gapMd' | 'gapLg' | 'gapXl' | 'gap_2xl' | 'gap_3xl' | 'gap_4xl';
    md?: 'gapNone' | 'gapXs' | 'gapSm' | 'gapMd' | 'gapLg' | 'gapXl' | 'gap_2xl' | 'gap_3xl' | 'gap_4xl';
    lg?: 'gapNone' | 'gapXs' | 'gapSm' | 'gapMd' | 'gapLg' | 'gapXl' | 'gap_2xl' | 'gap_3xl' | 'gap_4xl';
    xl?: 'gapNone' | 'gapXs' | 'gapSm' | 'gapMd' | 'gapLg' | 'gapXl' | 'gap_2xl' | 'gap_3xl' | 'gap_4xl';
    '2xl'?: 'gapNone' | 'gapXs' | 'gapSm' | 'gapMd' | 'gapLg' | 'gapXl' | 'gap_2xl' | 'gap_3xl' | 'gap_4xl';
  };
  /** Sets only the column gap at various breakpoints. */
  columnGap?: {
    default?:
      | 'columnGapNone'
      | 'columnGapXs'
      | 'columnGapSm'
      | 'columnGapMd'
      | 'columnGapLg'
      | 'columnGapXl'
      | 'columnGap_2xl'
      | 'columnGap_3xl'
      | 'columnGap_4xl';
    md?:
      | 'columnGapNone'
      | 'columnGapXs'
      | 'columnGapSm'
      | 'columnGapMd'
      | 'columnGapLg'
      | 'columnGapXl'
      | 'columnGap_2xl'
      | 'columnGap_3xl'
      | 'columnGap_4xl';
    lg?:
      | 'columnGapNone'
      | 'columnGapXs'
      | 'columnGapSm'
      | 'columnGapMd'
      | 'columnGapLg'
      | 'columnGapXl'
      | 'columnGap_2xl'
      | 'columnGap_3xl'
      | 'columnGap_4xl';
    xl?:
      | 'columnGapNone'
      | 'columnGapXs'
      | 'columnGapSm'
      | 'columnGapMd'
      | 'columnGapLg'
      | 'columnGapXl'
      | 'columnGap_2xl'
      | 'columnGap_3xl'
      | 'columnGap_4xl';
    '2xl'?:
      | 'columnGapNone'
      | 'columnGapXs'
      | 'columnGapSm'
      | 'columnGapMd'
      | 'columnGapLg'
      | 'columnGapXl'
      | 'columnGap_2xl'
      | 'columnGap_3xl'
      | 'columnGap_4xl';
  };
  /** Sets only the row gap at various breakpoints. */
  rowGap?: {
    default?:
      | 'rowGapNone'
      | 'rowGapXs'
      | 'rowGapSm'
      | 'rowGapMd'
      | 'rowGapLg'
      | 'rowGapXl'
      | 'rowGap_2xl'
      | 'rowGap_3xl'
      | 'rowGap_4xl';
    md?:
      | 'rowGapNone'
      | 'rowGapXs'
      | 'rowGapSm'
      | 'rowGapMd'
      | 'rowGapLg'
      | 'rowGapXl'
      | 'rowGap_2xl'
      | 'rowGap_3xl'
      | 'rowGap_4xl';
    lg?:
      | 'rowGapNone'
      | 'rowGapXs'
      | 'rowGapSm'
      | 'rowGapMd'
      | 'rowGapLg'
      | 'rowGapXl'
      | 'rowGap_2xl'
      | 'rowGap_3xl'
      | 'rowGap_4xl';
    xl?:
      | 'rowGapNone'
      | 'rowGapXs'
      | 'rowGapSm'
      | 'rowGapMd'
      | 'rowGapLg'
      | 'rowGapXl'
      | 'rowGap_2xl'
      | 'rowGap_3xl'
      | 'rowGap_4xl';
    '2xl'?:
      | 'rowGapNone'
      | 'rowGapXs'
      | 'rowGapSm'
      | 'rowGapMd'
      | 'rowGapLg'
      | 'rowGapXl'
      | 'rowGap_2xl'
      | 'rowGap_3xl'
      | 'rowGap_4xl';
  };
  /** id for this data toolbar item */
  id?: string;
  /** Flag indicating if the expand-all variant is expanded or not */
  isAllExpanded?: boolean;
  /** Flag that modifies the toolbar item to hide overflow and respond to available space. Used for horizontal navigation. */
  isOverflowContainer?: boolean;
  /** Content to be rendered inside the data toolbar item */
  children?: React.ReactNode;
}

export const ToolbarItem: React.FunctionComponent<ToolbarItemProps> = ({
  className,
  variant,
  visibility,
  gap,
  columnGap,
  rowGap,
  align,
  alignSelf,
  alignItems,
  id,
  children,
  isAllExpanded,
  isOverflowContainer,
  ...props
}: ToolbarItemProps) => {
  if (variant === ToolbarItemVariant.separator) {
    return <Divider className={css(className)} orientation={{ default: 'vertical' }} {...props} />;
  }

  return (
    <PageContext.Consumer>
      {({ width, getBreakpoint }) => (
        <div
          className={css(
            styles.toolbarItem,
            variant && styles.modifiers[toCamel(variant) as 'pagination' | 'label'],
            variant === ToolbarItemVariant['label-group'] && styles.modifiers.labelGroup,
            isAllExpanded && styles.modifiers.expanded,
            isOverflowContainer && styles.modifiers.overflowContainer,
            formatBreakpointMods(visibility, styles, '', getBreakpoint(width)),
            formatBreakpointMods(align, styles, '', getBreakpoint(width)),
            formatBreakpointMods(gap, styles, '', getBreakpoint(width)),
            formatBreakpointMods(columnGap, styles, '', getBreakpoint(width)),
            formatBreakpointMods(rowGap, styles, '', getBreakpoint(width)),
            alignItems === 'start' && styles.modifiers.alignItemsStart,
            alignItems === 'center' && styles.modifiers.alignItemsCenter,
            alignItems === 'baseline' && styles.modifiers.alignItemsBaseline,
            alignSelf === 'start' && styles.modifiers.alignSelfStart,
            alignSelf === 'center' && styles.modifiers.alignSelfCenter,
            alignSelf === 'baseline' && styles.modifiers.alignSelfBaseline,
            className
          )}
          {...(variant === 'label' && { 'aria-hidden': true })}
          id={id}
          {...props}
        >
          {children}
        </div>
      )}
    </PageContext.Consumer>
  );
};
ToolbarItem.displayName = 'ToolbarItem';
