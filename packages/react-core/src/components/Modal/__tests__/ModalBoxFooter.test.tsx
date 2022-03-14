import * as React from 'react';
import { render } from '@testing-library/react';
import { ModalBoxFooter } from '../ModalBoxFooter';

test('ModalBoxFooter Test', () => {
  const view = render(<ModalBoxFooter className="test-box-footer-class">This is a ModalBox Footer</ModalBoxFooter>);
  expect(view.container.outerHTML).toMatchSnapshot();
});
