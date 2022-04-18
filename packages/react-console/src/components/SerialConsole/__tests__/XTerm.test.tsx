import React from 'react';
import { render } from '@testing-library/react';
import { XTerm } from '../XTerm';

describe('XTerm', () => {
  beforeAll(() => {
    window.HTMLCanvasElement.prototype.getContext = () =>
      ({ canvas: {}, createLinearGradient: jest.fn(), fillRect: jest.fn() } as any);

    global.window.matchMedia = () => ({
      addListener: jest.fn(),
      removeListener: jest.fn(),
      matches: true,
      media: undefined,
      onchange: jest.fn(),
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn()
    });
  });

  test('Render empty XTerm component', () => {
    const { asFragment } = render(<XTerm cols={15} rows={60} onTitleChanged={jest.fn()} onData={jest.fn()} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
