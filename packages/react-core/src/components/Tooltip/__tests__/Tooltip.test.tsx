import * as React from 'react';
import { render } from '@testing-library/react';
import { Tooltip } from '../Tooltip';

test('tooltip renders', () => {
  const { asFragment } = render(
    <Tooltip
      position="top"
      content={
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id feugiat augue, nec fringilla turpis.
        </div>
      }
    >
      <div>Toggle tooltip</div>
    </Tooltip>
  );
  expect(asFragment()).toMatchSnapshot();
});

test('tooltip renders in strict mode', () => {
  const consoleError = jest.spyOn(console, 'error');
  const { asFragment } = render(
    <React.StrictMode>
      <Tooltip
        removeFindDomNode
        position="top"
        content={
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id feugiat augue, nec fringilla turpis.
          </div>
        }
      >
        <div>Toggle tooltip</div>
      </Tooltip>
    </React.StrictMode>
  );
  expect(consoleError).not.toHaveBeenCalled();
  expect(asFragment()).toMatchSnapshot();
});
