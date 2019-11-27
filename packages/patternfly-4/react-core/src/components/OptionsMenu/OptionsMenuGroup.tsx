import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/OptionsMenu/options-menu';
import { css } from '@patternfly/react-styles';

export interface OptionsMenuGroupProps extends React.HTMLProps<HTMLElement> {
  /** Content to be rendered in the Options menu items component */
  children?: React.ReactNode;
  /** Classes applied to root element of the Options menu items group */
  className?: string;
  /** Provides an accessible name for the Options menu items group */
  ariaLabel?: string;
  /** TODO */
  groupTitle?: string | React.ReactNode;
  /** TODO */
  /** TODO */
  hasSeparator?: boolean;
}

export const OptionsMenuGroup: React.FunctionComponent<OptionsMenuGroupProps> = ({
  className = '',
  ariaLabel = '',
  groupTitle = '',
  children = null,
  hasSeparator = false,
  ...props
}: OptionsMenuGroupProps) => (
  <section {...props} className={css(styles.optionsMenuGroup)}>
    {groupTitle && <h1 className={css(styles.optionsMenuGroupTitle)}>
      {groupTitle}
    </h1>}
    <ul className={className} aria-label={ariaLabel}>
      {children}
      {hasSeparator && <li className={css(styles.optionsMenuSeparator)} role="separator" />}
    </ul>
  </section>
);
