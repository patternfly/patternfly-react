import React from 'react';
import { render } from '@testing-library/react';
import { CodeEditor, Language } from '../CodeEditor';

describe('CodeEditor', () => {
  beforeAll(() => {
    window.HTMLCanvasElement.prototype.getContext = () => ({} as any);
  });

  test('matches snapshot without props', () => {
    const view = render(<CodeEditor />);
    expect(view.container).toMatchSnapshot();
  });

  test('matches snapshot with all props', () => {
    const view = render(
      <CodeEditor
        isReadOnly
        isDarkTheme
        isLineNumbersVisible={false}
        isUploadEnabled
        isLanguageLabelVisible
        isDownloadEnabled
        isCopyEnabled
        height="400px"
        code={'test'}
        language={Language.javascript}
      />
    );
    expect(view.container).toMatchSnapshot();
  });
});
