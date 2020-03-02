import 'blob-polyfill';
import { saveAs } from 'file-saver';

import constants from '../common/constants';

const {
  VNC_CONSOLE_TYPE,
  SPICE_CONSOLE_TYPE,
  RDP_CONSOLE_TYPE,
  DEFAULT_VV_MIMETYPE,
  DEFAULT_RDP_MIMETYPE,
  DEFAULT_RDP_PORT
} = constants;

export function downloadFile(fileName, content, mimeType) {
  const blob = new Blob([content], { type: mimeType });
  saveAs(blob, fileName);
}

function generateVVFile({ console, type }) {
  const TYPES = {
    [VNC_CONSOLE_TYPE]: 'vnc',
    [SPICE_CONSOLE_TYPE]: 'spice'
  };

  const content =
    '[virt-viewer]\n' +
    `type=${TYPES[type] || type}\n` + // vnc or spice
    `host=${console.address}\n` +
    `port=${console.port}\n` +
    'delete-this-file=1\n' +
    'fullscreen=0\n';

  return {
    content,
    mimeType: DEFAULT_VV_MIMETYPE
  };
}

function generateRDPFile({ console }) {
  const port = typeof console.port !== 'undefined' && console.port !== null ? console.port : DEFAULT_RDP_PORT;
  const content = [
    `full address:s:${console.address}:${port}`,
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

export function generateDescriptorFile({ console, type }) {
  return type === RDP_CONSOLE_TYPE ? generateRDPFile({ console }) : generateVVFile({ console, type });
}
