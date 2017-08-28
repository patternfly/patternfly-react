import React from 'react'
import PropTypes from 'prop-types'

/**
 * Navbar Component for Patternfly React
 */
export const Navbar = props => {
  return (
    <nav {...props} role="navigation">
      {props.children}
    </nav>
  )
}
Navbar.propTypes = {
  /** children nodes  */
  children: PropTypes.node
}

/**
 * NavbarHeader Component for Patternfly React
 */
export const NavbarHeader = props => {
  return (
    <div className="navbar-header">
      {props.children}
    </div>
  )
}
NavbarHeader.propTypes = {
  /** children nodes  */
  children: PropTypes.node
}

/**
 * NavbarBrand Component for Patternfly React
 */
export const NavbarBrand = props => {
  return (
    <a href="/" className="navbar-brand">
      {props.children}
    </a>
  )
}
NavbarBrand.propTypes = {
  /** children nodes  */
  children: PropTypes.node
}

/**
 * NavbarToggle Component for Patternfly React
 */
export const NavbarToggle = () => {
  return (
    <button className="navbar-toggle">
      <span className="sr-only">Toggle navigation</span>
      <span className="icon-bar" />
      <span className="icon-bar" />
      <span className="icon-bar" />
    </button>
  )
}

/**
 * NavbarCollapse Component for Patternfly React
 */
export const NavbarCollapse = props => {
  return (
    <div className="collapse navbar-collapse">
      {props.children}
    </div>
  )
}
NavbarCollapse.propTypes = {
  /** children nodes  */
  children: PropTypes.node
}
