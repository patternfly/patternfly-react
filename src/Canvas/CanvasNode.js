import React, { PropTypes } from 'react'
import cx from 'classnames'

/**
 * Canvas Node for Patternfly React
 */
const CanvasNode = ({ node, index, defaultNodeWidth, defaultNodeHeight,
  foreignObjectSupport, removeContainerNodeItem, containerNodeItemClicked }) => {
  const nodeWidth = node.width || defaultNodeWidth
  const nodeHeight = node.height || defaultNodeHeight
  const titleHeight = 42

  let content = []

  const closeClicked = (e, i) => {
    e.stopPropagation()
    removeContainerNodeItem(index, i)
  }

  const itemClicked = (e, i) => {
    containerNodeItemClicked(index, i)
  }

  // Node
  content.push(
    <rect className={cx({
      'invalid-node-rect': node.invalid,
      'node-rect': !node.selected,
      'selected-node-rect': node.selected
    })}
      ry={node.containerNode ? 15 : 0}
      rx={node.containerNode ? 15 : 0}
      x='0'
      y='0'
      width={nodeWidth}
      height={nodeHeight}
      fill={node.backgroundColor}
      fillOpacity='1.0' key='node' />
  )

  // Node Title: no-wrap
  if (!foreignObjectSupport) {
    content.push(
      <text className={cx({
        'node-header': true,
        'node-rect': !node.selected,
        'invalid-node-header': node.invalid
      })}
        x={nodeWidth / 2}
        y={nodeHeight - 24}
        textAnchor='middle'
        alignmentBaseline='middle' key='title-no-wrap'>
        {node.name}
      </text>
    )
  }

  // Node Title: text-wrap
  if (foreignObjectSupport) {
    content.push(
      <foreignObject x='0'
        y={node.titleYOffset || (nodeHeight - titleHeight)}
        width={nodeWidth}
        height={titleHeight} key='title-text-wrap'>
        <div className='node-header' style={{ width: nodeWidth }}>
          <p className={cx({ 'invalid-node-header': node.invalid })} style={{ width: node.width }}>
            {node.name}
          </p>
        </div>
      </foreignObject>
    )
  }

  // Node Image
  if (node.image) {
    content.push(
      <image className={cx({ 'node-center-img': true, 'invalid-node-img': node.invalid })}
        href={node.image}
        xlinkHref={node.image}
        x={(nodeWidth / 2) - 40}
        y='20'
        height='80px'
        width='80px'
        key='node-image' />
    )
  }

  // Node Icon: icon class
  if (node.icon && !node.image && foreignObjectSupport) {
    const fontSize = parseInt(node.fontSize)
    content.push(
      <foreignObject className={cx({ 'node-center-img-icon': true, 'invalid-node-header': node.invalid })}
        x={(nodeWidth - node.iconWidth) / 2}
        y={(nodeHeight / 2) - 54}
        height={fontSize}
        width={node.iconWidth}
        key='node-icon-class'>
        <i className={node.icon} style={{ fontSize: node.fontSize || '76px' }} />
      </foreignObject>
    )
  }

  // Node Icon: fontContent
  if (node.fontFamily && !node.image) {
    content.push(
      <text className={cx({ 'node-center-icon': true, 'invalid-node-header': node.invalid })}
        style={{ fontFamily: node.fontFamily }}
        x={((nodeWidth / 2) - 38 + (node.bundle ? 4 : 0))}
        y='90'
        key='node-icon-fontcontent'>
        {node.fontContent}
      </text>
    )
  }

  // Sm. Top Left Bundle Icon
  if (node.bundle) {
    content.push(
      <text className='bundle-icon'
        style={{ fontFamily: 'PatternFlyIcons-webfont', fontSize: 20 }}
        x='6'
        y='22'
        key='bundle-icon'>
        {'\ue918'}
      </text>
    )
  }

  // Container Node Content
  if (node.containerNode && node.containerItems && node.containerItems.length) {
    const containerNodeHeight = 70
    const containerNodeMargin = 20
    const containerImageHeight = 50
    const containerNodeWidth = nodeWidth - (containerNodeMargin * 2)

    node.containerItems.map((item, i) => {
      if (i >= node.maxDisplayItems) return

      const itemYOffset = (i * containerNodeHeight) + titleHeight + node.titleYOffset + (i * containerNodeMargin)
      let containerNodeContent = []

      // Container Node
      containerNodeContent.push(
        <rect
          className={cx('node-rect')}
          x={containerNodeMargin}
          y={itemYOffset}
          width={containerNodeWidth}
          height={containerNodeHeight}
          key={'item-node-rect' + i} />
      )

      const titleOffset = 40
      // Container Node Title
      containerNodeContent.push(
        <text className={cx({
          'node-header': true
        })}
          x={(containerNodeWidth / 2) + titleOffset}
          y={itemYOffset + 25}
          textAnchor='middle'
          alignmentBaseline='middle' key={'container-node-title' + i}>
          {item.name}
        </text>
      )

      // Container Node Label
      containerNodeContent.push(
        <text className={cx({
          'node-label': true
        })}
          x={(containerNodeWidth / 2) + titleOffset}
          y={itemYOffset + 50}
          textAnchor='middle'
          alignmentBaseline='middle' key={'container-node-label' + i}>
          {item.label}
        </text>
      )

      // Container Node Image
      if (item.image) {
        containerNodeContent.push(
          <image href={item.image}
            xlinkHref={item.image}
            x={containerNodeMargin + 10}
            y={itemYOffset + 10}
            height={containerImageHeight}
            width={containerImageHeight}
            key={'item-image' + i} />
        )
      }

      // Container Node Icon: icon class
      if (item.icon && !item.image && foreignObjectSupport) {
        containerNodeContent.push(
          <foreignObject
            x={containerNodeMargin + 10}
            y={itemYOffset + 10}
            height={containerImageHeight}
            width={containerImageHeight}
            key={'item-icon-class' + i}>
            <i className={item.icon} style={{ fontSize: item.fontSize || '45px' }} />
          </foreignObject>
        )
      }

      // Container Node Icon: fontContent
      if (item.fontFamily && !item.image) {
        containerNodeContent.push(
          <text
            style={{ fontFamily: item.fontFamily, fontSize: item.fontSize }}
            x={containerNodeMargin + 10}
            y={itemYOffset + 10 + parseInt(item.fontSize, 10)}
            key={'node-icon-fontcontent' + i}>
            {item.fontContent}
          </text>
        )
      }

      // Sm. Top Right Close Icon
      const closeIconSize = 16
      containerNodeContent.push(
        <text className='close-icon' onClick={(e) => { closeClicked(e, i) }}
          style={{ fontFamily: 'PatternFlyIcons-webfont', fontSize: closeIconSize }}
          x={containerNodeWidth - 2}
          y={itemYOffset + closeIconSize + 4}
          key={'close-icon' + i}>
          {'\ue60b'}
        </text>
      )

      content.push(<g onClick={(e) => { itemClicked(e, i) }} key={'item' + i}>
        {containerNodeContent}
      </g>
      )
    })
  }
  return (
    <g>
      {content}
    </g>
  )
}
CanvasNode.PropTypes = {
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
  /** function to remove a container node item */
  removeContainerNodeItem: PropTypes.func,
  /** function to handle container node item click */
  containerNodeItemClicked: PropTypes.func
}
CanvasNode.defaultProps = {
  defaultNodeWidth: 150,
  defaultNodeHeight: 150
}
export default CanvasNode
