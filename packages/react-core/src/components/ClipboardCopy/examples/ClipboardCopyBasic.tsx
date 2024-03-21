import { FunctionComponent } from 'react';
import { ClipboardCopy } from '@patternfly/react-core';

export const ClipboardCopyBasic: FunctionComponent = () => (
  <ClipboardCopy hoverTip="Copy" clickTip="Copied">
    This is editable
  </ClipboardCopy>
);
