import { FunctionComponent } from 'react';
import { ClipboardCopy } from '@patternfly/react-core';

export const ClipboardCopyInlineCompactCode: FunctionComponent = () => (
  <ClipboardCopy hoverTip="Copy" clickTip="Copied" variant="inline-compact" isCode>
    2.3.4-2-redhat
  </ClipboardCopy>
);
