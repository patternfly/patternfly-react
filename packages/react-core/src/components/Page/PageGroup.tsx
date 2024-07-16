import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Page/page';
import { formatBreakpointMods } from '../../helpers/util';
import { PageContext } from './PageContext';
export interface PageGroupProps extends React.HTMLProps<HTMLDivElement> {
  /** Additional classes to apply to the PageGroup */
  className?: string;
  /** Content rendered inside of the PageGroup */
  children?: React.ReactNode;
  /** Modifier indicating if the PageBreadcrumb is sticky to the top or bottom at various breakpoints */
  stickyOnBreakpoint?: {
    default?: 'top' | 'bottom';
    sm?: 'top' | 'bottom';
    md?: 'top' | 'bottom';
    lg?: 'top' | 'bottom';
    xl?: 'top' | 'bottom';
    '2xl'?: 'top' | 'bottom';
  };
  /** Enables the page group to fill the available vertical space if true, or disable filling if false. */
  isFilled?: boolean;
  /** Modifier indicating if PageGroup should have a shadow at the top */
  hasShadowTop?: boolean;
  /** Modifier indicating if PageGroup should have a shadow at the bottom */
  hasShadowBottom?: boolean;
  /** Flag indicating if the PageGroup has a scrolling overflow */
  hasOverflowScroll?: boolean;
  /** Adds an accessible name to the page group when the hasOverflowScroll prop is set to true. */
  'aria-label'?: string;
}

export const PageGroup = ({
  className = '',
  children,
  stickyOnBreakpoint,
  isFilled,
  hasShadowTop = false,
  hasShadowBottom = false,
  hasOverflowScroll = false,
  'aria-label': ariaLabel,
  ...props
}: PageGroupProps) => {
  const { height, getVerticalBreakpoint } = React.useContext(PageContext);

  React.useEffect(() => {
    if (hasOverflowScroll && !ariaLabel) {
      /* eslint-disable no-console */
      console.warn('PageGroup: An accessible aria-label is required when hasOverflowScroll is set to true.');
    }
  }, [hasOverflowScroll, ariaLabel]);

  return (
    <div
      {...props}
      className={css(
        styles.pageMainGroup,
        formatBreakpointMods(stickyOnBreakpoint, styles, 'sticky-', getVerticalBreakpoint(height), true),
        isFilled === false && styles.modifiers.noFill,
        isFilled === true && styles.modifiers.fill,
        hasShadowTop && styles.modifiers.shadowTop,
        hasShadowBottom && styles.modifiers.shadowBottom,
        hasOverflowScroll && styles.modifiers.overflowScroll,
        className
      )}
      {...(hasOverflowScroll && { tabIndex: 0, role: 'region', 'aria-label': ariaLabel })}
    >
      {children}
    </div>
  );
};
PageGroup.displayName = 'PageGroup';
