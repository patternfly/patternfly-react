import styles from '@patternfly/react-styles/css/components/Toolbar/toolbar';
import { css } from '@patternfly/react-styles';
import { formatBreakpointMods, setBreakpointCssVars, toCamel } from '../../helpers/util';
import c_toolbar__item_Width from '@patternfly/react-tokens/dist/esm/c_toolbar__item_Width';
import c_toolbar__item_m_w_sm_Width from '@patternfly/react-tokens/dist/esm/c_toolbar__item_m_w_sm_Width';
import c_toolbar__item_m_w_md_Width from '@patternfly/react-tokens/dist/esm/c_toolbar__item_m_w_md_Width';
import c_toolbar__item_m_w_lg_Width from '@patternfly/react-tokens/dist/esm/c_toolbar__item_m_w_lg_Width';
import c_toolbar__item_m_w_xl_Width from '@patternfly/react-tokens/dist/esm/c_toolbar__item_m_w_xl_Width';
import c_toolbar__item_m_w_2xl_Width from '@patternfly/react-tokens/dist/esm/c_toolbar__item_m_w_2xl_Width';
import c_toolbar__item_m_w_3xl_Width from '@patternfly/react-tokens/dist/esm/c_toolbar__item_m_w_3xl_Width';
import c_toolbar__item_m_w_4xl_Width from '@patternfly/react-tokens/dist/esm/c_toolbar__item_m_w_4xl_Width';
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
  /** Width modifier at various breakpoints */
  widths?: {
    default?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl';
    sm?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl';
    md?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl';
    lg?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl';
    xl?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl';
    '2xl'?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl';
  };
  /** Flex grow modifier at various breakpoints */
  flexGrow?: {
    default?: 'flexGrow';
    sm?: 'flexGrow';
    md?: 'flexGrow';
    lg?: 'flexGrow';
    xl?: 'flexGrow';
    '2xl'?: 'flexGrow';
  };
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
  /** Value to set for row wrapping at various breakpoints */
  rowWrap?: {
    default?: 'wrap' | 'nowrap';
    sm?: 'wrap' | 'nowrap';
    md?: 'wrap' | 'nowrap';
    lg?: 'wrap' | 'nowrap';
    xl?: 'wrap' | 'nowrap';
    '2xl'?: 'wrap' | 'nowrap';
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
            className,
            formatBreakpointMods(flexGrow, styles, '', getBreakpoint(width))
          )}
          style={{
            ...style,
            ...(widths
              ? setBreakpointCssVars(
                  Object.entries(widths).reduce(
                    (acc, [bp, size]) => {
                      if (!size) {
                        return acc;
                      }
                      const valueMap: Record<string, string> = {
                        sm: (c_toolbar__item_m_w_sm_Width as any)?.value,
                        md: (c_toolbar__item_m_w_md_Width as any)?.value,
                        lg: (c_toolbar__item_m_w_lg_Width as any)?.value,
                        xl: (c_toolbar__item_m_w_xl_Width as any)?.value,
                        '2xl': (c_toolbar__item_m_w_2xl_Width as any)?.value,
                        '3xl': (c_toolbar__item_m_w_3xl_Width as any)?.value,
                        '4xl': (c_toolbar__item_m_w_4xl_Width as any)?.value
                      };
                      const tokenValue = valueMap[size as keyof typeof valueMap];
                      return tokenValue ? { ...acc, [bp]: tokenValue } : acc;
                    },
                    {} as Record<string, string>
                  ),
                  (c_toolbar__item_Width as any).name
                )
              : undefined)
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
