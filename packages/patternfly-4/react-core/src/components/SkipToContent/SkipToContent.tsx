import * as React from 'react';
import styles from '@patternfly/patternfly/components/SkipToContent/skip-to-content.css';
import buttonStyles from '@patternfly/patternfly/components/Button/button.css';
import { css, getModifier } from '@patternfly/react-styles';

export interface SkipToContentProps
  extends React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> {
  /** Sets the base component to render. Defaults to an anchor */
  component: any,
  /** The skip to content link. */
  href: string;
  /** Content to display within the skip to content component, typically a string. */
  children?: any;
  /** Additional styles to apply to the skip to content component. */
  className?: string;
  /** Forces the skip to component to display. This is primarily for demonstration purposes and would not normally be used. */
  show?: boolean;
}

export class SkipToContent extends React.Component<SkipToContentProps> {
  public static defaultProps = {
    component: 'a',
    children: null,
    className: '',
    show: false
  };

  public render() {
    const { component, children, className, href, show, ...rest } = this.props;
    const Component = component;
    return (
        <Component
          {...rest}
          className={css(
            buttonStyles.button,
            getModifier(buttonStyles.modifiers, 'primary'),
            styles.skipToContent,
            show && getModifier(styles, 'focus'),
            className
          )}
          href={href}
        >
          {children}
        </Component>
      );
    }
};

export default SkipToContent;
