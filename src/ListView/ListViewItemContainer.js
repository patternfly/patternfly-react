import cx from 'classnames'
import React from 'react'
import PropTypes from 'prop-types'
/**
 * ListViewItemContainer Component for Patternfly React
 */
const ListViewItemContainer = ({
  children,
  isActive,
  isExpansionItem,
  listViewItemContainerClass,
  itemClicked
}) => {
  const click = e => {
    if (
      itemClicked &&
      e.target.tagName !== 'BUTTON' &&
      e.target.tagName !== 'A' &&
      e.target.tagName !== 'INPUT' &&
      !e.target.classList.contains('fa-ellipsis-v')
    ) {
      itemClicked(e)
    }
  }
  return (
    <div className={listViewItemContainerClass} onClick={click}>
      {isExpansionItem &&
        <div className="list-pf-chevron">
          <span
            className={cx('fa', isActive ? 'fa-angle-down' : 'fa-angle-right')}
          />
        </div>}
      <div className="list-pf-content">
        {children}
      </div>
    </div>
  )
}
ListViewItemContainer.propTypes = {
  /** children nodes  */
  children: PropTypes.node,
  /** whether item is active  */
  isActive: PropTypes.bool,
  /** whether item is expansion item  */
  isExpansionItem: PropTypes.bool,
  /** list view item container class */
  listViewItemContainerClass: PropTypes.string,
  /** list view item clicked */
  itemClicked: PropTypes.func
}
ListViewItemContainer.defaultProps = {
  isActive: false,
  isExpansionItem: false,
  listViewItemContainerClass: 'list-pf-container'
}

export default ListViewItemContainer
