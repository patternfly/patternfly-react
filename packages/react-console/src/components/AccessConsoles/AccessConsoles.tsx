import React from 'react';
import { css } from '@patternfly/react-styles';
import { Select, SelectOption, SelectOptionObject, SelectVariant } from '@patternfly/react-core';

import { constants } from '../common/constants';

import styles from '@patternfly/react-styles/css/components/Consoles/AccessConsoles';
import '@patternfly/react-styles/css/components/Consoles/AccessConsoles.css';

const { NONE_TYPE, SERIAL_CONSOLE_TYPE, VNC_CONSOLE_TYPE, DESKTOP_VIEWER_CONSOLE_TYPE } = constants;

const getChildTypeName = (child: any) =>
  child && child.props && child.props.type ? child.props.type : (child && child.type && child.type.displayName) || null;

const isChildOfType = (child: any, type: string) => {
  if (child && child.props && child.props.type) {
    return child.props.type === type;
  } else if (child && child.type) {
    return child.type.displayName === type;
  }
  return false;
};

export interface AccessConsolesProps {
  /**
   * Child element can be either
   *   - <SerialConsole>, <VncConsole> or <DesktopViewer>
   *   - or has a property "type" of value either SERIAL_CONSOLE_TYPE or VNC_CONSOLE_TYPE (useful when wrapping (composing) basic console components
   */
  children?: React.ReactElement[] | React.ReactNode;
  /** Placeholder text for the console selection */
  textSelectConsoleType?: string;
  /** The value for the Serial Console option. This can be overriden by the type property of the child component */
  textSerialConsole?: string;
  /** The value for the VNC Console option. This can be overriden by the type property of the child component */
  textVncConsole?: string;
  /** The value for the Desktop Viewer Console option. This can be overriden by the type property of the child component */
  textDesktopViewerConsole?: string;
  /** Initial selection of the Select */
  preselectedType?: string; // NONE_TYPE | SERIAL_CONSOLE_TYPE | VNC_CONSOLE_TYPE | DESKTOP_VIEWER_CONSOLE_TYPE;
}

export const AccessConsoles: React.FunctionComponent<AccessConsolesProps> = ({
  children,
  textSelectConsoleType = 'Select console type',
  textSerialConsole = 'Serial console',
  textVncConsole = 'VNC console',
  textDesktopViewerConsole = 'Desktop viewer',
  preselectedType = null
}) => {
  const typeMap = {
    [SERIAL_CONSOLE_TYPE]: textSerialConsole,
    [VNC_CONSOLE_TYPE]: textVncConsole,
    [DESKTOP_VIEWER_CONSOLE_TYPE]: textDesktopViewerConsole
  };
  const [type, setType] = React.useState(
    preselectedType !== NONE_TYPE
      ? ({ value: preselectedType, toString: () => typeMap[preselectedType] } as SelectOptionObject)
      : null
  );
  const [isOpen, setIsOpen] = React.useState(false);

  const getConsoleForType = (type: any) =>
    React.Children.map(children as React.ReactElement[], (child: any) => {
      if (getChildTypeName(child) === type.value) {
        return <React.Fragment key={getChildTypeName(child)}>{child}</React.Fragment>;
      } else {
        return null;
      }
    });

  const onToggle = (isOpen: boolean) => {
    setIsOpen(isOpen);
  };

  const selectOptions: any[] = [];

  React.Children.toArray(children as React.ReactElement[]).forEach((child: any) => {
    if (isChildOfType(child, VNC_CONSOLE_TYPE)) {
      selectOptions.push(
        <SelectOption
          key={VNC_CONSOLE_TYPE}
          id={VNC_CONSOLE_TYPE}
          value={{ value: VNC_CONSOLE_TYPE, toString: () => textVncConsole } as SelectOptionObject}
        />
      );
    } else if (isChildOfType(child, SERIAL_CONSOLE_TYPE)) {
      selectOptions.push(
        <SelectOption
          key={SERIAL_CONSOLE_TYPE}
          id={SERIAL_CONSOLE_TYPE}
          value={{ value: SERIAL_CONSOLE_TYPE, toString: () => textSerialConsole } as SelectOptionObject}
        />
      );
    } else if (isChildOfType(child, DESKTOP_VIEWER_CONSOLE_TYPE)) {
      selectOptions.push(
        <SelectOption
          key={DESKTOP_VIEWER_CONSOLE_TYPE}
          id={DESKTOP_VIEWER_CONSOLE_TYPE}
          value={{ value: DESKTOP_VIEWER_CONSOLE_TYPE, toString: () => textDesktopViewerConsole } as SelectOptionObject}
        />
      );
    } else {
      const typeText = getChildTypeName(child);
      selectOptions.push(
        <SelectOption
          key={typeText}
          id={typeText}
          value={{ value: typeText, toString: () => typeText } as SelectOptionObject}
        />
      );
    }
  });
  return (
    <div className={css(styles.console)}>
      {React.Children.toArray(children).length > 1 && (
        <div className={css(styles.consoleActions)}>
          <Select
            aria-label={textSelectConsoleType}
            placeholderText={textSelectConsoleType}
            toggleId="pf-c-console__type-selector"
            variant={SelectVariant.single}
            onSelect={(_, selection, __) => {
              setType(selection as SelectOptionObject);
              setIsOpen(false);
            }}
            selections={type}
            isOpen={isOpen}
            onToggle={onToggle}
          >
            {selectOptions}
          </Select>
        </div>
      )}
      {type && getConsoleForType(type)}
    </div>
  );
};
AccessConsoles.displayName = 'AccessConsoles';
