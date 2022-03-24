import * as React from 'react';
import { render } from '@testing-library/react';

import { ModalBoxTitle } from '../ModalBoxTitle';
import BullhornIcon from '@patternfly/react-icons/dist/esm/icons/bullhorn-icon';

test('ModalBoxTitle alert variant', () => {
  const view = render(
    <ModalBoxTitle title="Test Modal Box warning" id="boxId" titleIconVariant="warning">
      content
    </ModalBoxTitle>
  );
  expect(view.container).toMatchSnapshot();
});

test('ModalBoxTitle info variant', () => {
  const view = render(
    <ModalBoxTitle title="Test Modal Box info" id="boxId" titleIconVariant="info">
      content
    </ModalBoxTitle>
  );
  expect(view.container).toMatchSnapshot();
});

test('ModalBoxTitle danger variant', () => {
  const view = render(
    <ModalBoxTitle title="Test Modal Box danger" id="boxId" titleIconVariant="danger">
      content
    </ModalBoxTitle>
  );
  expect(view.container).toMatchSnapshot();
});

test('ModalBoxTitle default variant', () => {
  const view = render(
    <ModalBoxTitle title="Test Modal Box warning" id="boxId" titleIconVariant="default">
      content
    </ModalBoxTitle>
  );
  expect(view.container).toMatchSnapshot();
});

test('ModalBoxTitle success variant', () => {
  const view = render(
    <ModalBoxTitle title="Test Modal Box success" id="boxId" titleIconVariant="success">
      content
    </ModalBoxTitle>
  );
  expect(view.container).toMatchSnapshot();
});

test('ModalBoxTitle custom icon variant', () => {
  const view = render(
    <ModalBoxTitle title="Test Modal Box custom" id="boxId" titleIconVariant={BullhornIcon}>
      content
    </ModalBoxTitle>
  );
  expect(view.container).toMatchSnapshot();
});