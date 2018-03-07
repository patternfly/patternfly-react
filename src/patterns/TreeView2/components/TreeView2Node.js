import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { noop } from '../../../common/helpers';

import { Icon } from '../../../components/Icon';

import TreeView2Expander from './TreeView2Expander';
import TreeView2Indent from './TreeView2Indent';

const TreeView2Node = ({
  onClick,
  id,
  selected,
  level,
  visible,
  expandable,
  expanded,
  icon,
  text,
  nodes,
  ...props
}) => {
  const classes = classNames('list-group-item', {
    'node-hidden': level > 1 ? !visible : false,
    'node-selected': selected
  });

  const useGlyphiconHack = !expandable && level > 1;

  return (
    <Fragment>
      <li id={id} className={classes} onClick={e => onClick(e, id)}>
        <TreeView2Indent level={level} />
        {useGlyphiconHack && <span className="icon glyphicon" />}
        {expandable && <TreeView2Expander expanded={expanded} />}
        {icon && <Icon name={icon.name} className="icon icon-node" />}
        {text}
      </li>
      {nodes &&
        React.Children.map(nodes, node =>
          React.cloneElement(node, {
            level: level + 1,
            visible: visible && expanded
          })
        )}
    </Fragment>
  );
};

TreeView2Node.propTypes = {
  onClick: PropTypes.func,
  /**
   * id will be attached to onClick
   * so you identify the clicked node while handling click
   */
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  text: PropTypes.node,
  icon: PropTypes.shape({
    type: PropTypes.string,
    name: PropTypes.string.isRequired
  }),
  level: PropTypes.number,
  visible: PropTypes.bool,
  selected: PropTypes.bool,
  expandable: PropTypes.bool,
  expanded: PropTypes.bool,
  nodes: PropTypes.node
};

TreeView2Node.defaultProps = {
  onClick: noop,
  id: '',
  text: '',
  icon: null,
  level: 1,
  visible: false,
  selected: false,
  expandable: false,
  expanded: false,
  nodes: null
};

export default TreeView2Node;
