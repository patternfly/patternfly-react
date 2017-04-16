import React, { PropTypes } from 'react'
import { DropTarget } from 'react-dnd'
import CanvasItemTypes from './CanvasItemTypes'
import DraggableCanvasNode from './DraggableCanvasNode'
import cx from 'classnames'

const canvasTarget = {
  drop (props, monitor, component) {
    const item = monitor.getItem()
    const itemType = monitor.getItemType()
    const delta = monitor.getDifferenceFromInitialOffset()
    const initial = monitor.getInitialClientOffset()

    if (itemType === CanvasItemTypes.CANVAS_NODE) {
      const x = Math.round(item.node.x + (delta.x / component.zoomLevel))
      const y = Math.round(item.node.y + (delta.y / component.zoomLevel))
      component.moveNode(item.index, x, y)
    } else if (itemType === CanvasItemTypes.TOOLBOX_ITEM) {
      const canvasPosition = component.svg.getBoundingClientRect()
      const x = Math.round((delta.x + initial.x - canvasPosition.left) / component.zoomLevel)
      const y = Math.round((delta.y + initial.y - canvasPosition.top) / component.zoomLevel)
      component.addNode(item, x, y)
    }
  }
}

const collect = (connect, monitor) => ({
  connectDropTarget: connect.dropTarget(),
  isOver: monitor.isOver(),
  canDrop: monitor.canDrop(),
  itemType: monitor.getItemType()
})

/**
 * Canvas Component for Patternfly React
 */
class Canvas extends React.Component {
  constructor (props) {
    super(props)
    this.foreignObjectSupport =
      document.implementation.hasFeature('www.http://w3.org/TR/SVG11/feature#Extensibility', '1.1')
    this.zoomLevel = props.zoomLevel
  }
  componentWillReceiveProps (nextProps) {
    this.zoomLevel = nextProps.zoomLevel
  }
  moveNode (index, x, y) {
    this.props.moveNode(index, x, y)
  }
  addNode (item, x, y) {
    this.props.addNode(item, x, y)
  }
  setSvgReference (svg) {
    if (svg) {
      this.svg = svg
    }
  }
  render () {
    const {
      canvasClass,
      readyOnly,
      inConnectingMode,
      canvasHeight,
      canvasWidth,
      backgroundSize,
      zoomLevel,
      defaultNodeWidth,
      defaultNodeHeight,
      nodes,
      connectDropTarget,
      selectNode,
      addContainerNodeItem,
      removeContainerNodeItem,
      containerNodeItemClicked,
      children
    } = this.props

    const svgClasses = cx(canvasClass, {
      'read-only': readyOnly,
      'canvas-in-connection-mode': inConnectingMode
    })
    return (
      <div className='canvas-editor-toolbox-container'>
        {children}
        <div className='canvas-container'>
          {
          connectDropTarget(<svg ref={(svg) => { this.setSvgReference(svg) }} className={svgClasses} style={{
            height: canvasHeight,
            width: canvasWidth,
            backgroundSize: `${backgroundSize} px ${backgroundSize}px`
          }} xlinkHref=''>

            {/* Zoom Level */}
            <g transform={`scale(${zoomLevel})`}>

              {/* Main Node Loop */}
              {nodes.map((node, i) => {
                return <DraggableCanvasNode
                  node={node}
                  index={i}
                  defaultNodeWidth={defaultNodeWidth}
                  defaultNodeHeight={defaultNodeHeight}
                  foreignObjectSupport={this.foreignObjectSupport}
                  zoomLevel={zoomLevel}
                  selectNode={selectNode}
                  addContainerNodeItem={addContainerNodeItem}
                  removeContainerNodeItem={removeContainerNodeItem}
                  containerNodeItemClicked={containerNodeItemClicked}
                  key={i} />
              })}
            </g>
          </svg>)
        }
        </div>
      </div>
    )
  }
}
Canvas.propTypes = {
  /** canvas class */
  canvasClass: PropTypes.string,
  /** read only state */
  readOnly: PropTypes.bool,
  /** in connecting mode */
  inConnectingMode: PropTypes.bool,
  /** the canvas height */
  canvasHeight: PropTypes.number,
  /** the canvas width */
  canvasWidth: PropTypes.number,
  /** background size (repeated) */
  backgroundSize: PropTypes.number,
  /** zoom level */
  zoomLevel: PropTypes.number,
  /** default node width */
  defaultNodeWidth: PropTypes.number,
  /** default node height */
  defaultNodeHeight: PropTypes.number,
  /** canvas nodes */
  nodes: PropTypes.array,
  /** exposed node drag move function */
  moveNode: PropTypes.func,
  /** children nodes  */
  children: PropTypes.node,
  /** React DnD connect drop target */
  connectDropTarget: PropTypes.func.isRequired,
  /** function to select a node */
  selectNode: PropTypes.func,
  /** function to add a container node item */
  addContainerNodeItem: PropTypes.func,
  /** function to remove a container node item */
  removeContainerNodeItem: PropTypes.func,
  /** function to handle container node item click */
  containerNodeItemClicked: PropTypes.func,
  /** function to add a node */
  addNode: PropTypes.func,
  /** allowable item drop types */
  canvasDropItemTypes: PropTypes.array
}
Canvas.defaultProps = {
  canvasClass: 'canvas',
  readOnly: false,
  inConnectingMode: false,
  canvasHeight: 756,
  canvasWidth: 1396,
  backgroundSize: 24,
  zoomLevel: 1,
  defaultNodeWidth: 150,
  defaultNodeHeight: 150,
  connectorHeight: 25,
  canvasNodeDraggable: true
}
const dropItemTypes = (props) => { return props.canvasDropItemTypes || [] }
export default DropTarget(dropItemTypes, canvasTarget, collect)(Canvas)
