import React from 'react';
import { css } from '@patternfly/react-styles';
import { Select, SelectOption, SelectVariant } from '@patternfly/react-core';

import { constants } from '../common/constants';

import styles from '@patternfly/react-styles/css/components/Consoles/AccessConsoles';
import '@patternfly/react-styles/css/components/Consoles/AccessConsoles.css';

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

export const AccessConsoles: React.FunctionComponent<AccessConsolesProps> = ({
  children,
  textSelectConsoleType = 'Select console type',
  textSerialConsole = 'Serial console',
  textVncConsole = 'VNC console',
  textDesktopViewerConsole = 'Desktop viewer',
  preselectedType = NONE_TYPE
}) => {
  const [type, setType] = React.useState(preselectedType);
  const [isOpen, setIsOpen] = React.useState(false);

  const isChildOfTypePresent = (type: string) => {
    let found = false;
    React.Children.forEach(children as React.ReactElement[], (child: any) => {
      found = found || isChildOfType(child, type);
    });

    return found;
  };

  const getConsoleForType = (type: string) =>
    React.Children.map(children as React.ReactElement[], (child: any) => {
      if (getChildTypeName(child) === type) {
        return <React.Fragment key={getChildTypeName(child)}>{child}</React.Fragment>;
      } else {
        return null;
      }
    });

  const onToggle = (isOpen: boolean) => {
    setIsOpen(isOpen);
  };

  const items = {
    [NONE_TYPE]: textSelectConsoleType,
    [SERIAL_CONSOLE_TYPE]: textSerialConsole,
    [VNC_CONSOLE_TYPE]: textVncConsole,
    [DESKTOP_VIEWER_CONSOLE_TYPE]: textDesktopViewerConsole
  };

  const selectOptions = [<SelectOption key={NONE_TYPE} id={NONE_TYPE} isPlaceholder value={items[NONE_TYPE]} />];
  if (isChildOfTypePresent(VNC_CONSOLE_TYPE)) {
    selectOptions.push(<SelectOption key={VNC_CONSOLE_TYPE} id={VNC_CONSOLE_TYPE} value={items[VNC_CONSOLE_TYPE]} />);
  }
  if (isChildOfTypePresent(SERIAL_CONSOLE_TYPE)) {
    selectOptions.push(
      <SelectOption key={SERIAL_CONSOLE_TYPE} id={SERIAL_CONSOLE_TYPE} value={items[SERIAL_CONSOLE_TYPE]} />
    );
  }
  if (isChildOfTypePresent(DESKTOP_VIEWER_CONSOLE_TYPE)) {
    selectOptions.push(
      <SelectOption
        key={DESKTOP_VIEWER_CONSOLE_TYPE}
        id={DESKTOP_VIEWER_CONSOLE_TYPE}
        value={items[DESKTOP_VIEWER_CONSOLE_TYPE]}
      />
    );
  }

  return (
    <div className={css(styles.console)}>
      {React.Children.toArray(children).length > 1 && (
        <div className={css(styles.consoleActions)}>
          <Select
            aria-label={textSelectConsoleType}
            toggleId="pf-c-console__type-selector"
            variant={SelectVariant.single}
            onSelect={(_, selection, isPlaceholder) => {
              setType(Object.keys(items).find(key => items[key] === selection));
              setIsOpen(isPlaceholder ? false : !isOpen);
            }}
            selections={items[type]}
            isOpen={isOpen}
            onToggle={onToggle}
          >
            {selectOptions}
          </Select>
        </div>
      )}
      {getConsoleForType(type)}
    </div>
  );
};
AccessConsoles.displayName = 'AccessConsoles';
