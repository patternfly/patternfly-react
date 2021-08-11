import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/Masthead/masthead';
import { css } from '@patternfly/react-styles';
import { Toolbar } from '../Toolbar';
import { MastheadBrand } from './MastheadBrand';
import { MastheadContent } from './MastheadContent';
import { MastheadMain } from './MastheadMain';
import { MastheadToggle } from './MastheadToggle';

export interface MastheadProps extends React.DetailedHTMLProps<React.HTMLProps<HTMLDivElement>, HTMLDivElement> {
  /** Content rendered inside of the masthead. */
  children?: React.ReactNode;
  /** Additional classes added to the masthead. */
  className?: string;
  logo?: React.ReactNode; // Keep or remove?
  onToggle?: () => {}; // Keep or remove?
  toolbar?: Toolbar; // Keep or remove?
}

export const Masthead: React.FunctionComponent<MastheadProps> = ({
  children,
  className = '',
  logo,
  onToggle,
  toolbar,
  ...props
}: MastheadProps) => (
  <header className={css(styles.masthead, className)} {...props}>
    {children && children}
    {!children && (
      <React.Fragment>
        <MastheadToggle onToggle={onToggle} />
        <MastheadMain>
          <MastheadBrand>{logo}</MastheadBrand>
        </MastheadMain>
        <MastheadContent>{toolbar}</MastheadContent>
      </React.Fragment>
    )}
  </header>
);
Masthead.displayName = 'Masthead';
