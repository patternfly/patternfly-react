import { saveAs } from 'file-saver';

import { ConsoleDetailPropType } from './ConsoleDetailPropType';
import { constants } from '../common/constants';

const {
  VNC_CONSOLE_TYPE,
  SPICE_CONSOLE_TYPE,
  RDP_CONSOLE_TYPE,
  DEFAULT_VV_MIMETYPE,
  DEFAULT_RDP_MIMETYPE,
  DEFAULT_RDP_PORT
} = constants;

export type onDownloadFunctionType = (fileName: string, content: string, mimeType: string) => void;

/**
 * @param {string} fileName Default vv filename
 * @param {string} content  Content of the file
 * @param {string} mimeType Defaylt vv mimeType
 */
export function downloadFile(fileName: string, content: string, mimeType: string) {
  const blob = new Blob([content], { type: mimeType });
  saveAs(blob, fileName);
}

/**
 * @param {string} _console Object describing the console file content
 * @param {string} type VNC_CONSOLE_TYPE | SPICE_CONSOLE_TYPE
 */
function generateVVFile(_console: ConsoleDetailPropType, type: string): { content: string; mimeType: string } {
  const TYPES = {
    [VNC_CONSOLE_TYPE]: 'vnc',
    [SPICE_CONSOLE_TYPE]: 'spice'
  };

  const content =
    '[virt-viewer]\n' +
    `type=${TYPES[type] || type}\n` + // vnc or spice
    `host=${_console.address}\n` +
    `port=${_console.port}\n` +
    'delete-this-file=1\n' +
    'fullscreen=0\n';

  return {
    content,
    mimeType: DEFAULT_VV_MIMETYPE
  };
}

/**
 * @param {string} _console Object describing the console file content
 */
function generateRDPFile(_console: ConsoleDetailPropType): { content: string; mimeType: string } {
  const port = typeof _console.port !== 'undefined' && _console.port !== null ? _console.port : DEFAULT_RDP_PORT;
  const content = [
    `full address:s:${_console.address}:${port}`,
    '\nusername:s:Administrator',
    '\nscreen mode id:i:2', // set 2 for full screen
    '\nprompt for credentials:i:1',
    '\ndesktopwidth:i:0',
    '\ndesktopheight:i:0',
    '\nauthentication level:i:2',
    '\nredirectclipboard:i:1',
    '\nsession bpp:i:32',
    '\ncompression:i:1',
    '\nkeyboardhook:i:2',
    '\naudiocapturemode:i:0',
    '\nvideoplaybackmode:i:1',
    '\nconnection type:i:2',
    '\ndisplayconnectionbar:i:1',
    '\ndisable wallpaper:i:1',
    '\nallow font smoothing:i:1',
    '\nallow desktop composition:i:0',
    '\ndisable full window drag:i:1',
    '\ndisable menu anims:i:1',
    '\ndisable themes:i:0',
    '\ndisable cursor setting:i:0',
    '\nbitmapcachepersistenable:i:1',
    '\naudiomode:i:0',
    '\nredirectcomports:i:0',
    '\nredirectposdevices:i:0',
    '\nredirectdirectx:i:1',
    '\nautoreconnection enabled:i:1',
    '\nnegotiate security layer:i:1',
    '\nremoteapplicationmode:i:0',
    '\nalternate shell:s:',
    '\nshell working directory:s:',
    '\ngatewayhostname:s:',
    '\ngatewayusagemethod:i:4',
    '\ngatewaycredentialssource:i:4',
    '\ngatewayprofileusagemethod:i:0',
    '\npromptcredentialonce:i:1',
    '\nuse redirection server name:i:0',
    '\n'
  ].join('');

  return {
    content,
    mimeType: DEFAULT_RDP_MIMETYPE
  };
}

export type onGenerateFunctionType = (
  _console: ConsoleDetailPropType,
  type: string
) => { content: string; mimeType: string };

/**
 * @param {string} _console Object describing the console file content
 * @param {string} type VNC_CONSOLE_TYPE | SPICE_CONSOLE_TYPE
 */
export function generateDescriptorFile(
  _console: ConsoleDetailPropType,
  type: string
): { content: string; mimeType: string } {
  return type === RDP_CONSOLE_TYPE ? generateRDPFile(_console) : generateVVFile(_console, type);
}
