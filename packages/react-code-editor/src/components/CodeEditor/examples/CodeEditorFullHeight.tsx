import { CodeEditor, Language } from '@patternfly/react-code-editor';

export const CodeEditorFullHeight: React.FunctionComponent = () => {
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
    <div style={{ height: '400px' }}>
      <CodeEditor
        code="Some example content"
        onChange={onChange}
        language={Language.javascript}
        onEditorDidMount={onEditorDidMount}
        isFullHeight
      />
    </div>
  );
};
