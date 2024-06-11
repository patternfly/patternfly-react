import * as React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { ModalBoxTitle } from '../ModalBoxTitle';
import BullhornIcon from '@patternfly/react-icons/dist/esm/icons/bullhorn-icon';
import styles from '@patternfly/react-styles/css/components/ModalBox/modal-box';

test('ModalBoxTitle alert variant', () => {
  const { asFragment } = render(<ModalBoxTitle title="Test Modal Box warning" id="boxId" titleIconVariant="warning" />);
  expect(asFragment()).toMatchSnapshot();
  expect(screen.getByRole('heading')).toHaveClass(styles.modifiers.warning);
});

test('ModalBoxTitle info variant', () => {
  const { asFragment } = render(<ModalBoxTitle title="Test Modal Box info" id="boxId" titleIconVariant="info" />);
  expect(screen.getByRole('heading')).toHaveClass(styles.modifiers.info);
  expect(asFragment()).toMatchSnapshot();
});

test('ModalBoxTitle danger variant', () => {
  const { asFragment } = render(<ModalBoxTitle title="Test Modal Box danger" id="boxId" titleIconVariant="danger" />);
  expect(screen.getByRole('heading')).toHaveClass(styles.modifiers.danger);
  expect(asFragment()).toMatchSnapshot();
});

test('ModalBoxTitle custom variant', () => {
  const { asFragment } = render(<ModalBoxTitle title="Test Modal Box custom" id="boxId" titleIconVariant="custom" />);
  expect(screen.getByRole('heading')).toHaveClass(styles.modifiers.custom);
  expect(asFragment()).toMatchSnapshot();
});

test('ModalBoxTitle success variant', () => {
  const { asFragment } = render(<ModalBoxTitle title="Test Modal Box success" id="boxId" titleIconVariant="success" />);
  expect(screen.getByRole('heading')).toHaveClass(styles.modifiers.success);
  expect(asFragment()).toMatchSnapshot();
});

test('ModalBoxTitle custom icon variant', () => {
  const { asFragment } = render(
    <ModalBoxTitle title="Test Modal Box custom" id="boxId" titleIconVariant={BullhornIcon} />
  );
  expect(asFragment()).toMatchSnapshot();
});
