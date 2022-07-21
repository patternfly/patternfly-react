import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Page/page';
import { formatBreakpointMods } from '../../helpers/util';
import { PageContext } from '../Page/Page';

export interface PageNavigationProps extends React.HTMLProps<HTMLDivElement> {
  /** Additional classes to apply to the PageNavigation */
  className?: string;
  /** Content rendered inside of the PageNavigation */
  children?: React.ReactNode;
  /** Limits the width of the PageNavigation */
  isWidthLimited?: boolean;
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
  /** Flag indicating if PageNavigation should have a shadow at the top */
  hasShadowTop?: boolean;
  /** Flag indicating if PageNavigation should have a shadow at the bottom */
  hasShadowBottom?: boolean;
  /** Flag indicating if the PageNavigation has a scrolling overflow */
  hasOverflowScroll?: boolean;
}

export const PageNavigation = ({
  className = '',
  children,
  isWidthLimited,
  sticky,
  stickyOnBreakpoint,
  hasShadowTop = false,
  hasShadowBottom = false,
  hasOverflowScroll = false,
  ...props
}: PageNavigationProps) => {
  const { height, getVerticalBreakpoint } = React.useContext(PageContext);

  return (
    <div
      className={css(
        styles.pageMainNav,
        formatBreakpointMods(stickyOnBreakpoint, styles, 'sticky-', getVerticalBreakpoint(height), true),
        isWidthLimited && styles.modifiers.limitWidth,
        sticky === 'top' && styles.modifiers.stickyTop,
        sticky === 'bottom' && styles.modifiers.stickyBottom,
        hasShadowTop && styles.modifiers.shadowTop,
        hasShadowBottom && styles.modifiers.shadowBottom,
        hasOverflowScroll && styles.modifiers.overflowScroll,
        className
      )}
      {...(hasOverflowScroll && { tabIndex: 0 })}
      {...props}
    >
      {isWidthLimited && <div className={css(styles.pageMainBody)}>{children}</div>}
      {!isWidthLimited && children}
    </div>
  );
};
PageNavigation.displayName = 'PageNavigation';
