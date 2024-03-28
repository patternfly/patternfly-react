import * as React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { CheckboxSelect } from './CheckboxSelect';

jest.mock('@patternfly/react-core/dist/js/helpers/GenerateId/GenerateId', () => ({
  GenerateId: ({ children }) => children('generated-id')
}));

test('checkbox select with no props snapshot', () => {
  const { asFragment } = render(<CheckboxSelect />);

  expect(asFragment()).toMatchSnapshot();
});

test('opened checkbox select snapshot', async () => {
  const initialOptions = [
    { content: 'Option 1', value: 'option1' },
    { content: 'Option 2', value: 'option2' },
    { content: 'Option 3', value: 'option3' }
  ];

  const user = userEvent.setup();

  const { asFragment } = render(<CheckboxSelect initialOptions={initialOptions} />);

  const toggle = screen.getByRole('button', { name: 'Filter by status' });

  await user.click(toggle);

  expect(asFragment()).toMatchSnapshot();
});
