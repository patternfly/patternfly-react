import React from 'react';

import { ConsoleDetailPropType } from './ConsoleDetailPropType';
import {
  DescriptionList,
  DescriptionListGroup,
  DescriptionListTerm,
  DescriptionListDescription,
  Title
} from '@patternfly/react-core';

export interface DetailProps extends React.HTMLProps<HTMLDivElement> {
  title?: string;
  value: string | number;
}
const Detail: React.FunctionComponent<DetailProps> = ({ title, value }: DetailProps) => (
  <DescriptionListGroup>
    <DescriptionListTerm>{title}</DescriptionListTerm>
    <DescriptionListDescription>{value}</DescriptionListDescription>
  </DescriptionListGroup>
);

export interface ManualConnectionProps extends React.HTMLProps<HTMLDivElement> {
  spice?: ConsoleDetailPropType;
  vnc?: ConsoleDetailPropType;
  rdp?: ConsoleDetailPropType;

  textManualConnection: string;
  textNoProtocol: string;
  textConnectWith: string;

  textAddress: string;
  textSpiceAddress: string;
  textVNCAddress: string;
  textSpicePort: string;
  textVNCPort: string;
  textSpiceTlsPort: string;
  textVNCTlsPort: string;
  textRDPPort: string;
  textRdpAddress: string;
}
export const ManualConnection: React.FunctionComponent<ManualConnectionProps> = ({
  spice = null,
  vnc = null,
  rdp = null,
  textManualConnection = 'Manual Connection',
  textNoProtocol = 'No connection available.',
  textConnectWith = 'Connect with any viewer application for following protocols',
  textAddress = 'Address',
  textSpiceAddress = 'SPICE Address',
  textVNCAddress = 'VNC Address',
  textSpicePort = 'SPICE Port',
  textVNCPort = 'VNC Port',
  textSpiceTlsPort = 'SPICE TLS Port',
  textVNCTlsPort = 'VNC TLS Port',
  textRDPPort = 'RDP Port',
  textRdpAddress = 'RDP Address'
}: ManualConnectionProps) => {
  const msg = spice || vnc ? textConnectWith : textNoProtocol;
  const address = spice && vnc && spice.address === vnc.address && spice.address;
  const rdpAddress = rdp && rdp.address !== address ? rdp.address : null;

  return (
    <div className="pf-c-console__manual-connection">
      <Title headingLevel="h2" size="3xl">
        {textManualConnection}
      </Title>
      <p>{msg}</p>
      <DescriptionList>
        {address && <Detail title={textAddress} value={address} />}
        {!address && spice && <Detail title={textSpiceAddress} value={spice.address} />}
        {rdpAddress && <Detail title={textRdpAddress} value={rdpAddress} />}
        {spice && spice.port && <Detail title={textSpicePort} value={spice.port} />}
        {spice && spice.tlsPort && <Detail title={textSpiceTlsPort} value={spice.tlsPort} />}
        {!address && vnc && <Detail title={textVNCAddress} value={vnc.address} />}
        {vnc && vnc.port && <Detail title={textVNCPort} value={vnc.port} />}
        {vnc && vnc.tlsPort && <Detail title={textVNCTlsPort} value={vnc.tlsPort} />}
        {rdp && rdp.port && <Detail title={textRDPPort} value={rdp.port} />}
      </DescriptionList>
    </div>
  );
};
ManualConnection.displayName = 'ManualConnection';
