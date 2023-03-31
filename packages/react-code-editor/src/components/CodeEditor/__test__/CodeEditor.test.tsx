import React from 'react';
import { render } from '@testing-library/react';
import { CodeEditor, Language } from '../CodeEditor';

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // Deprecated
    removeListener: jest.fn(), // Deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

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
