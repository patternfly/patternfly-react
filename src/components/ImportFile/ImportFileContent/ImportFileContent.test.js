import React from 'react';
import { mount, shallow } from 'enzyme';
import {
  ImportFileAccept,
  ImportFileActive,
  ImportFilePassive,
  ImportFileReject
} from './index';

const acceptedfiles = ['accepted'];
const rejectedFiles = ['rejected'];

test('ImportFileAccept is working properly', () => {
  const component = shallow(
    <ImportFileAccept
      acceptedFiles={acceptedfiles}
      rejectedFiles={rejectedFiles}
      progressDone={21}
      icon="info"
      text="warning"
    />
  );

  expect(component).toMatchSnapshot();
});

test('ImportFileActive is working properly', () => {
  const component = mount(<ImportFileActive icon="info" text="warning" />);
  expect(component).toMatchSnapshot();
});

test('ImportFilePassive is working properly', () => {
  const component = mount(
    <ImportFilePassive
      acceptedTypes="image/png"
      maxAmount={4}
      maxSize={4000}
      progressDone={21}
      icon="info"
      text="warning"
    />
  );
  expect(component).toMatchSnapshot();
});

test('ImportFileReject is working properly', () => {
  const component = mount(
    <ImportFileReject
      rejectedFiles={rejectedFiles}
      icon="info"
      text="warning"
    />
  );
  expect(component).toMatchSnapshot();
});
