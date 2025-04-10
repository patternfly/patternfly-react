import { Fragment, useState } from 'react';
import { CodeEditor, Language } from '@patternfly/react-code-editor';
import { Grid, GridItem, Label, Radio } from '@patternfly/react-core';

export const CodeEditorShortcutMainHeader: React.FunctionComponent = () => {
  type ShortcutMode = 'PC' | 'Mac';

  const [currentShortcutMode, setCurrentShortcutMode] = useState<ShortcutMode>('PC');

  const onEditorDidMount = (editor, monaco) => {
    editor.layout();
    editor.focus();
    monaco.editor.getModels()[0].updateOptions({ tabSize: 5 });
  };

  const onChange = (value: string) => {
    // eslint-disable-next-line no-console
    console.log(value);
  };

  const onShortcutModeChange = (event: React.FormEvent<HTMLInputElement>, checked: boolean) => {
    if (checked) {
      const newMode = event.currentTarget.value as ShortcutMode;
      setCurrentShortcutMode(newMode);
    }
  };

  const shortcuts = [
    {
      PC: ['Alt', 'F1'],
      Mac: ['Opt', 'F1'],
      description: 'Accessibility helps'
    },
    {
      PC: ['F1'],
      Mac: ['F1'],
      description: 'View all editor shortcuts'
    },
    {
      PC: ['Ctrl', 'Space'],
      Mac: ['Opt', 'Esc'],
      description: 'Activate auto complete'
    },
    {
      PC: ['Ctrl', 'S'],
      Mac: ['Cmd', 'S'],
      description: 'Save'
    }
  ];
  const shortcutsPopoverProps = {
    bodyContent: (
      <Grid span={6} hasGutter key="grid">
        {shortcuts.map((shortcut, index) => (
          <Fragment key={index}>
            <GridItem style={{ textAlign: 'right', marginRight: '1em' }}>
              {shortcut[currentShortcutMode]
                .map((key) => (
                  <Label variant="outline" key={key}>
                    {key}
                  </Label>
                ))
                .reduce((prev, curr) => (
                  <>{[prev, ' + ', curr]}</>
                ))}
            </GridItem>
            <GridItem>{shortcut.description}</GridItem>
          </Fragment>
        ))}
      </Grid>
    ),
    'aria-label': 'Shortcuts'
  };

  return (
    <>
      <Radio
        checked={currentShortcutMode === 'PC'}
        onChange={onShortcutModeChange}
        label="PC shortcuts"
        name="shortcut-radio"
        id="pc-shortcuts"
        value="PC"
      />
      <Radio
        checked={currentShortcutMode === 'Mac'}
        onChange={onShortcutModeChange}
        label="Mac shortcuts"
        name="shortcut-radio"
        id="mac-shortcuts"
        value="Mac"
      />
      <CodeEditor
        headerMainContent="Header main content"
        shortcutsPopoverProps={shortcutsPopoverProps}
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
