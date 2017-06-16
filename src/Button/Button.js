import { Button as BsButton } from 'react-bootstrap'
import React from 'react'
import PropTypes from 'prop-types'

const Button = props => <BsButton {...props} />

Button.propTypes = Object.assign(BsButton.propTypes, {
  bsStyle: PropTypes.oneOf(['danger', 'default', 'primary', 'link'])
})

export default Button
