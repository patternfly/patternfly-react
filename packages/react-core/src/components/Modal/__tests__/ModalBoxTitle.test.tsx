import * as React from 'react';
import { shallow } from 'enzyme';

import { ModalBoxTitle } from '../ModalBoxTitle';
import BullhornIcon from '@patternfly/react-icons/dist/esm/icons/bullhorn-icon';

test('ModalBoxTitle alert variant', () => {
  const view = shallow(
    <ModalBoxTitle title="Test Modal Box warning" id="boxId" titleIconVariant="warning">
      content
    </ModalBoxTitle>
  );
  expect(view).toMatchSnapshot();
});

test('ModalBoxTitle info variant', () => {
  const view = shallow(
    <ModalBoxTitle title="Test Modal Box info" id="boxId" titleIconVariant="info">
      content
    </ModalBoxTitle>
  );
  expect(view).toMatchSnapshot();
});

test('ModalBoxTitle danger variant', () => {
  const view = shallow(
    <ModalBoxTitle title="Test Modal Box danger" id="boxId" titleIconVariant="danger">
      content
    </ModalBoxTitle>
  );
  expect(view).toMatchSnapshot();
});

test('ModalBoxTitle default variant', () => {
  const view = shallow(
    <ModalBoxTitle title="Test Modal Box warning" id="boxId" titleIconVariant="default">
      content
    </ModalBoxTitle>
  );
  expect(view).toMatchSnapshot();
});

test('ModalBoxTitle success variant', () => {
  const view = shallow(
    <ModalBoxTitle title="Test Modal Box success" id="boxId" titleIconVariant="success">
      content
    </ModalBoxTitle>
  );
  expect(view).toMatchSnapshot();
});

test('ModalBoxTitle custom icon variant', () => {
  const view = shallow(
    <ModalBoxTitle title="Test Modal Box custom" id="boxId" titleIconVariant={BullhornIcon}>
      content
    </ModalBoxTitle>
  );
  expect(view).toMatchSnapshot();
});