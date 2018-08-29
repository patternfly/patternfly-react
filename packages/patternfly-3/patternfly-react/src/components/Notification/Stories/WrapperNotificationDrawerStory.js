import React from 'react';
import { action } from '@storybook/addon-actions';
import { inlineTemplate } from 'storybook/decorators/storyTemplates';
import { DOCUMENTATION_URL } from 'storybook/constants/siteConstants';
import NotificationDrawerWrapper from '../Wrappers/NotificationDrawerWrapper';
import { NotificationDrawer } from '../NotificationDrawer/index';

const handleClick = e => {
  e.preventDefault();
  action('bell click')();
};

const expandClicked = () => {
  action('expand clicked!')();
};
const closeClicked = () => {
  action('close clicked!')();
};
const notifClicked = () => {
  action('notification clicked!')();
};
const linkClicked = () => {
  action('link clicked!')();
};
const foremanNotifications = [
  {
    id: 12,
    seen: false,
    level: 'info',
    text: 'Foreman Community Newsletter - January 2019',
    created_at: '2012-03-13T12:30:37.988Z',
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
    created_at: '2019-03-13T12:30:37.988Z',
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
    created_at: '2018-03-13T12:30:37.988Z',
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
const panels = [
  {
    panelkey: '1',
    panelName: 'Notification Tab 1',
    notifications: foremanNotifications,
    isExpanded: true
  },
  {
    panelkey: '2',
    panelName: 'Notification Tab 2',
    notifications: foremanNotifications,
    isExpanded: false
  }
];

const WrapperNotificationDrawerStory = stories => {
  stories.addWithInfo('Drawer Wrapper', '', () => {
    const story = (
      <nav className="navbar navbar-pf-vertical">
        <nav className="collapse navbar-collapse">
          <ul className="nav navbar-nav navbar-right navbar-iconic">
            <NotificationDrawer.Toggle hasUnreadMessages onClick={handleClick} />
          </ul>
        </nav>
        <NotificationDrawerWrapper
          panels={panels}
          expandedPanel="1"
          toggleDrawerExpand={expandClicked}
          toggleDrawerHide={closeClicked}
          togglePanel={expandClicked}
          onNotificationClick={notifClicked}
          onNotificationHide={notifClicked}
          onMarkPanelAsRead={linkClicked}
          onMarkPanelAsClear={linkClicked}
          onClickedLink={linkClicked}
        />
      </nav>
    );
    return inlineTemplate({
      title: 'Drawer Wrapper',
      documentationLink: `${DOCUMENTATION_URL.PATTERNFLY_ORG_COMMUNICATION}notification-drawer`,
      story
    });
  });
};

export default WrapperNotificationDrawerStory;
