import React from 'react'
import PropTypes from 'prop-types'

/**
 * ListViewActions Component for Patternfly React
 */

const ListViewActions = ({ actions }) => {
  return (
    <div className="list-view-pf-actions">
      {actions}
    </div>
  )
}

ListViewActions.propTypes = {
  /** actions node  */
  actions: PropTypes.node
}

ListViewActions.defaultProps = {
  /** default actions node */
  actions: null
}

export default ListViewActions
