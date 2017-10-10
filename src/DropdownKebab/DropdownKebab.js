import { Dropdown } from 'react-bootstrap'
import ClassNames from 'classnames'
import React from 'react'
import PropTypes from 'prop-types'

/**
 * DropdownKebab Component for Patternfly React
 */
const DropdownKebab = ({ className, children, id, pullRight }) => {
  const kebabClass = ClassNames('dropdown-kebab-pf', className)
  return (
    <Dropdown className={kebabClass} id={id} pullRight={pullRight}>
      <Dropdown.Toggle bsStyle="link" noCaret>
        <span className="fa fa-ellipsis-v" />
      </Dropdown.Toggle>
      <Dropdown.Menu>{children}</Dropdown.Menu>
    </Dropdown>
  )
}
DropdownKebab.propTypes = {
  /** additional kebab dropdown classes */
  className: PropTypes.string,
  /** children nodes  */
  children: PropTypes.node,
  /** kebab dropdown id */
  id: PropTypes.string.isRequired,
  /** menu right aligned */
  pullRight: PropTypes.bool
}
export default DropdownKebab
