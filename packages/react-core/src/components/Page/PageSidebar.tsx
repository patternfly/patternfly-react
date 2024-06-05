import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/Page/page';
import { css } from '@patternfly/react-styles';
import { PageContextConsumer } from './PageContext';

export interface PageSidebarProps extends React.HTMLProps<HTMLDivElement> {
  /** Additional classes added to the page sidebar */
  className?: string;
  /** Content rendered inside the page sidebar (e.g. <PageSidebarBody /> */
  children?: React.ReactNode;
  /**
   * If true, manages the sidebar open/close state and there is no need to pass the isSidebarOpen boolean into
   * the sidebar component or add a callback onSidebarToggle function into the Masthead component
   */
  isManagedSidebar?: boolean;
  /** Programmatically manage if the sidebar is shown, if isManagedSidebar is set to true in the Page component, this prop is managed */
  isSidebarOpen?: boolean;
  /** Sidebar id */
  id?: string;
}

export interface PageSidebarContextProps {
  isSidebarOpen: boolean;
}
export const pageSidebarContextDefaults: PageSidebarContextProps = {
  isSidebarOpen: true
};
export const PageSidebarContext = React.createContext<Partial<PageSidebarContextProps>>(pageSidebarContextDefaults);

export const PageSidebar: React.FunctionComponent<PageSidebarProps> = ({
  className = '',
  children,
  isSidebarOpen = true,
  id = 'page-sidebar',
  ...props
}: PageSidebarProps) => (
  <PageContextConsumer>
    {({ isManagedSidebar, isSidebarOpen: managedIsNavOpen }: PageSidebarProps) => {
      const sidebarOpen = isManagedSidebar ? managedIsNavOpen : isSidebarOpen;

      return (
        <div
          id={id}
          className={css(
            styles.pageSidebar,
            sidebarOpen && styles.modifiers.expanded,
            !sidebarOpen && styles.modifiers.collapsed,
            className
          )}
          aria-hidden={!sidebarOpen}
          {...props}
        >
          <PageSidebarContext.Provider value={{ isSidebarOpen: sidebarOpen }}>{children}</PageSidebarContext.Provider>
        </div>
      );
    }}
  </PageContextConsumer>
);
PageSidebar.displayName = 'PageSidebar';
