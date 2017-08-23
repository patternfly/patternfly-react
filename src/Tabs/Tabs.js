import React from 'react'
import PropTypes from 'prop-types'
import { Nav, TabRowContents } from '../index'
import ClassNames from 'classnames'

/**
 * Tabs Component for Patternfly React
 */
const Tabs = props => {
  const contents = props.children.map(child => {
    return child.type === TabRowContents
  })
  const tabsClass = ClassNames(props.className, {
    'nav-justified': props.justified,
    'nav-tabs-pf': props.pfStyle,
    'pf-tabrow': contents.indexOf(true) >= 0
  })
  return (
    <Nav
      onSelect={props.onSelect}
      activeKey={props.activeKey}
      bsClass={tabsClass}
      role="tablist"
    >
      {props.children}
    </Nav>
  )
}

Tabs.propTypes = {
  /** tab selected callback */
  onSelect: PropTypes.func,
  /** nav tabs class */
  className: PropTypes.string,
  /** sets the active tab key */
  activeKey: PropTypes.number,
  /** children nodes  */
  children: PropTypes.node,
  /** apply nav-justified class */
  justified: PropTypes.bool,
  /** apply nav-tabs-pf class */
  pfStyle: PropTypes.bool
}
Tabs.defaultProps = {
  className: 'nav nav-tabs'
}

export default Tabs
