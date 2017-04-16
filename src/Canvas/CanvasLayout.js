import React, { PropTypes } from 'react'

/**
 * Canvas Layout for Patternfly React
 */
const CanvasLayout = ({ layoutClass, children }) => {
  return (
    <div className={layoutClass}>
      {children}
    </div>
  )
}
CanvasLayout.propTypes = {
  /** canvas layout class */
  layoutClass: PropTypes.string,
  /** children nodes  */
  children: PropTypes.node
}
CanvasLayout.defaultProps = {
  layoutClass: 'canvas-editor-container'
}

export default CanvasLayout
