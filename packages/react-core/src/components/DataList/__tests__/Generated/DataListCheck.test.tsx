/**
 * This test was generated
 */
import * as React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { DataListCheck } from '../../DataListCheck';
// any missing imports can usually be resolved by adding them here
import {} from '../..';

it('DataListCheck should match snapshot (auto-generated)', () => {
  const { asFragment } = render(
    <DataListCheck
      className={"''"}
      isValid={true}
      isDisabled={false}
      isChecked={null}
      checked={null}
      onChange={(checked: boolean, event: React.FormEvent<HTMLInputElement>) => {}}
      aria-labelledby={'string'}
    />
  );
  expect(asFragment()).toMatchSnapshot();
});


it('does not throw a "A component is changing an uncontrolled input of type checkbox to be controlled" error when changed if using isChecked', () => {
  const consoleSpy = jest
  .spyOn(console, 'error')
  .mockImplementation(() => {});
  
  const ControlledDataListCheck = () => {
    const [checked, setChecked] = React.useState(false);

    return(<DataListCheck isChecked={checked} onChange={() => setChecked(!checked)} aria-labelledby={'string'}/>)
  }
  
  render(<ControlledDataListCheck />);

  userEvent.click(screen.getByRole('checkbox'));

  expect(consoleSpy).not.toHaveBeenCalled();
})
