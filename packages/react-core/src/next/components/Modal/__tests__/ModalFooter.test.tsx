import * as React from 'react';
import { render } from '@testing-library/react';
import { ModalFooter } from '../ModalFooter';

test('ModalFooter Test', () => {
  const { asFragment } = render(<ModalFooter className="test-box-footer-class">This is a ModalBox Footer</ModalFooter>);
  expect(asFragment()).toMatchSnapshot();
});
