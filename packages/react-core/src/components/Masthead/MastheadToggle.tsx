import { HTMLProps, DetailedHTMLProps, ReactNode, FunctionComponent } from 'react';
import styles from '@patternfly/react-styles/css/components/Masthead/masthead';
import { css } from '@patternfly/react-styles';

export interface MastheadToggleProps extends DetailedHTMLProps<HTMLProps<HTMLDivElement>, HTMLDivElement> {
  /** Content rendered inside of the masthead toggle. */
  children?: ReactNode;
  /** Additional classes added to the masthead toggle. */
  className?: string;
}

export const MastheadToggle: FunctionComponent<MastheadToggleProps> = ({
  children,
  className,
  ...props
}: MastheadToggleProps) => (
  <span className={css(styles.mastheadToggle, className)} {...props}>
    {children}
  </span>
);
MastheadToggle.displayName = 'MastheadToggle';
