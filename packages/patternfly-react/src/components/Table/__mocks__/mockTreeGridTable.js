import React from 'react';
import { CollapsibleTreeGridTable } from '../index';

const tableColumns = [
  {
    key: 'name',
    header: {
      label: 'Name'
    }
  },
  {
    key: 'age',
    header: {
      label: 'Age'
    }
  }
];
const tableRows = [
  {
    id: 123,
    name: 'Demo',
    age: 20,
    children: [
      {
        id: 456,
        name: 'Another',
        age: 20,
        children: [
          {
            id: 525,
            name: 'Foobar2',
            age: 20
          }
        ]
      },
      {
        id: 789,
        name: 'Yet Another',
        age: 20
      }
    ]
  },
  {
    id: 535,
    name: 'Empty',
    age: 20,
    children: []
  },
  {
    id: 532,
    name: 'Foobar',
    age: 20
  }
];

export default () => (
  <CollapsibleTreeGridTable
    rows={tableRows}
    columns={tableColumns}
    config={{ showIcon: true }}
  />
);

export const mockTreeGridSource = `
import React from 'react';
import { CollapsibleTreeGridTable } from '../index';

const tableColumns = [
  {
    key: 'name',
    header: {
      label: 'Name'
    }
  },
  {
    key: 'age',
    header: {
      label: 'Age'
    }
  }
];
const tableRows = [
  {
    id: 123,
    name: 'Demo',
    age: 20,
    iconClass: 'pficon pficon-folder-close',
    children: [
      {
        id: 456,
        name: 'Another',
        age: 20,
        iconClass: 'fa fa-file-o',
        children: [
          {
            id: 525,
            name: 'Foobar2',
            age: 20
          }
        ]
      },
      {
        id: 789,
        name: 'Yet Another',
        age: 20
      }
    ]
  },
  {
    id: 532,
    name: 'Foobar',
    age: 20
  }
];

export default () => (
  <CollapsibleTreeGridTable
    rows={tableRows}
    columns={tableColumns}
    config={{ showIcon: true }}
  />
);
`;
