import React from 'react';
import styles from '@patternfly/react-styles/css/components/Tabs/tabs';
import { css } from '@patternfly/react-styles';
import AngleRightIcon from '@patternfly/react-icons/dist/esm/icons/angle-right-icon';
import { Popper } from '../../helpers';
import { Menu, MenuContent, MenuList, MenuItem } from '../Menu';
import { TabsContext } from './TabsContext';
import { TabProps } from './Tab';

export interface OverflowTabProps extends React.HTMLProps<HTMLLIElement> {
  /** Additional classes added to the overflow tab */
  className?: string;
  /** Element to append the menu displaying the overflow tabs to */
  menuAppendTo?: HTMLElement | (() => HTMLElement);
  /** The tabs that should be displayed in the menu */
  overflowingTabs?: TabProps[];
  /** Flag which shows the count of overflowing tabs when enabled */
  showTabCount?: boolean;
}

export const OverflowTab: React.FunctionComponent<OverflowTabProps> = ({
  className,
  menuAppendTo,
  overflowingTabs = [],
  showTabCount,
  ...props
}: OverflowTabProps) => {
  const menuRef = React.useRef<HTMLDivElement>();
  const overflowTabRef = React.useRef<HTMLLIElement>();

  const [isExpanded, setIsExpanded] = React.useState(false);

  const { localActiveKey, handleTabClick } = React.useContext(TabsContext);

  const handleMenuKeys = (ev: KeyboardEvent) => {
    const menuContainsEventTarget = menuRef?.current?.contains(ev.target as Node);
    if (isExpanded && menuContainsEventTarget && ev.key === 'Escape') {
      setIsExpanded(!isExpanded);
      overflowTabRef?.current.focus();
    }
  };

  const handleClick = (ev: MouseEvent) => {
    const clickIsOutsideMenu = !menuRef?.current?.contains(ev.target as Node);
    const clickIsOutsideOverflowTab = !overflowTabRef?.current?.contains(ev.target as Node);
    if (isExpanded && clickIsOutsideMenu && clickIsOutsideOverflowTab) {
      setIsExpanded(false);
    }
  };

  React.useEffect(() => {
    window.addEventListener('click', handleClick);
    window.addEventListener('keydown', handleMenuKeys);

    return () => {
      window.removeEventListener('click', handleClick);
      window.removeEventListener('keydown', handleMenuKeys);
    };
  }, [isExpanded, menuRef, overflowTabRef]);

  const selectedTab = overflowingTabs.find(tab => tab.eventKey === localActiveKey);
  const tabTitle = selectedTab?.title ? selectedTab.title : 'More';

  const toggleMenu = () => {
    setIsExpanded(prevIsExpanded => !prevIsExpanded);
    setTimeout(() => {
      if (menuRef?.current) {
        const firstElement = menuRef.current.querySelector('li > button,input:not(:disabled)');
        firstElement && (firstElement as HTMLElement).focus();
      }
    }, 0);
  };

  const overflowTab = (
    <li
      className={css(styles.tabsItem, 'pf-m-overflow', selectedTab && styles.modifiers.current, className)}
      ref={overflowTabRef}
      {...props}
    >
      <button
        className={css(styles.tabsLink, isExpanded && styles.modifiers.expanded)}
        onClick={() => toggleMenu()}
        aria-label="More tabs. Click this button to reveal the other tabs which you can select"
      >
        <span className={styles.tabsItemText}>
          {tabTitle}
          {showTabCount && tabTitle === 'More' && ` (${overflowingTabs.length})`}
        </span>
        <span className={styles.tabsLinkToggleIcon}>
          <AngleRightIcon />
        </span>
      </button>
    </li>
  );

  const tabs = overflowingTabs.map(tab => (
    <MenuItem key={tab.eventKey} itemId={tab.eventKey} isSelected={localActiveKey === tab.eventKey}>
      {tab.title}
    </MenuItem>
  ));

  const onTabSelect = (event: React.MouseEvent<HTMLElement, MouseEvent>, key: number | string) => {
    setIsExpanded(false);
    const selectedTabRef = overflowingTabs.find(tab => tab.eventKey === key).tabContentRef;
    handleTabClick(event, key, selectedTabRef);
  };

  const overflowMenu = (
    <Menu ref={menuRef} onSelect={(ev, itemId) => onTabSelect(ev as React.MouseEvent<HTMLElement, MouseEvent>, itemId)}>
      <MenuContent>
        <MenuList>{tabs}</MenuList>
      </MenuContent>
    </Menu>
  );

  return (
    <Popper
      trigger={overflowTab}
      popper={overflowMenu}
      isVisible={isExpanded}
      popperMatchesTriggerWidth={false}
      appendTo={menuAppendTo}
    />
  );
};

OverflowTab.displayName = 'OverflowTab';
