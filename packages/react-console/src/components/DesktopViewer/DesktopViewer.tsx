import React from 'react';

import { css } from '@patternfly/react-styles';
import { ManualConnection } from './ManualConnection';
import { ConnectWithRemoteViewer, ConnectWithRemoteViewerProps } from './ConnectWithRemoteViewer';
import { ConsoleDetailPropType } from './ConsoleDetailPropType';

import styles from '@patternfly/react-styles/css/components/Consoles/DesktopViewer';
import '@patternfly/react-styles/css/components/Consoles/DesktopViewer.css';

export interface DesktopViewerProps extends ConnectWithRemoteViewerProps {
  /** Custom content of more-info section  */
  children?: React.ReactNode;
  /** Connection details for Spice */
  spice?: ConsoleDetailPropType;
  /** Connection details for VNC */
  vnc?: ConsoleDetailPropType;
  /** Connection details for RDP */
  rdp?: ConsoleDetailPropType;

  textManualConnection?: string;
  textNoProtocol?: string;
  textConnectWith?: string;

  textAddress?: string;
  textSpiceAddress?: string;
  textVNCAddress?: string;
  textSpicePort?: string;
  textVNCPort?: string;
  textSpiceTlsPort?: string;
  textVNCTlsPort?: string;
  textRDPPort?: string;
  textRdpAddress?: string;

  textConnectWithRemoteViewer?: string;
  textConnectWithRDP?: string;
  /** Text that appears in the toggle */
  textMoreInfo?: string;
  /** The information content appearing above the description list for guidelines to install virt-viewer */
  textMoreInfoContent?: string | React.ReactNode;
  /** Text that appears in the toggle */
  textMoreRDPInfo?: string;
  /** The information content appearing above the description list for guidelines to install virt-viewer */
  textMoreRDPInfoContent?: string | React.ReactNode;
}

export const DesktopViewer: React.FunctionComponent<DesktopViewerProps> = ({
  children = null,
  spice = null,
  vnc = null,
  rdp = null,
  ...props
}: DesktopViewerProps) => (
  <div className={css(styles.consoleDesktopViewer)}>
    <ConnectWithRemoteViewer
      spice={spice}
      vnc={vnc}
      rdp={rdp}
      onGenerate={props.onGenerate}
      onDownload={props.onDownload}
      textConnectWithRemoteViewer={props.textConnectWithRemoteViewer}
      textConnectWithRDP={props.textConnectWithRDP}
      textMoreInfo={props.textMoreInfo}
      textMoreRDPInfo={props.textMoreRDPInfo}
      textMoreInfoContent={props.textMoreInfoContent}
      textMoreRDPInfoContent={props.textMoreRDPInfoContent}
    >
      {children}
    </ConnectWithRemoteViewer>
    <ManualConnection
      spice={spice}
      vnc={vnc}
      rdp={rdp}
      textManualConnection={props.textManualConnection}
      textNoProtocol={props.textNoProtocol}
      textConnectWith={props.textConnectWith}
      textAddress={props.textAddress}
      textSpiceAddress={props.textSpiceAddress}
      textVNCAddress={props.textVNCAddress}
      textSpicePort={props.textSpicePort}
      textVNCPort={props.textVNCPort}
      textSpiceTlsPort={props.textSpiceTlsPort}
      textVNCTlsPort={props.textVNCTlsPort}
      textRDPPort={props.textRDPPort}
      textRdpAddress={props.textRdpAddress}
    />
  </div>
);
DesktopViewer.displayName = 'DesktopViewer';
