import * as React from 'react';
import { FileUploadHelperText } from '../FileUploadHelperText';
import { render, screen } from '@testing-library/react';
import styles from '@patternfly/react-styles/css/components/FileUpload/file-upload';

test(`Renders only with class ${styles.fileUpload}__helper-text by default`, () => {
  render(<FileUploadHelperText>Content</FileUploadHelperText>);

  expect(screen.getByText('Content')).toHaveClass(`${styles.fileUpload}__helper-text`, { exact: true });
});

test(`Renders with custom class when className is passed in`, () => {
  render(<FileUploadHelperText className="test">Content</FileUploadHelperText>);

  expect(screen.getByText('Content')).toHaveClass('test');
});

test(`Spreads props when passed in`, () => {
  render(<FileUploadHelperText id="test-id">Content</FileUploadHelperText>);

  expect(screen.getByText('Content')).toHaveAttribute('id', 'test-id');
});

test('Matches the snapshot', () => {
  const { asFragment } = render(<FileUploadHelperText>Content</FileUploadHelperText>);
  expect(asFragment()).toMatchSnapshot();
});
