import { colors } from './themeTokenMapping';
import type { editor as monacoEditor } from 'monaco-editor/esm/vs/editor/editor.api';

const createTheme = (mode: 'light' | 'dark'): monacoEditor.IStandaloneThemeData => ({
  base: mode === 'light' ? 'vs' : 'vs-dark',
  inherit: true,
  colors: {
    'editor.background': colors.background[mode],
    'editor.foreground': colors.foreground[mode],
    'editorLineNumber.activeForeground': colors.foreground[mode],
    'editorLineNumber.foreground': colors.secondaryForeground[mode]
  },
  rules: [
    { token: '', foreground: colors.foreground[mode], background: colors.background[mode] },
    { token: 'invalid', foreground: colors.red[mode] },
    { token: 'emphasis', fontStyle: 'italic' },
    { token: 'strong', fontStyle: 'bold' },

    { token: 'variable', foreground: colors.blue[mode] },
    { token: 'variable.predefined', foreground: colors.teal[mode] },
    { token: 'constant', foreground: colors.orange[mode] },
    { token: 'comment', foreground: colors.gray[mode] },
    { token: 'number', foreground: colors.orange[mode] },
    { token: 'number.hex', foreground: colors.blue[mode] },
    { token: 'regexp', foreground: colors.red[mode] },
    { token: 'annotation', foreground: colors.purple[mode] },
    { token: 'type', foreground: colors.yellow[mode] },

    { token: 'delimiter', foreground: colors.foreground[mode] },
    { token: 'delimiter.html', foreground: colors.gray[mode] },
    { token: 'delimiter.xml', foreground: colors.blue[mode] },

    { token: 'tag', foreground: colors.red[mode] },
    { token: 'tag.id.jade', foreground: colors.teal[mode] },
    { token: 'tag.class.jade', foreground: colors.teal[mode] },
    { token: 'meta.scss', foreground: colors.red[mode] },
    { token: 'metatag', foreground: colors.orange[mode] },
    { token: 'metatag.content.html', foreground: colors.red[mode] },
    { token: 'metatag.html', foreground: colors.gray[mode] },
    { token: 'metatag.xml', foreground: colors.gray[mode] },
    { token: 'metatag.php', fontStyle: 'bold' },

    { token: 'key', foreground: colors.orange[mode] },
    { token: 'string.key.json', foreground: colors.red[mode] },
    { token: 'string.value.json', foreground: colors.blue[mode] },

    { token: 'attribute.name', foreground: colors.red[mode] },
    { token: 'attribute.value', foreground: colors.blue[mode] },
    { token: 'attribute.value.number', foreground: colors.orange[mode] },
    { token: 'attribute.value.unit', foreground: colors.orange[mode] },
    { token: 'attribute.value.html', foreground: colors.blue[mode] },
    { token: 'attribute.value.xml', foreground: colors.blue[mode] },

    { token: 'string', foreground: colors.green[mode] },
    { token: 'string.html', foreground: colors.green[mode] },
    { token: 'string.sql', foreground: colors.green[mode] },
    { token: 'string.yaml', foreground: colors.green[mode] },

    { token: 'keyword', foreground: colors.purple[mode] },
    { token: 'keyword.json', foreground: colors.purple[mode] },
    { token: 'keyword.flow', foreground: colors.purple[mode] },
    { token: 'keyword.flow.scss', foreground: colors.purple[mode] },

    { token: 'operator.scss', foreground: colors.foreground[mode] },
    { token: 'operator.sql', foreground: colors.foreground[mode] },
    { token: 'operator.swift', foreground: colors.foreground[mode] },
    { token: 'predefined.sql', foreground: colors.purple[mode] }
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
