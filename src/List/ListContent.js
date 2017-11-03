import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

/**
 * ListContent is the list content container
 */
const ListContent = ({ children, className, flex, ...rest }) => {
  const classes = cx(
    'list-pf-content',
    {
      'list-pf-content-flex': flex
    },
    className
  )
  return (
    <div className={classes} {...rest}>
      {children}
    </div>
  )
}
ListContent.propTypes = {
  /** Children nodes */
  children: PropTypes.node,
  /** Additional css classes */
  className: PropTypes.string,
  /** Whether to flex content items */
  flex: PropTypes.bool
}
ListContent.defaultProps = {
  flex: false
}

export default ListContent
