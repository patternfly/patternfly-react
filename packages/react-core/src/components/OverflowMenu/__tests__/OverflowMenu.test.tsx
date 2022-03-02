import * as React from 'react';
import { render } from '@testing-library/react';
import { mount } from 'enzyme';
import styles from '@patternfly/react-styles/css/components/OverflowMenu/overflow-menu';
import { OverflowMenu } from '../OverflowMenu';

describe('OverflowMenu', () => {
  test('md', () => {
    const view = mount(<OverflowMenu breakpoint="md" />);
    expect(view.find(`.${styles.overflowMenu}`).length).toBe(1);
    expect(view).toMatchSnapshot();
  });

  test('lg', () => {
    const view = render(<OverflowMenu breakpoint="lg" />);
    expect(view.container).toMatchSnapshot();
  });

  test('xl', () => {
    const view = render(<OverflowMenu breakpoint="xl" />);
    expect(view.container).toMatchSnapshot();
  });

  test('basic', () => {
    const view = render(
      <OverflowMenu breakpoint="md">
        <div>BASIC</div>
      </OverflowMenu>
    );
    expect(view.container).toMatchSnapshot();
  });

  test('should warn on bad props', () => {
    const myMock = jest.fn() as any;
    global.console = { error: myMock } as any;
    render(
      <OverflowMenu breakpoint={undefined as "md"}>
        <div>BASIC</div>
      </OverflowMenu>
    );
    expect(myMock).toBeCalled();
  });
});
