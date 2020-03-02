import React from 'react';
import PropTypes from 'prop-types';
import { Button, ExpandCollapse } from 'patternfly-react';

import { child } from '../common/helpers';
import constants from '../common/constants';

import MoreInformationDefaultContent from './MoreInformationDefaultContent';
import MoreInformationDefaultRDPContent from './MoreInformationDefaultRDPContent';

import { generateDescriptorFile, downloadFile } from './consoleDescriptorGenerator';
import consoleDetailPropType from './consoleDetailPropType';

const {
  VNC_CONSOLE_TYPE,
  SPICE_CONSOLE_TYPE,
  RDP_CONSOLE_TYPE,
  DEFAULT_VV_FILENAME,
  DEFAULT_VV_MIMETYPE,
  DEFAULT_RDP_FILENAME,
  DEFAULT_RDP_MIMETYPE
} = constants;

const ConnectWithRemoteViewer = ({
  children,
  onGenerate,
  onDownload,
  spice,
  vnc,
  rdp,
  textDesktopConnection,
  textConnectWithRemoteViewer,
  textMoreInfo,
  textConnectWithRDP,
  textMoreRDPInfo
}) => {
  const console = spice || vnc; // strictly prefer spice over vnc

  const onClickVV = () => {
    const type = spice ? SPICE_CONSOLE_TYPE : VNC_CONSOLE_TYPE;
    if (console) {
      const vv = onGenerate({ console, type });
      onDownload(vv.fileName || DEFAULT_VV_FILENAME, vv.content, vv.mimeType || DEFAULT_VV_MIMETYPE);
    }
  };

  const onClickRDP = () => {
    if (rdp) {
      const rdpFile = onGenerate({ console: rdp, type: RDP_CONSOLE_TYPE });
      onDownload(rdpFile.fileName || DEFAULT_RDP_FILENAME, rdpFile.content, rdpFile.mimeType || DEFAULT_RDP_MIMETYPE);
    }
  };

  // RDP button is rendered only if the protocol is available
  // If none of Spice or VNC is available, the .vv button is disabled (but rendered)
  return (
    <div className="remote-viewer-pf">
      <h2>{textDesktopConnection}</h2>
      <div className="remote-viewer-pf-launch">
        <Button className="remote-viewer-pf-launch-vv" onClick={onClickVV} disabled={!console}>
          {textConnectWithRemoteViewer}
        </Button>
        {!!rdp && (
          <Button onClick={onClickRDP} className="remote-viewer-pf-launch-rdp">
            {textConnectWithRDP}
          </Button>
        )}
      </div>
      {!!console && (
        <ExpandCollapse bordered={false} align="center" textExpanded={textMoreInfo} textCollapsed={textMoreInfo}>
          {child(children, 0) || <MoreInformationDefaultContent />}
        </ExpandCollapse>
      )}
      {!!rdp && (
        <ExpandCollapse bordered={false} align="center" textExpanded={textMoreRDPInfo} textCollapsed={textMoreRDPInfo}>
          {child(children, 1) || <MoreInformationDefaultRDPContent />}
        </ExpandCollapse>
      )}
    </div>
  );
};

ConnectWithRemoteViewer.propTypes = {
  children: PropTypes.any,

  spice: consoleDetailPropType,
  vnc: consoleDetailPropType,
  rdp: consoleDetailPropType,

  onGenerate: PropTypes.func,
  onDownload: PropTypes.func,

  textDesktopConnection: PropTypes.string.isRequired,
  textConnectWithRemoteViewer: PropTypes.string.isRequired,
  textMoreInfo: PropTypes.string.isRequired,
  textConnectWithRDP: PropTypes.string.isRequired,
  textMoreRDPInfo: PropTypes.string.isRequired
};

ConnectWithRemoteViewer.defaultProps = {
  children: null,

  spice: null,
  vnc: null,
  rdp: null,

  onGenerate: generateDescriptorFile,
  onDownload: downloadFile
};

export default ConnectWithRemoteViewer;
