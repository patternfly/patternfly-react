import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Page/page';
import { formatBreakpointMods, Mods } from '../../helpers/util';
import { PageContext } from './PageContext';
import { PageBody } from './PageBody';

export interface PageBreadcrumbProps extends React.HTMLProps<HTMLElement> {
  /** Additional classes to apply to the PageBreadcrumb */
  className?: string;
  /** Content rendered inside of the PageBreadcrumb */
  children?: React.ReactNode;
  /** Limits the width of the breadcrumb */
  isWidthLimited?: boolean;
  /** Modifier indicating if the PageBreadcrumb is sticky to the top or bottom at various breakpoints */
  stickyOnBreakpoint?: {
    default?: 'top' | 'bottom';
    sm?: 'top' | 'bottom';
    md?: 'top' | 'bottom';
    lg?: 'top' | 'bottom';
    xl?: 'top' | 'bottom';
    '2xl'?: 'top' | 'bottom';
  };
  /** Flag indicating if PageBreadcrumb should have a shadow at the top */
  hasShadowTop?: boolean;
  /** Flag indicating if PageBreadcrumb should have a shadow at the bottom */
  hasShadowBottom?: boolean;
  /** Flag indicating if the PageBreadcrumb has a scrolling overflow */
  hasOverflowScroll?: boolean;
  /** @beta Flag indicating whether children passed to the component should be wrapped by a PageBody.
   * Set this to false in order to pass multiple, custom PageBody's as children.
   */
  hasBodyWrapper?: boolean;
  /** Adds an accessible name to the breadcrumb section. Required when the hasOverflowScroll prop is set to true. */
  'aria-label'?: string;
}

export const PageBreadcrumb = ({
  className = '',
  children,
  isWidthLimited,
  stickyOnBreakpoint,
  hasShadowTop = false,
  hasShadowBottom = false,
  hasOverflowScroll = false,
  'aria-label': ariaLabel,
  hasBodyWrapper = true,
  ...props
}: PageBreadcrumbProps) => {
  const { height, getVerticalBreakpoint } = React.useContext(PageContext);

  React.useEffect(() => {
    if (hasOverflowScroll && !ariaLabel) {
      /* eslint-disable no-console */
      console.warn('PageBreadcrumb: An accessible aria-label is required when hasOverflowScroll is set to true.');
    }
  }, [hasOverflowScroll, ariaLabel]);

  return (
    <section
      className={css(
        styles.pageMainBreadcrumb,
        formatBreakpointMods(stickyOnBreakpoint as Mods, styles, 'sticky-', getVerticalBreakpoint(height), true),
        isWidthLimited && styles.modifiers.limitWidth,
        hasShadowTop && styles.modifiers.shadowTop,
        hasShadowBottom && styles.modifiers.shadowBottom,
        hasOverflowScroll && styles.modifiers.overflowScroll,
        className
      )}
      {...(hasOverflowScroll && { tabIndex: 0 })}
      aria-label={ariaLabel}
      {...props}
    >
      {hasBodyWrapper ? <PageBody>{children}</PageBody> : children}
    </section>
  );
};
PageBreadcrumb.displayName = 'PageBreadcrumb';
