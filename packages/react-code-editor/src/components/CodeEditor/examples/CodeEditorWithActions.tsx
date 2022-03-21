import React from 'react';
import { CodeEditor } from '@patternfly/react-code-editor';

export const ActionsCodeEditor: React.FunctionComponent = () => (
  <CodeEditor isUploadEnabled isDownloadEnabled isCopyEnabled isLanguageLabelVisible height="400px" />
);
