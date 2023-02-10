import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/Masthead/masthead';
import { css } from '@patternfly/react-styles';

export interface MastheadBrandProps
  extends React.DetailedHTMLProps<React.HTMLProps<HTMLAnchorElement>, HTMLAnchorElement> {
  /** Content rendered inside of the masthead brand. */
  children?: React.ReactNode;
  /** Additional classes added to the masthead brand. */
  className?: string;
  /** Component type of the masthead brand. */
  component?: React.ElementType<any> | React.ComponentType<any>;
}

export const MastheadBrand: React.FunctionComponent<MastheadBrandProps> = ({
  children,
  className,
  component,
  ...props
}: MastheadBrandProps) => {
  let Component = component as any;
  if (!component) {
    if (props?.href !== undefined) {
      Component = 'a';
    } else {
      Component = 'span';
    }
  }
  return (
    <Component className={css(styles.mastheadBrand, className)} {...(Component === 'a' && { tabIndex: 0 })} {...props}>
      {children}
    </Component>
  );
};
MastheadBrand.displayName = 'MastheadBrand';
