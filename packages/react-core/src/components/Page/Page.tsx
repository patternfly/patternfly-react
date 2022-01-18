import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/Page/page';
import { css } from '@patternfly/react-styles';
import globalBreakpointXl from '@patternfly/react-tokens/dist/esm/global_breakpoint_xl';
import { debounce, canUseDOM } from '../../helpers/util';
import { Drawer, DrawerContent, DrawerContentBody, DrawerPanelContent } from '../Drawer';
import { PageGroup, PageGroupProps } from './PageGroup';
import { getResizeObserver } from '../../helpers/resizeObserver';
import { getBreakpoint } from '../../helpers/util';

export enum PageLayouts {
  vertical = 'vertical',
  horizontal = 'horizontal'
}

export interface PageContextProps {
  isManagedSidebar: boolean;
  onNavToggle: () => void;
  isNavOpen: boolean;
  useResizeObserver: boolean;
  width: number;
}

export const PageContext = React.createContext<PageContextProps>({
  isManagedSidebar: false,
  isNavOpen: false,
  onNavToggle: () => null,
  useResizeObserver: false,
  width: 0
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
  /**
   * True to listen to page width changes on a resize observer
   * Will also add a breakpoint modifier class (pf-m-breakpoint-[xs|sm|md|lg|xl|2xl]) to the page component
   */
  useResizeObserver?: boolean;
  /** Breadcrumb component for the page */
  breadcrumb?: React.ReactNode;
  /** Tertiary nav component for the page */
  tertiaryNav?: React.ReactNode;
  /** Accessible label, can be used to name main section */
  mainAriaLabel?: string;
  /** Flag indicating if the tertiaryNav should be in a group */
  isTertiaryNavGrouped?: boolean;
  /** Flag indicating if the breadcrumb should be in a group */
  isBreadcrumbGrouped?: boolean;
  /** Additional content of the group */
  additionalGroupedContent?: React.ReactNode;
  /** Additional props of the group */
  groupProps?: PageGroupProps;
}

export interface PageState {
  desktopIsNavOpen: boolean;
  mobileIsNavOpen: boolean;
  mobileView: boolean;
  width: number;
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
    onNotificationDrawerExpand: () => null,
    useResizeObserver: false
  };
  mainRef = React.createRef<HTMLDivElement>();
  pageRef = React.createRef<HTMLDivElement>();
  observer: any = () => {};

  constructor(props: PageProps) {
    super(props);

    const { isManagedSidebar, defaultManagedSidebarIsOpen } = props;
    const managedSidebarOpen = !isManagedSidebar ? true : defaultManagedSidebarIsOpen;
    this.state = {
      desktopIsNavOpen: managedSidebarOpen,
      mobileIsNavOpen: false,
      mobileView: false,
      width: 0
    };
  }

  componentDidMount() {
    const { isManagedSidebar, onPageResize, useResizeObserver } = this.props;
    if (isManagedSidebar || onPageResize || useResizeObserver) {
      if (canUseDOM) {
        if (useResizeObserver) {
          this.observer = getResizeObserver(this.pageRef.current, this.handleResize);
        } else {
          window.addEventListener('resize', this.handleResize);
        }
      }
      const currentRef = this.mainRef.current;
      if (currentRef) {
        currentRef.addEventListener('mousedown', this.handleMainClick);
        currentRef.addEventListener('touchstart', this.handleMainClick);
      }
      // Initial check if should be shown
      this.resize();
    }
  }

  componentWillUnmount() {
    const { isManagedSidebar, onPageResize, useResizeObserver } = this.props;
    if (isManagedSidebar || onPageResize || useResizeObserver) {
      if (canUseDOM) {
        if (useResizeObserver) {
          this.observer();
        } else {
          window.removeEventListener('resize', this.handleResize);
        }
      }
      const currentRef = this.mainRef.current;
      if (currentRef) {
        currentRef.removeEventListener('mousedown', this.handleMainClick);
        currentRef.removeEventListener('touchstart', this.handleMainClick);
      }
    }
  }

  getWindowWidth = () => {
    if (canUseDOM) {
      return this.props.useResizeObserver ? this.pageRef.current.clientWidth : window.innerWidth;
    } else {
      return 1200;
    }
  };

  isMobile = () =>
    // eslint-disable-next-line radix
    this.getWindowWidth() < Number.parseInt(globalBreakpointXl.value, 10);

  resize = () => {
    const { onPageResize } = this.props;
    const mobileView = this.isMobile();
    if (onPageResize) {
      onPageResize({ mobileView, windowSize: this.getWindowWidth() });
    }
    if (mobileView !== this.state.mobileView) {
      this.setState({ mobileView });
    }
    this.setState({ width: this.pageRef.current.clientWidth });
  };

  handleResize = debounce(this.resize, 250);

  handleMainClick = () => {
    if (this.isMobile() && this.state.mobileIsNavOpen && this.mainRef.current) {
      this.setState({ mobileIsNavOpen: false });
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
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      useResizeObserver,
      mainAriaLabel,
      mainTabIndex,
      tertiaryNav,
      isTertiaryNavGrouped,
      isBreadcrumbGrouped,
      additionalGroupedContent,
      groupProps,
      ...rest
    } = this.props;
    const { mobileView, mobileIsNavOpen, desktopIsNavOpen, width } = this.state;

    const context = {
      isManagedSidebar,
      onNavToggle: mobileView ? this.onNavToggleMobile : this.onNavToggleDesktop,
      isNavOpen: mobileView ? mobileIsNavOpen : desktopIsNavOpen,
      useResizeObserver,
      width
    };

    let nav = null;
    if (tertiaryNav && isTertiaryNavWidthLimited) {
      nav = (
        <div className={css(styles.pageMainNav, styles.modifiers.limitWidth)}>
          <div className={css(styles.pageMainBody)}>{tertiaryNav}</div>
        </div>
      );
    } else if (tertiaryNav) {
      nav = <div className={css(styles.pageMainNav)}>{tertiaryNav}</div>;
    }

    let crumb = null;
    if (breadcrumb && isBreadcrumbWidthLimited) {
      crumb = (
        <section className={css(styles.pageMainBreadcrumb, styles.modifiers.limitWidth)}>
          <div className={css(styles.pageMainBody)}>{breadcrumb}</div>
        </section>
      );
    } else if (breadcrumb) {
      crumb = <section className={css(styles.pageMainBreadcrumb)}>{breadcrumb}</section>;
    }

    const isGrouped = isTertiaryNavGrouped || isBreadcrumbGrouped || additionalGroupedContent;

    const group = isGrouped ? (
      <PageGroup {...groupProps}>
        {isTertiaryNavGrouped && nav}
        {isBreadcrumbGrouped && crumb}
        {additionalGroupedContent}
      </PageGroup>
    ) : null;

    const main = (
      <main
        ref={this.mainRef}
        role={role}
        id={mainContainerId}
        className={css(styles.pageMain)}
        tabIndex={mainTabIndex}
        aria-label={mainAriaLabel}
      >
        {group}
        {!isTertiaryNavGrouped && nav}
        {!isBreadcrumbGrouped && crumb}
        {children}
      </main>
    );

    const panelContent = <DrawerPanelContent>{notificationDrawer}</DrawerPanelContent>;

    return (
      <PageContextProvider value={context}>
        <div
          ref={this.pageRef}
          {...rest}
          className={css(styles.page, useResizeObserver && `pf-m-breakpoint-${getBreakpoint(width)}`, className)}
        >
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
