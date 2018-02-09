import React from 'react';
import { boolean } from '@storybook/addon-knobs';
import { bindMethods } from '../../../common/helpers';

import TreeView from '../TreeView';
import { basicData } from './data';

const treeViewContainerStyles = {
  width: '400px'
};

export class MockTreeView extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      nodes: basicData,
      selectedNode: null
    };

    bindMethods(this, ['selectNode', 'nodeSelector']);
  }

  selectNode(selectedNode) {
    this.setState(prevState => ({
      nodes: this.nodeSelector(prevState.nodes, selectedNode),
      selectedNode:
        prevState.selectedNode && prevState.selectedNode.id === selectedNode.id
          ? null
          : selectedNode
    }));
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
      }
      return node;
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

export const MockTreeViewSource = `
import React from 'react';
import { boolean } from '@storybook/addon-knobs';
import { bindMethods } from '../../../common/helpers';

import TreeView from '../TreeView';
import { basicData } from './data';

const treeViewContainerStyles = {
  width: '400px'
};

export class MockTreeView extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      nodes: [],
      selectedNode: null
    };

    bindMethods(this, ['selectNode', 'nodeSelector']);
  }

  componentDidMount() {
    this.setState(() => ({ nodes: basicData }));
  }

  selectNode(selectedNode) {
    this.setState(prevState => {
      return {
        nodes: this.nodeSelector(prevState.nodes, selectedNode),
        selectedNode:
          prevState.selectedNode &&
          prevState.selectedNode.id === selectedNode.id
            ? null
            : selectedNode
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
