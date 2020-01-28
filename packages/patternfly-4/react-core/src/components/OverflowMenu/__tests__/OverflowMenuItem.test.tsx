import * as React from 'react';
import { shallow, mount } from 'enzyme';
import styles from '@patternfly/react-styles/css/components/OverflowMenu/overflow-menu';
import { OverflowMenuItem } from '../OverflowMenuItem';
import { OverflowMenuContext } from '../OverflowMenuContext';

it('OverflowMenuItem should match snapshot (auto-generated)', () => {
  const view = shallow(
    <OverflowMenuItem
      children={'any'}
			className={"string"}
			isPersistent={false}
    />);
  expect(view).toMatchSnapshot();
});

describe('OverflowMenuItem', () => {
  test('isPersistent and below breakpoint should still show', () => {
    const view = mount(
      <OverflowMenuContext.Provider value={{ isBelowBreakpoint: false }}>
        <OverflowMenuItem isPersistent />
      </OverflowMenuContext.Provider>
    );
    expect(view.find(`.${styles.overflowMenuItem}`).length).toBe(1);
    expect(view).toMatchSnapshot();
  });

  test('Below breakpoint and not isPersistent should not show', () => {
    const view = mount(
      <OverflowMenuContext.Provider value={{ isBelowBreakpoint: false }}>
        <OverflowMenuItem />
      </OverflowMenuContext.Provider>
    );
    expect(view).toMatchSnapshot();
  });
});
