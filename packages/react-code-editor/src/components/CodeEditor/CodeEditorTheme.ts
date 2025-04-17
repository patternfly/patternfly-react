import green70 from '@patternfly/react-tokens/dist/esm/t_color_green_70';
import yellow70 from '@patternfly/react-tokens/dist/esm/t_color_yellow_70';
import blue70 from '@patternfly/react-tokens/dist/esm/t_color_blue_70';
import purple70 from '@patternfly/react-tokens/dist/esm/t_color_purple_70';
import green30 from '@patternfly/react-tokens/dist/esm/t_color_green_30';
import blue30 from '@patternfly/react-tokens/dist/esm/t_color_blue_30';
import yellow30 from '@patternfly/react-tokens/dist/esm/t_color_yellow_30';
import purple30 from '@patternfly/react-tokens/dist/esm/t_color_purple_30';
import white from '@patternfly/react-tokens/dist/esm/t_color_white';
import gray20 from '@patternfly/react-tokens/dist/esm/t_color_gray_20';
import gray60 from '@patternfly/react-tokens/dist/esm/t_color_gray_60';
import gray90 from '@patternfly/react-tokens/dist/esm/t_color_gray_90';
import black from '@patternfly/react-tokens/dist/esm/t_color_black';
import type { editor as monacoEditor } from 'monaco-editor/esm/vs/editor/editor.api';

/**
 * Define the themes `pf-v6-theme-light` and
 * `pf-v6-theme-dark` for an instance of Monaco editor.
 *
 * Note that base tokens must be used as Monaco will throw a runtime
 * error for CSS variables.
 */
export const defineThemes = (editor: typeof monacoEditor) => {
  editor.defineTheme('pf-v6-theme-light', {
    base: 'vs',
    inherit: true,
    colors: {
      'editor.background': white.value,
      'editorLineNumber.activeForeground': black.value,
      'editorLineNumber.foreground': gray60.value
    },
    rules: [
      { token: 'number', foreground: green70.value },
      { token: 'type', foreground: yellow70.value },
      { token: 'string', foreground: blue70.value },
      { token: 'keyword', foreground: purple70.value }
    ]
  });

  editor.defineTheme('pf-v6-theme-dark', {
    base: 'vs-dark',
    inherit: true,
    colors: {
      'editor.background': gray90.value,
      'editorLineNumber.activeForeground': white.value,
      'editorLineNumber.foreground': gray20.value
    },
    rules: [
      { token: 'number', foreground: green30.value },
      { token: 'type', foreground: blue30.value },
      { token: 'string', foreground: yellow30.value },
      { token: 'keyword', foreground: purple30.value }
    ]
  });
};
