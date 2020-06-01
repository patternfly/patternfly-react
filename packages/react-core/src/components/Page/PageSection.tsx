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
  /** Padding at various breakpoints. */
  padding?: {
    default?: 'padding' | 'noPadding';
    sm?: 'padding' | 'noPadding';
    md?: 'padding' | 'noPadding';
    lg?: 'padding' | 'noPadding';
    xl?: 'padding' | 'noPadding';
    '2xl'?: 'padding' | 'noPadding';
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
  padding,
  isFilled,
  ...props
}: PageSectionProps) => (
  <section
    {...props}
    className={css(
      variantType[type],
      formatBreakpointMods(padding, styles),
      variantStyle[variant],
      isFilled === false && styles.modifiers.noFill,
      isFilled === true && styles.modifiers.fill,
      className
    )}
  >
    {children}
  </section>
);
