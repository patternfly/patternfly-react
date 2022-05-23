import React from 'react';
import { render } from '@testing-library/react';
import { CodeEditor, Language } from '../CodeEditor';

describe('CodeEditor', () => {
  beforeAll(() => {
    window.HTMLCanvasElement.prototype.getContext = () => ({} as any);
  });

  test('matches snapshot without props', () => {
    const { asFragment } = render(<CodeEditor />);
    expect(asFragment()).toMatchSnapshot();
  });

  test('matches snapshot with all props', () => {
    const { asFragment } = render(
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
    expect(asFragment()).toMatchSnapshot();
  });
});
