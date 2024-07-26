import * as React from 'react';
import { Button, ButtonProps, ButtonVariant } from '../../components/Button';
import { PageContextConsumer, PageContextProps } from './PageContext';

export interface PageToggleButtonProps extends ButtonProps {
  /** Content of the page toggle button */
  children?: React.ReactNode;
  /** True if the sidebar is shown  */
  isSidebarOpen?: boolean;
  /** Callback function to handle the sidebar toggle button, managed by the Page component if the Page isManagedSidebar prop is set to true */
  onSidebarToggle?: () => void;
  /** Button id */
  id?: string;
}

export const PageToggleButton: React.FunctionComponent<PageToggleButtonProps> = ({
  children,
  isSidebarOpen = true,
  onSidebarToggle = () => undefined as any,
  id = 'nav-toggle',
  ...props
}: PageToggleButtonProps) => (
  <PageContextConsumer>
    {({
      isManagedSidebar,
      onSidebarToggle: managedOnSidebarToggle,
      isSidebarOpen: managedIsSidebarOpen
    }: PageContextProps) => {
      const sidebarToggle = isManagedSidebar ? managedOnSidebarToggle : onSidebarToggle;
      const sidebarOpen = isManagedSidebar ? managedIsSidebarOpen : isSidebarOpen;

      return (
        <Button
          id={id}
          onClick={sidebarToggle}
          aria-label="Side navigation toggle"
          aria-expanded={sidebarOpen ? 'true' : 'false'}
          variant={ButtonVariant.plain}
          {...props}
        >
          {children}
        </Button>
      );
    }}
  </PageContextConsumer>
);
PageToggleButton.displayName = 'PageToggleButton';
