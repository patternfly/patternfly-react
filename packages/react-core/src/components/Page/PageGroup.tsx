import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Page/page';
import { formatBreakpointMods } from '../../helpers/util';
import { PageContext } from '../Page/Page';
export interface PageGroupProps extends React.HTMLProps<HTMLDivElement> {
  /** Additional classes to apply to the PageGroup */
  className?: string;
  /** Content rendered inside of the PageGroup */
  children?: React.ReactNode;
  /**  @deprecated Use the stickyOnBreakpoint prop instead - Modifier indicating if the PageBreadcrumb is sticky to the top or bottom */
  sticky?: 'top' | 'bottom';
  /** Modifier indicating if the PageBreadcrumb is sticky to the top or bottom at various breakpoints */
  stickyOnBreakpoint?: {
    default?: 'top' | 'bottom';
    sm?: 'top' | 'bottom';
    md?: 'top' | 'bottom';
    lg?: 'top' | 'bottom';
    xl?: 'top' | 'bottom';
    '2xl'?: 'top' | 'bottom';
  };
  /** Modifier indicating if PageGroup should have a shadow at the top */
  hasShadowTop?: boolean;
  /** Modifier indicating if PageGroup should have a shadow at the bottom */
  hasShadowBottom?: boolean;
  /** Flag indicating if the PageGroup has a scrolling overflow */
  hasOverflowScroll?: boolean;
}

export const PageGroup = ({
  className = '',
  children,
  sticky,
  stickyOnBreakpoint,
  hasShadowTop = false,
  hasShadowBottom = false,
  hasOverflowScroll = false,
  ...props
}: PageGroupProps) => {
  const { height, getVerticalBreakpoint } = React.useContext(PageContext);

  return (
    <div
      {...props}
      className={css(
        styles.pageMainGroup,
        formatBreakpointMods(stickyOnBreakpoint, styles, 'sticky-', getVerticalBreakpoint(height), true),
        sticky === 'top' && styles.modifiers.stickyTop,
        sticky === 'bottom' && styles.modifiers.stickyBottom,
        hasShadowTop && styles.modifiers.shadowTop,
        hasShadowBottom && styles.modifiers.shadowBottom,
        hasOverflowScroll && styles.modifiers.overflowScroll,
        className
      )}
      {...(hasOverflowScroll && { tabIndex: 0 })}
    >
      {children}
    </div>
  );
};
PageGroup.displayName = 'PageGroup';
