import React from 'react';

import { render, screen } from '@testing-library/react';

import { MultipleFileUploadStatusItem } from '../MultipleFileUploadStatusItem';
import FileImageIcon from '@patternfly/react-icons/dist/esm/icons/file-image-icon';

describe('MultipleFileUploadStatusItem', () => {
  test('renders with expected class names', () => {
    render(<MultipleFileUploadStatusItem progressId="test" />);
    expect(screen.getByRole('listitem').outerHTML).toMatchSnapshot();
  });

  test('renders custom class names', () => {
    render(<MultipleFileUploadStatusItem className="test" progressId="test" />);
    expect(screen.getByRole('listitem').outerHTML).toMatchSnapshot();
  });

  test('renders expected values from a passed file object', () => {
    const testFile = new File(['foo'], 'testFile.txt');
    render(<MultipleFileUploadStatusItem file={testFile} progressId="test" />);
    expect(screen.getByRole('listitem').outerHTML).toMatchSnapshot();
  });

  test('renders custom file name/size/icon when passed', () => {
    const testFile = new File(['foo'], 'testFile.txt');
    render(
      <MultipleFileUploadStatusItem
        file={testFile}
        fileIcon={<FileImageIcon />}
        fileName="testCustomFileName.txt"
        fileSize={42}
        progressId="test"
      />
    );
    expect(screen.getByRole('listitem').outerHTML).toMatchSnapshot();
  });

  test('renders custom progress value/variant when passed', () => {
    const testFile = new File(['foo'], 'testFile.txt');
    render(
      <MultipleFileUploadStatusItem file={testFile} progressValue={42} progressVariant="warning" progressId="test" />
    );
    expect(screen.getByRole('listitem').outerHTML).toMatchSnapshot();
  });

  test('renders custom aria labels', () => {
    const testFile = new File(['foo'], 'testFile.txt');
    render(
      <MultipleFileUploadStatusItem
        file={testFile}
        buttonAriaLabel="buttonAriaLabel"
        progressAriaLabel="progressAriaLabel"
        progressAriaLabelledBy="progressAriaLabelledBy"
        progressId="test"
      />
    );
    expect(screen.getByRole('listitem').outerHTML).toMatchSnapshot();
  });
});
