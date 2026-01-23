import { FunctionComponent, ReactNode } from 'react';
import styles from '@patternfly/react-styles/css/components/Toolbar/toolbar';
import { css } from '@patternfly/react-styles';
import { formatBreakpointMods, setBreakpointCssVars, toCamel } from '../../helpers/util';
import toolbarItemWidth from '@patternfly/react-tokens/dist/esm/c_toolbar__item_Width';
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
  className?: string;
  variant?: ToolbarItemVariant | 'pagination' | 'label' | 'label-group' | 'separator' | 'expand-all';

  widths?: {
    default?: string;
    sm?: string;
    md?: string;
    lg?: string;
    xl?: string;
    '2xl'?: string;
  };

  flexGrow?: {
    default?: boolean;
    sm?: boolean;
    md?: boolean;
    lg?: boolean;
    xl?: boolean;
    '2xl'?: boolean;
  };

  visibility?: {
    default?: 'hidden' | 'visible';
    md?: 'hidden' | 'visible';
    lg?: 'hidden' | 'visible';
    xl?: 'hidden' | 'visible';
    '2xl'?: 'hidden' | 'visible';
  };

  align?: {
    default?: 'alignEnd' | 'alignStart' | 'alignCenter';
    md?: 'alignEnd' | 'alignStart' | 'alignCenter';
    lg?: 'alignEnd' | 'alignStart' | 'alignCenter';
    xl?: 'alignEnd' | 'alignStart' | 'alignCenter';
    '2xl'?: 'alignEnd' | 'alignStart' | 'alignCenter';
  };

  alignItems?: 'start' | 'center' | 'baseline' | 'default' | 'end' | 'stretch';
  alignSelf?: 'start' | 'center' | 'baseline' | 'default' | 'end' | 'stretch';

  gap?: {
    default?: 'gapNone' | 'gapSm' | 'gapMd' | 'gapLg' | 'gapXl' | 'gap2xl';
    sm?: 'gapNone' | 'gapSm' | 'gapMd' | 'gapLg' | 'gapXl' | 'gap2xl';
    md?: 'gapNone' | 'gapSm' | 'gapMd' | 'gapLg' | 'gapXl' | 'gap2xl';
    lg?: 'gapNone' | 'gapSm' | 'gapMd' | 'gapLg' | 'gapXl' | 'gap2xl';
    xl?: 'gapNone' | 'gapSm' | 'gapMd' | 'gapLg' | 'gapXl' | 'gap2xl';
    '2xl'?: 'gapNone' | 'gapSm' | 'gapMd' | 'gapLg' | 'gapXl' | 'gap2xl';
  };

  columnGap?: {
    default?: 'columnGapNone' | 'columnGapSm' | 'columnGapMd' | 'columnGapLg' | 'columnGapXl' | 'columnGap2xl';
    sm?: 'columnGapNone' | 'columnGapSm' | 'columnGapMd' | 'columnGapLg' | 'columnGapXl' | 'columnGap2xl';
    md?: 'columnGapNone' | 'columnGapSm' | 'columnGapMd' | 'columnGapLg' | 'columnGapXl' | 'columnGap2xl';
    lg?: 'columnGapNone' | 'columnGapSm' | 'columnGapMd' | 'columnGapLg' | 'columnGapXl' | 'columnGap2xl';
    xl?: 'columnGapNone' | 'columnGapSm' | 'columnGapMd' | 'columnGapLg' | 'columnGapXl' | 'columnGap2xl';
    '2xl'?: 'columnGapNone' | 'columnGapSm' | 'columnGapMd' | 'columnGapLg' | 'columnGapXl' | 'columnGap2xl';
  };

  rowGap?: {
    default?: 'rowGapNone' | 'rowGapSm' | 'rowGapMd' | 'rowGapLg' | 'rowGapXl' | 'rowGap2xl';
    sm?: 'rowGapNone' | 'rowGapSm' | 'rowGapMd' | 'rowGapLg' | 'rowGapXl' | 'rowGap2xl';
    md?: 'rowGapNone' | 'rowGapSm' | 'rowGapMd' | 'rowGapLg' | 'rowGapXl' | 'rowGap2xl';
    lg?: 'rowGapNone' | 'rowGapSm' | 'rowGapMd' | 'rowGapLg' | 'rowGapXl' | 'rowGap2xl';
    xl?: 'rowGapNone' | 'rowGapSm' | 'rowGapMd' | 'rowGapLg' | 'rowGapXl' | 'rowGap2xl';
    '2xl'?: 'rowGapNone' | 'rowGapSm' | 'rowGapMd' | 'rowGapLg' | 'rowGapXl' | 'rowGap2xl';
  };

  rowWrap?: {
    default?: 'wrap' | 'nowrap';
    sm?: 'wrap' | 'nowrap';
    md?: 'wrap' | 'nowrap';
    lg?: 'wrap' | 'nowrap';
    xl?: 'wrap' | 'nowrap';
    '2xl'?: 'wrap' | 'nowrap';
  };

  id?: string;
  isAllExpanded?: boolean;
  isOverflowContainer?: boolean;
  children?: ReactNode;
}

export const ToolbarItem: FunctionComponent<ToolbarItemProps> = ({
  className,
  variant,
  visibility,
  gap,
  columnGap,
  rowGap,
  rowWrap,
  align,
  alignSelf,
  alignItems,
  id,
  children,
  isAllExpanded,
  isOverflowContainer,
  widths,
  flexGrow,
  role,
  style,
  ...props
}: ToolbarItemProps) => {
  if (variant === ToolbarItemVariant.separator) {
    const isDividerRoleValid = role === 'separator' || role === 'presentation';
    return (
      <Divider
        className={css(className)}
        orientation={{ default: 'vertical' }}
        {...props}
        {...(isDividerRoleValid && { role: role as 'separator' | 'presentation' })}
      />
    );
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
            alignItems === 'start' && styles.modifiers.alignItemsStart,
            alignItems === 'center' && styles.modifiers.alignItemsCenter,
            alignItems === 'baseline' && styles.modifiers.alignItemsBaseline,
            alignSelf === 'start' && styles.modifiers.alignSelfStart,
            alignSelf === 'center' && styles.modifiers.alignSelfCenter,
            alignSelf === 'baseline' && styles.modifiers.alignSelfBaseline,
            formatBreakpointMods(visibility, styles, '', getBreakpoint(width)),
            formatBreakpointMods(align, styles, '', getBreakpoint(width)),
            formatBreakpointMods(gap, styles, '', getBreakpoint(width)),
            formatBreakpointMods(columnGap, styles, '', getBreakpoint(width)),
            formatBreakpointMods(rowGap, styles, '', getBreakpoint(width)),
            formatBreakpointMods(rowWrap, styles, '', getBreakpoint(width)),
            formatBreakpointMods(flexGrow, styles, '', getBreakpoint(width)),
            className
          )}
          style={{
            ...style,
            ...(widths ? setBreakpointCssVars(widths, toolbarItemWidth.name) : undefined)
          }}
          {...(variant === 'label' && { 'aria-hidden': true })}
          id={id}
          role={role}
          {...props}
        >
          {children}
        </div>
      )}
    </PageContext.Consumer>
  );
};

ToolbarItem.displayName = 'ToolbarItem';
