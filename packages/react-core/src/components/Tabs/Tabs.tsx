import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/Tabs/tabs';
import buttonStyles from '@patternfly/react-styles/css/components/Button/button';
import { css } from '@patternfly/react-styles';
import { PickOptional } from '../../helpers/typeUtils';
import AngleLeftIcon from '@patternfly/react-icons/dist/js/icons/angle-left-icon';
import AngleRightIcon from '@patternfly/react-icons/dist/js/icons/angle-right-icon';
import { getUniqueId, isElementInView, capitalizeFirstLetter } from '../../helpers/util';
import { TabButton } from './TabButton';
import { TabContent } from './TabContent';
import { getOUIAProps, OUIAProps } from '../../helpers';

export enum TabsVariant {
  div = 'div',
  nav = 'nav'
}

export interface TabsProps extends Omit<React.HTMLProps<HTMLElement | HTMLDivElement>, 'onSelect'> {
  /** Content rendered inside the tabs component. */
  children: React.ReactNode;
  /** Additional classes added to the tabs */
  className?: string;
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
  variant?: 'div' | 'nav';
  /** Provides an accessible label for the tabs. Labels should be unique for each set of tabs that are present on a page. When variant is set to nav, this prop should be defined to differentiate the tabs from other navigation regions on the page. */
  'aria-label'?: string;
  /** Waits until the first "enter" transition to mount tab children (add them to the DOM) */
  mountOnEnter?: boolean;
  /** Unmounts tab children (removes them from the DOM) when they are no longer visible */
  unmountOnExit?: boolean;
  /* Modifies the tabs component padding/inset to visually match padding of other adjacent components.*/
  inset?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  /* On medium viewports, modifies the tabs component padding/inset to visually match padding of other adjacent components.*/
  insetOnMd?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  /* On large viewports, modifies the tabs component padding/inset to visually match padding of other adjacent components.*/
  insetOnLg?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  /* On extra large viewports, modifies the tabs component padding/inset to visually match padding of other adjacent components.*/
  insetOnXl?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  /* On 2xl viewports, modifies the tabs component padding/inset to visually match padding of other adjacent components.*/
  insetOn2Xl?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
}

export interface TabsState {
  showScrollButtons: boolean;
  disableLeftScrollButton: boolean;
  disableRightScrollButton: boolean;
  shownKeys: (string | number)[];
}

export class Tabs extends React.Component<TabsProps & OUIAProps, TabsState> {
  tabList = React.createRef<HTMLUListElement>();
  constructor(props: TabsProps & OUIAProps) {
    super(props);
    this.state = {
      showScrollButtons: false,
      disableLeftScrollButton: false,
      disableRightScrollButton: false,
      shownKeys: [this.props.activeKey] // only for mountOnEnter case
    };
  }

  static defaultProps: PickOptional<TabsProps> = {
    className: '',
    activeKey: 0,
    onSelect: () => undefined as any,
    isFilled: false,
    isSecondary: false,
    isVertical: false,
    isBox: false,
    leftScrollAriaLabel: 'Scroll left',
    rightScrollAriaLabel: 'Scroll right',
    variant: TabsVariant.div,
    mountOnEnter: false,
    unmountOnExit: false,
    inset: undefined,
    insetOnMd: undefined,
    insetOnLg: undefined,
    insetOnXl: undefined,
    insetOn2Xl: undefined
  };

  handleTabClick(
    event: React.MouseEvent<HTMLElement, MouseEvent>,
    eventKey: number,
    tabContentRef: React.RefObject<any>,
    mountOnEnter: boolean
  ) {
    const { shownKeys } = this.state;
    this.props.onSelect(event, eventKey);
    // process any tab content sections outside of the component
    if (tabContentRef) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      React.Children.map(this.props.children, (child: any, i) => {
        child.props.tabContentRef.current.hidden = true;
      });
      // most recently selected tabContent
      tabContentRef.current.hidden = false;
    }
    // Update scroll button state and which button to highlight
    setTimeout(() => {
      this.handleScrollButtons();
    }, 1);
    if (mountOnEnter) {
      this.setState({
        shownKeys: shownKeys.concat(eventKey)
      });
    }
  }

  handleScrollButtons = () => {
    if (this.tabList.current) {
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

  insetString = (s: string) => (s === '2xl' ? '_2xl' : capitalizeFirstLetter(s));

  componentDidMount() {
    window.addEventListener('resize', this.handleScrollButtons, false);
    // call the handle resize function to check if scroll buttons should be shown
    this.handleScrollButtons();
  }

  componentWillUnmount() {
    document.removeEventListener('resize', this.handleScrollButtons, false);
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
      variant,
      ouiaId,
      mountOnEnter,
      unmountOnExit,
      inset,
      insetOnMd,
      insetOnLg,
      insetOnXl,
      insetOn2Xl,
      ...props
    } = this.props;
    const { showScrollButtons, disableLeftScrollButton, disableRightScrollButton, shownKeys } = this.state;

    const uniqueId = id || getUniqueId();
    const Component: any = variant === TabsVariant.nav ? 'nav' : 'div';

    return (
      <React.Fragment>
        <Component
          aria-label={ariaLabel}
          className={css(
            styles.tabs,
            isFilled && styles.modifiers.fill,
            isSecondary && styles.modifiers.secondary,
            isVertical && styles.modifiers.vertical,
            isBox && styles.modifiers.box,
            showScrollButtons && !isVertical && styles.modifiers.scrollable,
            inset && styles.modifiers[`inset${this.insetString(inset)}` as keyof typeof styles.modifiers],
            insetOnMd && styles.modifiers[`inset${this.insetString(insetOnMd)}OnMd` as keyof typeof styles.modifiers],
            insetOnLg && styles.modifiers[`inset${this.insetString(insetOnLg)}OnLg` as keyof typeof styles.modifiers],
            insetOnXl && styles.modifiers[`inset${this.insetString(insetOnXl)}OnXl` as keyof typeof styles.modifiers],
            insetOn2Xl &&
              styles.modifiers[`inset${this.insetString(insetOn2Xl)}On_2xl` as keyof typeof styles.modifiers],
            className
          )}
          {...getOUIAProps('Tabs', ouiaId)}
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
            {React.Children.map(children, (child: any, index) => {
              const { title, eventKey, tabContentRef, id: childId, tabContentId, ...rest } = child.props;
              return (
                <li
                  key={index}
                  className={css(styles.tabsItem, eventKey === activeKey && styles.modifiers.current, className)}
                >
                  <TabButton
                    className={css(styles.tabsLink)}
                    onClick={(event: any) => this.handleTabClick(event, eventKey, tabContentRef, mountOnEnter)}
                    id={`pf-tab-${eventKey}-${childId || uniqueId}`}
                    aria-controls={
                      tabContentId ? `${tabContentId}` : `pf-tab-section-${eventKey}-${childId || uniqueId}`
                    }
                    tabContentRef={tabContentRef}
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
        {React.Children.map(children, (child: any, index) => {
          if (
            !child.props.children ||
            (unmountOnExit && child.props.eventKey !== activeKey) ||
            (mountOnEnter && shownKeys.indexOf(child.props.eventKey) === -1)
          ) {
            return null;
          } else {
            return <TabContent key={index} activeKey={activeKey} child={child} id={child.props.id || uniqueId} />;
          }
        })}
      </React.Fragment>
    );
  }
}
