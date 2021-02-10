import * as React from 'react';
import { shallow } from 'enzyme';

import { ModalBox } from '../ModalBox';
import BullhornIcon from '@patternfly/react-icons/dist/js/icons/bullhorn-icon';

test('ModalBox Test', () => {
  const view = shallow(
    <ModalBox title="Test Modal Box" id="boxId">
      This is a ModalBox
    </ModalBox>
  );
  expect(view).toMatchSnapshot();
});

test('ModalBox Test isLarge', () => {
  const view = shallow(
    <ModalBox title="Test Modal Box" id="boxId" isLarge>
      This is a ModalBox
    </ModalBox>
  );
  expect(view).toMatchSnapshot();
});

test('ModalBox Test isSmall', () => {
  const view = shallow(
    <ModalBox title="Test Modal Box" id="boxId" isSmall>
      This is a ModalBox
    </ModalBox>
  );
  expect(view).toMatchSnapshot();
});

test('ModalBox Test top aligned', () => {
  const view = shallow(
    <ModalBox title="Test Modal Box" id="boxId" position="top">
      This is a ModalBox
    </ModalBox>
  );
  expect(view).toMatchSnapshot();
});

test('ModalBox Test top aligned distance', () => {
  const view = shallow(
    <ModalBox title="Test Modal Box" id="boxId" position="top" positionOffset="50px">
      This is a ModalBox
    </ModalBox>
  );
  expect(view).toMatchSnapshot();
});

test('ModalBox Test alert variant', () => {
  const view = shallow(
    <ModalBox title="Test Modal Box" id="boxId" titleIconVariant="warning">
      This is a ModalBox
    </ModalBox>
  );
  expect(view).toMatchSnapshot();
});

test('ModalBox Test custom icon variant', () => {
  const view = shallow(
    <ModalBox title="Test Modal Box" id="boxId" titleIconVariant={BullhornIcon}>
      This is a ModalBox
    </ModalBox>
  );
  expect(view).toMatchSnapshot();
});
