import React from 'react';
import { mount, shallow } from 'enzyme';
import { ImportFile, ImportFileContent } from './index';

const files = [];
const text = {
  static: 'or Drag & Drop',
  active: 'Drop files here',
  accept: 'Uploading',
  reject: 'File type is not supported',
  rejectAmount: 'File amount limit exceeded'
};
const icons = {
  passive: 'plus-circle',
  active: 'plus-circle',
  accept: 'chevron-circle-up',
  reject: 'exclamation-circle',
  rejectAmount: 'exclamation-circle'
};
test('ImportFile is working properly', () => {
  const acceptedfiles = [{ name: 'file' }];
  const component = shallow(
    <ImportFile
      acceptedTypes="image/png"
      maxAmount={0}
      maxSize={4000}
      progressDone={21}
      onDrop={jest.fn()}
      text={text}
      icons={icons}
    />
  );
  component.instance().onDrop(acceptedfiles, files);
  component.instance().reset();
  component.instance().onDropAccepted();
  component.instance().onDropRejected();
  component.instance().onDragEnter();

  expect(component).toMatchSnapshot();
});

test('ImportFileContent is working properly', () => {
  const component = mount(
    <div>
      <ImportFileContent
        acceptedFiles={files}
        rejectedFiles={files}
        acceptedTypes="image/png"
        progressDone={21}
        text={text}
        icons={icons}
        maxAmount={4}
        maxSize={4000}
        state="passive"
      />
      <ImportFileContent
        acceptedFiles={files}
        rejectedFiles={files}
        acceptedTypes="image/png"
        progressDone={21}
        text={text}
        icons={icons}
        maxAmount={4}
        maxSize={4000}
        state="active"
      />
      <ImportFileContent
        acceptedFiles={files}
        rejectedFiles={files}
        acceptedTypes="image/png"
        progressDone={21}
        text={text}
        icons={icons}
        maxAmount={4}
        maxSize={4000}
        state="accept"
      />
      <ImportFileContent
        acceptedFiles={files}
        rejectedFiles={files}
        acceptedTypes="image/png"
        progressDone={21}
        text={text}
        icons={icons}
        maxAmount={4}
        maxSize={4000}
        state="reject"
      />
    </div>
  );
  expect(component).toMatchSnapshot();
});
