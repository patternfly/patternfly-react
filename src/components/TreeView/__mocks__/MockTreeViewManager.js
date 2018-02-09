import React from 'react';
import { bindMethods } from '../../../common/helpers';
import { TreeView, Button } from '../../../index';
import { MockTreeViewManagerData } from '../__mocks__/data';
import {
  managerStyles,
  treeviewStyles,
  buttonGroupStyles
} from './MockTreeViewManagerStyles';

const highlighting = {
  highlightOnHover: true,
  highlightOnSelect: true
};

class MockTreeViewManager extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      mappings: [],
      selectedNode: null
    };

    bindMethods(this, [
      'selectNode',
      'removeMapping',
      'removeAll',
      'addMappings'
    ]);
  }

  selectNode(selectedNode) {
    this.setState(prevState => ({
      mappings: prevState.mappings.map(node => {
        if (node.id === selectedNode.id) {
          return { ...node, selected: !node.selected };
        } else if (node.id !== selectedNode.id && node.selected) {
          return { ...node, selected: false };
        }
        return node;
      }),
      selectedNode:
        prevState.selectedNode && prevState.selectedNode.id === selectedNode.id
          ? null
          : selectedNode
    }));
  }

  addMappings() {
    this.setState(() => ({ mappings: MockTreeViewManagerData }));
  }

  removeMapping() {
    this.setState(prevState => ({
      mappings: prevState.mappings.filter(node => !node.selected),
      selectedNode: null
    }));
  }

  removeAll() {
    this.setState(() => ({ mappings: [] }));
  }

  render() {
    const { mappings, selectedNode } = this.state;
    return (
      <div className="mock-treeview-manager" style={managerStyles}>
        <Button onClick={this.addMappings}>Add Mappings</Button>
        <div className="mock-treeview-manager__treeview" style={treeviewStyles}>
          {mappings.length > 0 ? (
            <TreeView
              nodes={mappings}
              highlightOnHover={highlighting.highlightOnHover}
              highlightOnSelect={highlighting.highlightOnSelect}
              selectNode={this.selectNode}
            />
          ) : (
            <p>No mappings have been added yet</p>
          )}
        </div>
        <div
          className="mock-treeview-manager__button-group"
          style={buttonGroupStyles}
        >
          <Button onClick={this.removeMapping} disabled={!selectedNode}>
            Remove Mapping
          </Button>{' '}
          <Button onClick={this.removeAll} disabled={mappings.length === 0}>
            Remove All
          </Button>
        </div>
      </div>
    );
  }
}

export default MockTreeViewManager;
