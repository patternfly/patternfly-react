import React from 'react'
import PropTypes from 'prop-types'

/**
 * TabRowContents Component for Patternfly React
 */
const TabRowContents = props => {
  return (
    <li role="section" className="pf-tabrow-contents" {...props}>
      {props.children}
    </li>
  )
}
TabRowContents.propTypes = {
  /** children nodes  */
  children: PropTypes.node
}
export default TabRowContents
