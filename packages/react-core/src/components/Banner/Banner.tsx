import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/Banner/banner';
import { css } from '@patternfly/react-styles';

export interface BannerProps extends React.HTMLProps<HTMLDivElement> {
  /** Content rendered inside the banner. */
  children?: React.ReactNode;
  /** Additional classes added to the banner. */
  className?: string;
  /** If set to true, the banner sticks to the top of its container */
  isSticky?: boolean;
  /** Text announced by screen readers to indicate the type of banner. Defaults to "${variant} banner"
   * if this property is not passed in.
   *
   * Pass in null to omit this text from the banner when the banner does not convey status/severity.
   */
  screenReaderText?: string | null;
  /** Variant styles for the banner. */
  variant?: 'default' | 'info' | 'danger' | 'success' | 'warning';
}

export const Banner: React.FunctionComponent<BannerProps> = ({
  children,
  className,
  variant = 'default',
  screenReaderText,
  isSticky = false,
  ...props
}: BannerProps) => (
  <div
    className={css(
      styles.banner,
      styles.modifiers[variant as 'success' | 'danger' | 'warning' | 'info'],
      isSticky && styles.modifiers.sticky,
      className
    )}
    {...props}
  >
    {screenReaderText !== null && <span className="pf-u-screen-reader">{screenReaderText || `${variant} banner`}</span>}
    {children}
  </div>
);
Banner.displayName = 'Banner';
