import { HTMLProps, ReactNode, FunctionComponent } from 'react';
import styles from '@patternfly/react-styles/css/components/OptionsMenu/options-menu';
import { css } from '@patternfly/react-styles';
import { Divider } from '../../../components/Divider';

export interface OptionsMenuItemGroupProps extends HTMLProps<HTMLElement> {
  /** Content to be rendered in the options menu items component */
  children?: ReactNode;
  /** Classes applied to root element of the options menu items group */
  className?: string;
  /** Provides an accessible name for the options menu items group */
  'aria-label'?: string;
  /** Optional title for the options menu items group */
  groupTitle?: string | ReactNode;
  /** Flag indicating this options menu items group will be followed by a horizontal separator */
  hasSeparator?: boolean;
}

export const OptionsMenuItemGroup: FunctionComponent<OptionsMenuItemGroupProps> = ({
  className = '',
  'aria-label': ariaLabel = '',
  groupTitle = '',
  children = null,
  hasSeparator = false,
  ...props
}: OptionsMenuItemGroupProps) => (
  <section {...props} className={css(styles.optionsMenuGroup)} role="none">
    {groupTitle && <h1 className={css(styles.optionsMenuGroupTitle)}>{groupTitle}</h1>}
    <ul className={className} aria-label={ariaLabel} role="group">
      {children}
      {hasSeparator && <Divider component="li" role="separator" />}
    </ul>
  </section>
);
OptionsMenuItemGroup.displayName = 'OptionsMenuItemGroup';
