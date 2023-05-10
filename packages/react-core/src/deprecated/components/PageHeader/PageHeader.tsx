/* eslint-disable no-console */
import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/Page/page';
import { css } from '@patternfly/react-styles';
import BarsIcon from '@patternfly/react-icons/dist/esm/icons/bars-icon';
import { Button, ButtonVariant } from '../../../components/Button';
import { PageContextConsumer, PageContextProps } from '../../../components/Page/PageContext';

export interface PageHeaderProps extends React.HTMLProps<HTMLDivElement> {
  /** Additional classes added to the page header */
  className?: string;
  /** Component to render the logo/brand, use <Brand /> */
  logo?: React.ReactNode;
  /** Additional props passed to the logo anchor container */
  logoProps?: any;
  /** Component to use to wrap the passed <logo> */
  logoComponent?: React.ReactNode;
  /** Component to render the header tools, use <PageHeaderTools />  */
  headerTools?: React.ReactNode;
  /** Component to render navigation within the header, use <Nav /> */
  topNav?: React.ReactNode;
  /** True to show the nav toggle button (toggles side nav) */
  showNavToggle?: boolean;
  /** Id for the nav toggle button */
  navToggleId?: string;
  /** True if the side nav is shown  */
  isNavOpen?: boolean;
  /** Sets the value for role on the <main> element */
  role?: string;
  /** Callback function to handle the side nav toggle button, managed by the Page component if the Page isManagedSidebar prop is set to true */
  onNavToggle?: (event: React.MouseEvent) => void;
  /** Aria Label for the nav toggle button */
  'aria-label'?: string;
}

export const PageHeader: React.FunctionComponent<PageHeaderProps> = ({
  className = '',
  logo = null as React.ReactNode,
  logoProps = null as any,
  logoComponent,
  headerTools = null as React.ReactNode,
  topNav = null as React.ReactNode,
  isNavOpen = true,
  role = undefined as string,
  showNavToggle = false,
  navToggleId = 'nav-toggle',
  onNavToggle = (_event: React.MouseEvent) => undefined as any,
  'aria-label': ariaLabel = 'Global navigation',
  'aria-controls': ariaControls = null,
  ...props
}: PageHeaderProps) => {
  let LogoComponent = logoComponent as any;
  if (!logoComponent) {
    if (logoProps?.href !== undefined) {
      LogoComponent = 'a';
    } else {
      LogoComponent = 'span';
    }
  }
  return (
    <PageContextConsumer>
      {({
        isManagedSidebar,
        onSidebarToggle: managedOnSidebarToggle,
        isSidebarOpen: managedIsSidebarOpen
      }: PageContextProps) => {
        const navToggle = isManagedSidebar ? managedOnSidebarToggle : onNavToggle;
        const navOpen = isManagedSidebar ? managedIsSidebarOpen : isNavOpen;

        return (
          <header role={role} className={css(styles.pageHeader, className)} {...props}>
            {(showNavToggle || logo) && (
              <div className={css(styles.pageHeaderBrand)}>
                {showNavToggle && (
                  <div className={css(styles.pageHeaderBrandToggle)}>
                    <Button
                      id={navToggleId}
                      onClick={navToggle}
                      aria-label={ariaLabel}
                      aria-controls={ariaControls}
                      aria-expanded={navOpen ? 'true' : 'false'}
                      variant={ButtonVariant.plain}
                    >
                      <BarsIcon />
                    </Button>
                  </div>
                )}
                {logo && (
                  <LogoComponent className={css(styles.pageHeaderBrandLink)} {...logoProps}>
                    {logo}
                  </LogoComponent>
                )}
              </div>
            )}
            {topNav && <div className={css(styles.pageHeaderNav)}>{topNav}</div>}
            {headerTools}
          </header>
        );
      }}
    </PageContextConsumer>
  );
};
PageHeader.displayName = 'PageHeader';
