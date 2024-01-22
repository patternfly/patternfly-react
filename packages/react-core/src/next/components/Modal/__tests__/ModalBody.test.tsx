import * as React from 'react';
import { render, screen } from '@testing-library/react';

import { ModalBody } from '../ModalBody';

describe('ModalBody tests', () => {
  test('ModalBody renders', () => {
    const { asFragment } = render(
      <ModalBody id="id" className="test-box-class">
        This is a Modal body
      </ModalBody>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  test('The ModalBody has the expected aria-label when it is passed', () => {
    const props = {
      isOpen: true
    };

    render(
      <ModalBody aria-label="modal body aria label" {...props}>
        This is a ModalBox
      </ModalBody>
    );

    const modalBoxBody = screen.getByText('This is a ModalBox');
    expect(modalBoxBody).toHaveAccessibleName('modal body aria label');
  });

  test('The modalBoxBody has the expected aria role when aria-label is passed and role is not', () => {
    const props = {
      isOpen: true
    };

    render(
      <ModalBody aria-label="modal body aria label" {...props}>
        This is a ModalBox
      </ModalBody>
    );

    const modalBoxBody = screen.getByRole('region', { name: 'modal body aria label' });
    expect(modalBoxBody).toBeInTheDocument();
  });

  test('The modalBoxBody has the expected aria role when bodyAriaRole is passed', () => {
    const props = {
      isOpen: true
    };

    render(
      <ModalBody aria-label="modal body aria label" role="article" {...props}>
        This is a ModalBox
      </ModalBody>
    );

    const modalBoxBody = screen.getByRole('article', { name: 'modal body aria label' });
    expect(modalBoxBody).toBeInTheDocument();
  });
});
