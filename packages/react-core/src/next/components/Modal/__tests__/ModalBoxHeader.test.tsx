import * as React from 'react';
import { render } from '@testing-library/react';

import { ModalHeader } from '../ModalHeader';

test('ModalHeader Test', () => {
  const { asFragment } = render(<ModalHeader>This is a ModalBox header</ModalHeader>);
  expect(asFragment()).toMatchSnapshot();
});

test('ModalHeader help renders', () => {
  const { asFragment } = render(<ModalHeader help={<div>test</div>}>This is a ModalBox header</ModalHeader>);
  expect(asFragment()).toMatchSnapshot();
});

test('Modal Test with custom header', () => {
  const header = <span id="test-custom-header">TEST</span>;

  const { asFragment } = render(<ModalHeader>{header}</ModalHeader>);
  expect(asFragment()).toMatchSnapshot();
});
