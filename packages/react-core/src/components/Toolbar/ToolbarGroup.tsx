import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/Toolbar/toolbar';
import { css } from '@patternfly/react-styles';
import { formatBreakpointMods, toCamel } from '../../helpers/util';
import { PageContext } from '../Page/PageContext';

export enum ToolbarGroupVariant {
  'filter-group' = 'filter-group',
  'icon-button-group' = 'icon-button-group',
  'button-group' = 'button-group'
}

export interface ToolbarGroupProps extends Omit<React.HTMLProps<HTMLDivElement>, 'ref'> {
  /** Classes applied to root element of the data toolbar group */
  className?: string;
  /** A type modifier which modifies spacing specifically depending on the type of group */
  variant?: ToolbarGroupVariant | 'filter-group' | 'icon-button-group' | 'button-group';
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
    default?: 'alignRight' | 'alignLeft';
    md?: 'alignRight' | 'alignLeft';
    lg?: 'alignRight' | 'alignLeft';
    xl?: 'alignRight' | 'alignLeft';
    '2xl'?: 'alignRight' | 'alignLeft';
  };
  /** Vertical alignment of children */
  alignItems?: 'start' | 'center' | 'baseline' | 'default';
  /** Vertical alignment */
  alignSelf?: 'start' | 'center' | 'baseline' | 'default';
  /** Spacers at various breakpoints. */
  spacer?: {
    default?: 'spacerNone' | 'spacerSm' | 'spacerMd' | 'spacerLg';
    md?: 'spacerNone' | 'spacerSm' | 'spacerMd' | 'spacerLg';
    lg?: 'spacerNone' | 'spacerSm' | 'spacerMd' | 'spacerLg';
    xl?: 'spacerNone' | 'spacerSm' | 'spacerMd' | 'spacerLg';
    '2xl'?: 'spacerNone' | 'spacerSm' | 'spacerMd' | 'spacerLg';
  };
  /** Space items at various breakpoints. */
  spaceItems?: {
    default?: 'spaceItemsNone' | 'spaceItemsSm' | 'spaceItemsMd' | 'spaceItemsLg';
    md?: 'spaceItemsNone' | 'spaceItemsSm' | 'spaceItemsMd' | 'spaceItemsLg';
    lg?: 'spaceItemsNone' | 'spaceItemsSm' | 'spaceItemsMd' | 'spaceItemsLg';
    xl?: 'spaceItemsNone' | 'spaceItemsSm' | 'spaceItemsMd' | 'spaceItemsLg';
    '2xl'?: 'spaceItemsNone' | 'spaceItemsSm' | 'spaceItemsMd' | 'spaceItemsLg';
  };
  /** Content to be rendered inside the data toolbar group */
  children?: React.ReactNode;
  /** Flag that modifies the toolbar group to hide overflow and respond to available space. Used for horizontal navigation. */
  isOverflowContainer?: boolean;
  /** @hide Reference to pass to this group if it has .pf-m-chip-container modifier */
  innerRef?: React.RefObject<any>;
}

class ToolbarGroupWithRef extends React.Component<ToolbarGroupProps> {
  render() {
    const {
      visibility,
      align,
      alignItems,
      alignSelf,
      spacer,
      spaceItems,
      className,
      variant,
      children,
      isOverflowContainer,
      innerRef,
      ...props
    } = this.props;

    return (
      <PageContext.Consumer>
        {({ width, getBreakpoint }) => (
          <div
            className={css(
              styles.toolbarGroup,
              variant && styles.modifiers[toCamel(variant) as 'filterGroup' | 'iconButtonGroup' | 'buttonGroup'],
              formatBreakpointMods(visibility, styles, '', getBreakpoint(width)),
              formatBreakpointMods(align, styles, '', getBreakpoint(width)),
              formatBreakpointMods(spacer, styles, '', getBreakpoint(width)),
              formatBreakpointMods(spaceItems, styles, '', getBreakpoint(width)),
              alignItems === 'start' && styles.modifiers.alignItemsStart,
              alignItems === 'center' && styles.modifiers.alignItemsCenter,
              alignItems === 'baseline' && styles.modifiers.alignItemsBaseline,
              alignSelf === 'start' && styles.modifiers.alignSelfStart,
              alignSelf === 'center' && styles.modifiers.alignSelfCenter,
              alignSelf === 'baseline' && styles.modifiers.alignSelfBaseline,
              isOverflowContainer && styles.modifiers.overflowContainer,
              className
            )}
            {...props}
            ref={innerRef}
          >
            {children}
          </div>
        )}
      </PageContext.Consumer>
    );
  }
}

export const ToolbarGroup = React.forwardRef((props: ToolbarGroupProps, ref: any) => (
  <ToolbarGroupWithRef {...props} innerRef={ref} />
));
