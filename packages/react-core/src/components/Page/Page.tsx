import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/Page/page';
import { css } from '@patternfly/react-styles';
import globalBreakpointXl from '@patternfly/react-tokens/dist/js/global_breakpoint_xl';
import { debounce } from '../../helpers/util';
import { Drawer, DrawerContent, DrawerContentBody, DrawerPanelContent } from '../Drawer';

export enum PageLayouts {
  vertical = 'vertical',
  horizontal = 'horizontal'
}

export interface PageContextProps {
  isManagedSidebar: boolean;
  onNavToggle: () => void;
  isNavOpen: boolean;
}

const PageContext = React.createContext<PageContextProps>({
  isManagedSidebar: false,
  isNavOpen: false,
  onNavToggle: () => null
});

export const PageContextProvider = PageContext.Provider;
export const PageContextConsumer = PageContext.Consumer;

export interface PageProps extends React.HTMLProps<HTMLDivElement> {
  /** Content rendered inside the main section of the page layout (e.g. <PageSection />) */
  children?: React.ReactNode;
  /** Additional classes added to the page layout */
  className?: string;
  /** Header component (e.g. <PageHeader />) */
  header?: React.ReactNode;
  /** Sidebar component for a side nav (e.g. <PageSidebar />) */
  sidebar?: React.ReactNode;
  /** Notification drawer component for an optional notification drawer (e.g. <NotificationDrawer />) */
  notificationDrawer?: React.ReactNode;
  /** Flag indicating Notification drawer in expanded */
  isNotificationDrawerExpanded?: boolean;
  /** Flag indicating if breadcrumb width should be limited */
  isBreadcrumbWidthLimited?: boolean;
  /** Callback when notification drawer panel is finished expanding. */
  onNotificationDrawerExpand?: () => void;
  /** Skip to content component for the page */
  skipToContent?: React.ReactElement;
  /** Sets the value for role on the <main> element */
  role?: string;
  /** an id to use for the [role="main"] element */
  mainContainerId?: string;
  /** tabIndex to use for the [role="main"] element, null to unset it */
  mainTabIndex?: number | null;
  /**
   * If true, manages the sidebar open/close state and there is no need to pass the isNavOpen boolean into
   * the sidebar component or add a callback onNavToggle function into the PageHeader component
   */
  isManagedSidebar?: boolean;
  /** Flag indicating if tertiary nav width should be limited */
  isTertiaryNavWidthLimited?: boolean;
  /**
   * If true, the managed sidebar is initially open for desktop view
   */
  defaultManagedSidebarIsOpen?: boolean;
  /**
   * Can add callback to be notified when resize occurs, for example to set the sidebar isNav prop to false for a width < 768px
   * Returns object { mobileView: boolean, windowSize: number }
   */
  onPageResize?: (object: any) => void;
  /** Breadcrumb component for the page */
  breadcrumb?: React.ReactNode;
  /** Tertiary nav component for the page */
  tertiaryNav?: React.ReactNode;
  /** Accessible label, can be used to name main section */
  mainAriaLabel?: string;
}

export interface PageState {
  desktopIsNavOpen: boolean;
  mobileIsNavOpen: boolean;
  mobileView: boolean;
}

export class Page extends React.Component<PageProps, PageState> {
  static displayName = 'Page';
  static defaultProps: PageProps = {
    isManagedSidebar: false,
    isBreadcrumbWidthLimited: false,
    defaultManagedSidebarIsOpen: true,
    onPageResize: (): void => null,
    mainTabIndex: -1,
    isNotificationDrawerExpanded: false,
    onNotificationDrawerExpand: () => null
  };
  outerRef = React.createRef<HTMLDivElement>();

  constructor(props: PageProps) {
    super(props);

    const { isManagedSidebar, defaultManagedSidebarIsOpen } = props;
    const managedSidebarOpen = !isManagedSidebar ? true : defaultManagedSidebarIsOpen;
    this.state = {
      desktopIsNavOpen: managedSidebarOpen,
      mobileIsNavOpen: false,
      mobileView: false
    };
  }

  componentDidMount() {
    const { isManagedSidebar, onPageResize } = this.props;
    if (isManagedSidebar || onPageResize) {
      window.addEventListener('resize', this.handleResize);
      const currentRef = this.outerRef.current;
      if (currentRef) {
        currentRef.addEventListener('mousedown', this.handleClickMobile);
        currentRef.addEventListener('touchstart', this.handleClickMobile);
      }
      // Initial check if should be shown
      this.resize();
    }
  }

  componentWillUnmount() {
    const { isManagedSidebar, onPageResize } = this.props;
    if (isManagedSidebar || onPageResize) {
      window.removeEventListener('resize', this.handleResize);
      const currentRef = this.outerRef.current;
      if (currentRef) {
        currentRef.removeEventListener('mousedown', this.handleClickMobile);
        currentRef.removeEventListener('touchstart', this.handleClickMobile);
      }
    }
  }

  isMobile = () =>
    // eslint-disable-next-line radix
    window.innerWidth < Number.parseInt(globalBreakpointXl.value, 10);

  resize = () => {
    const { onPageResize } = this.props;
    const mobileView = this.isMobile();
    if (onPageResize) {
      onPageResize({ mobileView, windowSize: window.innerWidth });
    }
    this.setState({ mobileView });
  };

  handleResize = debounce(this.resize, 100);

  handleClickMobile = (ev: any) => {
    if (this.isMobile() && this.state.mobileIsNavOpen && this.outerRef.current) {
      const sidebarNode = this.outerRef.current.getElementsByClassName(styles.pageSidebar)[0];
      if (sidebarNode && !sidebarNode.contains(ev.target)) {
        this.setState({ mobileIsNavOpen: false });
      }
    }
  };

  onNavToggleMobile = () => {
    this.setState(prevState => ({
      mobileIsNavOpen: !prevState.mobileIsNavOpen
    }));
  };

  onNavToggleDesktop = () => {
    this.setState(prevState => ({
      desktopIsNavOpen: !prevState.desktopIsNavOpen
    }));
  };

  render() {
    const {
      breadcrumb,
      isBreadcrumbWidthLimited,
      className,
      children,
      header,
      sidebar,
      notificationDrawer,
      isNotificationDrawerExpanded,
      onNotificationDrawerExpand,
      isTertiaryNavWidthLimited,
      skipToContent,
      role,
      mainContainerId,
      isManagedSidebar,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      defaultManagedSidebarIsOpen,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      onPageResize,
      mainAriaLabel,
      mainTabIndex,
      tertiaryNav,
      ...rest
    } = this.props;
    const { mobileView, mobileIsNavOpen, desktopIsNavOpen } = this.state;

    const context = {
      isManagedSidebar,
      onNavToggle: mobileView ? this.onNavToggleMobile : this.onNavToggleDesktop,
      isNavOpen: mobileView ? mobileIsNavOpen : desktopIsNavOpen
    };

    const main = (
      <main
        role={role}
        id={mainContainerId}
        className={css(styles.pageMain)}
        tabIndex={mainTabIndex}
        aria-label={mainAriaLabel}
      >
        {tertiaryNav && isTertiaryNavWidthLimited && (
          <div className={css(styles.pageMainNav, styles.modifiers.limitWidth)}>
            <div className={css(styles.pageMainBody)}>{tertiaryNav}</div>
          </div>
        )}
        {tertiaryNav && !isTertiaryNavWidthLimited && <div className={css(styles.pageMainNav)}>{tertiaryNav}</div>}
        {breadcrumb && isBreadcrumbWidthLimited && (
          <section className={css(styles.pageMainBreadcrumb, styles.modifiers.limitWidth)}>
            <div className={css(styles.pageMainBody)}>{breadcrumb}</div>
          </section>
        )}
        {breadcrumb && !isBreadcrumbWidthLimited && (
          <section className={css(styles.pageMainBreadcrumb)}>{breadcrumb}</section>
        )}
        {children}
      </main>
    );

    const panelContent = <DrawerPanelContent>{notificationDrawer}</DrawerPanelContent>;

    return (
      <PageContextProvider value={context}>
        <div ref={this.outerRef} {...rest} className={css(styles.page, className)}>
          {skipToContent}
          {header}
          {sidebar}
          {notificationDrawer && (
            <div className={css(styles.pageDrawer)}>
              <Drawer isExpanded={isNotificationDrawerExpanded} onExpand={onNotificationDrawerExpand}>
                <DrawerContent panelContent={panelContent}>
                  <DrawerContentBody>{main}</DrawerContentBody>
                </DrawerContent>
              </Drawer>
            </div>
          )}
          {!notificationDrawer && main}
        </div>
      </PageContextProvider>
    );
  }
}
