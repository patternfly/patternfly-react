import React, { Component, PropTypes } from 'react'
import { DragLayer } from 'react-dnd'
import CanvasNode from './CanvasNode'
import CanvasItemTypes from './CanvasItemTypes'

const layerStyles = {
  position: 'fixed',
  pointerEvents: 'none',
  zIndex: 100,
  left: 0,
  top: 0,
  width: '100%',
  height: '100%'
}

const getItemStyles = (props, zoomLevel) => {
  const { initialOffset, currentOffset } = props
  if (!initialOffset || !currentOffset) {
    return {
      display: 'none'
    }
  }

  let { x, y } = currentOffset

  const transform = `translate(${x}px, ${y}px)` + (zoomLevel ? ` scale(${zoomLevel})` : '')
  return {
    transform,
    WebkitTransform: transform,
    overflow: 'visible'
  }
}

const getRotateStyles = () => {
  return {
    display: 'inline-block',
    transform: 'rotate(-7deg)',
    WebkitTransform: 'rotate(-7deg)'
  }
}

function collect (monitor) {
  return {
    item: monitor.getItem(),
    itemType: monitor.getItemType(),
    initialOffset: monitor.getInitialSourceClientOffset(),
    currentOffset: monitor.getSourceClientOffset(),
    isDragging: monitor.isDragging()
  }
}

/**
 * Custom Drag Layer for Patternfly React
 */
class CustomDragLayer extends Component {
  render () {
    const { item, itemType, isDragging } = this.props

    if (!isDragging) {
      return null
    }

    switch (itemType) {
      case CanvasItemTypes.CANVAS_NODE:
        return (
          <svg style={layerStyles}>
            <g style={getItemStyles(this.props, item.zoomLevel)}>
              <CanvasNode
                node={item.node}
                defaultNodeWidth={item.defaultNodeWidth}
                defaultNodeHeight={item.defaultNodeHeight}
                foreignObjectSupport={item.foreignObjectSupport} />
            </g>
          </svg>
        )
      case CanvasItemTypes.TOOLBOX_ITEM:
        return (
          <div className='canvas-editor-toolbox' style={layerStyles}>
            <ul className='toolbox-items-list' style={getItemStyles(this.props)}>
              <li className={item.itemClass} style={getRotateStyles()}>
                {item.children}
              </li>
            </ul>
          </div>
        )
      default:
        return null
    }
  }
}
CustomDragLayer.propTypes = {
  /** the dragged item */
  item: PropTypes.object,
  /** the dragged item type */
  itemType: PropTypes.string,
  /** the initial { x, y } client offset of the drag source */
  initialOffset: PropTypes.shape({
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired
  }),
  /** the projected { x, y } client offset since drag */
  currentOffset: PropTypes.shape({
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired
  }),
  /** the drag operation is in progress */
  isDragging: PropTypes.bool.isRequired
}
export default DragLayer(collect)(CustomDragLayer)
