import React from 'react';
import PropTypes from 'prop-types';

import { Grid, Form, Dropdown, MenuItem, helpers } from 'patternfly-react';

import constants from '../common/constants';

const { NONE_TYPE, SERIAL_CONSOLE_TYPE, VNC_CONSOLE_TYPE, DESKTOP_VIEWER_CONSOLE_TYPE } = constants;
const { Row, Col } = Grid;
const { Checkbox, FormGroup } = Form;

const getChildTypeName = child =>
  child && child.props && child.props.type ? child.props.type : (child && child.type && child.type.displayName) || null;

const isChildOfType = (child, type) =>
  helpers.hasDisplayName(child, type) || (child && child.props && child.props.type === type);

class AccessConsoles extends React.Component {
  state = {
    type: this.props.preselectedType,
    disconnectByChange: this.props.disconnectByChange, // eslint-disable-line react/no-unused-state
    keptConnection: {
      [this.props.preselectedType]: true
    }
  };

  onTypeChange(type) {
    this.setState(prevState => {
      const keptConnection = prevState.disconnectByChange
        ? { [type]: true }
        : { ...prevState.keptConnection, [type]: true };

      return {
        type,
        keptConnection
      };
    });
  }

  onChangeDisconnectBySwitchClick(target) {
    this.setState(prevState => ({
      disconnectByChange: target.checked, // eslint-disable-line react/no-unused-state
      keptConnection: target.checked ? { [prevState.type]: true } : prevState.keptConnection
    }));
  }

  getSelectedConsole() {
    return this.getConsoleForType(this.state.type);
  }

  isChildOfTypePresent(type) {
    let found = false;
    React.Children.forEach(this.props.children, child => {
      found = found || isChildOfType(child, type);
    });

    return found;
  }

  getConsoleForType(type) {
    // To keep connection, render all consoles but hide those unused
    return React.Children.map(this.props.children, child =>
      this.state.keptConnection[getChildTypeName(child)] ? (
        <div key={getChildTypeName(child)} hidden={!isChildOfType(child, type)}>
          {child}
        </div>
      ) : null
    );
  }

  render() {
    const items = {
      [NONE_TYPE]: this.props.textSelectConsoleType,
      [SERIAL_CONSOLE_TYPE]: this.props.textSerialConsole,
      [VNC_CONSOLE_TYPE]: this.props.textVncConsole,
      [DESKTOP_VIEWER_CONSOLE_TYPE]: this.props.textDesktopViewerConsole
    };

    return (
      <Grid fluid className="access-consoles-pf">
        <Form horizontal>
          <FormGroup controlId="console-type" className="console-selector-pf">
            <Col>
              <Dropdown id="console-type-selector" disabled={!this.props.children}>
                <Dropdown.Toggle>
                  {this.props.children ? items[this.state.type] : this.props.textEmptyConsoleList}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  {this.isChildOfTypePresent(VNC_CONSOLE_TYPE) && (
                    <MenuItem eventKey="1" onClick={() => this.onTypeChange(VNC_CONSOLE_TYPE)}>
                      {items[VNC_CONSOLE_TYPE]}
                    </MenuItem>
                  )}
                  {this.isChildOfTypePresent(SERIAL_CONSOLE_TYPE) && (
                    <MenuItem eventKey="2" onClick={() => this.onTypeChange(SERIAL_CONSOLE_TYPE)}>
                      {items[SERIAL_CONSOLE_TYPE]}
                    </MenuItem>
                  )}
                  {this.isChildOfTypePresent(DESKTOP_VIEWER_CONSOLE_TYPE) && (
                    <MenuItem eventKey="3" onClick={() => this.onTypeChange(DESKTOP_VIEWER_CONSOLE_TYPE)}>
                      {items[DESKTOP_VIEWER_CONSOLE_TYPE]}
                    </MenuItem>
                  )}
                </Dropdown.Menu>
              </Dropdown>
              {this.state.type !== NONE_TYPE && this.state.type !== DESKTOP_VIEWER_CONSOLE_TYPE && (
                <Checkbox
                  className="console-selector-pf-disconnect-switch"
                  inline
                  defaultChecked={this.props.disconnectByChange}
                  onChange={e => this.onChangeDisconnectBySwitchClick(e.target)}
                >
                  {this.props.textDisconnectByChange}
                </Checkbox>
              )}
            </Col>
          </FormGroup>
        </Form>
        <Row>
          <Col>{this.getSelectedConsole()}</Col>
        </Row>
      </Grid>
    );
  }
}

const validChildrenTypes = [SERIAL_CONSOLE_TYPE, VNC_CONSOLE_TYPE, DESKTOP_VIEWER_CONSOLE_TYPE];
const childElementValidator = propValue => {
  if (propValue) {
    const children = Array.isArray(propValue) ? propValue : [propValue];
    if (
      !children.every(
        child =>
          child === undefined ||
          child == null ||
          (child.type && validChildrenTypes.indexOf(child.type.displayName) >= 0) ||
          (child.props && validChildrenTypes.indexOf(child.props.type) >= 0)
      )
    ) {
      return new Error('AccessConsoles child validation failed');
    }
  }
  return true;
};

AccessConsoles.propTypes = {
  /**
   * Child element can be either
   *   - <SerialConsole>, <VncConsole> or <DesktopViewer>
   *   - or has a property "type" of value either SERIAL_CONSOLE_TYPE or VNC_CONSOLE_TYPE (useful when wrapping (composing) basic console components
   */
  children: PropTypes.oneOfType([PropTypes.objectOf(childElementValidator), PropTypes.arrayOf(childElementValidator)]),

  textSelectConsoleType: PropTypes.string /** Internationalization */,
  textSerialConsole: PropTypes.string /** Internationalization */,
  textVncConsole: PropTypes.string /** Internationalization */,
  textDesktopViewerConsole: PropTypes.string /** Internationalization */,
  textDisconnectByChange: PropTypes.string /** Internationalization */,
  textEmptyConsoleList: PropTypes.string /** Internationalization */,

  preselectedType: PropTypes.oneOf([
    NONE_TYPE,
    SERIAL_CONSOLE_TYPE,
    VNC_CONSOLE_TYPE,
    DESKTOP_VIEWER_CONSOLE_TYPE
  ]) /** Initial selection of the dropdown */,
  disconnectByChange:
    PropTypes.bool /** Initial value of "Disconnect before switching" checkbox, "false" to disconnect when console type changed */
};

AccessConsoles.defaultProps = {
  children: null,

  textSelectConsoleType: 'Select Console Type',
  textSerialConsole: 'Serial Console',
  textVncConsole: 'VNC Console',
  textDesktopViewerConsole: 'Desktop Viewer',
  textDisconnectByChange: 'Disconnect before switching',
  textEmptyConsoleList: 'No console available',

  preselectedType: NONE_TYPE,
  disconnectByChange: true /** By default, console is unmounted (disconnected) when switching to other type */
};

AccessConsoles.constants = constants;

export default AccessConsoles;
