import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

/**
 * ListExpand renders the caret which signifies that row is expandable.
 * The caret icon points to the right when it is closed and down when it is expanded.
 */
const ListExpand = ({ children, expanded, toggleExpanded }) => {
  const classes = cx('fa', {
    'fa-angle-right': !expanded,
    'fa-angle-down': expanded
  })
  return (
    <div
      className={'list-pf-chevron'}
      onClick={e => {
        e.stopPropagation()
        toggleExpanded()
      }}
    >
      <span className={classes} />
      {children}
    </div>
  )
}
ListExpand.propTypes = {
  /** Child nodes which render additional content - used in expandable ListViewInfoItem */
  children: PropTypes.node,
  /** Expanded state toggle */
  expanded: PropTypes.bool.isRequired,
  /** Function to execute to trigger toggle */
  toggleExpanded: PropTypes.func.isRequired
}
ListExpand.defaultProps = {
  expanded: false
}

export default ListExpand
