import * as React from 'react';
import { render } from '@testing-library/react';

import { ModalBoxHeader } from '../ModalBoxHeader';

test('ModalBoxHeader Test', () => {
  const view = render(<ModalBoxHeader>This is a ModalBox header</ModalBoxHeader>);
  expect(view.container.outerHTML).toMatchSnapshot();
});

test('ModalBoxHeader help renders', () => {
  const view = render(<ModalBoxHeader help={<div>test</div>}>This is a ModalBox header</ModalBoxHeader>);
  expect(view.container.outerHTML).toMatchSnapshot();
});
