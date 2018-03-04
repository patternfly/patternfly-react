import React from 'react';

import { bindMethods, KEY_CODES } from '../../common/helpers';

import TreeView2 from './TreeView2';
import TreeView2Manager from './TreeView2Manager';

class TreeView2Managed extends React.Component {
  constructor(props) {
    super(props);

    this.treeView2Manager = new TreeView2Manager(props.nodes);
    this.state = { nodes: this.treeView2Manager.tree };

    bindMethods(this, ['handleKeyDown']);
  }

  componentWillMount() {
    document.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.nodes !== nextProps.nodes) {
      this.treeView2Manager = new TreeView2Manager(nextProps.nodes);
      this.resetState();
    }
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown);
  }

  resetState() {
    this.setState({ nodes: this.treeView2Manager.tree });
  }
  /**
   * event-handler: on-node-click
   */
  handleNodeClick(e, id) {
    if (this.props.onNodeClick(e, id) === true) return;

    if (e.altKey) {
      // clicked with alt-key down
      // toggle the selected of the clicked node
      this.treeView2Manager.toggleNodeSelected(id);
    } else if (e.shiftKey) {
      // clicked with shift-key down
      // select multiple nodes
      this.treeView2Manager.shiftSelectNode(id);
    } else {
      // normal click
      // select and togglw the expand of the clicked node
      this.treeView2Manager.selectNodeAndToggleExpand(id);
    }

    this.resetState();
  }
  /**
   * event-handler: on-arrow-down-key-down
   * select the next node
   * if pressed with shift-key, don't unnselect the previous selection
   */
  handleArrowDownKeyDown(e) {
    this.treeView2Manager.selectNextNode(!e.shiftKey);

    this.resetState();
  }
  /**
   * event-handler: on-arrow-up-key-down
   * select the previous node
   * if pressed with shift-key, don't unnselect the previous selection
   */
  handleArrowUpKeyDown(e) {
    this.treeView2Manager.selectPrevNode(!e.shiftKey);

    this.resetState();
  }
  /**
   * event-handler: on-space-key-down
   * toggle the expand of the selected nodes
   */
  handleSpaceKeyDown() {
    this.treeView2Manager.toggleSelectedNodesExpand();

    this.resetState();
  }
  /**
   * event-handler: on-key-down
   * key-down router
   */
  handleKeyDown(e) {
    switch (e.keyCode) {
      case KEY_CODES.SPACE_KEY:
        this.handleSpaceKeyDown(e);
        break;
      case KEY_CODES.ARROW_UP_KEY:
        this.handleArrowUpKeyDown(e);
        break;
      case KEY_CODES.ARROW_DOWN_KEY:
        this.handleArrowDownKeyDown(e);
        break;
      default:
        break;
    }
  }

  render() {
    const { nodes: propsNodes, ...props } = this.props;
    const { nodes: stateNodes } = this.state;

    return (
      <TreeView2
        {...props}
        nodes={stateNodes}
        onNodeClick={(e, id) => this.handleNodeClick(e, id)}
      />
    );
  }
}

TreeView2Managed.propTypes = {
  ...TreeView2.propTypes
};

TreeView2Managed.defaultProps = {
  ...TreeView2.defaultProps
};

export default TreeView2Managed;
