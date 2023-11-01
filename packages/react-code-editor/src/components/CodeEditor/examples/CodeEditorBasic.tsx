import React from 'react';
import { CodeEditor, Language } from '@patternfly/react-code-editor';
import { Checkbox } from '@patternfly/react-core';

export const CodeEditorBasic: React.FunctionComponent = () => {
  const [isDarkTheme, setIsDarkTheme] = React.useState(false);
  const [isLineNumbersVisible, setIsLineNumbersVisible] = React.useState(true);
  const [isReadOnly, setIsReadOnly] = React.useState(false);
  const [isMinimapVisible, setIsMinimapVisible] = React.useState(false);

  const toggleDarkTheme = (checked) => {
    setIsDarkTheme(checked);
  };

  const toggleLineNumbers = (checked) => {
    setIsLineNumbersVisible(checked);
  };
  const toggleReadOnly = (checked) => {
    setIsReadOnly(checked);
  };
  const toggleMinimap = (checked) => {
    setIsMinimapVisible(checked);
  };

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
    <>
      <Checkbox
        label="Dark theme"
        isChecked={isDarkTheme}
        onChange={(_event, checked) => toggleDarkTheme(checked)}
        aria-label="dark theme checkbox"
        id="toggle-theme"
        name="toggle-theme"
      />
      <Checkbox
        label="Line numbers"
        isChecked={isLineNumbersVisible}
        onChange={(_event, checked) => toggleLineNumbers(checked)}
        aria-label="line numbers checkbox"
        id="toggle-line-numbers"
        name="toggle-line-numbers"
      />
      <Checkbox
        label="Read only"
        isChecked={isReadOnly}
        onChange={(_event, checked) => toggleReadOnly(checked)}
        aria-label="read only checkbox"
        id="toggle-read-only"
        name="toggle-read-only"
      />
      <Checkbox
        label="Minimap"
        isChecked={isMinimapVisible}
        onChange={(_event, checked) => toggleMinimap(checked)}
        aria-label="display minimap checkbox"
        id="toggle-minimap"
        name="toggle-minimap"
      />
      <CodeEditor
        isDarkTheme={isDarkTheme}
        isLineNumbersVisible={isLineNumbersVisible}
        isReadOnly={isReadOnly}
        isMinimapVisible={isMinimapVisible}
        isLanguageLabelVisible
        code="Some example content"
        onChange={onChange}
        language={Language.javascript}
        onEditorDidMount={onEditorDidMount}
        height="400px"
      />
    </>
  );
};
