import React from 'react'
import PropTypes from 'prop-types'

/**
 * ListViewSelect Component for Patternfly React
 */

const ListViewSelect = ({ onItemSelected }) => {
  return (
    <div className="list-view-pf-checkbox">
      <input type="checkbox" onClick={onItemSelected} />
    </div>
  )
}

ListViewSelect.propTypes = {
  /** onItemSelected function  */
  onItemSelected: PropTypes.func.isRequired
}

export default ListViewSelect
