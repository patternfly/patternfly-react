import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/AppLauncher/app-launcher';
import { DropdownItem, DropdownItemProps } from '../Dropdown';
import { ApplicationLauncherContent } from './ApplicationLauncherContent';

export const ApplicationLauncherItemContext = React.createContext({ isExternal: false, icon: null });

export interface ApplicationLauncherItemProps {
  /** Icon rendered before the text */
  icon?: React.ReactNode;
  /** If clicking on the item should open the page in a separate window */
  isExternal?: boolean;
  /** Tooltip to display when hovered over the item */
  tooltip?: React.ReactNode;
  /** Additional tooltip props forwarded to the Tooltip component */
  tooltipProps?: any;
  /** The component that will wrap the item.
   * If you need to render a custom component, for example a react router Link component,
   * then pass the component here. Example:
   * <ApplicationLauncherItem key="router1" component={
   *   <Link to="/components/alert/">
   *     <ApplicationLauncherContent>Router link</ApplicationLauncherContent>
   *   </Link>
   * } />
   */
  component?: React.ReactNode;
}

export const ApplicationLauncherItem: React.FunctionComponent<ApplicationLauncherItemProps & DropdownItemProps> = ({
  className = '',
  children,
  icon = null,
  isExternal = false,
  href,
  tooltip = null,
  tooltipProps = null,
  component = 'a',
  ...props
}: ApplicationLauncherItemProps & DropdownItemProps) => (
  <ApplicationLauncherItemContext.Provider value={{ isExternal, icon }}>
    <DropdownItem
      component={component}
      href={href || null}
      className={css(isExternal && styles.modifiers.external, className)}
      tooltip={tooltip}
      tooltipProps={tooltipProps}
      {...props}
    >
      {children && <ApplicationLauncherContent>{children}</ApplicationLauncherContent>}
    </DropdownItem>
  </ApplicationLauncherItemContext.Provider>
);
