import React from 'react';
import PropTypes from 'prop-types';
import { Button, ExpandCollapse } from 'patternfly-react';

import { VNC_CONSOLE_TYPE, SPICE_CONSOLE_TYPE } from '../common/constants';

import MoreInformationDefaultContent from './MoreInformationDefaultContent';
import { generateVVFile, downloadFile } from './vvFileGenerator';
import consoleDetailPropType from './consoleDetailPropType';

const DEFAULT_VV_FILENAME = 'console.vv';
const DEFAULT_VV_MIMETYPE = 'application/x-virt-viewer';

const ConnectWithRemoteViewer = ({
  children,
  onGenerate,
  onDownload,
  spice,
  vnc,
  textConnectWithRemoteViewer,
  textMoreInfo
}) => {
  const console = spice || vnc; // strictly prefer spice over vnc
  const onClick = () => {
    const type = spice ? SPICE_CONSOLE_TYPE : VNC_CONSOLE_TYPE;
    if (console) {
      const vv = onGenerate({ console, type });
      onDownload(vv.fileName || DEFAULT_VV_FILENAME, vv.content, vv.mimeType || DEFAULT_VV_MIMETYPE);
    }
  };

  return (
    <div className="remote-viewer-pf">
      <div className="remote-viewer-pf-launch">
        <Button bsSize="large" onClick={onClick} disabled={!console}>
          {textConnectWithRemoteViewer}
        </Button>
      </div>
      {!!console && (
        <ExpandCollapse bordered={false} align="center" textExpanded={textMoreInfo} textCollapsed={textMoreInfo}>
          {children || <MoreInformationDefaultContent />}
        </ExpandCollapse>
      )}
    </div>
  );
};

ConnectWithRemoteViewer.propTypes = {
  children: PropTypes.any,

  spice: consoleDetailPropType,
  vnc: consoleDetailPropType,

  onGenerate: PropTypes.func,
  onDownload: PropTypes.func,

  textConnectWithRemoteViewer: PropTypes.string.isRequired,
  textMoreInfo: PropTypes.string.isRequired
};

ConnectWithRemoteViewer.defaultProps = {
  children: null,

  spice: null,
  vnc: null,

  onGenerate: generateVVFile,
  onDownload: downloadFile
};

export default ConnectWithRemoteViewer;
