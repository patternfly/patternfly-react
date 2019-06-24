import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/Page/page';
import { css } from '@patternfly/react-styles';

export enum PageSectionVariants {
  default = 'default',
  light = 'light',
  dark = 'dark',
  darker = 'darker'
};

export interface PageSectionProps extends React.HTMLProps<HTMLDivElement> {
  /** Content rendered inside the section */
  children?: React.ReactNode;
  /** Additional classes added to the section */
  className?: string;
  /** Section background color variant */
  variant?: 'default' | 'light' | 'dark' | 'darker' | PageSectionVariants
  /** Enables the page section to fill the available vertical space */
  isFilled?: boolean;
  /** Modifies a main page section to have no padding */
  noPadding?: boolean;
  /** Modifies a main page section to have no padding on mobile */
  noPaddingMobile?: boolean;
}

export const PageSection =
  ({ className='',
     children,
     variant='default',
     noPadding=false,
     noPaddingMobile=false,
     isFilled,
     ...props
  }: PageSectionProps) => {
  const variantStyle = {
    [PageSectionVariants.default]: '',
    [PageSectionVariants.light]: styles.modifiers.light,
    [PageSectionVariants.dark]: styles.modifiers.dark_200,
    [PageSectionVariants.darker]: styles.modifiers.dark_100
  };
  return (
    <section
      {...props}
      className={css(
        styles.pageMainSection,
        noPadding && styles.modifiers.noPadding,
        noPaddingMobile && styles.modifiers.noPaddingMobile,
        variantStyle[variant],
        isFilled === false && styles.modifiers.noFill,
        isFilled === true && styles.modifiers.fill,
        className
      )}
    >
      {children}
    </section>
  );
};
