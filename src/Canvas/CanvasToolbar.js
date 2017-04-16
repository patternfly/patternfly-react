import React, { PropTypes } from 'react'
import cx from 'classnames'

/**
 * Canvas Toolbar for Patternfly React
 */
const CanvasToolbar = ({toolbarClass, toolboxButtonLabel, toolboxClicked, toolboxOpen,
    duplicateClicked, duplicateDisabled, deleteClicked, deleteDisabled,
    zoomOutClicked, zoomOutDisabled, zoomInClicked, zoomInDisabled}) => {
  const buttonIcon = cx({
    'fa': true,
    'fa-angle-double-down': !toolboxOpen,
    'fa-angle-double-up': toolboxOpen
  })
  const handleActionClick = (event, func, disabled) => {
    event.preventDefault()
    if (!disabled) {
      func(event)
    }
  }
  return (
    <div className={toolbarClass}>
      <button className='btn btn-primary' onClick={toolboxClicked}>
        {toolboxButtonLabel} &nbsp;
        <span className={buttonIcon} />
      </button>
      <span>
        <span className='more-actions'>
          <a onClick={(e) => handleActionClick(e, duplicateClicked, duplicateDisabled)}
            className={duplicateDisabled ? 'disabled' : ''}>
            <span className='pficon fa fa-copy' />
          </a>
          <a onClick={(e) => handleActionClick(e, deleteClicked, deleteDisabled)}
            className={deleteDisabled ? 'disabled' : ''}>
            <span className='pficon pficon-delete' />
          </a>
        </span>
      </span>
      <span className='right-aligned-controls'>
        <a onClick={(e) => handleActionClick(e, zoomOutClicked, zoomOutDisabled)}
          className={zoomOutDisabled ? 'disabled' : ''}>
          <span className='pficon fa fa-minus' />
        </a>
        <a onClick={(e) => handleActionClick(e, zoomInClicked, zoomInDisabled)}
          className={zoomInDisabled ? 'disabled' : ''}>
          <span className='pficon fa fa-plus' />
        </a>
      </span>
    </div>
  )
}
CanvasToolbar.propTypes = {
  /** canvas toolbar class  */
  toolbarClass: PropTypes.string,
  /** toolbox button label */
  toolboxButtonLabel: PropTypes.string,
  /** toolbox button clicked */
  toolboxClicked: PropTypes.func,
  /** toolbox open */
  toolboxOpen: PropTypes.bool,
  /** duplicate action clicked */
  duplicateClicked: PropTypes.func,
  /** duplicate action disabled */
  duplicateDisabled: PropTypes.bool,
  /** delete action clicked */
  deleteClicked: PropTypes.func,
  /** delete action disabled */
  deleteDisabled: PropTypes.bool,
  /** zoom out action clicked */
  zoomOutClicked: PropTypes.func,
  /** zoom out action disabled */
  zoomOutDisabled: PropTypes.bool,
  /** zoom in action clicked */
  zoomInClicked: PropTypes.func,
  /** zoom in action disabled */
  zoomInDisabled: PropTypes.bool
}
CanvasToolbar.defaultProps = {
  toolbarClass: 'canvas-editor-toolbar',
  toolboxButtonLabel: 'Toolbox',
  toolboxOpen: false,
  duplicateDisabled: false,
  deleteDisabled: false,
  zoomOutDisabled: true,
  zoomInDisabled: false
}

export default CanvasToolbar
