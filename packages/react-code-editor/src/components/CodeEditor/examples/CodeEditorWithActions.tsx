import React from 'react';
import { CodeEditor } from '@patternfly/react-code-editor';

export const CodeEditorWithActions: React.FunctionComponent<React.PropsWithChildren<unknown>> = () => (
  <CodeEditor isUploadEnabled isDownloadEnabled isCopyEnabled isLanguageLabelVisible height="400px" />
);
