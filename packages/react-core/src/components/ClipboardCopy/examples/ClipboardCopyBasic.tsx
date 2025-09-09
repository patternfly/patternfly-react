import { ClipboardCopy } from '@patternfly/react-core';

export const ClipboardCopyBasic: React.FunctionComponent = () => (
  <ClipboardCopy copyAriaLabel="Copy basic example" hoverTip="Copy" clickTip="Copied">
    This is editable
  </ClipboardCopy>
);
