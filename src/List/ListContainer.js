import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

/**
 * ListContainer wraps list item and list expansion child elements
 */
const ListContainer = ({ children, className, toggleExpanded, ...rest }) => {
  const classes = cx('list-pf-container', className)
  const handleClick = e => {
    // ignore selected child elements click
    if (
      toggleExpanded &&
      e.target.tagName !== 'BUTTON' &&
      e.target.tagName !== 'A' &&
      e.target.tagName !== 'INPUT' &&
      !e.target.classList.contains('fa-ellipsis-v')
    ) {
      toggleExpanded()
    }
  }
  return (
    <div className={classes} {...rest} onClick={handleClick}>
      {children}
    </div>
  )
}
ListContainer.propTypes = {
  /** Children nodes */
  children: PropTypes.node,
  /** Additional css classes */
  className: PropTypes.string,
  /** calls parent toggleExpanded */
  toggleExpanded: PropTypes.func
}

export default ListContainer
