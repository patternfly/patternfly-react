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
  /** Adds an accessible name to the toggle button. */
  'aria-label'?: string;
  /** Flag indicating whether the hamburger button variation with animations should be used. */
  isHamburgerButton?: boolean;
}

export const PageToggleButton: React.FunctionComponent<PageToggleButtonProps> = ({
  children,
  isSidebarOpen = true,
  onSidebarToggle = () => undefined as any,
  id = 'nav-toggle',
  'aria-label': ariaLabel = 'Side navigation toggle',
  isHamburgerButton,
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
          aria-label={ariaLabel}
          aria-expanded={sidebarOpen ? 'true' : 'false'}
          variant={ButtonVariant.plain}
          isHamburger={isHamburgerButton}
          {...props}
        >
          {!isHamburgerButton && children}
        </Button>
      );
    }}
  </PageContextConsumer>
);
PageToggleButton.displayName = 'PageToggleButton';
