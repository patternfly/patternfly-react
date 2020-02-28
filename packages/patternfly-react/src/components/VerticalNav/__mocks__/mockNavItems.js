export const mockNavItems = [
  {
    title: 'Dashboard',
    initialActive: true,
    iconClass: 'fa fa-dashboard',
    onClick: () => alert('Dashboard!'),
    subItems: [
      {
        title: 'Item 1-A',
        iconClass: 'fa fa-envelope',
        onClick: () => alert('Item 1-A!'),
        subItems: [
          {
            title: 'Item 1-A-i',
            iconClass: 'fa fa-envelope-open'
          },
          {
            title: 'Item 1-A-ii',
            iconClass: 'fa fa-envelope-closed'
          },
          {
            title: 'Item 1-A-iii'
          }
        ]
      },
      {
        title: 'Divider 1',
        isDivider: true
      },
      {
        title: 'Item 1-B',
        iconClass: 'fa fa-bell',
        subItems: [
          {
            title: 'Item 1-B-i'
          },
          {
            title: 'Item 1-B-ii'
          },
          {
            title: 'Item 1-B-iii'
          }
        ]
      },
      {
        title: 'Item 1-B-2',
        iconClass: 'fa fa-bell',
        subItems: [
          {
            title: 'Item 1-B-i'
          },
          {
            title: 'Item 1-B-ii'
          },
          {
            title: 'Item 1-B-iii'
          }
        ]
      },
      {
        title: 'Divider 2',
        isDivider: true
      },
      {
        title: 'Item 1-D',
        iconClass: 'fa fa-bell',
        subItems: [
          {
            title: 'Item 1-D-i'
          },
          {
            title: 'Item 1-D-ii'
          },
          {
            title: 'Item 1-D-iii'
          }
        ]
      }
    ]
  },
  {
    title: 'Dolor',
    iconClass: 'fa fa-shield',
    badges: [
      {
        count: 42
      }
    ]
  },
  {
    title: 'Ipsum',
    iconClass: 'fa fa-space-shuttle',
    subItems: [
      {
        title: 'Item 3-A',
        badges: [
          {
            count: 9999,
            tooltip: "Whoa, that's a lot"
          }
        ]
      },
      {
        title: 'Item 3-B (external link)',
        href: 'http://www.patternfly.org',
        preventHref: false
      },
      {
        title: 'Item 3-C',
        subItems: [
          {
            title: 'Item 3-C-i'
          },
          {
            title: 'Item 3-C-ii'
          },
          {
            title: 'Item 3-C-iii'
          }
        ]
      }
    ]
  },
  {
    title: 'Amet',
    iconClass: 'fa fa-paper-plane'
  },
  {
    title: 'Adipscing',
    iconClass: 'fa fa-graduation-cap'
  },
  {
    title: 'Lorem',
    iconClass: 'fa fa-gamepad'
  }
];
