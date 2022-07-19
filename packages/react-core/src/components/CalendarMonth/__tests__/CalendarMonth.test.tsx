import React from 'react';

import { render, screen } from '@testing-library/react';

import { CalendarMonth } from '../CalendarMonth';

import * as utils from '../../../helpers/util';

test('all weeks displayed', () => {
  //mock function used to get same id every run
  const mockId = jest.spyOn(utils, 'getUniqueId');
  mockId.mockImplementation((prefix?: string) => `${prefix}-1658218546049tkg6d00n4f`);

  const { asFragment } = render(<CalendarMonth weekStart={1} date={new Date(2023, 0)} />);
  expect(asFragment()).toMatchSnapshot();

  mockId.mockRestore();
});
