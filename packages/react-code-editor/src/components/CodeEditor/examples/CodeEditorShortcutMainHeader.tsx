import React from 'react';
import { CodeEditor, Language } from '@patternfly/react-code-editor';
import { Grid, GridItem, Chip } from '@patternfly/react-core';

export const CodeEditorShortcutMainHeader: React.FunctionComponent = () => {
  const onEditorDidMount = (editor, monaco) => {
    editor.layout();
    editor.focus();
    monaco.editor.getModels()[0].updateOptions({ tabSize: 5 });
  };

  const onChange = (value) => {
    // eslint-disable-next-line no-console
    console.log(value);
  };

  const shortcuts = [
    {
      keys: ['Opt', 'F1'],
      description: 'Accessibility helps'
    },
    {
      keys: ['F1'],
      description: 'View all editor shortcuts'
    },
    {
      keys: ['Ctrl', 'Space'],
      description: 'Activate auto complete'
    },
    {
      keys: ['Cmd', 'S'],
      description: 'Save'
    }
  ];
  const shortcutsPopoverProps = {
    bodyContent: (
      <Grid span={6} hasGutter key="grid">
        {shortcuts.map((shortcut, index) => (
          <React.Fragment key={index}>
            <GridItem style={{ textAlign: 'right', marginRight: '1em' }}>
              {shortcut.keys
                .map((key) => (
                  <Chip key={key} isReadOnly>
                    {key}
                  </Chip>
                ))
                .reduce((prev, curr) => (
                  <>{[prev, ' + ', curr]}</>
                ))}
            </GridItem>
            <GridItem>{shortcut.description}</GridItem>
          </React.Fragment>
        ))}
      </Grid>
    ),
    'aria-label': 'Shortcuts'
  };

  return (
    <CodeEditor
      shortcutsPopoverProps={shortcutsPopoverProps}
      isLanguageLabelVisible
      code="Some example content"
      onChange={onChange}
      language={Language.javascript}
      onEditorDidMount={onEditorDidMount}
      height="400px"
    />
  );
};
