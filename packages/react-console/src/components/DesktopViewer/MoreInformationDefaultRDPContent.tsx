import React from 'react';

export interface MoreInformationDefaultRDPContentProps {
  textMoreRDPInfoContent?: string | React.ReactNode;
}
export const MoreInformationDefaultRDPContent: React.FunctionComponent<MoreInformationDefaultRDPContentProps> = ({
  textMoreRDPInfoContent = (
    <>
      <p>
        Clicking &quot;Launch Remote Desktop&quot; will download an .rdp file and launch <i>Remote Desktop Viewer</i>.
      </p>
      <p>
        Since the RDP is native Windows protocol, the best experience is achieved when used on Windows-based desktop.
      </p>
      <p>
        For other operating systems, the <i>Remote Viewer</i> is recommended. If RDP needs to be accessed anyway, the{' '}
        <a href="https://www.remmina.org/wp/">Remmina</a> client is available.
      </p>
    </>
  )
}: MoreInformationDefaultRDPContentProps) => <>{textMoreRDPInfoContent}</>;
MoreInformationDefaultRDPContent.displayName = 'MoreInformationDefaultRDPContent';
