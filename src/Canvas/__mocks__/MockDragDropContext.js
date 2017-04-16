import React, { PropTypes } from 'react'
import { DragDropContext } from 'react-dnd'
import MouseBackEnd from 'react-dnd-mouse-backend'

/**
 * Mock Drag Drop Context for Patternfly React
 */
const MockDragDropContext = ({ children }) => {
  return (
    <div>
      {children}
    </div>
  )
}
MockDragDropContext.propTypes = {
  /** children nodes  */
  children: PropTypes.node
}

export default DragDropContext(MouseBackEnd)(MockDragDropContext)
