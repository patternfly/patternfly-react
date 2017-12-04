import cx from 'classnames';
import React from 'react';

import { Button } from '../../Button';
import ListView from '../ListView';

export const mockListItems = [
  {
    title: 'Item 1',
    description: 'This is Item 1 description',
    properties: { hosts: 3, clusters: 1, nodes: 7, images: 4 },
    expandedContentText:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
  },
  {
    title: 'Item 2',
    description: 'This is Item 2 description',
    properties: { hosts: 2, clusters: 1, nodes: 11, images: 8 },
    expandedContentText:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
  },
  {
    title: 'Item 3',
    description: 'This is Item 3 description',
    properties: { hosts: 4, clusters: 2, nodes: 9, images: 8 },
    expandedContentText:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
  },
  {
    description: 'This is Item without heading',
    expandedContentText:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
  },
  {
    properties: { hosts: 4, clusters: 2, nodes: 9, images: 8 },
    expandedContentText:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
  },
  {
    title: 'Item without description',
    expandedContentText:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
  },
];

export const renderActions = () => (
  <div>
    <Button>Details</Button>
  </div>
);

export const renderAdditionalInfoItems = itemProperties => {
  return (
    itemProperties &&
    Object.keys(itemProperties).map(prop => {
      const classNames = cx('pficon', {
        'pficon-flavor': prop === 'hosts',
        'pficon-cluster': prop === 'clusters',
        'pficon-container-node': prop === 'nodes',
        'pficon-image': prop === 'images',
      });
      return (
        <ListView.InfoItem key={prop}>
          <span className={classNames} />
          <strong>{itemProperties[prop]}</strong> {prop}
        </ListView.InfoItem>
      );
    })
  );
};
