const NONE_TYPE = '_none_';
const SERIAL_CONSOLE_TYPE = 'SerialConsole';
const SPICE_CONSOLE_TYPE = 'SpiceConsole';
const VNC_CONSOLE_TYPE = 'VncConsole';
const RDP_CONSOLE_TYPE = 'RdpConsole';
const DESKTOP_VIEWER_CONSOLE_TYPE = 'DesktopViewer';

const CONNECTING = 'connecting';
const CONNECTED = 'connected';
const DISCONNECTED = 'disconnected';
const LOADING = 'loading';

const DEFAULT_VV_FILENAME = 'console.vv';
const DEFAULT_VV_MIMETYPE = 'application/x-virt-viewer';
const DEFAULT_RDP_FILENAME = 'console.rdp';
const DEFAULT_RDP_MIMETYPE = 'application/rdp';
const DEFAULT_RDP_PORT = 3389;

const constants = {
  NONE_TYPE,
  SERIAL_CONSOLE_TYPE,
  SPICE_CONSOLE_TYPE,
  VNC_CONSOLE_TYPE,
  RDP_CONSOLE_TYPE,
  DESKTOP_VIEWER_CONSOLE_TYPE,

  CONNECTING,
  CONNECTED,
  DISCONNECTED,
  LOADING,

  DEFAULT_VV_FILENAME,
  DEFAULT_VV_MIMETYPE,
  DEFAULT_RDP_FILENAME,
  DEFAULT_RDP_MIMETYPE,
  DEFAULT_RDP_PORT
};

export default constants;
