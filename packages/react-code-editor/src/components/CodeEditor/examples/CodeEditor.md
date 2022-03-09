---
id: Code editor
section: components
cssPrefix: pf-c-code-editor
propComponents: ['CodeEditor', 'CodeEditorControl', 'Popover']
beta: true
---

Note: Code editor lives in its own package at [@patternfly/react-code-editor](https://www.npmjs.com/package/@patternfly/react-code-editor) and has [**required peer deps**](https://github.com/patternfly/patternfly-react/blob/main/packages/react-code-editor/package.json).

import { CodeEditor, CodeEditorControl, Language } from '@patternfly/react-code-editor';
import PlayIcon from '@patternfly/react-icons/dist/esm/icons/play-icon';

## Examples
### Basic
```js
import React from 'react';
import { CodeEditor, Language } from '@patternfly/react-code-editor';
import { Checkbox } from '@patternfly/react-core';

class BasicCodeEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDarkTheme: false,
      isLineNumbersVisible: true,
      isReadOnly: false,
      isMinimapVisible: true
    };
    
    this.toggleDarkTheme = checked => {
      this.setState({
        isDarkTheme: checked
      });
    };
    this.toggleLineNumbers = checked => {
      this.setState({
        isLineNumbersVisible: checked
      });
    };
    this.toggleReadOnly = checked => {
      this.setState({
        isReadOnly: checked
      });
    };
    this.toggleMinimap = checked => {
      this.setState({
        isMinimapVisible: checked
      })
    };
    
    this.onEditorDidMount = (editor, monaco) => {
      console.log(editor.getValue());
      editor.layout();
      editor.focus();
      monaco.editor.getModels()[0].updateOptions({ tabSize: 5 });
    };
    
    this.onChange = value => {
      console.log(value);
    };
  }
  
  render() {
    const { isDarkTheme, isLineNumbersVisible, isReadOnly, isMinimapVisible } = this.state;
    
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
          label="Minimap"
          isChecked={isMinimapVisible}
          onChange={this.toggleMinimap}
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
          onChange={this.onChange}
          language={Language.javascript}
          onEditorDidMount={this.onEditorDidMount}
          height='400px'
        />
      </>
    );
  }
}
```

### With sizeToFit height, height will grow/shrink with content
```js
import React from 'react';
import { CodeEditor, Language } from '@patternfly/react-code-editor';

class BasicCodeEditor extends React.Component {
  constructor(props) {
    super(props);
    
    this.onEditorDidMount = (editor, monaco) => {
      console.log(editor.getValue());
      editor.layout();
      editor.focus();
      monaco.editor.getModels()[0].updateOptions({ tabSize: 5 });
    };
    
    this.onChange = value => {
      console.log(value);
    };
  }
  
  render() {    
    return (
      <CodeEditor
        code="Some example content"
        onChange={this.onChange}
        language={Language.javascript}
        onEditorDidMount={this.onEditorDidMount}
        height='sizeToFit'
      />
    );
  }
}
```

### With shortcut menu and main header content.
These examples below are the shortcuts that we recommend describing in the popover since they are monaco features.
```js
import React from 'react';
import { CodeEditor, Language } from '@patternfly/react-code-editor';
import { Checkbox, Grid, GridItem, Chip } from '@patternfly/react-core';

class BasicCodeEditor extends React.Component {
  constructor(props) {
    super(props);
    
    this.onEditorDidMount = (editor, monaco) => {
      console.log(editor.getValue());
      editor.layout();
      editor.focus();
      monaco.editor.getModels()[0].updateOptions({ tabSize: 5 });
    };
    
    this.onChange = value => {
      console.log(value);
    };
  }
  
  render() {
    const shortcuts = [
      {
        keys: ["Opt","F1"],
        description: "Accessibility helps",
      },
      {
        keys: ["F1"],
        description: "View all editor shortcuts",
      },
      {
        keys: ["Ctrl", "Space"],
        description: "Activate auto complete",
      },
      {
        keys: ["Cmd", "S"],
        description: "Save",
      },
    ];
    const shortcutsPopoverProps = {
      bodyContent:
        <Grid span={6} hasGutter>
          {shortcuts.map(s => (
            <>
              <GridItem style={{ textAlign: 'right', marginRight: '1em' }}>
                {s.keys
                  .map(k => (
                    <Chip key={k} isReadOnly>
                      {k}
                    </Chip>
                  ))
                  .reduce((prev, curr) => [prev, ' + ', curr])}
              </GridItem>
              <GridItem>{s.description}</GridItem>
            </>
          ))}
        </Grid>,
      'aria-label': "Shortcuts",
    }
    
    return (
      <>
        <CodeEditor
          headerMainContent="Shortcut Example"
          shortcutsPopoverProps={shortcutsPopoverProps}
          isLanguageLabelVisible
          code="Some example content"
          onChange={this.onChange}
          language={Language.javascript}
          onEditorDidMount={this.onEditorDidMount}
          height='400px'
        />
      </>
    );
  }
}
```

### With actions
```js
import React from 'react';
import { CodeEditor } from '@patternfly/react-code-editor';

<CodeEditor
  isUploadEnabled
  isDownloadEnabled
  isCopyEnabled
  isLanguageLabelVisible
  height='400px'
/>
```

### With custom control
```js
import React from 'react';
import { CodeEditor, CodeEditorControl } from '@patternfly/react-code-editor';
import PlayIcon from '@patternfly/react-icons/dist/esm/icons/play-icon';

class customControlExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      code: ''
    };
    
    this.onChange = code => {
      this.setState({ code })
    };
    
    this.onExecuteCode = (code) => {
      console.log(code);
    };
  }
 
  render() {
    const customControl = (
      <CodeEditorControl 
        icon={<PlayIcon/>}
        aria-label="Execute code"
        toolTipText="Execute code"
        onClick={this.onExecuteCode}
        isVisible={this.state.code !== ''}
      />);
    
    return (
      <>
        <CodeEditor
          isDownloadEnabled
          isCopyEnabled
          height='400px'
          customControls={customControl}
          code={this.state.code}
          onChange={this.onChange}
        />
      </>
    );
  }
}
```
