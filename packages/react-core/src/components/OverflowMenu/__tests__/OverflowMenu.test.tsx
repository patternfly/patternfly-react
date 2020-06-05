import * as React from 'react';
import { render, shallow, mount } from 'enzyme';
import styles from '@patternfly/react-styles/css/components/OverflowMenu/overflow-menu';
import { OverflowMenu } from '../OverflowMenu';

describe('OverflowMenu', () => {
  test('md', () => {
    const view = mount(<OverflowMenu breakpoint="md" />);
    expect(view.find(`.${styles.overflowMenu}`).length).toBe(1);
    expect(view).toMatchSnapshot();
  });

  test('lg', () => {
    const view = mount(<OverflowMenu breakpoint="lg" />);
    expect(view).toMatchSnapshot();
  });

  test('xl', () => {
    const view = mount(<OverflowMenu breakpoint="xl" />);
    expect(view).toMatchSnapshot();
  });

  test('basic', () => {
    const view = render(
      <OverflowMenu breakpoint="md">
        <div>BASIC</div>
      </OverflowMenu>
    );
    expect(view).toMatchSnapshot();
  });

  test('should warn on bad props', () => {
    const myMock = jest.fn() as any;
    global.console = { error: myMock } as any;
    shallow(
      <OverflowMenu breakpoint={undefined as "md"}>
        <div>BASIC</div>
      </OverflowMenu>
    );
    expect(myMock).toBeCalled();
  });
});
