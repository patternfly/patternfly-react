import React from 'react';
import PropTypes from 'prop-types';
import { noop } from '../../common/helpers';

import TreeView2Container from './components/TreeView2Container';
import TreeView2Node from './components/TreeView2Node';

const TreeView2 = ({
  highlightSelected,
  highlightOnHover,
  onNodeClick,
  nodes: nodesRoot,
  ...props
}) => {
  const renderNodeList = (nodes = []) =>
    nodes.map((node, index) => renderNode({ ...node, key: index }));

  const renderNode = (node = {}) => {
    const { icon, nodes = [], ...nodeProps } = node;

    return (
      <TreeView2Node
        onClick={onNodeClick}
        icon={{ name: icon }}
        nodes={renderNodeList(nodes)}
        {...nodeProps}
      />
    );
  };

  return (
    <TreeView2Container
      highlightSelected={highlightSelected}
      highlightOnHover={highlightOnHover}
      {...props}
    >
      {renderNodeList(nodesRoot)}
    </TreeView2Container>
  );
};

TreeView2.propTypes = {
  /** Highlight node row on hover */
  highlightOnHover: PropTypes.bool,
  /** Highlight node row when clicked */
  highlightSelected: PropTypes.bool,
  /** fires events on node-click */
  onNodeClick: PropTypes.func,
  /** Array of nodes */
  nodes: PropTypes.arrayOf(
    PropTypes.shape({
      ...TreeView2Node.propTypes,
      icon: PropTypes.strinng,
      nodes: PropTypes.array
    })
  ).isRequired
};

TreeView2.defaultProps = {
  highlightOnHover: false,
  highlightSelected: false,
  onNodeClick: noop
};

export default TreeView2;
