import { ClipboardCopy } from '@patternfly/react-core';
export const ClipboardCopyInlineCompactTruncation: React.FunctionComponent = () => (
  <>
    <ClipboardCopy
      copyAriaLabel="Copy inline compact with truncation at end example"
      truncation
      hoverTip="Copy"
      clickTip="Copied"
      variant="inline-compact"
    >
      This lengthy, copyable content will be truncated with default settings when the truncation prop is simply set to
      true. This is useful for quickly applying truncation without needing to worry about any other properties to set.
    </ClipboardCopy>
    <br />
    <br />
    <ClipboardCopy
      copyAriaLabel="Copy inline compact with truncation at start example"
      truncation={{ position: 'start' }}
      hoverTip="Copy"
      clickTip="Copied"
      variant="inline-compact"
    >
      This lengthy, copyable content will be truncated with customized settings when the truncation prop is passed an
      object containing Truncate props. This is useful for finetuning truncation for your particular use-case.
    </ClipboardCopy>
  </>
);
