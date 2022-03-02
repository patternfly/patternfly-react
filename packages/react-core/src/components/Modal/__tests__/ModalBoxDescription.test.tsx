import * as React from 'react';
import { render } from '@testing-library/react';
import { ModalBoxDescription } from '../ModalBoxDescription';

test('ModalBoxDescription Test', () => {
  const view = render(
    <ModalBoxDescription>
      This is a ModalBox Description
    </ModalBoxDescription>
    );
  expect(view.container).toMatchSnapshot();
});
