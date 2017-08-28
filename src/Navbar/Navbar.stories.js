import React from 'react'
import { Dropdown } from 'react-bootstrap'
import { storiesOf } from '@storybook/react'
import { defaultTemplate } from '../../storybook/decorators/storyTemplates'
import {
  MenuItem,
  Nav,
  NavItem,
  NavDropdown,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarHeader,
  NavbarToggle
} from '../index.js'

const stories = storiesOf('Navbar', module)

const description = (
  <p>
    This component is based on React Bootstrap Navbar component. See{' '}
    <a href="https://react-bootstrap.github.io/components.html#navbars">
      React Bootstrap Docs
    </a>{' '}
    for complete Navbar component documentation.
  </p>
)

stories.addDecorator(
  defaultTemplate({
    title: 'Navbar',
    description: description,
    documentationLink:
      'http://www.patternfly.org/pattern-library/navigation/horizontal-navigation/'
  })
)

stories.addWithInfo('Navbar', '', () =>
  <div>
    <Navbar className="navbar navbar-default navbar-pf">
      <NavbarHeader>
        <NavbarBrand>
          <img src="img/brand.svg" alt="PatternFly Enterprise Application" />
        </NavbarBrand>
        <NavbarToggle />
      </NavbarHeader>
      <NavbarCollapse>
        <Nav bsClass="nav navbar-nav navbar-utility">
          <Dropdown id="helpDropdown" componentClass="li" bsClass="dropdown">
            {/* See React Bootstrap docs for custom toggle:
              https://github.com/react-bootstrap/react-bootstrap/blob/master/docs/examples/DropdownButtonCustomMenu.js
            */}
            <Dropdown.Toggle useAnchor style={{ paddingLeft: 10 }}>
              <span title="Help" className="fa pficon-help" />
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <MenuItem>Action</MenuItem>
              <MenuItem>Another action</MenuItem>
              <MenuItem>Something else here</MenuItem>
              <MenuItem divider />
              <MenuItem>Separated link</MenuItem>
            </Dropdown.Menu>
          </Dropdown>
          <NavDropdown
            title={[
              <span className="pficon pficon-user" />,
              <text>Brian Johnson</text>
            ]}
          >
            <MenuItem>Action</MenuItem>
            <MenuItem>Another action</MenuItem>
            <MenuItem>Something else here</MenuItem>
            <MenuItem divider />
            <MenuItem>Separated link</MenuItem>
          </NavDropdown>
        </Nav>
        <Nav bsClass="nav navbar-nav navbar-primary">
          <NavItem eventKey={1} href="#">
            First Link
          </NavItem>
          <NavItem eventKey={2} href="#">
            Another Link
          </NavItem>
          <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
            <MenuItem eventKey={3.1}>Action</MenuItem>
            <MenuItem eventKey={3.2}>Another action</MenuItem>
            <MenuItem eventKey={3.3}>Something else here</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey={3.3}>Separated link</MenuItem>
          </NavDropdown>
        </Nav>
      </NavbarCollapse>
    </Navbar>
    <br />
  </div>
)
