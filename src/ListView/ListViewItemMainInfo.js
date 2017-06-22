import React from 'react'
import cx from 'classnames'
import PropTypes from 'prop-types'

/**
 * ListViewItemMainInfo Component for Patternfly React
 */

const ListViewItemMainInfo = ({
  iconClass,
  heading,
  itemText,
  additionalInfo
}) => {
  const renderIcon = () => {
    const fullIconClass = cx('list-view-pf-icon-sm', 'fa', iconClass)
    return (
      <div className="list-view-pf-left">
        <span className={fullIconClass} />
      </div>
    )
  }

  const renderAdditionalInfo = () =>
    <div className="list-view-pf-additional-info">
      {additionalInfo.map(item =>
        <div className="list-view-pf-additional-info-item">
          {item}
        </div>
      )}
    </div>

  return (
    <div className="list-view-pf-main-info">
      {iconClass && renderIcon()}

      <div className="list-view-pf-body">
        <div className="list-view-pf-description">
          <div className="list-group-item-heading">
            {heading}
          </div>
          <div className="list-group-item-text">
            {itemText}
          </div>
        </div>

        {additionalInfo && renderAdditionalInfo()}
      </div>
    </div>
  )
}

ListViewItemMainInfo.propTypes = {
  /** icon class  */
  iconClass: PropTypes.string,
  /** header node  */
  heading: PropTypes.node.isRequired,
  /** item text node  */
  itemText: PropTypes.node,
  /** additional info node  */
  additionalInfo: PropTypes.arrayOf(PropTypes.node)
}

ListViewItemMainInfo.defaultProps = {
  /** default icon class */
  iconClass: null,
  /** default additional info */
  additionalInfo: []
}

export default ListViewItemMainInfo
