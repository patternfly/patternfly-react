export const basicData = [
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

export const MockTreeViewManagerData = [
  {
    id: 1,
    text: 'Parent 1',
    selectable: true,
    selected: false,
    state: {
      expanded: true
    },
    nodes: [
      {
        id: 2,
        text: 'Child 1',
        icon: 'fa fa-file-o'
      },
      {
        id: 3,
        text: 'Child 1',
        icon: 'fa fa-file-o'
      }
    ]
  },
  {
    id: 4,
    text: 'Parent 2',
    selectable: true,
    selected: false,
    state: {
      expanded: true
    },
    nodes: [
      {
        id: 5,
        text: 'Child 1',
        icon: 'fa fa-file-o'
      },
      {
        id: 6,
        text: 'Child 1',
        icon: 'fa fa-file-o'
      },
      {
        id: 7,
        text: 'Child 1',
        icon: 'fa fa-file-o'
      }
    ]
  }
];
