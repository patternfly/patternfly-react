import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

/**
 * List component for Patternfly React
 */
const List = ({ children, className, stacked, ...rest }) => {
  const classes = cx('list-pf', { 'list-pf-stacked': stacked }, className)
  return (
    <div className={classes} {...rest}>
      {children}
    </div>
  )
}
List.propTypes = {
  /** Children nodes - ListGroupItem or ListItem instances */
  children: PropTypes.node,
  /** Additional css classes */
  className: PropTypes.string,
  /** Stacked  */
  stacked: PropTypes.string
}

export default List
