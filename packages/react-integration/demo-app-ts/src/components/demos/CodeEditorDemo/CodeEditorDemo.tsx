import React from 'react';
import { CodeEditor, CodeEditorControl, CodeEditorProps, Language } from '@patternfly/react-code-editor';
import { Button, Checkbox } from '@patternfly/react-core';
import PlayIcon from '@patternfly/react-icons/dist/esm/icons/play-icon';

interface CodeEditorDemoState {
  isDarkTheme: boolean;
  isLineNumbersVisible: boolean;
  isReadOnly: boolean;
  isMinimapVisible: boolean;
  code: string;
}

export class CodeEditorDemo extends React.Component<CodeEditorProps, CodeEditorDemoState> {
  static displayName = 'CodeEditorDemo';
  constructor(props: CodeEditorProps) {
    super(props);
    this.state = {
      isDarkTheme: false,
      isLineNumbersVisible: true,
      isReadOnly: false,
      isMinimapVisible: true,
      code: 'test'
    };
  }

  toggleDarkTheme = (checked: boolean) => {
    this.setState({
      isDarkTheme: checked
    });
  };

  toggleLineNumbers = (checked: boolean) => {
    this.setState({
      isLineNumbersVisible: checked
    });
  };

  toggleReadOnly = (checked: boolean) => {
    this.setState({
      isReadOnly: checked
    });
  };

  toggleMinimap = (checked: boolean) => {
    this.setState({
      isMinimapVisible: checked
    });
  };

  resetCode = () => {
    this.setState({
      code: 'resetcode'
    });
  };

  onEditorDidMount = (editor: any, monaco: any) => {
    editor.layout();
    editor.focus();
    monaco.editor.getModels()[0].updateOptions({ tabSize: 5 });
  };

  onChange = (code: string) => {
    this.setState({ code });
  };

  onExecuteCode = (code: string) => {
    // eslint-disable-next-line no-console
    console.log(code);
  };

  render() {
    const { isDarkTheme, isLineNumbersVisible, isReadOnly, isMinimapVisible, code } = this.state;

    const customControl = (
      <CodeEditorControl
        icon={<PlayIcon />}
        aria-label="Execute code"
        onClick={this.onExecuteCode}
        isVisible={code !== ''}
      />
    );

    return (
      <>
        <Checkbox
          label="Dark theme"
          isChecked={isDarkTheme}
          onChange={this.toggleDarkTheme}
          aria-label="dark theme checkbox"
          id="toggle-theme"
          name="toggle-theme"
        />
        <Checkbox
          label="Line numbers"
          isChecked={isLineNumbersVisible}
          onChange={this.toggleLineNumbers}
          aria-label="line numbers checkbox"
          id="toggle-line-numbers"
          name="toggle-line-numbers"
        />
        <Checkbox
          label="Read only"
          isChecked={isReadOnly}
          onChange={this.toggleReadOnly}
          aria-label="read only checkbox"
          id="toggle-read-only"
          name="toggle-read-only"
        />
        <Checkbox
          label="Display Minimap"
          isChecked={isMinimapVisible}
          onChange={this.toggleMinimap}
          aria-label="display minimap checkbox"
          id="toggle-minimap"
          name="toggle-minimap"
        />
        <Button id="reset-code" onClick={this.resetCode}>
          Reset Code
        </Button>
        <CodeEditor
          isDarkTheme={isDarkTheme}
          isLineNumbersVisible={isLineNumbersVisible}
          isReadOnly={isReadOnly}
          isMinimapVisible={isMinimapVisible}
          isLanguageLabelVisible
          isUploadEnabled
          isDownloadEnabled
          isCopyEnabled
          code={code}
          onChange={this.onChange}
          language={Language.javascript}
          onEditorDidMount={this.onEditorDidMount}
          customControls={customControl}
          height="400px"
        />
      </>
    );
  }
}
