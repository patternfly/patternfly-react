import React from 'react';
import { shallow, mount } from 'enzyme';
import {
  NotificationDrawerPanelWrapper,
  NotificationDrawerWrapper,
  StatefulNotificationDrawerWrapper,
  StatefulToggleNotificationDrawerWrapper
} from './index';
import { Icon } from '../../Icon';
import getIconClass from './Icon.consts';

jest.unmock('./NotificationDrawerPanelWrapper');

const p1Notifications = [
  {
    id: 12,
    seen: false,
    level: 'info',
    text: 'Foreman Community Newsletter - January 2019',
    group: 'Community',
    created_at: 'bad_date',
    actions: {
      links: [
        {
          href: 'http://theforeman.org/2018/01/foreman-community-newsletter-january-2018.html',
          title: 'Open',
          external: true
        }
      ]
    }
  },
  {
    id: 14,
    seen: true,
    level: 'warning',
    text: 'Foreman Community Newsletter - January 2019',
    group: 'Community',
    actions: {
      links: [
        {
          href: 'http://theforeman.org/2018/01/foreman-community-newsletter-january-2018.html',
          title: 'Open',
          external: true
        }
      ]
    }
  },
  {
    id: 15,
    seen: true,
    level: 'ok',
    text: 'Foreman Community Newsletter - January 2029',
    group: 'Community',
    actions: {
      links: [
        {
          href: 'http://theforeman.org/2018/01/foreman-community-newsletter-january-2018.html',
          title: 'Open',
          external: true
        }
      ]
    }
  },
  {
    id: 16,
    seen: false,
    level: 'error',
    text: 'Foreman Community Newsletter - January 2029',
    group: 'Community',
    actions: {
      links: [
        {
          href: 'http://theforeman.org/2018/01/foreman-community-newsletter-january-2018.html',
          title: 'Open',
          external: true
        }
      ]
    }
  }
];
const panel = [
  {
    panelkey: '1',
    panelName: 'Notification Tab 1',
    notifications: p1Notifications,
    isExpanded: true
  }
];

test('NotificationDrawerPanelWraper is working properly', () => {
  const component = mount(
    <NotificationDrawerPanelWrapper
      panelkey={panel.panelkey}
      panelName="panelName"
      notifications={p1Notifications}
      isExpanded
      togglePanel={jest.fn()}
      onNotificationClick={jest.fn()}
      onNotificationAsRead={jest.fn()}
      onNotificationHide={jest.fn()}
      onMarkPanelAsRead={jest.fn()}
      onClickedLink={jest.fn()}
      onMarkPanelAsClear={jest.fn()}
      showLoading
    />
  );

  expect(component.render()).toMatchSnapshot();
});

test('DrawerWraper is working properly', () => {
  const component = mount(
    <NotificationDrawerWrapper
      panels={panel}
      toggleDrawerHide={jest.fn()}
      toggleDrawerExpand={jest.fn()}
      togglePanel={jest.fn()}
      isExpandable
      isExpanded
      onNotificationClick={jest.fn()}
      onNotificationAsRead={jest.fn()}
      onNotificationHide={jest.fn()}
      onMarkPanelAsRead={jest.fn()}
      onMarkPanelAsClear={jest.fn()}
      onClickedLink={jest.fn()}
    />
  );

  expect(component.render()).toMatchSnapshot();
});

test('StatefulNotificationDrawerWrapper is working properly', () => {
  const mockFunc = () => {
    const success = 'success';
    return success;
  };
  const component = shallow(
    <StatefulNotificationDrawerWrapper panels={panel} isExpanded updateUnreadCount={mockFunc} />
  );
  component.instance().onMarkPanelAsRead('1'); // panelKey
  component.instance().onMarkPanelAsClear('1');
  component.instance().onNotificationClick('1', 12); // (panelKey, notificationKey)
  component.instance().onNotificationHide('1', 12);
  component.instance().togglePanel('1');
  component.instance().toggleDrawerExpand();
  component.instance().updateUnreadCount();

  expect(component.render()).toMatchSnapshot();
});

test('StatefulToggleNotificationDrawerWrapper is working properly', () => {
  const component = shallow(<StatefulToggleNotificationDrawerWrapper panels={panel} isDrawerOpen hasUnreadMessages />);
  component.instance().toggleDrawer();
  component.instance().updateUnreadCount(true);

  expect(component.render()).toMatchSnapshot();
});

test('getIconClass is working properly', () => {
  const component = mount(
    <div>
      <Icon type="pf" name={getIconClass('ok')} />
      <Icon type="pf" name={getIconClass('info')} />
      <Icon type="pf" name={getIconClass('warning')} />
      <Icon type="pf" name={getIconClass('danger')} />
      <Icon type="pf" name={getIconClass('close')} />
      <Icon type="pf" name={getIconClass('notice')} />
      <Icon type="pf" name={getIconClass('question-sign')} />
    </div>
  );

  expect(component.render()).toMatchSnapshot();
});
