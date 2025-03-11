import { colours } from './themeTokenMapping';
import type { editor as monacoEditor } from 'monaco-editor/esm/vs/editor/editor.api';

const createTheme = (mode: 'light' | 'dark'): monacoEditor.IStandaloneThemeData => ({
  base: mode === 'light' ? 'vs' : 'vs-dark',
  inherit: true,
  colors: {
    'editor.background': colours.background[mode],
    'editor.foreground': colours.foreground[mode],
    'editorLineNumber.activeForeground': colours.foreground[mode],
    'editorLineNumber.foreground': colours.secondaryForeground[mode]
  },
  rules: [
    { token: '', foreground: colours.foreground[mode], background: colours.background[mode] },
    { token: 'invalid', foreground: colours.red[mode] },
    { token: 'emphasis', fontStyle: 'italic' },
    { token: 'strong', fontStyle: 'bold' },

    { token: 'variable', foreground: colours.blue[mode] },
    { token: 'variable.predefined', foreground: colours.teal[mode] },
    { token: 'constant', foreground: colours.orange[mode] },
    { token: 'comment', foreground: colours.gray[mode] },
    { token: 'number', foreground: colours.orange[mode] },
    { token: 'number.hex', foreground: colours.blue[mode] },
    { token: 'regexp', foreground: colours.red[mode] },
    { token: 'annotation', foreground: colours.purple[mode] },
    { token: 'type', foreground: colours.yellow[mode] },

    { token: 'delimiter', foreground: colours.foreground[mode] },
    { token: 'delimiter.html', foreground: colours.gray[mode] },
    { token: 'delimiter.xml', foreground: colours.blue[mode] },

    { token: 'tag', foreground: colours.red[mode] },
    { token: 'tag.id.jade', foreground: colours.teal[mode] },
    { token: 'tag.class.jade', foreground: colours.teal[mode] },
    { token: 'meta.scss', foreground: colours.red[mode] },
    { token: 'metatag', foreground: colours.orange[mode] },
    { token: 'metatag.content.html', foreground: colours.red[mode] },
    { token: 'metatag.html', foreground: colours.gray[mode] },
    { token: 'metatag.xml', foreground: colours.gray[mode] },
    { token: 'metatag.php', fontStyle: 'bold' },

    { token: 'key', foreground: colours.orange[mode] },
    { token: 'string.key.json', foreground: colours.red[mode] },
    { token: 'string.value.json', foreground: colours.blue[mode] },

    { token: 'attribute.name', foreground: colours.red[mode] },
    { token: 'attribute.value', foreground: colours.blue[mode] },
    { token: 'attribute.value.number', foreground: colours.orange[mode] },
    { token: 'attribute.value.unit', foreground: colours.orange[mode] },
    { token: 'attribute.value.html', foreground: colours.blue[mode] },
    { token: 'attribute.value.xml', foreground: colours.blue[mode] },

    { token: 'string', foreground: colours.green[mode] },
    { token: 'string.html', foreground: colours.green[mode] },
    { token: 'string.sql', foreground: colours.green[mode] },
    { token: 'string.yaml', foreground: colours.green[mode] },

    { token: 'keyword', foreground: colours.purple[mode] },
    { token: 'keyword.json', foreground: colours.purple[mode] },
    { token: 'keyword.flow', foreground: colours.purple[mode] },
    { token: 'keyword.flow.scss', foreground: colours.purple[mode] },

    { token: 'operator.scss', foreground: colours.foreground[mode] },
    { token: 'operator.sql', foreground: colours.foreground[mode] },
    { token: 'operator.swift', foreground: colours.foreground[mode] },
    { token: 'predefined.sql', foreground: colours.purple[mode] }
  ]
});

/**
 * Define the themes `pf-v6-theme-light` and
 * `pf-v6-theme-dark` for an instance of Monaco editor.
 */
export const defineThemes = (editor: typeof monacoEditor) => {
  editor.defineTheme('pf-v6-theme-light', createTheme('light'));
  editor.defineTheme('pf-v6-theme-dark', createTheme('dark'));
};
