import { FunctionComponent } from 'react';
import { CodeEditor } from '@patternfly/react-code-editor';

export const CodeEditorWithActions: FunctionComponent = () => (
  <CodeEditor isUploadEnabled isDownloadEnabled isCopyEnabled isLanguageLabelVisible height="400px" />
);
