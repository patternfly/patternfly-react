import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/Page/page';
import { css } from '@patternfly/react-styles';
import { formatBreakpointMods } from '../../helpers/util';
import { PageContext } from './PageContext';
import { PageBody } from './PageBody';

export enum PageSectionVariants {
  default = 'default',
  secondary = 'secondary'
}

export enum PageSectionTypes {
  default = 'default',
  subNav = 'subnav',
  breadcrumb = 'breadcrumb',
  tabs = 'tabs',
  wizard = 'wizard'
}

export interface PageSectionProps extends React.HTMLProps<HTMLDivElement> {
  /** Content rendered inside the section */
  children?: React.ReactNode;
  /** Additional classes added to the section */
  className?: string;
  /** Section background color variant. This will only apply when the type prop has the "default" value. */
  variant?: 'default' | 'secondary';
  /** Section type variant */
  type?: 'default' | 'subnav' | 'breadcrumb' | 'tabs' | 'wizard';
  /** Enables the page section to fill the available vertical space if true, or disable filling if false. */
  isFilled?: boolean;
  /** Limits the width of the section */
  isWidthLimited?: boolean;
  /** Flag indicating if the section content is center aligned. isWidthLimited must be set for this to work  */
  isCenterAligned?: boolean;
  /** Padding at various breakpoints. */
  padding?: {
    default?: 'padding' | 'noPadding';
    sm?: 'padding' | 'noPadding';
    md?: 'padding' | 'noPadding';
    lg?: 'padding' | 'noPadding';
    xl?: 'padding' | 'noPadding';
    '2xl'?: 'padding' | 'noPadding';
  };
  /** Modifier indicating if the PageBreadcrumb is sticky to the top or bottom at various breakpoints */
  stickyOnBreakpoint?: {
    default?: 'top' | 'bottom';
    sm?: 'top' | 'bottom';
    md?: 'top' | 'bottom';
    lg?: 'top' | 'bottom';
    xl?: 'top' | 'bottom';
    '2xl'?: 'top' | 'bottom';
  };
  /** Modifier indicating if PageSection should have a shadow at the top */
  hasShadowTop?: boolean;
  /** Modifier indicating if PageSection should have a shadow at the bottom */
  hasShadowBottom?: boolean;
  /** Flag indicating if the PageSection has a scrolling overflow */
  hasOverflowScroll?: boolean;
  /** @beta Flag indicating whether children passed to the component should be wrapped by a PageBody.
   * Set this to false in order to pass multiple, custom PageBody's as children.
   */
  hasBodyWrapper?: boolean;
  /** Adds an accessible name to the page section. Required when the hasOverflowScroll prop is set to true.
   * This prop should also be passed in if a heading is not being used to describe the content of the page section.
   */
  'aria-label'?: string;
  /** Sets the base component to render. Defaults to section */
  component?: keyof JSX.IntrinsicElements;
}

const variantType = {
  [PageSectionTypes.default]: styles.pageMainSection,
  [PageSectionTypes.subNav]: styles.pageMainSubnav,
  [PageSectionTypes.breadcrumb]: styles.pageMainBreadcrumb,
  [PageSectionTypes.tabs]: styles.pageMainTabs,
  [PageSectionTypes.wizard]: styles.pageMainWizard
};

const variantStyle = {
  [PageSectionVariants.default]: '',
  [PageSectionVariants.secondary]: styles.modifiers.secondary
};

export const PageSection: React.FunctionComponent<PageSectionProps> = ({
  className = '',
  children,
  variant = 'default',
  type = 'default',
  padding,
  isFilled,
  isWidthLimited = false,
  isCenterAligned = false,
  stickyOnBreakpoint,
  hasShadowTop = false,
  hasShadowBottom = false,
  hasOverflowScroll = false,
  'aria-label': ariaLabel,
  component = 'section',
  hasBodyWrapper = true,
  ...props
}: PageSectionProps) => {
  const { height, getVerticalBreakpoint } = React.useContext(PageContext);

  React.useEffect(() => {
    if (hasOverflowScroll && !ariaLabel) {
      /* eslint-disable no-console */
      console.warn('PageSection: An accessible aria-label is required when hasOverflowScroll is set to true.');
    }
  }, [hasOverflowScroll, ariaLabel]);

  const Component = component as any;

  return (
    <Component
      {...props}
      className={css(
        variantType[type],
        formatBreakpointMods(padding, styles),
        formatBreakpointMods(stickyOnBreakpoint, styles, 'sticky-', getVerticalBreakpoint(height), true),
        type === PageSectionTypes.default && variantStyle[variant],
        isFilled === false && styles.modifiers.noFill,
        isFilled === true && styles.modifiers.fill,
        isWidthLimited && styles.modifiers.limitWidth,
        isWidthLimited && isCenterAligned && type !== PageSectionTypes.subNav && styles.modifiers.alignCenter,
        hasShadowTop && styles.modifiers.shadowTop,
        hasShadowBottom && styles.modifiers.shadowBottom,
        hasOverflowScroll && styles.modifiers.overflowScroll,
        className
      )}
      {...(hasOverflowScroll && { tabIndex: 0 })}
      aria-label={ariaLabel}
    >
      {hasBodyWrapper ? <PageBody>{children}</PageBody> : children}
    </Component>
  );
};
PageSection.displayName = 'PageSection';
