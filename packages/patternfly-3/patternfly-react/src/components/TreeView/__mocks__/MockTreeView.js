import React from 'react';
import { boolean } from '@storybook/addon-knobs';

import TreeView from '../TreeView';
import { basicData } from './data';

const treeViewContainerStyles = {
  width: '400px'
};

export class MockTreeView extends React.Component {
  state = {
    nodes: basicData
  };

  nodeSelector = (nodes, targetNode) =>
    nodes.map(node => {
      if (node.nodes) {
        return {
          ...node,
          nodes: this.nodeSelector(node.nodes, targetNode),
          selected: node.id === targetNode.id ? !node.selected : false
        };
      } else if (node.id === targetNode.id) {
        return { ...node, selected: !node.selected };
      } else if (node.id !== targetNode.id && node.selected) {
        return { ...node, selected: false };
      }
      return node;
    });

  selectNode = selectedNode => {
    this.setState(prevState => ({
      nodes: this.nodeSelector(prevState.nodes, selectedNode)
    }));
  };

  render() {
    const { nodes } = this.state;
    return (
      <div className="tree-view-container" style={treeViewContainerStyles}>
        <TreeView
          nodes={nodes}
          highlightOnHover={boolean('Highlight on hover', true)}
          highlightOnSelect={boolean('Highlight on select', true)}
          selectNode={this.selectNode}
          accessibleName="Tree"
        />
      </div>
    );
  }
}

export const MockTreeViewSource = `
import React from 'react';
import { boolean } from '@storybook/addon-knobs';

import TreeView from '../TreeView';
import { basicData } from './data';

const treeViewContainerStyles = {
  width: '400px'
};

export class MockTreeView extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      nodes: []
    };

  }

  componentDidMount() {
    this.setState(() => ({ nodes: basicData }));
  }

  selectNode(selectedNode) {
    this.setState(prevState => {
      return {
        nodes: this.nodeSelector(prevState.nodes, selectedNode)
      };
    });
  }

  nodeSelector(nodes, targetNode) {
    return nodes.map(node => {
      if (node.nodes) {
        return {
          ...node,
          nodes: this.nodeSelector(node.nodes, targetNode),
          selected: node.id === targetNode.id ? !node.selected : false
        };
      } else if (node.id === targetNode.id) {
        return { ...node, selected: !node.selected };
      } else if (node.id !== targetNode.id && node.selected) {
        return { ...node, selected: false };
      } else {
        return node;
      }
    });
  }

  render() {
    const { nodes } = this.state;
    return (
      <div className="tree-view-container" style={treeViewContainerStyles}>
        <TreeView
          nodes={nodes}
          highlightOnHover={boolean('Highlight on hover', true)}
          highlightOnSelect={boolean('Highlight on select', true)}
          selectNode={this.selectNode}
        />
      </div>
    );
  }
}
`;

export const keyboardNavigation = (
  <ul>
    <li>
      Roving <code>tabindex</code> (please see{' '}
      <a href="https://www.w3.org/TR/2017/NOTE-wai-aria-practices-1.1-20171214/#kbd_roving_tabindex">
        w3.org documentation
      </a>{' '}
      for details)
    </li>
    <li>
      <code>ArrowUp/ArrowDown</code> shifts focus, <code>ArrowRight/ArrowLeft</code> expands/collapses parent nodes
    </li>
    <li>
      <code>Enter/Space</code> triggers default action
    </li>
    <li>Keyboard Search</li>
    <ul>
      <li>
        <code>[a-zA-Z]</code>
      </li>
      <li>Focus moves to the next node whose text starts with the typed character</li>
      <li>Search wraps to the first node if matching name is not found among the nodes that follow the focused node</li>
      <li>Ignores nodes that are descendants of closed nodes</li>
    </ul>
    <li>
      <code>*</code> (asterisk)
    </li>
    <ul>
      <li>Expands all closed sibling nodes that are at the same level as the focused node</li>
      <li>Focus does not move</li>
    </ul>
  </ul>
);
