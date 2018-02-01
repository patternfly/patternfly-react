export const basic = [
  {
    text: 'Parent 1',
    href: '#parent1',
    tags: ['4'],
    nodes: [
      {
        text: 'Child 1',
        href: '#child1',
        icon: 'fa fa-file-o',
        tags: ['2'],
        nodes: [
          {
            text: 'Grandchild 1',
            href: '#grandchild1',
            icon: 'fa fa-file-o',
            tags: ['0']
          },
          {
            text: 'Grandchild 2',
            href: '#grandchild2',
            icon: 'fa fa-file-o',
            tags: ['0']
          }
        ]
      },
      {
        text: 'Child 2',
        href: '#child2',
        icon: 'fa fa-file-o',
        tags: ['0']
      }
    ]
  },
  {
    text: 'Parent 2',
    href: '#parent2',
    tags: ['0']
  },
  {
    text: 'Parent 3',
    href: '#parent3',
    tags: ['0']
  },
  {
    text: 'Parent 4',
    href: '#parent4',
    tags: ['0']
  },
  {
    text: 'Parent 5',
    href: '#parent5',
    tags: ['0']
  }
];

export const expandedByDefault = [
  {
    text: 'Parent 1',
    href: '#parent1',
    tags: ['4'],
    state: {
      expanded: true
    },
    nodes: [
      {
        text: 'Child 1',
        href: '#child1',
        icon: 'fa fa-file-o',
        tags: ['2'],
        state: {
          expanded: true
        },
        nodes: [
          {
            text: 'Grandchild 1',
            href: '#grandchild1',
            icon: 'fa fa-file-o',
            tags: ['0']
          },
          {
            text: 'Grandchild 2',
            href: '#grandchild2',
            icon: 'fa fa-file-o',
            tags: ['0']
          }
        ]
      },
      {
        text: 'Child 2',
        href: '#child2',
        icon: 'fa fa-file-o',
        tags: ['0']
      }
    ]
  },
  {
    text: 'Parent 2',
    href: '#parent2',
    tags: ['0']
  },
  {
    text: 'Parent 3',
    href: '#parent3',
    tags: ['0'],
    state: {
      expanded: true
    },
    nodes: [
      {
        text: 'Child 1',
        href: '#child2',
        icon: 'fa fa-file-o',
        tags: ['0']
      },
      {
        text: 'Child 2',
        href: '#child2',
        icon: 'fa fa-file-o',
        tags: ['0']
      }
    ]
  }
];

export const selectableNodes = [
  {
    text: 'Parent 1',
    href: '#parent1',
    tags: ['4'],
    selectable: true,
    nodes: [
      {
        text: 'Child 1',
        href: '#child1',
        icon: 'fa fa-file-o',
        tags: ['2'],
        selectable: true,
        nodes: [
          {
            text: 'Grandchild 1',
            href: '#grandchild1',
            icon: 'fa fa-file-o',
            tags: ['0'],
            selectable: true
          },
          {
            text: 'Grandchild 2',
            href: '#grandchild2',
            icon: 'fa fa-file-o',
            tags: ['0'],
            selectable: true
          }
        ]
      },
      {
        text: 'Child 2',
        href: '#child2',
        icon: 'fa fa-file-o',
        tags: ['0'],
        selectable: true
      }
    ]
  }
];
