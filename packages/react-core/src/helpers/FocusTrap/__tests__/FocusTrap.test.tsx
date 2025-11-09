import { render, screen } from '@testing-library/react';
import { FocusTrap } from '../FocusTrap';

test('Focus trap can have an id added', () => {
  render(
    <FocusTrap
      children={<div>ReactNode</div>}
      className={'string'}
      active={false}
      paused={false}
      focusTrapOptions={undefined}
      id="focus-trap-id"
      data-testid="focus-trap"
    />
  );
  expect(screen.getByTestId('focus-trap')).toHaveAttribute('id', 'focus-trap-id');
});
