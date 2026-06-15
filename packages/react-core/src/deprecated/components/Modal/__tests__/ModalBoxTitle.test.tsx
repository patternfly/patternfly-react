import { render } from '@testing-library/react';

import { ModalBoxTitle } from '../ModalBoxTitle';
import RhUiAttentionBellFillIcon from '@patternfly/react-icons/dist/esm/icons/rh-ui-attention-bell-fill-icon';

test('ModalBoxTitle alert variant', () => {
  const { asFragment } = render(
    <ModalBoxTitle title="Test Modal Box warning" id="boxId" titleIconVariant="warning">
      content
    </ModalBoxTitle>
  );
  expect(asFragment()).toMatchSnapshot();
});

test('ModalBoxTitle info variant', () => {
  const { asFragment } = render(
    <ModalBoxTitle title="Test Modal Box info" id="boxId" titleIconVariant="info">
      content
    </ModalBoxTitle>
  );
  expect(asFragment()).toMatchSnapshot();
});

test('ModalBoxTitle danger variant', () => {
  const { asFragment } = render(
    <ModalBoxTitle title="Test Modal Box danger" id="boxId" titleIconVariant="danger">
      content
    </ModalBoxTitle>
  );
  expect(asFragment()).toMatchSnapshot();
});

test('ModalBoxTitle custom variant', () => {
  const { asFragment } = render(
    <ModalBoxTitle title="Test Modal Box warning" id="boxId" titleIconVariant="custom">
      content
    </ModalBoxTitle>
  );
  expect(asFragment()).toMatchSnapshot();
});

test('ModalBoxTitle success variant', () => {
  const { asFragment } = render(
    <ModalBoxTitle title="Test Modal Box success" id="boxId" titleIconVariant="success">
      content
    </ModalBoxTitle>
  );
  expect(asFragment()).toMatchSnapshot();
});

test('ModalBoxTitle custom icon variant', () => {
  const { asFragment } = render(
    <ModalBoxTitle title="Test Modal Box custom" id="boxId" titleIconVariant={RhUiAttentionBellFillIcon}>
      content
    </ModalBoxTitle>
  );
  expect(asFragment()).toMatchSnapshot();
});
