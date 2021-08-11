import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/Masthead/masthead';
import { css } from '@patternfly/react-styles';
import { Toolbar } from '../Toolbar';
import { MastheadBrand } from './MastheadBrand';
import { MastheadContent } from './MastheadContent';
import { MastheadMain } from './MastheadMain';
import { MastheadToggle } from './MastheadToggle';
import { formatBreakpointMods } from '../../helpers/util';
export interface MastheadProps extends React.DetailedHTMLProps<React.HTMLProps<HTMLDivElement>, HTMLDivElement> {
  /** Content rendered inside of the masthead */
  children?: React.ReactNode;
  /** Additional classes added to the masthead */
  className?: string;
  /** Background theme color of the masthead */
  backgroundColor?: 'dark' | 'light' | 'light200';
  /** Flag indicating the masthead is displayed inline */
  display?: {
    default?: 'inline' | 'stack';
    sm?: 'inline' | 'stack';
    md?: 'inline' | 'stack';
    lg?: 'inline' | 'stack';
    xl?: 'inline' | 'stack';
    '2xl'?: 'inline' | 'stack';
  };
  /** Insets at various breakpoints. */
  inset?: {
    default?: 'insetNone' | 'insetXs' | 'insetSm' | 'insetMd' | 'insetLg' | 'insetXl' | 'inset2xl' | 'inset3xl';
    sm?: 'insetNone' | 'insetXs' | 'insetSm' | 'insetMd' | 'insetLg' | 'insetXl' | 'inset2xl' | 'inset3xl';
    md?: 'insetNone' | 'insetXs' | 'insetSm' | 'insetMd' | 'insetLg' | 'insetXl' | 'inset2xl' | 'inset3xl';
    lg?: 'insetNone' | 'insetXs' | 'insetSm' | 'insetMd' | 'insetLg' | 'insetXl' | 'inset2xl' | 'inset3xl';
    xl?: 'insetNone' | 'insetXs' | 'insetSm' | 'insetMd' | 'insetLg' | 'insetXl' | 'inset2xl' | 'inset3xl';
    '2xl'?: 'insetNone' | 'insetXs' | 'insetSm' | 'insetMd' | 'insetLg' | 'insetXl' | 'inset2xl' | 'inset3xl';
  };
  logo?: React.ReactNode; // Keep or remove?
  onToggle?: () => {}; // Keep or remove?
  toolbar?: Toolbar; // Keep or remove?
}

export const Masthead: React.FunctionComponent<MastheadProps> = ({
  children,
  className = '',
  backgroundColor = 'dark',
  display,
  inset,
  logo,
  onToggle,
  toolbar,
  ...props
}: MastheadProps) => (
  <header
    className={css(
      styles.masthead,
      formatBreakpointMods(display, styles, 'display-'),
      formatBreakpointMods(inset, styles),
      backgroundColor === 'light' && styles.modifiers.light,
      backgroundColor === 'light200' && styles.modifiers.light_200,
      className
    )}
    {...props}
  >
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
