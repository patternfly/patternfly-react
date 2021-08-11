import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/Masthead/masthead';
import { css } from '@patternfly/react-styles';
import { Button } from '../Button';
import BarsIcon from '@patternfly/react-icons/dist/js/icons/bars-icon';

export interface MastheadToggleProps extends React.DetailedHTMLProps<React.HTMLProps<HTMLDivElement>, HTMLDivElement> {
  /** Content rendered inside of the masthead toggle. */
  children?: React.ReactNode;
  /** Additional classes added to the masthead toggle. */
  className?: string;
  onToggle?: () => {}; // Keep or remove?
  buttonProps?: any; // Keep or remove?
}

export const MastheadToggle: React.FunctionComponent<MastheadToggleProps> = ({
  children,
  className = '',
  onToggle,
  buttonProps,
  ...props
}: MastheadToggleProps) => (
  <div className={css(styles.mastheadToggle, className)} {...props}>
    {children && children}
    {!children && (
      <Button variant="plain" onClick={onToggle} {...buttonProps}>
        <BarsIcon />
      </Button>
    )}
  </div>
);
MastheadToggle.displayName = 'MastheadToggle';
