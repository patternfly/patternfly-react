import React from 'react';

import { render, screen } from '@testing-library/react';

import { MultipleFileUploadStatusItem } from '../MultipleFileUploadStatusItem';
import FileImageIcon from '@patternfly/react-icons/dist/esm/icons/file-image-icon';

jest.mock('../../HelperText');

describe('MultipleFileUploadStatusItem', () => {
  test('renders with expected class names', () => {
    const { asFragment } = render(<MultipleFileUploadStatusItem progressId="test-progress-id" />);
    expect(asFragment()).toMatchSnapshot();
  });

  test('renders custom class names', () => {
    const { asFragment } = render(<MultipleFileUploadStatusItem className="test" progressId="test-progress-id" />);
    expect(asFragment()).toMatchSnapshot();
  });

  test('renders expected values from a passed file object', () => {
    const testFile = new File(['foo'], 'testFile.txt');
    const { asFragment } = render(<MultipleFileUploadStatusItem file={testFile} progressId="test-progress-id" />);

    expect(asFragment()).toMatchSnapshot();
  });

  test('renders custom file name/size/icon/progressAriaLiveMessage when passed', () => {
    const testFile = new File(['foo'], 'testFile.txt');
    const { asFragment } = render(
      <MultipleFileUploadStatusItem
        file={testFile}
        fileIcon={<FileImageIcon />}
        fileName="testCustomFileName.txt"
        fileSize={42}
        progressId="test-progress-id"
        progressAriaLiveMessage="test message"
      />
    );

    expect(asFragment()).toMatchSnapshot();
  });

  test('renders custom function progressAriaLiveMessage when passed', () => {
    const testFile = new File(['foo'], 'testFile.txt');
    const { asFragment } = render(
      <MultipleFileUploadStatusItem
        file={testFile}
        fileIcon={<FileImageIcon />}
        fileName="testCustomFileName.txt"
        fileSize={42}
        progressId="test-progress-id"
        progressAriaLiveMessage={loadPercentage => `test message ${loadPercentage}`}
      />
    );

    expect(asFragment()).toMatchSnapshot();
  });

  test('rendersdefault progressAriaLiveMessage when nothing is passed', () => {
    const testFile = new File(['foo'], 'testFile.txt');
    const { asFragment } = render(
      <MultipleFileUploadStatusItem
        file={testFile}
        fileIcon={<FileImageIcon />}
        fileName="testCustomFileName.txt"
        fileSize={42}
        progressId="test-progress-id"
      />
    );

    expect(asFragment()).toMatchSnapshot();
  });

  test('renders custom progress value/variant when passed', () => {
    const testFile = new File(['foo'], 'testFile.txt');
    const { asFragment } = render(
      <MultipleFileUploadStatusItem
        file={testFile}
        progressValue={42}
        progressVariant="warning"
        progressId="test-progress-id"
      />
    );

    expect(asFragment()).toMatchSnapshot();
  });

  test('renders custom aria labels', () => {
    const testFile = new File(['foo'], 'testFile.txt');
    const { asFragment } = render(
      <MultipleFileUploadStatusItem
        file={testFile}
        buttonAriaLabel="buttonAriaLabel"
        progressAriaLabel="progressAriaLabel"
        progressAriaLabelledBy="progressAriaLabelledBy"
        progressId="test-progress-id"
      />
    );

    expect(asFragment()).toMatchSnapshot();
  });
});

test('does not render helper text by default', () => {
  const testFile = new File(['foo'], 'testFile.txt');
  render(
    <MultipleFileUploadStatusItem
      file={testFile}
      buttonAriaLabel="buttonAriaLabel"
      progressAriaLabel="progressAriaLabel"
      progressAriaLabelledBy="progressAriaLabelledBy"
      progressId="test-progress-id"
    />
  );

  const helperText = screen.queryByText('Test helper text');

  expect(helperText).not.toBeInTheDocument();
});

test('renders helper text', () => {
  const testFile = new File(['foo'], 'testFile.txt');
  render(
    <MultipleFileUploadStatusItem
      file={testFile}
      buttonAriaLabel="buttonAriaLabel"
      progressAriaLabel="progressAriaLabel"
      progressAriaLabelledBy="progressAriaLabelledBy"
      progressId="test-progress-id"
      progressHelperText="Test helper text"
    />
  );

  const helperText = screen.getByText('Test helper text');

  expect(helperText).toBeVisible();
});

test('renders the helper text inside of a HelperTextItem and HelperText component', () => {
  const testFile = new File(['foo'], 'testFile.txt');
  render(
    <MultipleFileUploadStatusItem
      file={testFile}
      buttonAriaLabel="buttonAriaLabel"
      progressAriaLabel="progressAriaLabel"
      progressAriaLabelledBy="progressAriaLabelledBy"
      progressId="test-progress-id"
      progressHelperText="Test helper text"
    />
  );

  const helperText = screen.getByText('Test helper text');
  const helperTextItemContainer = screen.getByTestId('helper-text-item-children-container');
  const helperTextContainer = screen.getByTestId('helper-text-children-container');

  expect(helperTextContainer).toContainElement(helperTextItemContainer);
  expect(helperTextItemContainer).toContainElement(helperText);
});

test('renders the helper text with a variant of undefined when the progress variant is undefined', () => {
  const testFile = new File(['foo'], 'testFile.txt');
  render(
    <MultipleFileUploadStatusItem
      file={testFile}
      buttonAriaLabel="buttonAriaLabel"
      progressAriaLabel="progressAriaLabel"
      progressAriaLabelledBy="progressAriaLabelledBy"
      progressId="test-progress-id"
      progressHelperText="Test helper text"
    />
  );

  expect(screen.getByText('variant: undefined')).toBeVisible();
});

test('renders the helper text with a variant of success when the progress variant is success', () => {
  const testFile = new File(['foo'], 'testFile.txt');
  render(
    <MultipleFileUploadStatusItem
      file={testFile}
      buttonAriaLabel="buttonAriaLabel"
      progressAriaLabel="progressAriaLabel"
      progressAriaLabelledBy="progressAriaLabelledBy"
      progressId="test-progress-id"
      progressVariant="success"
      progressHelperText="Test helper text"
    />
  );

  expect(screen.getByText('variant: success')).toBeVisible();
});

test('renders the helper text with a variant of warning when the progress variant is warning', () => {
  const testFile = new File(['foo'], 'testFile.txt');
  render(
    <MultipleFileUploadStatusItem
      file={testFile}
      buttonAriaLabel="buttonAriaLabel"
      progressAriaLabel="progressAriaLabel"
      progressAriaLabelledBy="progressAriaLabelledBy"
      progressId="test-progress-id"
      progressVariant="warning"
      progressHelperText="Test helper text"
    />
  );

  expect(screen.getByText('variant: warning')).toBeVisible();
});

test('renders the helper text with a variant of error when the progress variant is danger', () => {
  const testFile = new File(['foo'], 'testFile.txt');
  render(
    <MultipleFileUploadStatusItem
      file={testFile}
      buttonAriaLabel="buttonAriaLabel"
      progressAriaLabel="progressAriaLabel"
      progressAriaLabelledBy="progressAriaLabelledBy"
      progressId="test-progress-id"
      progressVariant="danger"
      progressHelperText="Test helper text"
    />
  );

  expect(screen.getByText('variant: error')).toBeVisible();
});

test('renders the helper text as a live region', () => {
  const testFile = new File(['foo'], 'testFile.txt');
  render(
    <MultipleFileUploadStatusItem
      file={testFile}
      buttonAriaLabel="buttonAriaLabel"
      progressAriaLabel="progressAriaLabel"
      progressAriaLabelledBy="progressAriaLabelledBy"
      progressId="test-progress-id"
      progressHelperText="Test helper text"
    />
  );

  expect(screen.getByText('isLiveRegion: true')).toBeVisible();
});
