import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/Banner/banner';
import { css } from '@patternfly/react-styles';
import { variantIcons } from '../Alert/AlertIcon';
import { Flex, FlexItem } from '../../layouts';

export interface BannerProps extends React.HTMLProps<HTMLDivElement> {
  /** Content rendered inside the banner. */
  children?: React.ReactNode;
  /** Additional classes added to the banner. */
  className?: string;
  /** A custom icon for the banner. This property will override the icon that is set based on
   * the variant property.
   */
  customIcon?: React.ReactNode;
  /** Flag for indicating whether the banner has a status icon. When set to "true", the icon
   * will be set based on the variant property.
   */
  hasStatusIcon?: boolean;
  /** If set to true, the banner sticks to the top of its container */
  isSticky?: boolean;
  /** Text announced by screen readers to indicate the type of banner when the hasStatusIcon property
   * is passed in. Defaults to "${variant} banner" if this property is not passed in.
   */
  screenReaderText?: string;
  /** Variant styles for the banner. */
  variant?: 'default' | 'info' | 'danger' | 'success' | 'warning';
}

export const Banner: React.FunctionComponent<BannerProps> = ({
  children,
  className,
  customIcon,
  hasStatusIcon = false,
  variant = 'default',
  screenReaderText,
  isSticky = false,
  ...props
}: BannerProps) => {
  const StatusIcon = variantIcons[variant];

  return (
    <div
      className={css(
        styles.banner,
        styles.modifiers[variant as 'success' | 'danger' | 'warning' | 'info'],
        isSticky && styles.modifiers.sticky,
        className
      )}
      {...props}
    >
      {hasStatusIcon ? (
        <Flex spaceItems={{ default: 'spaceItemsSm' }}>
          <FlexItem>
            <span className="pf-u-screen-reader">{screenReaderText || `${variant} banner`}</span>
            {customIcon || <StatusIcon />}
          </FlexItem>
          <FlexItem>
            <div className="pf-l-flex__item">{children}</div>
          </FlexItem>
        </Flex>
      ) : (
        children
      )}
    </div>
  );
};
Banner.displayName = 'Banner';
