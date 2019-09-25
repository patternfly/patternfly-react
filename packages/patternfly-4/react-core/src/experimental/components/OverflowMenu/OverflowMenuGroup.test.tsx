import * as React from 'react';
import { mount } from 'enzyme';
import styles from '@patternfly/react-styles/css/components/OverflowMenu/overflow-menu';
import { OverflowMenuGroup } from './OverflowMenuGroup';
import { OverflowMenuContentContext } from './OverflowMenuContexts';

describe('OverflowMenuGroup', () => {
  test('isPersistent and Hidden should still show', () => {
    const view = mount(
      <OverflowMenuContentContext.Provider value={{ isHidden: true }}>
        <OverflowMenuGroup isPersistent />
      </OverflowMenuContentContext.Provider>
    );
    expect(view.find(`.${styles.overflowMenuGroup}`).length).toBe(1);
    expect(view.find(`.${styles.modifiers.persistent}`).length).toBe(1);
    expect(view.find({ hidden: true }).length).toBe(0);
    expect(view).toMatchSnapshot();
  });

  test('Hidden but not isPersistent should be hidden', () => {
    const view = mount(
      <OverflowMenuContentContext.Provider value={{ isHidden: true }}>
        <OverflowMenuGroup />
      </OverflowMenuContentContext.Provider>
    );
    expect(view.find(`.${styles.modifiers.persistent}`).length).toBe(0);
    expect(view.find({ hidden: true }).length).toBe(1);
    expect(view).toMatchSnapshot();
  });

  test('Button group', () => {
    const view = mount(
      <OverflowMenuContentContext.Provider value={{ isHidden: false }}>
        <OverflowMenuGroup groupType="button" />
      </OverflowMenuContentContext.Provider>
    );
    expect(view.find(`.${styles.modifiers.buttonGroup}`).length).toBe(1);
    expect(view).toMatchSnapshot();
  });

  test('Icon group', () => {
    const view = mount(
      <OverflowMenuContentContext.Provider value={{ isHidden: false }}>
        <OverflowMenuGroup groupType="icon" />
      </OverflowMenuContentContext.Provider>
    );
    expect(view.find(`.${styles.modifiers.iconButtonGroup}`).length).toBe(1);
    expect(view).toMatchSnapshot();
  });
});
