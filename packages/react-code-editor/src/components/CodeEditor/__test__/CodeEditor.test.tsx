import React from 'react';
import { render, screen, act } from '@testing-library/react';
import { CodeEditor, Language } from '../CodeEditor';
import styles from '@patternfly/react-styles/css/components/CodeEditor/code-editor';
import fileUploadStyles from '@patternfly/react-styles/css/components/FileUpload/file-upload';

jest.mock('@monaco-editor/react', () => jest.fn(() => <div data-testid="mock-editor"></div>));

test('Matches snapshot without props', () => {
  const { asFragment } = render(<CodeEditor code="test" />);
  expect(asFragment()).toMatchSnapshot();
});

test('Matches snapshot with control buttons enabled', () => {
  const { asFragment } = render(<CodeEditor isUploadEnabled isDownloadEnabled isCopyEnabled code="test" />);
  expect(asFragment()).toMatchSnapshot();
});

test(`Renders with default classes ${styles.codeEditor}, ${styles.codeEditorMain}, ${styles.codeEditorCode}`, () => {
  render(<CodeEditor />);
  expect(screen.getByTestId('mock-editor').parentElement).toHaveClass(styles.codeEditorCode);
  expect(screen.getByTestId('mock-editor').parentElement?.parentElement).toHaveClass(styles.codeEditorMain);
  expect(screen.getByTestId('mock-editor').parentElement?.parentElement?.parentElement).toHaveClass(styles.codeEditor);
});

test('Renders custom class when className is passed', () => {
  render(<CodeEditor className="custom" />);
  expect(screen.getByTestId('mock-editor').parentElement?.parentElement?.parentElement).toHaveClass('custom');
});

test(`Renders with ${styles.modifiers.readOnly} when isReadOnly = true`, () => {
  render(<CodeEditor isReadOnly />);
  expect(screen.getByTestId('mock-editor').parentElement?.parentElement?.parentElement).toHaveClass(
    styles.modifiers.readOnly
  );
});

test(`Renders with ${fileUploadStyles.fileUpload} when isUploadEnabled = true`, () => {
  render(<CodeEditor isUploadEnabled code="test" />);
  expect(screen.getByTestId('mock-editor').parentElement?.parentElement?.parentElement).toHaveClass(
    fileUploadStyles.fileUpload
  );
});

test(`Renders with empty state when code = undefined`, () => {
  render(<CodeEditor emptyState={<div>empty</div>} />);
  expect(screen.getByText('empty')).toBeInTheDocument();
});

test(`Renders with empty state when isUploadEnabled = true and code = undefined`, () => {
  render(<CodeEditor emptyState={<div>empty</div>} isUploadEnabled />);
  expect(screen.getByText('empty')).toBeInTheDocument();
});

test(`Renders with language label when isLanguageLabelVisible`, () => {
  render(<CodeEditor isLanguageLabelVisible language={Language.java} />);
  expect(screen.getByText('JAVA')).toBeInTheDocument();
});

test(`Renders with custom controls when customControls is passed`, () => {
  render(<CodeEditor customControls={<div>control</div>} />);
  expect(screen.getByText('control')).toBeInTheDocument();
});

test(`Renders with custom header content when headerMainContent is passed`, () => {
  render(<CodeEditor headerMainContent="header content" />);
  expect(screen.getByText('header content')).toBeInTheDocument();
});

test(`Renders with shortcuts when shortcutsPopoverButtonText is passed`, () => {
  render(
    <CodeEditor shortcutsPopoverButtonText="shortcuts-button" shortcutsPopoverProps={{ bodyContent: 'shortcuts' }} />
  );
  expect(screen.getByText('shortcuts-button')).toBeInTheDocument();
  act(() => {
    screen.getByText('shortcuts-button').click();
  });
  expect(screen.getByText('shortcuts')).toBeInTheDocument();
});
