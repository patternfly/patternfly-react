import React, { PropTypes } from 'react'

/**
 * Canvas Top Aligned Toolbox for Patternfly React
 */
const CanvasTopAlignedToolbox = ({ isOpen, closeClicked, children }) => {
  const closeClick = (event) => {
    event.preventDefault()
    closeClicked(event)
  }
  if (isOpen) {
    return (
      <div className='canvas-editor-toolbox'>
        <a className='close-toolbox' onClick={closeClick}>
          <span className='pficon pficon-close' />
        </a>
        <div>
          {children}
        </div>
      </div>
    )
  } else {
    return null
  }
}
CanvasTopAlignedToolbox.propTypes = {
  /** toolbox is open  */
  isOpen: PropTypes.bool,
  /** closed action clicked  */
  closeClicked: PropTypes.func,
  /** children nodes  */
  children: PropTypes.node
}
CanvasTopAlignedToolbox.defaultProps = {
  isOpen: false
}

export default CanvasTopAlignedToolbox
