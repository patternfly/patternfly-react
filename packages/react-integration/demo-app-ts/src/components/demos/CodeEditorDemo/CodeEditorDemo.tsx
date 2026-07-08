import { Component } from 'react';
import { CodeEditor, CodeEditorControl, CodeEditorProps, Language } from '@patternfly/react-code-editor';
import { Button, Checkbox } from '@patternfly/react-core';
import RhUiPlayFillIcon from '@patternfly/react-icons/dist/esm/icons/rh-ui-play-fill-icon';

interface CodeEditorDemoState {
  isDarkTheme: boolean;
  isHighContrastTheme: boolean;
  isLineNumbersVisible: boolean;
  isReadOnly: boolean;
  isMinimapVisible: boolean;
  code: string;
}

export class CodeEditorDemo extends Component<CodeEditorProps, CodeEditorDemoState> {
  static displayName = 'CodeEditorDemo';
  constructor(props: CodeEditorProps) {
    super(props);
    this.state = {
      isDarkTheme: false,
      isHighContrastTheme: false,
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

  toggleHighContrastTheme = (checked: boolean) => {
    this.setState({
      isHighContrastTheme: checked
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
    const { isDarkTheme, isHighContrastTheme, isLineNumbersVisible, isReadOnly, isMinimapVisible, code } = this.state;
    const customControl = (
      <CodeEditorControl
        icon={<RhUiPlayFillIcon />}
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
          onChange={(_event, checked) => this.toggleDarkTheme(checked)}
          aria-label="dark theme checkbox"
          id="toggle-theme"
          name="toggle-theme"
        />
        <Checkbox
          label="High contrast theme"
          isChecked={isHighContrastTheme}
          onChange={(_event, checked) => this.toggleHighContrastTheme(checked)}
          aria-label="high contrast theme checkbox"
          id="toggle-high-contrast-theme"
          name="toggle-high-contrast-theme"
        />
        <Checkbox
          label="Line numbers"
          isChecked={isLineNumbersVisible}
          onChange={(_event, checked) => this.toggleLineNumbers(checked)}
          aria-label="line numbers checkbox"
          id="toggle-line-numbers"
          name="toggle-line-numbers"
        />
        <Checkbox
          label="Read only"
          isChecked={isReadOnly}
          onChange={(_event, checked) => this.toggleReadOnly(checked)}
          aria-label="read only checkbox"
          id="toggle-read-only"
          name="toggle-read-only"
        />
        <Checkbox
          label="Display Minimap"
          isChecked={isMinimapVisible}
          onChange={(_event, checked) => this.toggleMinimap(checked)}
          aria-label="display minimap checkbox"
          id="toggle-minimap"
          name="toggle-minimap"
        />
        <Button id="reset-code" onClick={this.resetCode}>
          Reset Code
        </Button>
        <CodeEditor
          isDarkTheme={isDarkTheme}
          isHighContrastTheme={isHighContrastTheme}
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
