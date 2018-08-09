import React from 'react';
import { boolean } from '@storybook/addon-knobs';
import { inlineTemplate } from 'storybook/decorators/storyTemplates';
import { DOCUMENTATION_URL } from 'storybook/constants/siteConstants';
import StatefulToggleNotificationDrawerWrapper from '../Wrappers/StatefulToggleNotificationDrawerWrapper';

const p1Notifications = [
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
  },
  {
    id: 16,
    seen: true,
    level: 'error',
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
const p2Notifications = [
  {
    id: 17,
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
    id: 18,
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
    id: 19,
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
  },
  {
    id: 20,
    seen: false,
    level: 'error',
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
  },
  {
    id: 32,
    seen: false,
    level: 'error',
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
  },
  {
    id: 33,
    seen: false,
    level: 'error',
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
  },
  {
    id: 34,
    seen: false,
    level: 'error',
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
const p3Notifications = [
  {
    id: 21,
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
    id: 22,
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
    id: 23,
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
  },
  {
    id: 24,
    seen: false,
    level: 'error',
    text: 'Foreman Community Newsletter - January 2029',
    created_at: '2018-03-13T12:30:37.988Z',
    actions: {
      links: [
        {
          href: 'http://theforeman.org/2018/01/foreman-community-newsletter-january-2018.html',
          title: 'Open',
          external: true
        },
        {
          href: 'http://theforeman.org/2018/01/foreman-community-newsletter-january-2018.html',
          title: 'Open again',
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
    notifications: p1Notifications,
    isExpanded: true
  },
  {
    panelkey: '2',
    panelName: 'Notification Tab 2',
    notifications: p2Notifications,
    isExpanded: false,
    showLoading: true
  },
  {
    panelkey: '3',
    panelName: 'Notification Tab 3',
    notifications: p3Notifications,
    isExpanded: false,
    showLoading: true
  }
];

const StatefulNotificationDrawerStory = stories => {
  stories.addWithInfo('Stateful Drawer Wrapper', '', () => {
    const story = (
      <nav className="navbar navbar-pf-vertical">
        <nav className="collapse navbar-collapse">
          <StatefulToggleNotificationDrawerWrapper
            panels={panels}
            isDrawerOpen
            hasUnreadMessages
            isExpandable={boolean('is Drawer Expandable', true)}
          />
        </nav>
      </nav>
    );
    return inlineTemplate({
      title: 'Stateful Drawer Wrapper',
      documentationLink: `${DOCUMENTATION_URL.PATTERNFLY_ORG_COMMUNICATION}notification-drawer`,
      story
    });
  });
};

export default StatefulNotificationDrawerStory;
