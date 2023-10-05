import React from 'react';
import { ClipboardCopy, ClipboardCopyVariant } from '@patternfly/react-core';

export const ClipboardCopyExpanded: React.FunctionComponent = () => (
  <ClipboardCopy
    hoverTip="Copy"
    title="The info you need, expand to see what actually gets copied"
    clickTip="Copied"
    variant={ClipboardCopyVariant.expansion}
  >
    This could be a lot of information that you'd want to summarize with a title as above. The title above will be
    readonly as it was defined as a title rather than just the first part of this text. However, a user can still modify
    this content which gets copied into the clipboard. You can use the isReadOnly flag to prevent them from changing
    this.
  </ClipboardCopy>
);
