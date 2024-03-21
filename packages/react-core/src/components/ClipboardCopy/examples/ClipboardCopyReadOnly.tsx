import { FunctionComponent } from 'react';
import { ClipboardCopy } from '@patternfly/react-core';

export const ClipboardCopyReadOnly: FunctionComponent = () => (
  <ClipboardCopy isReadOnly hoverTip="Copy" clickTip="Copied">
    This is read-only
  </ClipboardCopy>
);
