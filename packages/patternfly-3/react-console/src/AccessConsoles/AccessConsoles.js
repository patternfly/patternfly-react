import React from 'react';
import PropTypes from 'prop-types';

import { Grid, Row, Col, Form, FormGroup, Dropdown, MenuItem, Checkbox } from 'patternfly-react';

import { NONE_TYPE, SERIAL_CONSOLE_TYPE, VNC_CONSOLE_TYPE } from '../common/constants';

class AccessConsoles extends React.Component {
  state = {
    type: NONE_TYPE,
    disconnectByChange: this.props.disconnectByChange,
    keptConnection: {} // no connection exists when mounted
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
      disconnectByChange: target.checked,
      keptConnection: target.checked ? { [prevState.type]: true } : prevState.keptConnection
    }));
  }

  getSelectedConsole() {
    return this.getConsoleForType(this.state.type);
  }

  getConsoleForType(type) {
    if (!this.props.children) {
      return null;
    }

    const getChildTypeName = child => (child.props.type ? child.props.type : (child.type && child.type.name) || null);
    const isChildOfType = child => getChildTypeName(child) === type;

    // To keep connection, render all consoles but hide those unused
    return React.Children.map(
      this.props.children,
      child =>
        this.state.keptConnection[getChildTypeName(child)] ? (
          <div key={getChildTypeName(child)} hidden={!isChildOfType(child)}>
            {child}
          </div>
        ) : null
    );
  }

  render() {
    const items = {
      [NONE_TYPE]: this.props.textSelectConsoleType,
      [SERIAL_CONSOLE_TYPE]: this.props.textSerialConsole,
      [VNC_CONSOLE_TYPE]: this.props.textVncConsole
    };

    return (
      <Grid fluid>
        <Form horizontal>
          <FormGroup controlId="console-type" className="console-selector-pf">
            <Col>
              <Dropdown id="console-type-selector" disabled={!this.props.children}>
                <Dropdown.Toggle>
                  {this.props.children ? items[this.state.type] : this.props.textEmptyConsoleList}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  {this.getConsoleForType(SERIAL_CONSOLE_TYPE) && (
                    <MenuItem eventKey="1" onClick={() => this.onTypeChange(SERIAL_CONSOLE_TYPE)}>
                      {items[SERIAL_CONSOLE_TYPE]}
                    </MenuItem>
                  )}
                  {this.getConsoleForType(VNC_CONSOLE_TYPE) && (
                    <MenuItem eventKey="2" onClick={() => this.onTypeChange(VNC_CONSOLE_TYPE)}>
                      {items[VNC_CONSOLE_TYPE]}
                    </MenuItem>
                  )}
                </Dropdown.Menu>
              </Dropdown>
              {this.state.type !== NONE_TYPE && (
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

const validChildrenTypes = [SERIAL_CONSOLE_TYPE, VNC_CONSOLE_TYPE];
const childElementValidator = propValue => {
  if (propValue) {
    const children = Array.isArray(propValue) ? propValue : [propValue];
    if (
      !children.every(
        child =>
          (child.type && validChildrenTypes.indexOf(child.type.name) >= 0) ||
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
   *   - <SerialConsole> or <VncConsole>
   *   - or has a property "type" of value either SERIAL_CONSOLE_TYPE or VNC_CONSOLE_TYPE (useful when wrapping (composing) basic console components
   */
  children: PropTypes.oneOfType([PropTypes.objectOf(childElementValidator), PropTypes.arrayOf(childElementValidator)]),

  textSelectConsoleType: PropTypes.string /** Internationalization */,
  textSerialConsole: PropTypes.string /** Internationalization */,
  textVncConsole: PropTypes.string /** Internationalization */,
  textDisconnectByChange: PropTypes.string /** Internationalization */,
  textEmptyConsoleList: PropTypes.string /** Internationalization */,

  disconnectByChange:
    PropTypes.bool /** Initial value of "Disconnect before switching" checkbox, "false" to disconnect when console type changed */
};

AccessConsoles.defaultProps = {
  children: null,

  textSelectConsoleType: 'Select Console Type',
  textSerialConsole: 'Serial Console',
  textVncConsole: 'VNC Console',
  textDisconnectByChange: 'Disconnect before switching',
  textEmptyConsoleList: 'No console available',

  disconnectByChange: true /** By default, console is unmounted (disconnected) when switching to other type */
};

export default AccessConsoles;
