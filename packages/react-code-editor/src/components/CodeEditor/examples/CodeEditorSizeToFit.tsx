import React from 'react';
import { CodeEditor, Language } from '@patternfly/react-code-editor';

export const CodeEditorSizeToFit: React.FunctionComponent = () => {
  const onEditorDidMount = (editor, monaco) => {
    editor.layout();
    editor.focus();
    monaco.editor.getModels()[0].updateOptions({ tabSize: 5 });
  };

  const onChange = (value) => {
    // eslint-disable-next-line no-console
    console.log(value);
  };

  return (
    <CodeEditor
      code="Some example content"
      onChange={onChange}
      language={Language.javascript}
      onEditorDidMount={onEditorDidMount}
      height="sizeToFit"
    />
  );
};
