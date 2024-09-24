import * as React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { DataListCheck } from '../DataListCheck';

test(`Renders with spread props`, () => {
  render(<DataListCheck id="test" aria-labelledby={'string'} isChecked />);
  expect(screen.getByRole('checkbox')).toHaveAttribute('id', 'test');
});

it('does not throw a "A component is changing an uncontrolled input of type checkbox to be controlled" error when changed if using isChecked', async () => {
  const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
  const user = userEvent.setup();

  const ControlledDataListCheck = () => {
    const [checked, setChecked] = React.useState(false);

    return (
      <DataListCheck id="test" isChecked={checked} onChange={() => setChecked(!checked)} aria-labelledby={'string'} />
    );
  };

  render(<ControlledDataListCheck />);

  await user.click(screen.getByRole('checkbox'));

  expect(consoleSpy).not.toHaveBeenCalled();
});
