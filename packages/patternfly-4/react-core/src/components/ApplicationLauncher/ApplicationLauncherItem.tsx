import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/AppLauncher/app-launcher';
import { DropdownItem, DropdownItemProps } from '../Dropdown';
import { ApplicationLauncherContent } from './ApplicationLauncherContent';
import { ApplicationLauncherContext } from './ApplicationLauncher';
import { StarIcon } from '@patternfly/react-icons';

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
  /** Flag indicating if the item is favorited */
  isFavorite?: boolean;
  /** ID of the item. Required for tracking favorites. */
  id?: string;
}

export const ApplicationLauncherItem: React.FunctionComponent<ApplicationLauncherItemProps & DropdownItemProps> = ({
  className = '',
  id,
  children,
  icon = null,
  isExternal = false,
  href,
  tooltip = null,
  tooltipProps = null,
  component = 'a',
  isFavorite = null,
  ...props
}: ApplicationLauncherItemProps & DropdownItemProps) => (
  <ApplicationLauncherItemContext.Provider value={{ isExternal, icon }}>
    <ApplicationLauncherContext.Consumer>
      {({ onFavorite }) => (
        <DropdownItem
          id={id}
          component={component}
          href={href || null}
          className={css((isExternal || onFavorite) && styles.modifiers.link, className)}
          listItemClassName={css(
            (isExternal || onFavorite) && styles.appLauncherMenuWrapper,
            isExternal && styles.modifiers.external,
            isFavorite && styles.modifiers.favorite
          )}
          tooltip={tooltip}
          tooltipProps={tooltipProps}
          {...(isFavorite !== null && {
            additionalChildren: (
              <button
                className={css(styles.appLauncherMenuItem, styles.modifiers.action)}
                onClick={() => {
                  onFavorite(id, isFavorite);
                }}
              >
                <StarIcon />
              </button>
            )
          })}
          {...(isFavorite !== null && { 'aria-label': isFavorite ? 'starred' : 'not starred' })}
          {...props}
        >
          {children && <ApplicationLauncherContent>{children}</ApplicationLauncherContent>}
        </DropdownItem>
      )}
    </ApplicationLauncherContext.Consumer>
  </ApplicationLauncherItemContext.Provider>
);
