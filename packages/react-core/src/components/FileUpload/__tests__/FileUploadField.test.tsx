import { FileUploadField } from '../FileUploadField';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

test('simple fileuploadfield', () => {
  const browserBtnClickHandler = jest.fn();
  const clearBtnClickHandler = jest.fn();

  const { asFragment } = render(
    <FileUploadField
      id="custom-file-upload"
      type="text"
      value={''}
      filename={''}
      filenamePlaceholder="Do something custom with this!"
      onBrowseButtonClick={browserBtnClickHandler}
      onClearButtonClick={clearBtnClickHandler}
      isBrowseButtonDisabled={false}
      isClearButtonDisabled={false}
      isLoading={false}
      isDragActive={false}
      hideDefaultPreview={false}
    >
      {<p>A custom preview of the uploaded file can be passed as children</p>}
    </FileUploadField>
  );
  expect(asFragment()).toMatchSnapshot();
});

test('Renders without aria-describedby on browse button by default', () => {
  render(<FileUploadField id="file-upload-field" browseButtonText="Upload" />);

  expect(screen.getByRole('button', { name: 'Upload' })).not.toHaveAccessibleDescription();
});

test('Renders with aria-describedby on browse button', () => {
  render(
    <FileUploadField id="file-upload-field" browseButtonText="Upload" browseButtonAriaDescribedby="helper-text">
      <div id="helper-text">Helper text</div>
    </FileUploadField>
  );

  expect(screen.getByRole('button', { name: 'Upload' })).toHaveAccessibleDescription('Helper text');
});

test('Browse button is enabled by default', () => {
  render(<FileUploadField id="file-upload-field" browseButtonText="Upload" />);

  expect(screen.getByRole('button', { name: 'Upload' })).not.toHaveAttribute('disabled');
});

test('Browse button is disabled with isBrowseButtonDisabled prop', () => {
  render(<FileUploadField id="file-upload-field" browseButtonText="Upload" isBrowseButtonDisabled={true} />);

  expect(screen.getByRole('button', { name: 'Upload' })).toHaveAttribute('disabled');
});
