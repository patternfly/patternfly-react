import React from 'react';
import { Button, ExpandableSection } from '@patternfly/react-core';

import { constants } from '../common/constants';

import { MoreInformationDefaultContent } from './MoreInformationDefaultContent';
import { MoreInformationDefaultRDPContent } from './MoreInformationDefaultRDPContent';

import {
  generateDescriptorFile,
  downloadFile,
  onGenerateFunctionType,
  onDownloadFunctionType
} from './consoleDescriptorGenerator';
import { ConsoleDetailPropType } from './ConsoleDetailPropType';

const {
  VNC_CONSOLE_TYPE,
  SPICE_CONSOLE_TYPE,
  RDP_CONSOLE_TYPE,
  DEFAULT_VV_FILENAME,
  DEFAULT_VV_MIMETYPE,
  DEFAULT_RDP_FILENAME,
  DEFAULT_RDP_MIMETYPE
} = constants;

export interface ConnectWithRemoteViewerProps extends React.HTMLProps<HTMLDivElement> {
  /** Custom content of more-info section  */
  children?: React.ReactNode;

  /** Connection details for Spice */
  spice?: ConsoleDetailPropType;
  /** Connection details for VNC */
  vnc?: ConsoleDetailPropType;
  /** Connection details for RDP */
  rdp?: ConsoleDetailPropType;

  /** Callback function. Generate content of .vv file.
   * Parameters: ({ _console, type }) => ({
   *     content,  // required string value
   *     mimeType, // optional, default application/x-virt-viewer
   *     fileName  // optional, default: console.vv
   *   })
   */
  onGenerate?: onGenerateFunctionType;
  /** Callback function. Perform file download.
   * Default implementation is usually good enough, but i.e. in case of environment with tight
   * content security policy set, this might be required.
   *
   * Examples for alternative file-download implementations:
   *   - use of iframe
   *   - use of http-server
   *
   * Parameters: (fileName, content, mimeType) => {}
   */
  onDownload?: onDownloadFunctionType;

  textConnectWithRemoteViewer?: string;
  textMoreInfo?: string;
  textMoreInfoContent?: string | React.ReactNode;
  textConnectWithRDP?: string;
  textMoreRDPInfo?: string;
  textMoreRDPInfoContent?: string | React.ReactNode;
}

export const ConnectWithRemoteViewer: React.FunctionComponent<ConnectWithRemoteViewerProps> = ({
  onGenerate = generateDescriptorFile,
  onDownload = downloadFile,
  spice = null,
  vnc = null,
  rdp = null,
  textConnectWithRemoteViewer = 'Launch Remote Viewer',
  textConnectWithRDP = 'Launch Remote Desktop',
  textMoreInfo = 'Remote Viewer Details',
  textMoreInfoContent = '',
  textMoreRDPInfo = 'Remote Desktop Details',
  textMoreRDPInfoContent = ''
}: ConnectWithRemoteViewerProps) => {
  const [isExpandedDefault, setIsExpandedDefault] = React.useState(false);
  const [isExpandedRDP, setIsExpandedRDP] = React.useState(false);

  const _console = spice || vnc; // strictly prefer spice over vnc

  const onClickVV = () => {
    const type = spice ? SPICE_CONSOLE_TYPE : VNC_CONSOLE_TYPE;
    if (_console) {
      const vv = onGenerate(_console, type);
      return onDownload(DEFAULT_VV_FILENAME, vv.content, vv.mimeType || DEFAULT_VV_MIMETYPE);
    }
  };

  const onClickRDP = () => {
    const rdpFile = onGenerate(rdp, RDP_CONSOLE_TYPE);
    return onDownload(DEFAULT_RDP_FILENAME, rdpFile.content, rdpFile.mimeType || DEFAULT_RDP_MIMETYPE);
  };

  // RDP button is rendered only if the protocol is available
  // If none of Spice or VNC is available, the .vv button is disabled (but rendered)
  return (
    <div className="pf-c-console__remote-viewer">
      <div className="pf-c-console__remote-viewer-launch">
        <Button className="pf-c-console__remote-viewer-launch-vv" onClick={onClickVV} isDisabled={!_console}>
          {textConnectWithRemoteViewer}
        </Button>
        {!!rdp && (
          <Button onClick={onClickRDP} className="pf-c-console__remote-viewer-launch-rdp">
            {textConnectWithRDP}
          </Button>
        )}
      </div>
      {!!_console && (
        <ExpandableSection
          toggleText={textMoreInfo}
          isExpanded={isExpandedDefault}
          onToggle={isExpanded => setIsExpandedDefault(isExpanded)}
        >
          <MoreInformationDefaultContent textMoreInfoContent={textMoreInfoContent} />
        </ExpandableSection>
      )}
      {!!rdp && (
        <ExpandableSection
          toggleText={textMoreRDPInfo}
          isExpanded={isExpandedRDP}
          onToggle={isExpanded => setIsExpandedRDP(isExpanded)}
        >
          <MoreInformationDefaultRDPContent textMoreRDPInfoContent={textMoreRDPInfoContent} />
        </ExpandableSection>
      )}
    </div>
  );
};
ConnectWithRemoteViewer.displayName = 'ConnectWithRemoteViewer';
