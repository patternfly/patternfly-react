import * as React from 'react';
import { shallow, mount } from 'enzyme';
import { OverflowMenuControl } from '../OverflowMenuControl';
import styles from '@patternfly/react-styles/css/components/OverflowMenu/overflow-menu';
import { OverflowMenuContext } from '../OverflowMenuContext';

it('OverflowMenuControl should match snapshot (auto-generated)', () => {
  const view = shallow(
    <OverflowMenuControl
      children={'any'}
			className={"string"}
			hasAdditionalOptions={true}
    />);
  expect(view).toMatchSnapshot();
});

describe('OverflowMenuControl', () => {
  test('basic', () => {
    const view = mount(
      <OverflowMenuContext.Provider value={{ isBelowBreakpoint: true }}>
        <OverflowMenuControl />
      </OverflowMenuContext.Provider>
    );
    expect(view.find(`.${styles.overflowMenuControl}`).length).toBe(1);
    expect(view).toMatchSnapshot();
  });

  test('Additional Options', () => {
    const view = mount(<OverflowMenuControl hasAdditionalOptions />);
    expect(view).toMatchSnapshot();
  });
});
