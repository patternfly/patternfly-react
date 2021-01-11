---
id: Code editor
section: components
cssPrefix: pf-c-code-editor
propComponents: ['CodeEditor']
beta: true
---

Note: Code editor lives in its own package at [@patternfly/react-code-editor](https://www.npmjs.com/package/@patternfly/react-code-editor)!

import { CodeEditor, CodeEditorControl } from '@patternfly/react-code-editor';
import PlayIcon from '@patternfly/react-icons/dist/js/icons/play-icon';

## Examples
### Basic
```js
import React from 'react';
import { CodeEditor } from '@patternfly/react-code-editor';
import { Checkbox } from '@patternfly/react-core';

class BasicCodeEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDarkTheme: false,
      isLineNumbers: true,
      isReadOnly: false
    };
    
    this.toggleDarkTheme = checked => {
      this.setState({
        isDarkTheme: checked
      });
    };
    this.toggleLineNumbers = checked => {
      this.setState({
        isLineNumbers: checked
      });
    };
    this.toggleReadOnly = checked => {
      this.setState({
        isReadOnly: checked
      });
    };
    
    this.onChange = code => {
      console.log(code);
    }
  }
  
  render() {
    const { isDarkTheme, isLineNumbers, isReadOnly } = this.state;
    
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
          isChecked={isLineNumbers}
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
        <CodeEditor
          isDarkTheme={isDarkTheme}
          isLineNumbers={isLineNumbers}
          isReadOnly={isReadOnly}
          code="Some example content"
          onChange={this.onChange}
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
  isAllowUpload
  isAllowDownload
  isAllowCopy
  height='400px'
/>
```

### With custom control
```js
import React from 'react';
import { CodeEditor, CodeEditorControl } from '@patternfly/react-code-editor';
import PlayIcon from '@patternfly/react-icons/dist/js/icons/play-icon';

class customControlExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      code: ''
    };
    
    this.onChange = (code) => {
      this.setState({code});
    };
    
    this.onExecuteCode = (code) => {
      console.log(code);
    };
  }
 
  render() {
    const customControl = (
      <CodeEditorControl 
        icon={<PlayIcon/>}
        toolTipText="Execute code"
        onClick={this.onExecuteCode}
        isVisible={this.state.code !== ''}
      />);
    
    return (
      <>
        <CodeEditor
          isAllowDownload
          isAllowCopy
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
