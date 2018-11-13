import 'blob-polyfill';
import { saveAs } from 'file-saver';

import { VNC_CONSOLE_TYPE, SPICE_CONSOLE_TYPE } from '../common/constants';

export function downloadFile(fileName, content, mimeType) {
  const blob = new Blob([content], { type: mimeType });
  saveAs(blob, fileName);
}

const TYPES = {
  [VNC_CONSOLE_TYPE]: 'vnc',
  [SPICE_CONSOLE_TYPE]: 'spice'
};

export function generateVVFile({ console, type }) {
  const content =
    '[virt-viewer]\n' +
    `type=${TYPES[type] || type}\n` + // vnc or spice
    `host=${console.address}\n` +
    `port=${console.port}\n` +
    'delete-this-file=1\n' +
    'fullscreen=0\n';

  return {
    content,
    mimeType: 'application/x-virt-viewer'
  };
}
