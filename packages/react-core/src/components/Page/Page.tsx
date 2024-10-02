import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/Page/page';
import { css } from '@patternfly/react-styles';
import globalBreakpointXl from '@patternfly/react-tokens/dist/esm/t_global_breakpoint_xl';
import { debounce, canUseDOM } from '../../helpers/util';
import { Drawer, DrawerContent, DrawerPanelContent } from '../Drawer';
import { PageBreadcrumb, PageBreadcrumbProps } from './PageBreadcrumb';
import { PageGroup, PageGroupProps } from './PageGroup';
import { getResizeObserver } from '../../helpers/resizeObserver';
import { getBreakpoint, getVerticalBreakpoint } from '../../helpers/util';
import { PageContextProvider } from './PageContext';
import { PageBody } from './PageBody';

export enum PageLayouts {
  vertical = 'vertical',
  horizontal = 'horizontal'
}
export interface PageProps extends React.HTMLProps<HTMLDivElement> {
  /** Content rendered inside the main section of the page layout (e.g. <PageSection />) */
  children?: React.ReactNode;
  /** Additional classes added to the page layout */
  className?: string;
  /** Masthead component (e.g. <Masthead />) */
  masthead?: React.ReactNode;
  /** Sidebar component for a side nav (e.g. <PageSidebar />) */
  sidebar?: React.ReactNode;
  /** Notification drawer component for an optional notification drawer (e.g. <NotificationDrawer />) */
  notificationDrawer?: React.ReactNode;
  /** Flag indicating Notification drawer in expanded */
  isNotificationDrawerExpanded?: boolean;
  /** Sets default drawer size */
  drawerDefaultSize?: string;
  /** Sets the minimum drawer size*/
  drawerMinSize?: string;
  /** Sets the maximum drawer size */
  drawerMaxSize?: string;
  /** Flag indicating if breadcrumb width should be limited */
  isBreadcrumbWidthLimited?: boolean;
  /** Callback when notification drawer panel is finished expanding. */
  onNotificationDrawerExpand?: (event: KeyboardEvent | React.MouseEvent | React.TransitionEvent) => void;
  /** Skip to content component for the page */
  skipToContent?: React.ReactElement;
  /** Sets the value for role on the <main> element */
  role?: string;
  /** an id to use for the [role="main"] element */
  mainContainerId?: string;
  /** tabIndex to use for the [role="main"] element, null to unset it */
  mainTabIndex?: number | null;
  /**
   * If true, manages the sidebar open/close state and there is no need to pass the isSidebarOpen boolean into
   * the sidebar component or add a callback onSidebarToggle function into the Masthead component
   */
  isManagedSidebar?: boolean;
  /** Flag indicating if horizontal sub navigation width should be limited */
  isHorizontalSubnavWidthLimited?: boolean;
  /**
   * If true, the managed sidebar is initially open for desktop view
   */
  defaultManagedSidebarIsOpen?: boolean;
  /**
   * Can add callback to be notified when resize occurs, for example to set the sidebar isSidebarOpen prop to false for a width < 768px
   * Returns object { mobileView: boolean, windowSize: number }
   */
  onPageResize?: ((event: MouseEvent | TouchEvent | React.KeyboardEvent, object: any) => void) | null;
  /**
   * The page resize observer uses the breakpoints returned from this function when adding the pf-m-breakpoint-[default|sm|md|lg|xl|2xl] class
   * You can override the default getBreakpoint function to return breakpoints at different sizes than the default
   * You can view the default getBreakpoint function here:
   * https://github.com/patternfly/patternfly-react/blob/main/packages/react-core/src/helpers/util.ts
   */
  getBreakpoint?: (width: number | null) => 'default' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  /**
   * The page resize observer uses the breakpoints returned from this function when adding the pf-m-breakpoint-[default|sm|md|lg|xl|2xl] class
   * You can override the default getVerticalBreakpoint function to return breakpoints at different sizes than the default
   * You can view the default getVerticalBreakpoint function here:
   * https://github.com/patternfly/patternfly-react/blob/main/packages/react-core/src/helpers/util.ts
   */
  getVerticalBreakpoint?: (height: number | null) => 'default' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  /** Banner component for the page. This will be rendered above a breadcrumb if one is also passed.
   */
  banner?: React.ReactNode;
  /** Breadcrumb component for the page */
  breadcrumb?: React.ReactNode;
  /** Horizontal sub navigation component for the page */
  horizontalSubnav?: React.ReactNode;
  /** Accessible label, can be used to name main section */
  mainAriaLabel?: string;
  /** Flag indicating if the horizontal sub navigation should be in a group */
  isHorizontalSubnavGrouped?: boolean;
  /** Flag indicating if the breadcrumb should be in a group */
  isBreadcrumbGrouped?: boolean;
  /** Additional content of the group */
  additionalGroupedContent?: React.ReactNode;
  /** HTML component used as main component of the page. Defaults to 'main', only pass in 'div' if another 'main' element already exists. */
  mainComponent?: 'main' | 'div';
  /** Additional props of the group */
  groupProps?: PageGroupProps;
  /** Additional props of the breadcrumb */
  breadcrumbProps?: PageBreadcrumbProps;
  /** Enables children to fill the available vertical space. Child page sections or groups that should fill should be passed the isFilled property. */
  isContentFilled?: boolean;
}

export interface PageState {
  desktopIsSidebarOpen: boolean;
  mobileIsSidebarOpen: boolean;
  mobileView: boolean;
  width: number;
  height: number;
}

class Page extends React.Component<PageProps, PageState> {
  static displayName = 'Page';
  static defaultProps: PageProps = {
    isManagedSidebar: false,
    isBreadcrumbWidthLimited: false,
    defaultManagedSidebarIsOpen: true,
    mainTabIndex: -1,
    isNotificationDrawerExpanded: false,
    onNotificationDrawerExpand: () => null,
    mainComponent: 'main',
    getBreakpoint,
    getVerticalBreakpoint
  };
  mainRef = React.createRef<HTMLDivElement>();
  pageRef = React.createRef<HTMLDivElement>();
  observer: any = () => {};

  constructor(props: PageProps) {
    super(props);

    const { isManagedSidebar, defaultManagedSidebarIsOpen } = props;
    const managedSidebarOpen = !isManagedSidebar ? true : defaultManagedSidebarIsOpen;
    this.state = {
      desktopIsSidebarOpen: managedSidebarOpen,
      mobileIsSidebarOpen: false,
      mobileView: false,
      width: null,
      height: null
    };
  }

  componentDidMount() {
    const { isManagedSidebar, onPageResize } = this.props;
    if (isManagedSidebar || onPageResize) {
      this.observer = getResizeObserver(this.pageRef.current, this.handleResize);
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
    const { isManagedSidebar, onPageResize } = this.props;
    if (isManagedSidebar || onPageResize) {
      this.observer();
      const currentRef = this.mainRef.current;
      if (currentRef) {
        currentRef.removeEventListener('mousedown', this.handleMainClick);
        currentRef.removeEventListener('touchstart', this.handleMainClick);
      }
    }
  }

  getWindowWidth = () => {
    if (canUseDOM) {
      return this.pageRef.current ? this.pageRef.current.clientWidth : window.innerWidth;
    } else {
      return 1200;
    }
  };

  isMobile = () =>
    // eslint-disable-next-line radix
    this.getWindowWidth() < Number.parseInt(globalBreakpointXl.value, 10) * 16;

  resize = (_event?: MouseEvent | TouchEvent | React.KeyboardEvent<Element>) => {
    const { onPageResize } = this.props;
    const mobileView = this.isMobile();
    if (onPageResize) {
      onPageResize(_event, { mobileView, windowSize: this.getWindowWidth() });
    }
    if (mobileView !== this.state.mobileView) {
      this.setState({ mobileView });
    }
    if (this.pageRef?.current) {
      const currentWidth = this.pageRef.current.clientWidth;
      const currentHeight = this.pageRef.current.clientHeight;

      if (this.state.width !== currentWidth) {
        this.setState({ width: currentWidth });
      }
      if (this.state.height !== currentHeight) {
        this.setState({ height: currentHeight });
      }
    }
  };

  handleResize = debounce(this.resize, 250);

  handleMainClick = () => {
    if (this.isMobile() && this.state.mobileIsSidebarOpen && this.mainRef.current) {
      this.setState({ mobileIsSidebarOpen: false });
    }
  };

  onSidebarToggleMobile = () => {
    this.setState((prevState) => ({
      mobileIsSidebarOpen: !prevState.mobileIsSidebarOpen
    }));
  };

  onSidebarToggleDesktop = () => {
    this.setState((prevState) => ({
      desktopIsSidebarOpen: !prevState.desktopIsSidebarOpen
    }));
  };

  render() {
    const {
      banner,
      breadcrumb,
      isBreadcrumbWidthLimited,
      className,
      children,
      masthead,
      sidebar,
      notificationDrawer,
      isNotificationDrawerExpanded,
      onNotificationDrawerExpand,
      drawerDefaultSize,
      drawerMinSize,
      drawerMaxSize,
      isHorizontalSubnavWidthLimited,
      skipToContent,
      role,
      mainContainerId,
      isManagedSidebar,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      defaultManagedSidebarIsOpen,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      onPageResize,
      getBreakpoint,
      getVerticalBreakpoint,
      mainAriaLabel,
      mainTabIndex,
      mainComponent,
      horizontalSubnav,
      isHorizontalSubnavGrouped,
      isBreadcrumbGrouped,
      additionalGroupedContent,
      groupProps,
      breadcrumbProps,
      isContentFilled,
      ...rest
    } = this.props;
    const { mobileView, mobileIsSidebarOpen, desktopIsSidebarOpen, width, height } = this.state;

    const context = {
      isManagedSidebar,
      onSidebarToggle: mobileView ? this.onSidebarToggleMobile : this.onSidebarToggleDesktop,
      isSidebarOpen: mobileView ? mobileIsSidebarOpen : desktopIsSidebarOpen,
      width,
      height,
      getBreakpoint,
      getVerticalBreakpoint
    };

    let nav = null;
    if (horizontalSubnav) {
      nav = (
        <div className={css(styles.pageMainSubnav, isHorizontalSubnavWidthLimited && styles.modifiers.limitWidth)}>
          <PageBody>{horizontalSubnav}</PageBody>
        </div>
      );
    }

    const crumb = breadcrumb ? (
      <PageBreadcrumb
        stickyOnBreakpoint={breadcrumbProps?.stickyOnBreakpoint}
        isWidthLimited={isBreadcrumbWidthLimited}
      >
        <PageBody>{breadcrumb}</PageBody>
      </PageBreadcrumb>
    ) : null;

    const isGrouped = isHorizontalSubnavGrouped || isBreadcrumbGrouped || additionalGroupedContent;

    const group = isGrouped ? (
      <PageGroup {...groupProps}>
        {isHorizontalSubnavGrouped && nav}
        {banner}
        {isBreadcrumbGrouped && crumb}
        {additionalGroupedContent}
      </PageGroup>
    ) : null;

    const Component: keyof JSX.IntrinsicElements = mainComponent;

    const main = (
      <div className={css(styles.pageMainContainer, isContentFilled && styles.modifiers.fill)}>
        <Component
          ref={this.mainRef}
          role={role}
          id={mainContainerId}
          className={css(styles.pageMain)}
          tabIndex={mainTabIndex}
          aria-label={mainAriaLabel}
        >
          {group}
          {!isHorizontalSubnavGrouped && nav}
          {banner}
          {!isBreadcrumbGrouped && crumb}
          {children}
        </Component>
      </div>
    );

    const panelContent = (
      <DrawerPanelContent defaultSize={drawerDefaultSize} minSize={drawerMinSize} maxSize={drawerMaxSize}>
        {notificationDrawer}
      </DrawerPanelContent>
    );

    return (
      <PageContextProvider value={context}>
        <div
          ref={this.pageRef}
          {...rest}
          className={css(
            styles.page,
            width !== null && height !== null && 'pf-m-resize-observer',
            width !== null && `pf-m-breakpoint-${getBreakpoint(width)}`,
            height !== null && `pf-m-height-breakpoint-${getVerticalBreakpoint(height)}`,
            className
          )}
        >
          {skipToContent}
          {masthead}
          {sidebar}
          {notificationDrawer && (
            <div className={css(styles.pageDrawer)}>
              <Drawer isExpanded={isNotificationDrawerExpanded} onExpand={(event) => onNotificationDrawerExpand(event)}>
                <DrawerContent panelContent={panelContent}>{main}</DrawerContent>
              </Drawer>
            </div>
          )}
          {!notificationDrawer && main}
        </div>
      </PageContextProvider>
    );
  }
}

export { Page };
