import React from 'react';
import { ClipboardCopy } from '@patternfly/react-core';

export const ClipboardCopyReadOnly: React.FunctionComponent<React.PropsWithChildren<unknown>> = () => (
  <ClipboardCopy isReadOnly hoverTip="Copy" clickTip="Copied">
    This is read-only
  </ClipboardCopy>
);
