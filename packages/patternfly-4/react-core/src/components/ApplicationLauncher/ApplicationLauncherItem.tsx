import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/AppLauncher/app-launcher';
import accessibleStyles from '@patternfly/react-styles/css/utilities/Accessibility/accessibility';
import { DropdownItem, DropdownItemProps } from '../Dropdown';
import { ApplicationLauncherIcon } from './InternalApplicationLauncherIcon';
import { ApplicationLauncherText } from './InternalApplicationLauncherText';
import { ExternalLinkAltIcon } from '@patternfly/react-icons';

export interface ApplicationLauncherItemProps {
  /** Icon rendered before the text */
  icon?: React.ReactNode;
  /** If clicking on the item should open the page in a separate window */
  isExternal?: boolean;
}

export const ApplicationLauncherItem: React.FunctionComponent<ApplicationLauncherItemProps & DropdownItemProps> = ({
  className = '',
  children,
  icon = null,
  isExternal = false,
  href,
  ...props
}: ApplicationLauncherItemProps & DropdownItemProps) => (
  <DropdownItem 
    component={href ? 'a' : 'div'}
    href={href || null}
    className={css(isExternal && styles.modifiers.external, className)}
    // add style until https://github.com/patternfly/patternfly-next/issues/1944 is fixed
    style={!href ? { cursor: 'pointer' } : null}
    {...props}
  >
    {icon && <ApplicationLauncherIcon>{icon}</ApplicationLauncherIcon>}
    {icon ? <ApplicationLauncherText>{children}</ApplicationLauncherText> : children}
    {isExternal && (
      <>
        <span className={css(styles.appLauncherMenuItemExternalIcon)}><ExternalLinkAltIcon /></span>
        <span className={css(accessibleStyles.screenReader)}>(opens new window)</span>
      </>
    )}
  </DropdownItem>
);
