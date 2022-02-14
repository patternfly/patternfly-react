import React from 'react';
import { shallow } from 'enzyme';
import { MultipleFileUploadStatusItem } from '../MultipleFileUploadStatusItem';
import FileImageIcon from '@patternfly/react-icons/dist/esm/icons/file-image-icon';

describe('MultipleFileUploadStatusItem', () => {
  test('renders with expected class names', () => {
    const view = shallow(<MultipleFileUploadStatusItem />);
    expect(view).toMatchSnapshot();
  });

  test('renders custom class names', () => {
    const view = shallow(<MultipleFileUploadStatusItem className="test" />);
    expect(view).toMatchSnapshot();
  });

  test('renders expected values from a passed file object', () => {
    const testFile = new File(['foo'], 'testFile.txt');
    const view = shallow(<MultipleFileUploadStatusItem file={testFile} />);
    expect(view).toMatchSnapshot();
  });

  test('renders custom file name/size/icon when passed', () => {
    const testFile = new File(['foo'], 'testFile.txt');
    const view = shallow(
      <MultipleFileUploadStatusItem
        file={testFile}
        fileIcon={<FileImageIcon />}
        fileName="testCustomFileName.txt"
        fileSize={42}
      />
    );
    expect(view).toMatchSnapshot();
  });

  test('renders custom progress value/variant when passed', () => {
    const testFile = new File(['foo'], 'testFile.txt');
    const view = shallow(<MultipleFileUploadStatusItem file={testFile} progressValue={42} progressVariant="warning" />);
    expect(view).toMatchSnapshot();
  });

  test('renders custom aria labels', () => {
    const testFile = new File(['foo'], 'testFile.txt');
    const view = shallow(
      <MultipleFileUploadStatusItem
        file={testFile}
        buttonAriaLabel="buttonAriaLabel"
        progressAriaLabel="progressAriaLabel"
        progressAriaLabelledBy="progressAriaLabelledBy"
      />
    );
    expect(view).toMatchSnapshot();
  });
});
