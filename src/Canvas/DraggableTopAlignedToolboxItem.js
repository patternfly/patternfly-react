import React, { PropTypes } from 'react'
import { DragSource } from 'react-dnd'
import CanvasItemTypes from './CanvasItemTypes'

const defaultItemClass = 'toolbox-item'

const toolboxItemSource = {
  beginDrag (props) {
    return {
      itemClass: props.itemClass || defaultItemClass,
      itemAttributes: props.itemAttributes,
      children: props.children
    }
  }
}

const collect = (connect, monitor) => {
  return {
    connectDragSource: connect.dragSource(),
    connectDragPreview: connect.dragPreview(),
    isDragging: monitor.isDragging()
  }
}

/**
 * Draggable Top Aligned Toolbox Item for Patternfly React
 */
class DraggableTopAlignedToolboxItem extends React.Component {
  render () {
    const {
      itemClass,
      connectDragSource,
      children
    } = this.props

    let content = (
      <li className={itemClass}>
        {children}
      </li>
    )
    content = connectDragSource(content, { dropEffect: 'move' })
    return content
  }
}
DraggableTopAlignedToolboxItem.PropTypes = {
  /** the toolbox item class */
  itemClass: PropTypes.string,
  /** attritubes of the toolbox item used in constructing canvas nodes */
  itemAttributes: PropTypes.string,
  /** drag operation has started */
  isDragging: PropTypes.bool,
  /** connects node to DnD backend as a drag source */
  connectDragSource: PropTypes.func,
  /** children nodes */
  children: PropTypes.node
}
DraggableTopAlignedToolboxItem.defaultProps = {
  itemClass: defaultItemClass,
  itemAttributes: {}
}
export default DragSource(CanvasItemTypes.TOOLBOX_ITEM, toolboxItemSource, collect)(DraggableTopAlignedToolboxItem)
