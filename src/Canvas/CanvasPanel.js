  import React, { PropTypes } from 'react'

  /**
   * Canvas Panel for Patternfly React
   */
  const CanvasPanel = ({ children }) => {
    return (
      <div>
        {children}
      </div>
    )
  }
  CanvasPanel.propTypes = {
    /** children nodes  */
    children: PropTypes.node
  }
  CanvasPanel.defaultProps = {
  }

  export default CanvasPanel
