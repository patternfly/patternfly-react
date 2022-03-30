import * as React from 'react';

import { render, screen } from '@testing-library/react';

import styles from '@patternfly/react-styles/css/components/OverflowMenu/overflow-menu';
import { OverflowMenu } from '../OverflowMenu';

describe('OverflowMenu', () => {
  test('md', () => {
    render(<OverflowMenu breakpoint="md" data-testid="test-id" />);
    expect(screen.getByTestId('test-id').className).toContain(styles.overflowMenu);
  });

  test('lg', () => {
    render(<OverflowMenu breakpoint="lg" data-testid="test-id" />);
    expect(screen.getByTestId('test-id').outerHTML).toMatchSnapshot();
  });

  test('xl', () => {
    render(<OverflowMenu breakpoint="xl" data-testid="test-id" />);
    expect(screen.getByTestId('test-id').outerHTML).toMatchSnapshot();
  });

  test('basic', () => {
    render(
      <OverflowMenu breakpoint="md" data-testid="test-id">
        <div>BASIC</div>
      </OverflowMenu>
    );
    expect(screen.getByTestId('test-id').outerHTML).toMatchSnapshot();
  });

  test('should warn on bad props', () => {
    const myMock = jest.fn() as any;
    global.console = { error: myMock } as any;

    render(
      <OverflowMenu breakpoint={undefined as 'md'}>
        <div>BASIC</div>
      </OverflowMenu>
    );

    expect(myMock).toBeCalled();
  });
});
