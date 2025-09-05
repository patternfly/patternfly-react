import { ClipboardCopy, ClipboardCopyVariant } from '@patternfly/react-core';

export const ClipboardCopyReadOnlyExpandedByDefault: React.FunctionComponent = () => (
  <ClipboardCopy
    copyAriaLabel="Copy read-only expanded by default example"
    toggleAriaLabel="Show content for read-only expanded by default example"
    isReadOnly
    isExpanded
    hoverTip="Copy"
    clickTip="Copied"
    variant={ClipboardCopyVariant.expansion}
  >
    Got a lot of text here, need to see all of it? Click that arrow on the left side and check out the resulting
    expansion.
  </ClipboardCopy>
);
