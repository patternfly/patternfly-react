import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/Masthead/masthead';
import { css } from '@patternfly/react-styles';

export interface MastheadLogoProps
  extends React.DetailedHTMLProps<React.HTMLProps<HTMLAnchorElement>, HTMLAnchorElement> {
  /** Content rendered inside of the masthead logo. */
  children?: React.ReactNode;
  /** Additional classes added to the masthead logo. */
  className?: string;
  /** Component type of the masthead logo. */
  component?: React.ElementType<any> | React.ComponentType<any>;
}

export const MastheadLogo: React.FunctionComponent<MastheadLogoProps> = ({
  children,
  className,
  component,
  ...props
}: MastheadLogoProps) => {
  let Component = component as any;
  if (!component) {
    if (props?.href !== undefined) {
      Component = 'a';
    } else {
      Component = 'span';
    }
  }
  return (
    <Component className={css(styles.mastheadLogo, className)} {...(Component === 'a' && { tabIndex: 0 })} {...props}>
      {children}
    </Component>
  );
};
MastheadLogo.displayName = 'MastheadLogo';
