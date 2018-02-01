import React from 'react';
import PropTypes from 'prop-types';
import TreeView from '../TreeView';

const styles = {
  fontSize: '12px',
  whiteSpace: 'pre-wrap',
  padding: '20px',
  minHeight: '250px'
};

const InfoDisplay = ({ node }) => {
  return node ? (
    <div style={styles}>{JSON.stringify(node, null, 4)}</div>
  ) : (
    <div>Select a node to see its data structure here</div>
  );
};

class TreeViewWithNodeDisplay extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      node: undefined
    };

    this.displayNode = this.displayNode.bind(this);
  }

  displayNode(node) {
    this.setState(() => ({ node: node }));
  }

  render() {
    const { selectableNodes } = this.props;
    return (
      <div>
        <TreeView data={selectableNodes} selectNode={this.displayNode} />
        <InfoDisplay node={this.state.node} />
      </div>
    );
  }
}

export default TreeViewWithNodeDisplay;

TreeViewWithNodeDisplay.propTypes = {
  selectableNodes: PropTypes.array
};

InfoDisplay.propTypes = {
  node: PropTypes.object
};

export const selectNode = node => node;
