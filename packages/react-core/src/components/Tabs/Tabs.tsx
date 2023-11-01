import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/Tabs/tabs';
import buttonStyles from '@patternfly/react-styles/css/components/Button/button';
import { css } from '@patternfly/react-styles';
import { PickOptional } from '../../helpers/typeUtils';
import AngleLeftIcon from '@patternfly/react-icons/dist/esm/icons/angle-left-icon';
import AngleRightIcon from '@patternfly/react-icons/dist/esm/icons/angle-right-icon';
import PlusIcon from '@patternfly/react-icons/dist/esm/icons/plus-icon';
import { getUniqueId, isElementInView, formatBreakpointMods } from '../../helpers/util';
import { TabContent } from './TabContent';
import { TabProps } from './Tab';
import { TabsContextProvider } from './TabsContext';
import { OverflowTab } from './OverflowTab';
import { Button } from '../Button';
import { getOUIAProps, OUIAProps, getDefaultOUIAId, canUseDOM } from '../../helpers';
import { GenerateId } from '../../helpers/GenerateId/GenerateId';

export enum TabsComponent {
  div = 'div',
  nav = 'nav'
}

export interface HorizontalOverflowObject {
  /** Flag which shows the count of overflowing tabs when enabled */
  showTabCount?: boolean;
  /** The text which displays when an overflowing tab isn't selected */
  defaultTitleText?: string;
  /** The aria label applied to the button which toggles the tab overflow menu */
  toggleAriaLabel?: string;
}

type TabElement = React.ReactElement<TabProps, React.JSXElementConstructor<TabProps>>;
type TabsChild = TabElement | boolean | null | undefined;

export interface TabsProps extends Omit<React.HTMLProps<HTMLElement | HTMLDivElement>, 'onSelect'>, OUIAProps {
  /** Content rendered inside the tabs component. Only `Tab` components or expressions resulting in a falsy value are allowed here. */
  children: TabsChild | TabsChild[];
  /** Additional classes added to the tabs */
  className?: string;
  /** Tabs background color variant */
  variant?: 'default' | 'light300';
  /** The index of the active tab */
  activeKey?: number | string;
  /** The index of the default active tab. Set this for uncontrolled Tabs */
  defaultActiveKey?: number | string;
  /** Callback to handle tab selection */
  onSelect?: (event: React.MouseEvent<HTMLElement, MouseEvent>, eventKey: number | string) => void;
  /** Callback to handle tab closing and adds a basic close button to all tabs. This is overridden by the tab actions property. */
  onClose?: (event: React.MouseEvent<HTMLElement, MouseEvent>, eventKey: number | string) => void;
  /** Callback for the add button. Passing this property inserts the add button */
  onAdd?: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  /** Aria-label for the add button */
  addButtonAriaLabel?: string;
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
  /** Disables border bottom tab styling on tabs. Defaults to false. To remove the bottom border, set this prop to true. */
  hasNoBorderBottom?: boolean;
  /** @deprecated Please use backScrollAriaLabel. Aria-label for the left scroll button */
  leftScrollAriaLabel?: string;
  /** @deprecated Please use forwardScrollAriaLabel. Aria-label for the right scroll button */
  rightScrollAriaLabel?: string;
  /** Aria-label for the back scroll button */
  backScrollAriaLabel?: string;
  /** Aria-label for the forward scroll button */
  forwardScrollAriaLabel?: string;
  /** Determines what tag is used around the tabs. Use "nav" to define the tabs inside a navigation region */
  component?: 'div' | 'nav';
  /** Provides an accessible label for the tabs. Labels should be unique for each set of tabs that are present on a page. When component is set to nav, this prop should be defined to differentiate the tabs from other navigation regions on the page. */
  'aria-label'?: string;
  /** Waits until the first "enter" transition to mount tab children (add them to the DOM) */
  mountOnEnter?: boolean;
  /** Unmounts tab children (removes them from the DOM) when they are no longer visible */
  unmountOnExit?: boolean;
  /** Flag indicates that the tabs should use page insets. */
  usePageInsets?: boolean;
  /** Insets at various breakpoints. */
  inset?: {
    default?: 'insetNone' | 'insetSm' | 'insetMd' | 'insetLg' | 'insetXl' | 'inset2xl';
    sm?: 'insetNone' | 'insetSm' | 'insetMd' | 'insetLg' | 'insetXl' | 'inset2xl';
    md?: 'insetNone' | 'insetSm' | 'insetMd' | 'insetLg' | 'insetXl' | 'inset2xl';
    lg?: 'insetNone' | 'insetSm' | 'insetMd' | 'insetLg' | 'insetXl' | 'inset2xl';
    xl?: 'insetNone' | 'insetSm' | 'insetMd' | 'insetLg' | 'insetXl' | 'inset2xl';
    '2xl'?: 'insetNone' | 'insetSm' | 'insetMd' | 'insetLg' | 'insetXl' | 'inset2xl';
  };
  /** Enable expandable vertical tabs at various breakpoints. (isVertical should be set to true for this to work) */
  expandable?: {
    default?: 'expandable' | 'nonExpandable';
    sm?: 'expandable' | 'nonExpandable';
    md?: 'expandable' | 'nonExpandable';
    lg?: 'expandable' | 'nonExpandable';
    xl?: 'expandable' | 'nonExpandable';
    '2xl'?: 'expandable' | 'nonExpandable';
  };
  /** Flag to indicate if the vertical tabs are expanded */
  isExpanded?: boolean;
  /** Flag indicating the default expanded state for uncontrolled expand/collapse of */
  defaultIsExpanded?: boolean;
  /** Text that appears in the expandable toggle */
  toggleText?: string;
  /** Aria-label for the expandable toggle */
  toggleAriaLabel?: string;
  /** Callback function to toggle the expandable tabs. */
  onToggle?: (event: React.MouseEvent, isExpanded: boolean) => void;
  /** Flag which places overflowing tabs into a menu triggered by the last tab. Additionally an object can be passed with custom settings for the overflow tab. */
  isOverflowHorizontal?: boolean | HorizontalOverflowObject;
  /** Value to overwrite the randomly generated data-ouia-component-id.*/
  ouiaId?: number | string;
  /** Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false. */
  ouiaSafe?: boolean;
}

const variantStyle = {
  default: '',
  light300: styles.modifiers.colorSchemeLight_300
};

interface TabsState {
  /** Used to signal if the scroll buttons should be used  */
  enableScrollButtons: boolean;
  /** Used to control if the scroll buttons should be shown to the user via the pf-m-scrollable class */
  showScrollButtons: boolean;
  /** Used to control if the scroll buttons should be rendered. Rendering must occur before the scroll buttons are
   * shown and rendering must be stopped after they stop being shown to preserve CSS transitions.
   */
  renderScrollButtons: boolean;
  disableBackScrollButton: boolean;
  disableForwardScrollButton: boolean;
  shownKeys: (string | number)[];
  uncontrolledActiveKey: number | string;
  uncontrolledIsExpandedLocal: boolean;
  ouiaStateId: string;
  overflowingTabCount: number;
}

class Tabs extends React.Component<TabsProps, TabsState> {
  static displayName = 'Tabs';
  tabList = React.createRef<HTMLUListElement>();
  leftScrollButtonRef = React.createRef<HTMLButtonElement>();
  private direction = 'ltr';
  constructor(props: TabsProps) {
    super(props);
    this.state = {
      enableScrollButtons: false,
      showScrollButtons: false,
      renderScrollButtons: false,
      disableBackScrollButton: true,
      disableForwardScrollButton: true,
      shownKeys: this.props.defaultActiveKey !== undefined ? [this.props.defaultActiveKey] : [this.props.activeKey], // only for mountOnEnter case
      uncontrolledActiveKey: this.props.defaultActiveKey,
      uncontrolledIsExpandedLocal: this.props.defaultIsExpanded,
      ouiaStateId: getDefaultOUIAId(Tabs.displayName),
      overflowingTabCount: 0
    };

    if (this.props.isVertical && this.props.expandable !== undefined) {
      if (!this.props.toggleAriaLabel && !this.props.toggleText) {
        // eslint-disable-next-line no-console
        console.error(
          'Tabs:',
          'toggleAriaLabel or the toggleText prop is required to make the toggle button accessible'
        );
      }
    }
  }

  scrollTimeout: NodeJS.Timeout = null;

  static defaultProps: PickOptional<TabsProps> = {
    activeKey: 0,
    onSelect: () => undefined as any,
    isFilled: false,
    isSecondary: false,
    isVertical: false,
    isBox: false,
    hasNoBorderBottom: false,
    leftScrollAriaLabel: 'Scroll left',
    backScrollAriaLabel: 'Scroll back',
    rightScrollAriaLabel: 'Scroll right',
    forwardScrollAriaLabel: 'Scroll forward',
    component: TabsComponent.div,
    mountOnEnter: false,
    unmountOnExit: false,
    ouiaSafe: true,
    variant: 'default',
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    onToggle: (_event: React.MouseEvent, _isExpanded: boolean): void => undefined
  };

  handleTabClick(
    event: React.MouseEvent<HTMLElement, MouseEvent>,
    eventKey: number | string,
    tabContentRef: React.RefObject<any>
  ) {
    const { shownKeys } = this.state;
    const { onSelect, defaultActiveKey } = this.props;
    // if defaultActiveKey Tabs are uncontrolled, set new active key internally
    if (defaultActiveKey !== undefined) {
      this.setState({
        uncontrolledActiveKey: eventKey
      });
    } else {
      onSelect(event, eventKey);
    }

    // process any tab content sections outside of the component
    if (tabContentRef) {
      React.Children.toArray(this.props.children)
        .filter((child): child is TabElement => React.isValidElement(child))
        .filter(({ props }) => props.tabContentRef && props.tabContentRef.current)
        .forEach((child) => (child.props.tabContentRef.current.hidden = true));
      // most recently selected tabContent
      if (tabContentRef.current) {
        tabContentRef.current.hidden = false;
      }
    }
    if (this.props.mountOnEnter) {
      this.setState({
        shownKeys: shownKeys.concat(eventKey)
      });
    }
  }

  countOverflowingElements = (container: HTMLUListElement) => {
    const elements = Array.from(container.children);
    return elements.filter((element) => !isElementInView(container, element as HTMLElement, false)).length;
  };

  handleScrollButtons = () => {
    const { isOverflowHorizontal: isOverflowHorizontal } = this.props;
    // add debounce to the scroll event
    clearTimeout(this.scrollTimeout);
    this.scrollTimeout = setTimeout(() => {
      const container = this.tabList.current;
      let disableBackScrollButton = true;
      let disableForwardScrollButton = true;
      let enableScrollButtons = false;
      let overflowingTabCount = 0;

      if (container && !this.props.isVertical && !isOverflowHorizontal) {
        // get first element and check if it is in view
        const overflowOnLeft = !isElementInView(container, container.firstChild as HTMLElement, false);

        // get last element and check if it is in view
        const overflowOnRight = !isElementInView(container, container.lastChild as HTMLElement, false);

        enableScrollButtons = overflowOnLeft || overflowOnRight;

        disableBackScrollButton = !overflowOnLeft;
        disableForwardScrollButton = !overflowOnRight;
      }

      if (isOverflowHorizontal) {
        overflowingTabCount = this.countOverflowingElements(container);
      }

      this.setState({
        enableScrollButtons,
        disableBackScrollButton,
        disableForwardScrollButton,
        overflowingTabCount
      });
    }, 100);
  };

  scrollBack = () => {
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
        if (this.direction === 'ltr') {
          // LTR scrolls left to go back
          container.scrollLeft -= lastElementOutOfView.scrollWidth;
        } else {
          // RTL scrolls right to go back
          container.scrollLeft += lastElementOutOfView.scrollWidth;
        }
      }
    }
  };

  scrollForward = () => {
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
        if (this.direction === 'ltr') {
          // LTR scrolls right to go forward
          container.scrollLeft += firstElementOutOfView.scrollWidth;
        } else {
          // RTL scrolls left to go forward
          container.scrollLeft -= firstElementOutOfView.scrollWidth;
        }
      }
    }
  };

  hideScrollButtons = () => {
    const { enableScrollButtons, renderScrollButtons, showScrollButtons } = this.state;
    if (!enableScrollButtons && !showScrollButtons && renderScrollButtons) {
      this.setState({ renderScrollButtons: false });
    }
  };

  componentDidMount() {
    if (!this.props.isVertical) {
      if (canUseDOM) {
        window.addEventListener('resize', this.handleScrollButtons, false);
      }
      this.direction = getComputedStyle(this.tabList.current).getPropertyValue('direction');
      // call the handle resize function to check if scroll buttons should be shown
      this.handleScrollButtons();
    }
  }

  componentWillUnmount() {
    if (!this.props.isVertical) {
      if (canUseDOM) {
        window.removeEventListener('resize', this.handleScrollButtons, false);
      }
    }
    clearTimeout(this.scrollTimeout);
    this.leftScrollButtonRef.current?.removeEventListener('transitionend', this.hideScrollButtons);
  }

  componentDidUpdate(prevProps: TabsProps, prevState: TabsState) {
    const { activeKey, mountOnEnter, isOverflowHorizontal, children } = this.props;
    const { shownKeys, overflowingTabCount, enableScrollButtons } = this.state;
    if (prevProps.activeKey !== activeKey && mountOnEnter && shownKeys.indexOf(activeKey) < 0) {
      this.setState({
        shownKeys: shownKeys.concat(activeKey)
      });
    }

    if (
      prevProps.children &&
      children &&
      React.Children.toArray(prevProps.children).length !== React.Children.toArray(children).length
    ) {
      this.handleScrollButtons();
    }

    const currentOverflowingTabCount = this.countOverflowingElements(this.tabList.current);
    if (isOverflowHorizontal && currentOverflowingTabCount) {
      this.setState({ overflowingTabCount: currentOverflowingTabCount + overflowingTabCount });
    }

    if (!prevState.enableScrollButtons && enableScrollButtons) {
      this.setState({ renderScrollButtons: true });
      setTimeout(() => {
        this.leftScrollButtonRef.current?.addEventListener('transitionend', this.hideScrollButtons);
        this.setState({ showScrollButtons: true });
      }, 100);
    } else if (prevState.enableScrollButtons && !enableScrollButtons) {
      this.setState({ showScrollButtons: false });
    }

    this.direction = getComputedStyle(this.tabList.current).getPropertyValue('direction');
  }

  render() {
    const {
      className,
      children,
      activeKey,
      defaultActiveKey,
      id,
      isFilled,
      isSecondary,
      isVertical,
      isBox,
      hasNoBorderBottom,
      leftScrollAriaLabel,
      rightScrollAriaLabel,
      backScrollAriaLabel,
      forwardScrollAriaLabel,
      'aria-label': ariaLabel,
      component,
      ouiaId,
      ouiaSafe,
      mountOnEnter,
      unmountOnExit,
      usePageInsets,
      inset,
      variant,
      expandable,
      isExpanded,
      defaultIsExpanded,
      toggleText,
      toggleAriaLabel,
      addButtonAriaLabel,
      onToggle,
      onClose,
      onAdd,
      isOverflowHorizontal: isOverflowHorizontal,
      ...props
    } = this.props;
    const {
      showScrollButtons,
      renderScrollButtons,
      disableBackScrollButton,
      disableForwardScrollButton,
      shownKeys,
      uncontrolledActiveKey,
      uncontrolledIsExpandedLocal,
      overflowingTabCount
    } = this.state;
    const filteredChildren = React.Children.toArray(children)
      .filter((child): child is TabElement => React.isValidElement(child))
      .filter(({ props }) => !props.isHidden);

    const filteredChildrenWithoutOverflow = filteredChildren.slice(0, filteredChildren.length - overflowingTabCount);
    const filteredChildrenOverflowing = filteredChildren.slice(filteredChildren.length - overflowingTabCount);
    const overflowingTabProps = filteredChildrenOverflowing.map((child: React.ReactElement<TabProps>) => child.props);

    const uniqueId = id || getUniqueId();
    const Component: any = component === TabsComponent.nav ? 'nav' : 'div';
    const localActiveKey = defaultActiveKey !== undefined ? uncontrolledActiveKey : activeKey;

    const isExpandedLocal = defaultIsExpanded !== undefined ? uncontrolledIsExpandedLocal : isExpanded;
    /*  Uncontrolled expandable tabs */
    const toggleTabs = (event: React.MouseEvent, newValue: boolean) => {
      if (isExpanded === undefined) {
        this.setState({ uncontrolledIsExpandedLocal: newValue });
      } else {
        onToggle(event, newValue);
      }
    };

    const hasOverflowTab = isOverflowHorizontal && overflowingTabCount > 0;
    const overflowObjectProps = typeof isOverflowHorizontal === 'object' ? { ...isOverflowHorizontal } : {};

    return (
      <TabsContextProvider
        value={{
          variant,
          mountOnEnter,
          unmountOnExit,
          localActiveKey,
          uniqueId,
          handleTabClick: (...args) => this.handleTabClick(...args),
          handleTabClose: onClose
        }}
      >
        <Component
          aria-label={ariaLabel}
          className={css(
            styles.tabs,
            isFilled && styles.modifiers.fill,
            isSecondary && styles.modifiers.secondary,
            isVertical && styles.modifiers.vertical,
            isVertical && expandable && formatBreakpointMods(expandable, styles),
            isVertical && expandable && isExpandedLocal && styles.modifiers.expanded,
            isBox && styles.modifiers.box,
            showScrollButtons && styles.modifiers.scrollable,
            usePageInsets && styles.modifiers.pageInsets,
            hasNoBorderBottom && styles.modifiers.noBorderBottom,
            formatBreakpointMods(inset, styles),
            variantStyle[variant],
            hasOverflowTab && styles.modifiers.overflow,
            className
          )}
          {...getOUIAProps(Tabs.displayName, ouiaId !== undefined ? ouiaId : this.state.ouiaStateId, ouiaSafe)}
          id={id && id}
          {...props}
        >
          {expandable && isVertical && (
            <GenerateId>
              {(randomId) => (
                <div className={css(styles.tabsToggle)}>
                  <div className={css(styles.tabsToggleButton)}>
                    <Button
                      onClick={(event) => toggleTabs(event, !isExpandedLocal)}
                      variant="plain"
                      aria-label={toggleAriaLabel}
                      aria-expanded={isExpandedLocal}
                      id={`${randomId}-button`}
                      aria-labelledby={`${randomId}-text ${randomId}-button`}
                    >
                      <span className={css(styles.tabsToggleIcon)}>
                        <AngleRightIcon arian-hidden="true" />
                      </span>
                      {toggleText && (
                        <span className={css(styles.tabsToggleText)} id={`${randomId}-text`}>
                          {toggleText}
                        </span>
                      )}
                    </Button>
                  </div>
                </div>
              )}
            </GenerateId>
          )}
          {renderScrollButtons && (
            <button
              type="button"
              className={css(styles.tabsScrollButton, isSecondary && buttonStyles.modifiers.secondary)}
              aria-label={backScrollAriaLabel || leftScrollAriaLabel}
              onClick={this.scrollBack}
              disabled={disableBackScrollButton}
              aria-hidden={disableBackScrollButton}
              ref={this.leftScrollButtonRef}
            >
              <AngleLeftIcon />
            </button>
          )}
          <ul className={css(styles.tabsList)} ref={this.tabList} onScroll={this.handleScrollButtons} role="tablist">
            {isOverflowHorizontal ? filteredChildrenWithoutOverflow : filteredChildren}
            {hasOverflowTab && <OverflowTab overflowingTabs={overflowingTabProps} {...overflowObjectProps} />}
          </ul>
          {renderScrollButtons && (
            <button
              type="button"
              className={css(styles.tabsScrollButton, isSecondary && buttonStyles.modifiers.secondary)}
              aria-label={forwardScrollAriaLabel || rightScrollAriaLabel}
              onClick={this.scrollForward}
              disabled={disableForwardScrollButton}
              aria-hidden={disableForwardScrollButton}
            >
              <AngleRightIcon />
            </button>
          )}
          {onAdd !== undefined && (
            <span className={css(styles.tabsAdd)}>
              <Button variant="plain" aria-label={addButtonAriaLabel || 'Add tab'} onClick={onAdd}>
                <PlusIcon />
              </Button>
            </span>
          )}
        </Component>
        {filteredChildren
          .filter(
            (child) =>
              child.props.children &&
              !(unmountOnExit && child.props.eventKey !== localActiveKey) &&
              !(mountOnEnter && shownKeys.indexOf(child.props.eventKey) === -1)
          )
          .map((child) => (
            <TabContent
              key={child.props.eventKey}
              activeKey={localActiveKey}
              child={child}
              id={child.props.id || uniqueId}
              ouiaId={child.props.ouiaId}
            />
          ))}
      </TabsContextProvider>
    );
  }
}

export { Tabs };
