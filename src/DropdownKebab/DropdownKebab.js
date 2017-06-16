import { Dropdown } from 'react-bootstrap'
import React from 'react'
import PropTypes from 'prop-types'

const DropdownKebab = ({ children, id, pullRight }) => {
  return (
    <Dropdown className="dropdown-kebab-pf" id={id} pullRight={pullRight}>
      <Dropdown.Toggle bsStyle="link" noCaret>
        <span className="fa fa-ellipsis-v" />
      </Dropdown.Toggle>
      <Dropdown.Menu>
        {children}
      </Dropdown.Menu>
    </Dropdown>
  )
}
DropdownKebab.propTypes = {
  children: PropTypes.node,
  id: PropTypes.string.isRequired,
  pullRight: PropTypes.bool
}
export default DropdownKebab
