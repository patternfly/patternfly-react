import * as React from 'react';
import { shallow, mount, render } from 'enzyme';
import { OverflowMenu } from '../OverflowMenu';
import styles from '@patternfly/react-styles/css/components/OverflowMenu/overflow-menu';

it('OverflowMenu should match snapshot (auto-generated)', () => {
  const view = shallow(
    <OverflowMenu
      children={'any'}
			className={"string"}
			breakpoint={'md'}
    />);
  expect(view).toMatchSnapshot();
});

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
});
