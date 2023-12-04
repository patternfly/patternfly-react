import * as React from 'react';
import { render } from '@testing-library/react';

import { ModalBoxHeader } from '../ModalBoxHeader';

test('ModalBoxHeader Test', () => {
  const { asFragment } = render(<ModalBoxHeader>This is a ModalBox header</ModalBoxHeader>);
  expect(asFragment()).toMatchSnapshot();
});

test('ModalBoxHeader help renders', () => {
  const { asFragment } = render(<ModalBoxHeader help={<div>test</div>}>This is a ModalBox header</ModalBoxHeader>);
  expect(asFragment()).toMatchSnapshot();
});

test('Modal Test with custom header', () => {
  const header = <span id="test-custom-header">TEST</span>;

  const { asFragment } = render(
    <ModalBoxHeader>
      {header}
    </ModalBoxHeader>
  );
  expect(asFragment()).toMatchSnapshot();
});