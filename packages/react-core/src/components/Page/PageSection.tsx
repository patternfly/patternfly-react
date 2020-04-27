import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/Page/page';
import { css } from '@patternfly/react-styles';

export enum PageSectionVariants {
  default = 'default',
  light = 'light',
  dark = 'dark',
  darker = 'darker'
}

export enum PageSectionTypes {
  default = 'default',
  nav = 'nav'
}

export enum PageSectionBreakpoints {
  sm = 'sm',
  md = 'md',
  lg = 'lg',
  xl = 'xl',
  '2xl' = '2xl'
}

export interface PageSectionProps extends React.HTMLProps<HTMLDivElement> {
  /** Content rendered inside the section */
  children?: React.ReactNode;
  /** Additional classes added to the section */
  className?: string;
  /** Section background color variant */
  variant?: 'default' | 'light' | 'dark' | 'darker';
  /** Section type variant */
  type?: 'default' | 'nav';
  /** Enables the page section to fill the available vertical space */
  isFilled?: boolean;
  /** Modifies a main page section to have no padding */
  hasNoPadding?: boolean;
  /** Modifies a main page section to have padding on specific screen size breakpoints */
  hasPaddingOn?: ('sm' | 'md' | 'lg' | 'xl' | '2xl')[] | ('sm' | 'md' | 'lg' | 'xl' | '2xl');
  /** Modifies a main page section to not have padding on specific screen size breakpoints */
  hasNoPaddingOn?: ('sm' | 'md' | 'lg' | 'xl' | '2xl')[] | ('sm' | 'md' | 'lg' | 'xl' | '2xl');
}

const variantType = {
  [PageSectionTypes.default]: styles.pageMainSection,
  [PageSectionTypes.nav]: styles.pageMainNav
};

const variantStyle = {
  [PageSectionVariants.default]: '',
  [PageSectionVariants.light]: styles.modifiers.light,
  [PageSectionVariants.dark]: styles.modifiers.dark_200,
  [PageSectionVariants.darker]: styles.modifiers.dark_100
};

const paddingBreakpoints = {
  [PageSectionBreakpoints.sm]: styles.modifiers.paddingOnSm,
  [PageSectionBreakpoints.md]: styles.modifiers.paddingOnMd,
  [PageSectionBreakpoints.lg]: styles.modifiers.paddingOnLg,
  [PageSectionBreakpoints.xl]: styles.modifiers.paddingOnXl,
  [PageSectionBreakpoints['2xl']]: styles.modifiers.paddingOn_2xl
};

const noPaddingBreakpoints = {
  [PageSectionBreakpoints.sm]: styles.modifiers.noPaddingOnSm,
  [PageSectionBreakpoints.md]: styles.modifiers.noPaddingOnMd,
  [PageSectionBreakpoints.lg]: styles.modifiers.noPaddingOnLg,
  [PageSectionBreakpoints.xl]: styles.modifiers.noPaddingOnXl,
  [PageSectionBreakpoints['2xl']]: styles.modifiers.noPaddingOn_2xl
};

export const PageSection: React.FunctionComponent<PageSectionProps> = ({
  className = '',
  children,
  variant = 'default',
  type = 'default',
  hasNoPadding = false,
  hasPaddingOn,
  hasNoPaddingOn,
  isFilled,
  ...props
}: PageSectionProps) => (
  <section
    {...props}
    className={css(
      variantType[type],
      hasNoPadding && styles.modifiers.noPadding,
      hasPaddingOn &&
        (hasPaddingOn.constructor !== Array
          ? paddingBreakpoints[hasPaddingOn as PageSectionBreakpoints]
          : (hasPaddingOn as PageSectionBreakpoints[]).map(breakpoint => paddingBreakpoints[breakpoint])),
      hasNoPaddingOn &&
        (hasNoPaddingOn.constructor !== Array
          ? noPaddingBreakpoints[hasNoPaddingOn as PageSectionBreakpoints]
          : (hasNoPaddingOn as PageSectionBreakpoints[]).map(breakpoint => noPaddingBreakpoints[breakpoint])),
      variantStyle[variant],
      isFilled === false && styles.modifiers.noFill,
      isFilled === true && styles.modifiers.fill,
      className
    )}
  >
    {children}
  </section>
);
