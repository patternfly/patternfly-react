import * as React from 'react';
import styles from '@patternfly/patternfly/components/SkipToContent/skip-to-content.css';
import buttonStyles from '@patternfly/patternfly/components/Button/button.css';
import { css, getModifier } from '@patternfly/react-styles';

const defaultProps = {
  children: null,
  className: '',
  show: false
};

export interface SkipToContentProps
  extends React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> {
  /** The skip to content link. */
  href: string;
  /** Content to display within the skip to content component, typically a string. */
  children?: any;
  /** Additional styles to apply to the skip to content component. */
  className?: string;
  /** Forces the skip to component to display. This is primarily for demonstration purposes and would not normally be used. */
  show?: boolean;
}

export const SkipToContent: React.SFC<SkipToContentProps> = ({ children, className, href, show, ...props }) => (
  <a
    {...props}
    className={css(
      styles.skipToContent,
      buttonStyles.button,
      getModifier(buttonStyles.modifiers, 'primary'),
      show && getModifier(styles, 'focus'),
      className
    )}
    href={href}
  >
    {children}
  </a>
);

SkipToContent.defaultProps = defaultProps;

export default SkipToContent;
