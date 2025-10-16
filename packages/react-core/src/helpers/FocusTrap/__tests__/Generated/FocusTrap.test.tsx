import { render, screen } from '@testing-library/react';
import { FocusTrap } from '../../FocusTrap';

/**
 * This test was generated
 */
it('FocusTrap should match snapshot (auto-generated)', () => {
  const { asFragment } = render(
    <FocusTrap
      children={<div>ReactNode</div>}
      className={'string'}
      active={false}
      paused={false}
      focusTrapOptions={undefined}
    />
  );
  expect(asFragment()).toMatchSnapshot();
});

/**
 * This test was not generated
 */
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
