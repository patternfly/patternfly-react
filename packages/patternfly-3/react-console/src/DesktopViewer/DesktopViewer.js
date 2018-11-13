import React from 'react';
import PropTypes from 'prop-types';

import classNames from 'classnames';

import ManualConnection from './ManualConnection';
import ConnectWithRemoteViewer from './ConnectWithRemoteViewer';
import consoleDetailPropType from './consoleDetailPropType';

const DesktopViewer = ({ children, spice, vnc, onGenerate, onDownload, topClassName, ...props }) => (
  <div className={classNames('desktop-viewer-pf', topClassName)}>
    <ConnectWithRemoteViewer spice={spice} vnc={vnc} onGenerate={onGenerate} onDownload={onDownload} {...props}>
      {children}
    </ConnectWithRemoteViewer>
    <ManualConnection spice={spice} vnc={vnc} {...props} />
  </div>
);

DesktopViewer.propTypes = {
  children: PropTypes.any,
  topClassName: PropTypes.string,

  spice: consoleDetailPropType,
  vnc: consoleDetailPropType,

  onGenerate: PropTypes.func,
  onDownload: PropTypes.func,

  textManualConnection: PropTypes.string /** Internationalization */,
  textSpice: PropTypes.string /** Internationalization */,
  textVNC: PropTypes.string /** Internationalization */,
  textNoProtocol: PropTypes.string /** Internationalization */,
  textConnectWith: PropTypes.string /** Internationalization */,

  textAddress: PropTypes.string /** Internationalization */,
  textSpiceAddress: PropTypes.string /** Internationalization */,
  textVNCAddress: PropTypes.string /** Internationalization */,
  textSpicePort: PropTypes.string /** Internationalization */,
  textVNCPort: PropTypes.string /** Internationalization */,
  textSpiceTlsPort: PropTypes.string /** Internationalization */,
  textVNCTlsPort: PropTypes.string /** Internationalization */,

  textConnectWithRemoteViewer: PropTypes.string /** Internationalization */,
  textMoreInfo: PropTypes.string
};

DesktopViewer.defaultProps = {
  children: null /** Custom content of more-info section  */,
  topClassName: '' /** Custom class name to be added to the root element. */,

  spice: null /** Optional. Connection details for spice */,
  vnc: null /** Optional. Connection details for vnc */,

  /** Callback function. Generate content of .vv file.
   * Parameters: ({ console, type }) => ({
   *     content,  // required string value
   *     mimeType, // optional, default application/x-virt-viewer
   *     fileName  // optional, default: console.vv
   *   })
   */
  onGenerate: undefined,

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
  onDownload: undefined,

  textManualConnection: 'Manual Connection',
  textSpice: 'Spice',
  textVNC: 'VNC',
  textNoProtocol: 'No connection available.',
  textConnectWith: 'Connect with any viewer application for following protocols:',

  textAddress: 'Address:',
  textSpiceAddress: 'SPICE Address:',
  textVNCAddress: 'VNC Address:',
  textSpicePort: 'SPICE Port:',
  textVNCPort: 'VNC Port:',
  textSpiceTlsPort: 'SPICE TLS Port:',
  textVNCTlsPort: 'VNC TLS Port:',

  textConnectWithRemoteViewer: 'Launch Remote Viewer',
  textMoreInfo: 'More Information'
};

export default DesktopViewer;
