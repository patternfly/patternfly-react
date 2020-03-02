export const basicData = [
  {
    id: 1,
    text: 'Parent 1',
    selectable: true,
    selected: false,
    nodes: [
      {
        id: 2,
        text: 'Child 1',
        icon: 'fa fa-file-o',
        selectable: true,
        selected: false,
        nodes: [
          {
            id: 3,
            text: 'Grandchild 1',
            icon: 'fa fa-file-o',
            selectable: true,
            selected: false
          },
          {
            id: 4,
            text: 'Grandchild 2',
            icon: 'fa fa-file-o',
            selected: false,
            selectable: true
          }
        ]
      },
      {
        id: 5,
        text: 'Child 2',
        icon: 'fa fa-file-o',
        selected: false,
        selectable: true,
        nodes: [
          {
            id: 11,
            text: 'Grandchild 1',
            icon: 'fa fa-file-o',
            selectable: true,
            selected: false
          },
          {
            id: 12,
            text: 'Grandchild 2',
            icon: 'fa fa-file-o',
            selected: false,
            selectable: true
          }
        ]
      }
    ]
  },
  {
    id: 6,
    text: 'Parent 2',
    selected: false,
    selectable: true,
    nodes: [
      {
        id: 10,
        text: 'Child 1',
        icon: 'fa fa-file-o',
        selectable: true,
        selected: false
      }
    ]
  },
  {
    id: 7,
    text: 'Parent 3',
    selected: false,
    selectable: true
  },
  {
    id: 8,
    text: 'Parent 4',
    selected: false,
    selectable: true
  },
  {
    id: 9,
    text: 'Parent 5',
    selected: false,
    selectable: true
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
