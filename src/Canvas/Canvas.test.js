/* eslint-env jest */

import React from 'react'
import {mockNodes} from './__mocks__/nodes'
import MockDragDropContext from './__mocks__/MockDragDropContext'
import Canvas from './Canvas'
import CanvasLayout from './CanvasLayout'
import CanvasNode from './CanvasNode'
import CanvasPanel from './CanvasPanel'
import CanvasToolbar from './CanvasToolbar'
import CanvasTopAlignedToolbox from './CanvasTopAlignedToolbox'
import renderer from 'react-test-renderer'

test('Canvas renders properly', () => {
  const connectDropTarget = jest.fn()
  const selectNode = jest.fn()
  const addNode = jest.fn()
  const moveNode = jest.fn()
  const component = renderer.create(
    <MockDragDropContext>
      <Canvas canvasClass='canvas' readOnly={false} inConnectingMode={false} canvasHeight={756} canvasWidth={1396}
        backgroundSize={24} zoomLevel={1} defaultNodeWidth={150} defaultNodeHeight={150} connections={[]}
        nodeActions={[]} connectorHeight={25} canvasNodeDraggable nodes={mockNodes} moveNode={moveNode}
        connectDropTarget={connectDropTarget} selectNode={selectNode} addNode={addNode}>
        <span>Jest snapshots are always deterministic. Finding unexpected code changes is now a breeze.</span>
      </Canvas>
    </MockDragDropContext>
  )

  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('CanvasLayout renders properly', () => {
  const component = renderer.create(
    <CanvasLayout layoutClass='canvas-editor-container'>
      <span>Jest snapshots are always deterministic. Finding unexpected code changes is now a breeze.</span>
    </CanvasLayout>
  )

  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('CanvasNode renders properly', () => {
  const component = renderer.create(
    <CanvasNode node={mockNodes[0]} defaultNodeWidth={100} defaultNodeHeight={100} foreignObjectSupport={false} />
  )

  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('CanvasPanel renders properly', () => {
  const component = renderer.create(
    <CanvasPanel>
      <span>Jest snapshots are always deterministic. Finding unexpected code changes is now a breeze.</span>
    </CanvasPanel>
  )

  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('CanvasToolbar renders properly', () => {
  const toolboxClicked = jest.fn()
  const duplicateClicked = jest.fn()
  const deleteClicked = jest.fn()
  const zoomOutClicked = jest.fn()
  const zoomInClicked = jest.fn()
  const component = renderer.create(
    <CanvasToolbar toolbarClass='canvas-editor-toolbar' toolboxButtonLabel='Toolbox' toolboxClicked={toolboxClicked}
      toolboxOpen duplicateClicked={duplicateClicked} duplicateDisabled deleteClicked={deleteClicked} deleteDisabled
      zoomOutClicked={zoomOutClicked} zoomOutDisabled zoomInClicked={zoomInClicked} zoomInDisabled>
      <span>Jest snapshots are always deterministic. Finding unexpected code changes is now a breeze.</span>
    </CanvasToolbar>
  )

  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('CanvasTopAlignedToolbox renders properly', () => {
  const closeClicked = jest.fn()
  const component = renderer.create(
    <CanvasTopAlignedToolbox closeClicked={closeClicked} isOpen>
      <span>Jest snapshots are always deterministic. Finding unexpected code changes is now a breeze.</span>
    </CanvasTopAlignedToolbox>
  )

  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
