import { ClipboardCopy, ClipboardCopyVariant } from '@patternfly/react-core';

export const ClipboardCopyJSONObject: React.FunctionComponent = () => (
  <ClipboardCopy
    copyAriaLabel="Copy JSON object example"
    toggleAriaLabel="Show content for JSON object example"
    isCode
    hoverTip="Copy"
    clickTip="Copied"
    variant={ClipboardCopyVariant.expansion}
  >
    {`{ "menu": {
    "id": "file",
    "value": "File",
    "popup": {
      "menuitem": [
        {"value": "New", "onclick": "CreateNewDoc()"},
        {"value": "Open", "onclick": "OpenDoc()"},
        {"value": "Close", "onclick": "CloseDoc()"}
      ]
    }
  }} `}
  </ClipboardCopy>
);
