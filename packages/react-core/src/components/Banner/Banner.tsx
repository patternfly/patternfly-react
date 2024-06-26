import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/Banner/banner';
import { css } from '@patternfly/react-styles';

export type BannerColor = 'red' | 'orangered' | 'orange' | 'yellow' | 'green' | 'teal' | 'blue' | 'purple';

export type BannerStatus = 'success' | 'warning' | 'danger' | 'info' | 'custom';

export interface BannerProps extends React.HTMLProps<HTMLDivElement> {
  /** Content rendered inside the banner. */
  children?: React.ReactNode;
  /** Additional classes added to the banner. */
  className?: string;
  /** If set to true, the banner sticks to the top of its container */
  isSticky?: boolean;
  /** Text announced by screen readers to indicate the type of banner. This prop should only
   * be passed in when the banner conveys status/severity.
   */
  screenReaderText?: string;
  /** Color options for the banner, will be overwritten by any applied using the status prop. */
  color?: BannerColor;
  /** Status style options for the banner, will overwrite any color applied using the color prop. */
  status?: BannerStatus;
}
interface StatusBanner extends BannerProps {
  color?: never;
  status?: BannerStatus;
}

interface NonStatusBanner extends BannerProps {
  color?: BannerColor;
  status?: never;
}

export const Banner: React.FunctionComponent<StatusBanner | NonStatusBanner> = ({
  children,
  className,
  screenReaderText,
  isSticky = false,
  color,
  status,
  ...props
}: BannerProps) => {
  const getStatusOrColorModifier = () => {
    if (status) {
      return styles.modifiers[status];
    }

    if (color) {
      return styles.modifiers[color];
    }
  };

  return (
    <div
      className={css(styles.banner, getStatusOrColorModifier(), isSticky && styles.modifiers.sticky, className)}
      {...props}
    >
      {screenReaderText && <span className="pf-v6-screen-reader">{screenReaderText}</span>}
      {children}
    </div>
  );
};
Banner.displayName = 'Banner';
