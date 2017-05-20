import cx from 'classnames'
import React from 'react'
import PropTypes from 'prop-types'
/**
 * ListViewItem Component for Patternfly React
 */
const ListViewItem = ({ children, isActive, listViewItemClass }) => {
  const itemClass = cx(listViewItemClass, isActive ? 'active' : '')
  return (
    <div className={itemClass}>
      {children}
    </div>
  )
}
ListViewItem.propTypes = {
  /** children nodes  */
  children: PropTypes.node,
  /** whether item is active  */
  isActive: PropTypes.bool,
  /** list view item class */
  listViewItemClass: PropTypes.string
}
ListViewItem.defaultProps = {
  isActive: false,
  listViewItemClass: 'list-pf-item'
}

export default ListViewItem
