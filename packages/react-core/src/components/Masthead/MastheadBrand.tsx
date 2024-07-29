import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/Masthead/masthead';
import { css } from '@patternfly/react-styles';

export interface MastheadBrandProps extends React.DetailedHTMLProps<React.HTMLProps<HTMLDivElement>, HTMLDivElement> {
  /** Content rendered inside of the masthead brand. */
  children?: React.ReactNode;
  /** Additional classes added to the masthead brand. */
  className?: string;
}

export const MastheadBrand: React.FunctionComponent<MastheadBrandProps> = ({
  children,
  className,
  ...props
}: MastheadBrandProps) => (
  <div className={css(styles.mastheadBrand, className)} {...props}>
    {children}
  </div>
);
MastheadBrand.displayName = 'MastheadBrand';
