import React from 'react'
import { DragDropContext } from 'react-dnd'
import MouseBackEnd from 'react-dnd-mouse-backend'
import {mockConnections} from './connections'
import {mockNodeActions} from './nodeActions'
import {mockContainerNodes} from './containerNodes'
import update from 'immutability-helper'
import cx from 'classnames'
import Canvas from '../Canvas'
import CanvasItemTypes from '../CanvasItemTypes'
import CanvasLayout from '../CanvasLayout'
import CanvasPanel from '../CanvasPanel'
import CanvasToolbar from '../CanvasToolbar'
import CanvasTopAlignedToolbox from '../CanvasTopAlignedToolbox'
import CustomDragLayer from '../CustomDragLayer'
import DraggableTopAlignedToolboxItem from '../DraggableTopAlignedToolboxItem'

/**
 * Canvas Manager for Patternfly React
 */
class MockProjectCanvasManager extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      toolboxOpen: false,
      tabOneActive: true,
      readOnly: false,
      inConnectingMode: false,
      canvasHeight: 756,
      canvasWidth: 1396,
      zoomLevel: 1,
      maxZoom: 1,
      minZoom: parseFloat('.5'),
      zoomIncrement: parseFloat('.25'),
      zoomOutDisabled: false,
      zoomInDisabled: true,
      connections: mockConnections,
      nodeActions: mockNodeActions,
      nodes: mockContainerNodes,
      toolboxItems: [
        mockContainerNodes[0].containerItems[0],
        mockContainerNodes[0].containerItems[1],
        { ...mockContainerNodes[1].containerItems[0] },
        { ...mockContainerNodes[1].containerItems[1] },
        { ...mockContainerNodes[1].containerItems[2], icon: 'pf pficon-network' },
        { ...mockContainerNodes[0].containerItems[2], icon: 'fa fa-cloud' }
      ]
    }
    this.setTabOneActive = (event, active) => {
      this.setState({tabOneActive: active})
    }
    this.toggleToolboxOpen = (event) => {
      this.setState((prevState, props) => { return {toolboxOpen: !prevState.toolboxOpen} })
    }
    this.closeToolboxClicked = (event) => {
      this.setState({toolboxOpen: false})
    }
    this.moveNode = (index, x, y) => {
      let merged = update(this.state.nodes[index], {$merge: {x: x, y: y}})
      this.setState({nodes: update(this.state.nodes, {$splice: [[index, 1, merged]]})})
    }
    this.selectNode = (index) => {
      const updated = this.state.nodes.map((node, i) => { return {...node, selected: i === index} })
      this.setState({nodes: updated})
    }
    this.deselectAllNodes = () => {
      return this.state.nodes.map((node) => { return {...node, selected: false} })
    }
    this.duplicateSelected = () => {
      const selected = this.state.nodes.find((node) => { return node.selected })
      const cloned = {
        ...selected,
        id: -1,
        x: selected.x + 10,
        y: selected.y + 10,
        inputConnectors: [],
        validConnectionTypes: [...selected.validConnectionTypes]
      }
      this.setState(update(this.state, {nodes: {$push: [cloned]}}))
    }
    this.deleteSelected = () => {
      const filtered = this.state.nodes.filter((node) => { return !node.selected })
      this.setState({nodes: filtered})
    }
    this.addNode = (item, x, y) => {
      let deselected = this.deselectAllNodes()
      const newNode = {
        ...item.itemAttributes,
        x: x,
        y: y,
        selected: true
      }
      deselected.push(newNode)
      this.setState({nodes: deselected})
    }
    this.addContainerNodeItem = (index, containerNodeItem) => {
      this.setState(update(this.state, {
        nodes: {
          [index]: {
            containerItems:
            {$push: [containerNodeItem.itemAttributes]}
          }
        }
      }))
    }
    this.removeContainerNodeItem = (index, containerNodeItemIndex) => {
      this.setState(update(this.state, {
        nodes: {
          [index]: {
            containerItems:
            {$splice: [[containerNodeItemIndex, 1]]}
          }
        }
      }))
    }
    this.containerNodeItemClicked = (index, containerNodeItemIndex) => {
      // handle any container node item click logic here
    }
    this.zoomInClicked = () => {
      if (this.state.zoomLevel < this.state.maxZoom) {
        const level = (this.state.zoomLevel * 10 + this.state.zoomIncrement * 10) / 10
        this.setState({zoomLevel: level, zoomInDisabled: level === this.state.maxZoom, zoomOutDisabled: false})
      }
    }
    this.zoomOutClicked = () => {
      if (this.state.zoomLevel > this.state.minZoom) {
        const level = (this.state.zoomLevel * 10 - this.state.zoomIncrement * 10) / 10
        this.setState({zoomLevel: level, zoomOutDisabled: level === this.state.minZoom, zoomInDisabled: false})
      }
    }
  }
  render () {
    return (
      <CanvasLayout>
        <CanvasToolbar
          toolboxButtonLabel='Toolbox'
          toolboxClicked={this.toggleToolboxOpen}
          toolboxOpen={this.state.toolboxOpen}
          duplicateClicked={this.duplicateSelected}
          deleteClicked={this.deleteSelected}
          zoomInClicked={this.zoomInClicked}
          zoomInDisabled={this.state.zoomInDisabled}
          zoomOutClicked={this.zoomOutClicked}
          zoomOutDisabled={this.state.zoomOutDisabled} />
        <CustomDragLayer />
        <Canvas
          readOnly={this.state.readOnly}
          inConnectingMode={this.state.inConnectingMode}
          canvasHeight={this.state.canvasHeight}
          canvasWidth={this.state.canvasWidth}
          zoomLevel={this.state.zoomLevel}
          connections={this.state.connections}
          nodeActions={this.state.nodeActions}
          nodes={this.state.nodes}
          moveNode={this.moveNode}
          selectNode={this.selectNode}
          duplicateSelected={this.duplicateSelected}
          deleteSelected={this.deleteSelected}
          addNode={this.addNode}
          addContainerNodeItem={this.addContainerNodeItem}
          removeContainerNodeItem={this.removeContainerNodeItem}
          containerNodeItemClicked={this.containerNodeItemClicked}
          canvasDropItemTypes={[CanvasItemTypes.CANVAS_NODE]}>
          <CanvasPanel />
          <CanvasTopAlignedToolbox isOpen={this.state.toolboxOpen}
            closeClicked={this.closeToolboxClicked}>
            <ul className='nav nav-tabs'>
              <li onClick={(e) => { this.setTabOneActive(e, true) }}
                className={cx({'active': this.state.tabOneActive})}>
                <a className='nav-link'>
                  <div className='tab-pre-title'>Toolbox</div>
                  <div className='tab-title'>Items A</div>
                </a>
              </li>
              <li onClick={(e) => { this.setTabOneActive(e, false) }}
                className={this.state.tabOneActive ? '' : 'active'}>
                <a className='nav-link'>
                  <div className='tab-pre-title'>Toolbox</div>
                  <div className='tab-title'>Items B</div>
                </a>
              </li>
            </ul>
            <div className='tab-content'>
              <div className={cx({'tab-pane': true, 'active': this.state.tabOneActive})}>
                <ul className='toolbox-items-list'>
                  <DraggableTopAlignedToolboxItem itemAttributes={this.state.toolboxItems[0]}>
                    <img src={this.state.toolboxItems[0].image} />
                    <span> {this.state.toolboxItems[0].name} </span>
                  </DraggableTopAlignedToolboxItem>
                  <DraggableTopAlignedToolboxItem itemAttributes={this.state.toolboxItems[1]}>
                    <img src={this.state.toolboxItems[1].image} />
                    <span> {this.state.toolboxItems[1].name} </span>
                  </DraggableTopAlignedToolboxItem>
                </ul>
              </div>
              <div className={cx({'tab-pane': true, 'active': !this.state.tabOneActive})}>
                <ul className='toolbox-items-list'>
                  <DraggableTopAlignedToolboxItem itemAttributes={this.state.toolboxItems[2]}>
                    <img src={this.state.toolboxItems[2].image} />
                    <span> {this.state.toolboxItems[2].name} </span>
                  </DraggableTopAlignedToolboxItem>
                  <DraggableTopAlignedToolboxItem itemAttributes={this.state.toolboxItems[3]}>
                    <img src={this.state.toolboxItems[3].image} />
                    <span> {this.state.toolboxItems[3].name} </span>
                  </DraggableTopAlignedToolboxItem>
                  <DraggableTopAlignedToolboxItem itemAttributes={this.state.toolboxItems[4]}>
                    <i className={cx('draggable-item-icon', this.state.toolboxItems[4].icon)} />
                    <span> {this.state.toolboxItems[4].name} </span>
                  </DraggableTopAlignedToolboxItem>
                  <DraggableTopAlignedToolboxItem itemAttributes={this.state.toolboxItems[5]}>
                    <i className={cx('draggable-item-icon', this.state.toolboxItems[5].icon)} />
                    <span> {this.state.toolboxItems[5].name} </span>
                  </DraggableTopAlignedToolboxItem>
                </ul>
              </div>
            </div>
          </CanvasTopAlignedToolbox>
        </Canvas>
      </CanvasLayout>
    )
  }
}

export default DragDropContext(MouseBackEnd)(MockProjectCanvasManager)
