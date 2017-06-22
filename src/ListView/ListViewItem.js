import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import ListViewActions from './ListViewActions'
import ListViewItemMainInfo from './ListViewItemMainInfo'

/**
 * ListViewItemMainInfo Component for Patternfly React
 */

const ListViewItem = ({
  additionalListClass,
  iconClass,
  heading,
  itemText,
  additionalInfo,
  actions
}) => {
  return (
    <div className={cx('list-group-item', additionalListClass)}>
      {actions && <ListViewActions actions={actions} />}
      <ListViewItemMainInfo
        iconClass={iconClass}
        heading={heading}
        itemText={itemText}
        additionalInfo={additionalInfo}
      />
    </div>
  )
}

ListViewItem.propTypes = {
  /** additional list class  */
  additionalListClass: PropTypes.string,
  /** icon class  */
  iconClass: PropTypes.string,
  /** header node  */
  heading: PropTypes.node.isRequired,
  /** item text node  */
  itemText: PropTypes.node,
  /** additional info node  */
  additionalInfo: PropTypes.arrayOf(PropTypes.node),
  /** actions node  */
  actions: PropTypes.node
}

ListViewItem.defaultProps = {
  /** default additional list class */
  additionalListClass: '',
  /** default icon class */
  iconClass: null,
  /** default additional info */
  additionalInfo: [],
  /** default actions info */
  actions: null
}

export default ListViewItem
