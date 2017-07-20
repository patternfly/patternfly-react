import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs'
import { defaultTemplate } from '../../storybook/decorators/storyTemplates'
import { mockConnections } from './__mocks__/connections'
import { mockNodeActions } from './__mocks__/nodeActions'
import { mockNodes } from './__mocks__/nodes'
import MockDragDropContext from './__mocks__/MockDragDropContext'
import MockCanvasManager from './__mocks__/MockCanvasManager'
import MockProjectCanvasManager from './__mocks__/MockProjectCanvasManager'
import Canvas from './Canvas'
import CanvasLayout from './CanvasLayout'
import CanvasToolbar from './CanvasToolbar'
import CanvasTopAlignedToolbox from './CanvasTopAlignedToolbox'

const stories = storiesOf('Canvas', module)
stories.addDecorator(withKnobs)
stories.addDecorator(
  defaultTemplate({
    title: 'Canvas View',
    documentationLink:
      'http://www.patternfly.org/pattern-library/content-views/canvas-view/#/design'
  })
)

stories.addWithInfo(
  'canvas with top-aligned toolbox',
  `This is the Canvas View with a top-aligned toolbox.`,
  () => {
    return <MockCanvasManager />
  }
)

stories.addWithInfo(
  'canvas with droppable projects',
  `This is the Canvas View with droppable project nodes.`,
  () => {
    return <MockProjectCanvasManager />
  }
)

stories.addWithInfo('canvas toolbar', `This is the Canvas Toolbar.`, () => {
  // toolbar knobs
  const toolboxButtonLabel = text('Toolbox Button Label', 'Toolbox')
  const duplicateDisabled = boolean('Duplicate Disabled', false)
  const deleteDisabled = boolean('Delete Disabled', false)
  const zoomOutDisabled = boolean('Zoom Out Disabled', false)
  const zoomInDisabled = boolean('Zoom In Disabled', false)
  const toolboxOpen = boolean('Toolbox Open', false)

  return (
    <CanvasLayout>
      <CanvasToolbar
        toolboxButtonLabel={toolboxButtonLabel}
        toolboxClicked={action('toolboxClicked')}
        toolboxOpen={toolboxOpen}
        duplicateClicked={action('duplicateClicked')}
        duplicateDisabled={duplicateDisabled}
        deleteClicked={action('deleteClicked')}
        deleteDisabled={deleteDisabled}
        zoomOutClicked={action('zoomOutClicked')}
        zoomOutDisabled={zoomOutDisabled}
        zoomInClicked={action('zoomInClicked')}
        zoomInDisabled={zoomInDisabled}
      />
    </CanvasLayout>
  )
})

stories.addWithInfo(
  'canvas top aligned toolbox',
  `This is the Canvas Top Aligned Toolbox.`,
  () => {
    // toolbox knobs
    const toolboxOpen = boolean('Toolbox Open', true)

    return (
      <CanvasLayout>
        <div className="canvas-editor-toolbox-container">
          <CanvasTopAlignedToolbox
            isOpen={toolboxOpen}
            closeClicked={action('closeClicked')}
          >
            <ul className="nav nav-tabs">
              <li className="active">
                <a className="nav-link">
                  <div className="tab-pre-title">Toolbox</div>
                  <div className="tab-title">Items A</div>
                </a>
              </li>
              <li>
                <a className="nav-link">
                  <div className="tab-pre-title">Toolbox</div>
                  <div className="tab-title">Items B</div>
                </a>
              </li>
            </ul>
            <div>
              <div className="tab-pane active">
                <ul className="toolbox-items-list">
                  <li className="toolbox-item">
                    <img src="img/OpenShift-logo.svg" alt="Nuage" />
                    <span> Nuage </span>
                  </li>
                  <li className="toolbox-item">
                    <img src="img/kubernetes.svg" alt="Kubernetes" />
                    <span> Kubernetes </span>
                  </li>
                </ul>
              </div>
            </div>
          </CanvasTopAlignedToolbox>
        </div>
      </CanvasLayout>
    )
  }
)

stories.addWithInfo('canvas', `This is the Canvas`, () => {
  // canvas knobs
  const inConnectingMode = boolean('In Connecting Mode', false)
  const canvasHeight = number('Canvas Height', 756)
  const canvasWidth = number('Canvas Width', 1396)
  const zoomLevel = number('Zoom Level', 1)
  const defaultNodeWidth = number('Default Node Width', 150)
  const defaultNodeHeight = number('Default Node Height', 150)
  const connectorHeight = number('Node Connector Height', 25)

  return (
    <MockDragDropContext>
      <CanvasLayout>
        <Canvas
          inConnectingMode={inConnectingMode}
          canvasHeight={canvasHeight}
          canvasWidth={canvasWidth}
          zoomLevel={zoomLevel}
          defaultNodeWidth={defaultNodeWidth}
          defaultNodeHeight={defaultNodeHeight}
          connections={mockConnections}
          nodeActions={mockNodeActions}
          connectorHeight={connectorHeight}
          nodes={mockNodes}
        />
      </CanvasLayout>
    </MockDragDropContext>
  )
})
