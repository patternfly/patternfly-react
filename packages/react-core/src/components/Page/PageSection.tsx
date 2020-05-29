import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/Page/page';
import { css } from '@patternfly/react-styles';
import { formatBreakpointMods } from '../../helpers/util';

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

export interface PageSectionBreakpointMod {
  /** The attribute to modify  */
  modifier: 'padding' | 'no-padding';
  /** The breakpoint at which to apply the modifier */
  breakpoint?: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
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
  /** Padding at various breakpoints. */
  paddings?: {
    default: 'padding' | 'no-padding';
    sm: 'padding' | 'no-padding';
    md: 'padding' | 'no-padding';
    lg: 'padding' | 'no-padding';
    xl: 'padding' | 'no-padding';
    '2xl': 'padding' | 'no-padding';
  };
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

export const PageSection: React.FunctionComponent<PageSectionProps> = ({
  className = '',
  children,
  variant = 'default',
  type = 'default',
  hasNoPadding = false,
  paddings,
  isFilled,
  ...props
}: PageSectionProps) => (
  <section
    {...props}
    className={css(
      variantType[type],
      hasNoPadding && styles.modifiers.noPadding,
      formatBreakpointMods(paddings, styles),
      variantStyle[variant],
      isFilled === false && styles.modifiers.noFill,
      isFilled === true && styles.modifiers.fill,
      className
    )}
  >
    {children}
  </section>
);
