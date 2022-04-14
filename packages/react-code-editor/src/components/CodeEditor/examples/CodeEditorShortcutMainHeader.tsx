import React from 'react';
import { CodeEditor, Language } from '@patternfly/react-code-editor';
import { Grid, GridItem, Chip } from '@patternfly/react-core';

export const CodeEditorShortcutMainHeader: React.FunctionComponent = () => {
  const onEditorDidMount = (editor, monaco) => {
    // eslint-disable-next-line no-console
    console.log(editor.getValue());
    editor.layout();
    editor.focus();
    monaco.editor.getModels()[0].updateOptions({ tabSize: 5 });
  };

  const onChange = value => {
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
                .reduce((prev, curr) => (
                  <>{[prev, ' + ', curr]}</>
                ))}
            </GridItem>
            <GridItem>{s.description}</GridItem>
          </>
        ))}
      </Grid>
    ),
    'aria-label': 'Shortcuts'
  };

  return (
    <CodeEditor
      headerMainContent="Shortcut Example"
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
