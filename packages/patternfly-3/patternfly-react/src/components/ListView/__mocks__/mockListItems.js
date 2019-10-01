import classNames from 'classnames';
import React from 'react';

import { Button } from '../../Button';
import ListView from '../ListView';

export const mockListItems = [
  {
    title: 'Item 1',
    description: 'This is Item 1 description',
    properties: { hosts: 3, clusters: 1, nodes: 7, images: 4 },
    expandedContentText: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    compoundExpandText: {
      hosts: "Text describing Item 1's hosts",
      clusters: "Text describing Item 1's clusters",
      nodes: "Text describing Item 1's nodes",
      images: "Text describing Item 1's images"
    }
  },
  {
    title: 'Item 2',
    description: 'This is Item 2 description',
    properties: { hosts: 2, clusters: 1, nodes: 11, images: 8 },
    expandedContentText: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    compoundExpandText: {
      hosts: "Text describing Item 2's hosts",
      clusters: "Text describing Item 2's clusters",
      nodes: "Text describing Item 2's nodes",
      images: "Text describing Item 2's images"
    }
  },
  {
    title: 'Item 3',
    description: 'This is Item 3 description',
    properties: { hosts: 4, clusters: 2, nodes: 9, images: 8 },
    expandedContentText: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    compoundExpandText: {
      hosts: "Text describing Item 3's hosts",
      clusters: "Text describing Item 3's clusters",
      nodes: "Text describing Item 3's nodes",
      images: "Text describing Item 3's images"
    }
  },
  {
    description: 'This is Item without heading',
    expandedContentText: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    compoundExpandText: {
      hosts: "Text describing Item 4's hosts",
      clusters: "Text describing Item 4's clusters",
      nodes: "Text describing Item 4's nodes",
      images: "Text describing Item 4's images"
    }
  },
  {
    properties: { hosts: 4, clusters: 2, nodes: 9, images: 8 },
    expandedContentText: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    compoundExpandText: {
      hosts: "Text describing Item 5's hosts",
      clusters: "Text describing Item 5's clusters",
      nodes: "Text describing Item 5's nodes",
      images: "Text describing Item 5's images"
    }
  },
  {
    title: 'Item without description or close icon',
    expandedContentText: 'There is no close `x` on the right of this box.',
    hideCloseIcon: true,
    compoundExpandText: {
      hosts: "Text describing Item 6's hosts",
      clusters: "Text describing Item 6's clusters",
      nodes: "Text describing Item 6's nodes",
      images: "Text describing Item 6's images"
    }
  }
];

export const renderActions = () => (
  <div>
    <Button>Details</Button>
  </div>
);

export const renderAdditionalInfoItems = itemProperties =>
  itemProperties &&
  Object.keys(itemProperties).map(prop => {
    const cssClassNames = classNames('pficon', {
      'pficon-flavor': prop === 'hosts',
      'pficon-cluster': prop === 'clusters',
      'pficon-container-node': prop === 'nodes',
      'pficon-image': prop === 'images'
    });
    return (
      <ListView.InfoItem key={prop}>
        <span className={cssClassNames} />
        <strong>{itemProperties[prop]}</strong> {prop}
      </ListView.InfoItem>
    );
  });
