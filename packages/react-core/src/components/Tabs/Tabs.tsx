import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/Tabs/tabs';
import buttonStyles from '@patternfly/react-styles/css/components/Button/button';
import { css } from '@patternfly/react-styles';
import { PickOptional } from '../../helpers/typeUtils';
import AngleLeftIcon from '@patternfly/react-icons/dist/js/icons/angle-left-icon';
import AngleRightIcon from '@patternfly/react-icons/dist/js/icons/angle-right-icon';
import { getUniqueId, isElementInView, formatBreakpointMods } from '../../helpers/util';
import { TabButton } from './TabButton';
import { TabContent } from './TabContent';
import { TabProps } from './Tab';
import { TabsContextProvider } from './TabsContext';
import { getOUIAProps, OUIAProps, getDefaultOUIAId } from '../../helpers';

export enum TabsComponent {
  div = 'div',
  nav = 'nav'
}

export interface TabsProps extends Omit<React.HTMLProps<HTMLElement | HTMLDivElement>, 'onSelect'>, OUIAProps {
  /** Content rendered inside the tabs component. Must be React.ReactElement<TabProps>[] */
  children: React.ReactNode;
  /** Additional classes added to the tabs */
  className?: string;
  /** Tabs background color variant */
  variant?: 'default' | 'light300';
  /** The index of the active tab */
  activeKey?: number | string;
  /** Callback to handle tab selection */
  onSelect?: (event: React.MouseEvent<HTMLElement, MouseEvent>, eventKey: number | string) => void;
  /** Uniquely identifies the tabs */
  id?: string;
  /** Enables the filled tab list layout */
  isFilled?: boolean;
  /** Enables secondary tab styling */
  isSecondary?: boolean;
  /** Enables box styling to the tab component */
  isBox?: boolean;
  /** Enables vertical tab styling */
  isVertical?: boolean;
  /** Aria-label for the left scroll button */
  leftScrollAriaLabel?: string;
  /** Aria-label for the right scroll button */
  rightScrollAriaLabel?: string;
  /** Determines what tag is used around the tabs. Use "nav" to define the tabs inside a navigation region */
  component?: 'div' | 'nav';
  /** Provides an accessible label for the tabs. Labels should be unique for each set of tabs that are present on a page. When component is set to nav, this prop should be defined to differentiate the tabs from other navigation regions on the page. */
  'aria-label'?: string;
  /** Waits until the first "enter" transition to mount tab children (add them to the DOM) */
  mountOnEnter?: boolean;
  /** Unmounts tab children (removes them from the DOM) when they are no longer visible */
  unmountOnExit?: boolean;
  /** Insets at various breakpoints. */
  inset?: {
    default?: 'insetNone' | 'insetSm' | 'insetMd' | 'insetLg' | 'insetXl' | 'inset2xl';
    sm?: 'insetNone' | 'insetSm' | 'insetMd' | 'insetLg' | 'insetXl' | 'inset2xl';
    md?: 'insetNone' | 'insetSm' | 'insetMd' | 'insetLg' | 'insetXl' | 'inset2xl';
    lg?: 'insetNone' | 'insetSm' | 'insetMd' | 'insetLg' | 'insetXl' | 'inset2xl';
    xl?: 'insetNone' | 'insetSm' | 'insetMd' | 'insetLg' | 'insetXl' | 'inset2xl';
    '2xl'?: 'insetNone' | 'insetSm' | 'insetMd' | 'insetLg' | 'insetXl' | 'inset2xl';
  };
}

const variantStyle = {
  default: '',
  light300: styles.modifiers.colorSchemeLight_300
};

interface TabsState {
  showScrollButtons: boolean;
  disableLeftScrollButton: boolean;
  disableRightScrollButton: boolean;
  shownKeys: (string | number)[];
  ouiaStateId: string;
}

export class Tabs extends React.Component<TabsProps, TabsState> {
  static displayName = 'Tabs';
  tabList = React.createRef<HTMLUListElement>();
  constructor(props: TabsProps) {
    super(props);
    this.state = {
      showScrollButtons: false,
      disableLeftScrollButton: false,
      disableRightScrollButton: false,
      shownKeys: [this.props.activeKey], // only for mountOnEnter case
      ouiaStateId: getDefaultOUIAId(Tabs.displayName)
    };
  }

  static defaultProps: PickOptional<TabsProps> = {
    activeKey: 0,
    onSelect: () => undefined as any,
    isFilled: false,
    isSecondary: false,
    isVertical: false,
    isBox: false,
    leftScrollAriaLabel: 'Scroll left',
    rightScrollAriaLabel: 'Scroll right',
    component: TabsComponent.div,
    mountOnEnter: false,
    unmountOnExit: false,
    ouiaSafe: true,
    variant: 'default'
  };

  handleTabClick(
    event: React.MouseEvent<HTMLElement, MouseEvent>,
    eventKey: number | string,
    tabContentRef: React.RefObject<any>,
    mountOnEnter: boolean
  ) {
    const { shownKeys } = this.state;
    this.props.onSelect(event, eventKey);
    // process any tab content sections outside of the component
    if (tabContentRef) {
      React.Children.toArray(this.props.children)
        .map(child => child as React.ReactElement<TabProps>)
        .filter(child => child.props && child.props.tabContentRef && child.props.tabContentRef.current)
        .forEach(child => (child.props.tabContentRef.current.hidden = true));
      // most recently selected tabContent
      if (tabContentRef.current) {
        tabContentRef.current.hidden = false;
      }
    }
    if (mountOnEnter) {
      this.setState({
        shownKeys: shownKeys.concat(eventKey)
      });
    }
  }

  handleScrollButtons = () => {
    if (this.tabList.current && !this.props.isVertical) {
      const container = this.tabList.current;
      // get first element and check if it is in view
      const overflowOnLeft = !isElementInView(container, container.firstChild as HTMLElement, false);

      // get last element and check if it is in view
      const overflowOnRight = !isElementInView(container, container.lastChild as HTMLElement, false);

      const showScrollButtons = overflowOnLeft || overflowOnRight;

      const disableLeftScrollButton = !overflowOnLeft;
      const disableRightScrollButton = !overflowOnRight;

      this.setState({
        showScrollButtons,
        disableLeftScrollButton,
        disableRightScrollButton
      });
    }
  };

  scrollLeft = () => {
    // find first Element that is fully in view on the left, then scroll to the element before it
    if (this.tabList.current) {
      const container = this.tabList.current;
      const childrenArr = Array.from(container.children);
      let firstElementInView: any;
      let lastElementOutOfView: any;
      let i;
      for (i = 0; i < childrenArr.length && !firstElementInView; i++) {
        if (isElementInView(container, childrenArr[i] as HTMLElement, false)) {
          firstElementInView = childrenArr[i];
          lastElementOutOfView = childrenArr[i - 1];
        }
      }
      if (lastElementOutOfView) {
        container.scrollLeft -= lastElementOutOfView.scrollWidth;
      }
    }
  };

  scrollRight = () => {
    // find last Element that is fully in view on the right, then scroll to the element after it
    if (this.tabList.current) {
      const container = this.tabList.current as any;
      const childrenArr = Array.from(container.children);
      let lastElementInView: any;
      let firstElementOutOfView: any;
      for (let i = childrenArr.length - 1; i >= 0 && !lastElementInView; i--) {
        if (isElementInView(container, childrenArr[i] as HTMLElement, false)) {
          lastElementInView = childrenArr[i];
          firstElementOutOfView = childrenArr[i + 1];
        }
      }
      if (firstElementOutOfView) {
        container.scrollLeft += firstElementOutOfView.scrollWidth;
      }
    }
  };

  componentDidMount() {
    if (!this.props.isVertical) {
      window.addEventListener('resize', this.handleScrollButtons, false);
      // call the handle resize function to check if scroll buttons should be shown
      this.handleScrollButtons();
    }
  }

  componentWillUnmount() {
    if (!this.props.isVertical) {
      window.removeEventListener('resize', this.handleScrollButtons, false);
    }
  }

  componentDidUpdate(prevProps: TabsProps) {
    const { activeKey, mountOnEnter } = this.props;
    const { shownKeys } = this.state;
    if (prevProps.activeKey !== activeKey && mountOnEnter && shownKeys.indexOf(activeKey) < 0) {
      this.setState({
        shownKeys: shownKeys.concat(activeKey)
      });
    }
  }

  render() {
    const {
      className,
      children,
      activeKey,
      id,
      isFilled,
      isSecondary,
      isVertical,
      isBox,
      leftScrollAriaLabel,
      rightScrollAriaLabel,
      'aria-label': ariaLabel,
      component,
      ouiaId,
      ouiaSafe,
      mountOnEnter,
      unmountOnExit,
      inset,
      variant,
      ...props
    } = this.props;
    const { showScrollButtons, disableLeftScrollButton, disableRightScrollButton, shownKeys } = this.state;
    const filteredChildren = (React.Children.toArray(children) as React.ReactElement<TabProps>[])
      .filter(Boolean)
      .filter(child => !child.props.isHidden);

    const uniqueId = id || getUniqueId();
    const Component: any = component === TabsComponent.nav ? 'nav' : 'div';

    return (
      <TabsContextProvider value={{ variant }}>
        <Component
          aria-label={ariaLabel}
          className={css(
            styles.tabs,
            isFilled && styles.modifiers.fill,
            isSecondary && styles.modifiers.secondary,
            isVertical && styles.modifiers.vertical,
            isBox && styles.modifiers.box,
            showScrollButtons && !isVertical && styles.modifiers.scrollable,
            formatBreakpointMods(inset, styles),
            variantStyle[variant],
            className
          )}
          {...getOUIAProps(Tabs.displayName, ouiaId !== undefined ? ouiaId : this.state.ouiaStateId, ouiaSafe)}
          id={id && id}
          {...props}
        >
          <button
            className={css(styles.tabsScrollButton, isSecondary && buttonStyles.modifiers.secondary)}
            aria-label={leftScrollAriaLabel}
            onClick={this.scrollLeft}
            disabled={disableLeftScrollButton}
            aria-hidden={disableLeftScrollButton}
          >
            <AngleLeftIcon />
          </button>
          <ul className={css(styles.tabsList)} ref={this.tabList} onScroll={this.handleScrollButtons}>
            {filteredChildren.map((child, index) => {
              const {
                title,
                eventKey,
                tabContentRef,
                id: childId,
                tabContentId,
                className: childClassName = '',
                ouiaId: childOuiaId,
                // eslint-disable-next-line @typescript-eslint/no-unused-vars
                isHidden,
                ...rest
              } = child.props;
              let ariaControls = tabContentId ? `${tabContentId}` : `pf-tab-section-${eventKey}-${childId || uniqueId}`;
              if ((mountOnEnter || unmountOnExit) && eventKey !== activeKey) {
                ariaControls = undefined;
              }
              return (
                <li
                  key={index}
                  className={css(styles.tabsItem, eventKey === activeKey && styles.modifiers.current, childClassName)}
                >
                  <TabButton
                    className={css(styles.tabsLink)}
                    onClick={(event: any) => this.handleTabClick(event, eventKey, tabContentRef, mountOnEnter)}
                    id={`pf-tab-${eventKey}-${childId || uniqueId}`}
                    aria-controls={ariaControls}
                    tabContentRef={tabContentRef}
                    ouiaId={childOuiaId}
                    {...rest}
                  >
                    {title}
                  </TabButton>
                </li>
              );
            })}
          </ul>
          <button
            className={css(styles.tabsScrollButton, isSecondary && buttonStyles.modifiers.secondary)}
            aria-label={rightScrollAriaLabel}
            onClick={this.scrollRight}
            disabled={disableRightScrollButton}
            aria-hidden={disableRightScrollButton}
          >
            <AngleRightIcon />
          </button>
        </Component>
        {filteredChildren
          .filter(
            child =>
              child.props.children &&
              !(unmountOnExit && child.props.eventKey !== activeKey) &&
              !(mountOnEnter && shownKeys.indexOf(child.props.eventKey) === -1)
          )
          .map((child, index) => (
            <TabContent
              key={index}
              activeKey={activeKey}
              child={child}
              id={child.props.id || uniqueId}
              ouiaId={child.props.ouiaId}
            />
          ))}
      </TabsContextProvider>
    );
  }
}
