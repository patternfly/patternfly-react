import React from 'react'

export const mockListItems = [
  {
    name: 'Basic Item',
    description: 'Just an item with a description',
    iconClass: 'fa-plane'
  },
  {
    name: 'Item without Icon',
    description: 'An item without an icon'
  },
  {
    name: 'Item with Select',
    description: 'An item that can be selected',
    iconClass: 'fa-check-square-o',
    onItemSelected: function() {}
  },
  {
    name: 'Item with Actions',
    description: 'An item with actions',
    iconClass: 'fa-lightbulb-o',
    actions: (
      <button className="btn btn-default">
        Action
      </button>
    )
  },
  {
    name: 'Item with Additional Info',
    description: 'An item with additional info',
    iconClass: 'fa-paper-plane',
    additionalInfo: [
      <span>
        <span className="pficon pficon-screen" />
        <strong>8</strong> Hosts
      </span>,
      <span>
        <span className="pficon pficon-cluster" />
        <strong>8</strong> Clusters
      </span>,
      <span>
        <span className="pficon pficon-container-node" />
        <strong>18</strong> Nodes
      </span>,
      <span>
        <span className="pficon pficon-image" />
        <strong>4</strong> Images
      </span>
    ]
  },
  {
    name: 'Item with Everything',
    description: 'An item with all supported options',
    iconClass: 'fa-cogs',
    onItemSelected: function() {},
    additionalInfo: [
      <span>
        <span className="pficon pficon-screen" />
        <strong>8</strong> Hosts
      </span>,
      <span>
        <span className="pficon pficon-cluster" />
        <strong>8</strong> Clusters
      </span>,
      <span>
        <span className="pficon pficon-container-node" />
        <strong>18</strong> Nodes
      </span>,
      <span>
        <span className="pficon pficon-image" />
        <strong>4</strong> Images
      </span>
    ],
    actions: (
      <button className="btn btn-default">
        Action
      </button>
    )
  }
]
