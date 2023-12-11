import * as React from 'react';
import { render, screen } from '@testing-library/react';

import { ModalBoxBody } from '../ModalBoxBody';

describe('ModalBoxBody tests', () => {
  test('ModalBoxBody renders', () => {
    const { asFragment } = render(
      <ModalBoxBody id="id" className="test-box-class">
        This is a ModalBox body
      </ModalBoxBody>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  test('The modalBoxBody has the expected aria-label when it is passed', () => {
    const props = {
      isOpen: true
    };

    render(
      <ModalBoxBody aria-label="modal box body aria label" {...props}>
        This is a ModalBox
      </ModalBoxBody>
    );

    const modalBoxBody = screen.getByText('This is a ModalBox');
    expect(modalBoxBody).toHaveAccessibleName('modal box body aria label');
  });

  test('The modalBoxBody has the expected aria role when aria-label is passed and role is not', () => {
    const props = {
      isOpen: true
    };

    render(
      <ModalBoxBody aria-label="modal box body aria label" {...props}>
        This is a ModalBox
      </ModalBoxBody>
    );

    const modalBoxBody = screen.getByRole('region', { name: 'modal box body aria label' });
    expect(modalBoxBody).toBeInTheDocument();
  });

  test('The modalBoxBody has the expected aria role when bodyAriaRole is passed', () => {
    const props = {
      isOpen: true
    };

    render(
      <ModalBoxBody aria-label="modal box body aria label" role="article" {...props}>
        This is a ModalBox
      </ModalBoxBody>
    );

    const modalBoxBody = screen.getByRole('article', { name: 'modal box body aria label' });
    expect(modalBoxBody).toBeInTheDocument();
  });
});
