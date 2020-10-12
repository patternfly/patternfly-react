import React from 'react';
import { Select, SelectOption, SelectVariant } from '@patternfly/react-core';

import constants from '../common/constants';

import '@patternfly/react-styles/src/css/components/Consoles/AccessConsoles.css';

const { NONE_TYPE, SERIAL_CONSOLE_TYPE, VNC_CONSOLE_TYPE, DESKTOP_VIEWER_CONSOLE_TYPE } = constants;

const getChildTypeName = (child: any) =>
  child && child.props && child.props.type ? child.props.type : (child && child.type && child.type.displayName) || null;

const isChildOfType = (child: any, type: string) =>
  child && child.props && child.props.type
    ? child.props.type === type
    : child && child.type
    ? child.type.displayName === type
    : false;

export interface AccessConsolesProps {
  /**
   * Child element can be either
   *   - <SerialConsole>, <VncConsole> or <DesktopViewer>
   *   - or has a property "type" of value either SERIAL_CONSOLE_TYPE or VNC_CONSOLE_TYPE (useful when wrapping (composing) basic console components
   */
  children?: React.ReactElement[] | React.ReactNode;
  /** Placeholder text for the console selection */
  textSelectConsoleType?: string;
  /** The value for the Serial Console option */
  textSerialConsole?: string;
  /** The value for the VNC Console option */
  textVncConsole?: string;
  /** The value for the Desktop Viewer Console option */
  textDesktopViewerConsole?: string;
  /** Initial selection of the Select */
  preselectedType?: string; // NONE_TYPE | SERIAL_CONSOLE_TYPE | VNC_CONSOLE_TYPE | DESKTOP_VIEWER_CONSOLE_TYPE;
}

export interface AccessConsolesState {
  type: string;
  isOpen: boolean;
}

export class AccessConsoles extends React.Component<AccessConsolesProps, AccessConsolesState> {
  static displayName = 'AccessConsoles';
  static defaultProps: AccessConsolesProps = {
    textSelectConsoleType: 'Select console type',
    textSerialConsole: 'Serial console',
    textVncConsole: 'VNC console',
    textDesktopViewerConsole: 'Desktop viewer',
    preselectedType: NONE_TYPE
  };

  constructor(props: AccessConsolesProps) {
    super(props);
    this.state = {
      type: props.preselectedType,
      isOpen: false
    };
    this.isChildOfTypePresent = this.isChildOfTypePresent.bind(this);
    this.getConsoleForType = this.getConsoleForType.bind(this);
    this.onToggle = this.onToggle.bind(this);
  }

  isChildOfTypePresent(type: string) {
    let found = false;
    React.Children.forEach(this.props.children as React.ReactElement[], (child: any) => {
      found = found || isChildOfType(child, type);
    });

    return found;
  }

  getConsoleForType(type: string) {
    return React.Children.map(this.props.children as React.ReactElement[], (child: any) => {
      if (getChildTypeName(child) === type) {
        return <React.Fragment key={getChildTypeName(child)}>{child}</React.Fragment>;
      } else {
        return null;
      }
    });
  }

  onToggle(isOpen: boolean) {
    this.setState({ isOpen });
  }

  render() {
    const items = {
      [NONE_TYPE]: this.props.textSelectConsoleType,
      [SERIAL_CONSOLE_TYPE]: this.props.textSerialConsole,
      [VNC_CONSOLE_TYPE]: this.props.textVncConsole,
      [DESKTOP_VIEWER_CONSOLE_TYPE]: this.props.textDesktopViewerConsole
    };

    const selectOptions = [<SelectOption key={NONE_TYPE} id={NONE_TYPE} isPlaceholder value={items[NONE_TYPE]} />];
    if (this.isChildOfTypePresent(VNC_CONSOLE_TYPE)) {
      selectOptions.push(<SelectOption key={VNC_CONSOLE_TYPE} id={VNC_CONSOLE_TYPE} value={items[VNC_CONSOLE_TYPE]} />);
    }
    if (this.isChildOfTypePresent(SERIAL_CONSOLE_TYPE)) {
      selectOptions.push(
        <SelectOption key={SERIAL_CONSOLE_TYPE} id={SERIAL_CONSOLE_TYPE} value={items[SERIAL_CONSOLE_TYPE]} />
      );
    }
    if (this.isChildOfTypePresent(DESKTOP_VIEWER_CONSOLE_TYPE)) {
      selectOptions.push(
        <SelectOption
          key={DESKTOP_VIEWER_CONSOLE_TYPE}
          id={DESKTOP_VIEWER_CONSOLE_TYPE}
          value={items[DESKTOP_VIEWER_CONSOLE_TYPE]}
        />
      );
    }

    return (
      <div className="pf-c-console">
        {React.Children.toArray(this.props.children).length > 1 && (
          <div className="pf-c-console__actions">
            <Select
              toggleId="pf-c-console__type-selector"
              variant={SelectVariant.single}
              onSelect={(_, selection, isPlaceholder) => {
                this.setState({
                  type: Object.keys(items).find(key => items[key] === selection),
                  isOpen: isPlaceholder ? false : !this.state.isOpen
                });
              }}
              selections={items[this.state.type]}
              isOpen={this.state.isOpen}
              onToggle={this.onToggle}
            >
              {selectOptions}
            </Select>
          </div>
        )}
        {this.getConsoleForType(this.state.type)}
      </div>
    );
  }
}
