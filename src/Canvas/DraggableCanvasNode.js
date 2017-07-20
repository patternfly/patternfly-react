import React, { PropTypes } from 'react'
import { DragSource, DropTarget } from 'react-dnd'
import CanvasNode from './CanvasNode'
import CanvasItemTypes from './CanvasItemTypes'

const nodeSource = {
  beginDrag (props) {
    props.selectNode(props.index)
    return {
      index: props.index,
      node: props.node,
      defaultNodeWidth: props.defaultNodeWidth,
      defaultNodeHeight: props.defaultNodeHeight,
      foreignObjectSupport: props.foreignObjectSupport,
      zoomLevel: props.zoomLevel
    }
  }
}

const sourceCollect = (connect, monitor) => {
  return {
    connectDragSource: connect.dragSource(),
    connectDragPreview: connect.dragPreview(),
    isDragging: monitor.isDragging()
  }
}

const nodeTarget = {
  drop (props, monitor, component) {
    const item = monitor.getItem()
    props.addContainerNodeItem(props.index, item)
  }
}

const targetCollect = (connect, monitor) => ({
  connectDropTarget: connect.dropTarget(),
  isOver: monitor.isOver(),
  canDrop: monitor.canDrop(),
  itemType: monitor.getItemType()
})

/**
 * Draggable Canvas Node for Patternfly React
 */
class DraggableCanvasNode extends React.Component {
  render () {
    const {
      node,
      index,
      defaultNodeWidth,
      defaultNodeHeight,
      foreignObjectSupport,
      selectNode,
      removeContainerNodeItem,
      containerNodeItemClicked,
      isDragging,
      connectDragSource,
      connectDropTarget,
      isOver
    } = this.props

    if (isDragging) {
      return null
    }

    let nodeState = { ...this.props.node, selected: isOver || this.props.node.selected }

    let content = (
      <g transform={`translate(${node.x}, ${node.y})`} onClick={(e) => { selectNode(index) }}>
        <CanvasNode
          node={nodeState}
          index={index}
          defaultNodeWidth={defaultNodeWidth}
          defaultNodeHeight={defaultNodeHeight}
          foreignObjectSupport={foreignObjectSupport}
          removeContainerNodeItem={removeContainerNodeItem}
          containerNodeItemClicked={containerNodeItemClicked} />
      </g>
    )
    content = connectDragSource(content, { dropEffect: 'move' })

    if (node.containerNode) {
      content = connectDropTarget(content)
    }
    return content
  }
}
DraggableCanvasNode.PropTypes = {
  /** the canvas node object */
  node: PropTypes.object,
  /** the nodes array index of this node */
  index: PropTypes.number,
  /** default node width */
  defaultNodeWidth: PropTypes.number,
  /** default node height */
  defaultNodeHeight: PropTypes.number,
  /** foriegn object supported */
  foreignObjectSupport: PropTypes.bool,
  /** zoom level */
  zoomLevel: PropTypes.number,
  /** function to select a node */
  selectNode: PropTypes.func,
  /** function to add a container node item */
  addContainerNodeItem: PropTypes.func,
  /** function to remove a container node item */
  removeContainerNodeItem: PropTypes.func,
  /** function to handle container node item click */
  containerNodeItemClicked: PropTypes.func,
  /** drag operation has started */
  isDragging: PropTypes.bool,
  /** connects node to DnD backend as a drag source */
  connectDragSource: PropTypes.func,
  /** React DnD connect drop target */
  connectDropTarget: PropTypes.func
}

const dropItemTypes = (props) => { return props.node.containerNodeDropItemTypes || [] }

export default DropTarget(dropItemTypes, nodeTarget, targetCollect)(
  DragSource(CanvasItemTypes.CANVAS_NODE, nodeSource, sourceCollect)(DraggableCanvasNode)
)
