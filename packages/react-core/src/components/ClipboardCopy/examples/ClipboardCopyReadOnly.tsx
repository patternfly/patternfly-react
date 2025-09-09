import { ClipboardCopy } from '@patternfly/react-core';

export const ClipboardCopyReadOnly: React.FunctionComponent = () => (
  <ClipboardCopy copyAriaLabel="Copy read-only example" isReadOnly hoverTip="Copy" clickTip="Copied">
    This is read-only
  </ClipboardCopy>
);
