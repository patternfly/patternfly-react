import * as React from 'react';

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { AboutModal, AboutModalProps } from '../AboutModal';

const props: AboutModalProps = {
  onClose: jest.fn(),
  children: 'modal content',
  productName: 'Product Name',
  trademark: 'Trademark and copyright information here',
  brandImageSrc: 'brandImg...',
  brandImageAlt: 'Brand Image'
};

describe('AboutModal', () => {
  test('closes with escape', () => {
    render(<AboutModal {...props} isOpen />);

    userEvent.type(screen.getByRole('dialog'), '{esc}');
    expect(props.onClose).toBeCalled();
  });

  test('does not render the modal when isOpen is not specified', () => {
    render(<AboutModal {...props} />);
    expect(screen.queryByRole('dialog')).toBeNull();
  });

  test('Each modal is given new aria-describedby and aria-labelledby', () => {
    const first = new AboutModal(props);
    const second = new AboutModal(props);

    expect(first.ariaLabelledBy).not.toBe(second.ariaLabelledBy);
    expect(first.ariaDescribedBy).not.toBe(second.ariaDescribedBy);
  });
});
