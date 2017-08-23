import React from 'react'
import PropTypes from 'prop-types'
import ClassNames from 'classnames'
/**
 * TabContent Component for Patternfly React
 */
const TabContent = props => {
  const active = props.activeKey === props.eventKey
  const tabContentClass = ClassNames(
    {
      hidden: !active,
      active: active
    },
    props.className
  )
  return (
    <div role="tabpanel" className={tabContentClass} {...props}>
      {props.children}
    </div>
  )
}
TabContent.propTypes = {
  /** the active tab key */
  activeKey: PropTypes.string,
  /** the event key for this content */
  eventKey: PropTypes.string,
  /** tab content class */
  className: PropTypes.string,
  /** children nodes  */
  children: PropTypes.node
}
TabContent.defaultProps = {
  eventKey: '-1' // hide by default
}

export default TabContent
