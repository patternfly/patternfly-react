import * as React from 'react';
import { mount } from 'enzyme';
import styles from '@patternfly/react-styles/css/components/OverflowMenu/overflow-menu';
import { OverflowMenuContentGroup } from './OverflowMenuContentGroup';
import { OverflowMenuContentContext } from './OverflowMenuContexts';

describe('OverflowMenuContentGroup', () => {
  test('isPersistent and Hidden should still show', () => {
    const view = mount(
      <OverflowMenuContentContext.Provider value={{ isHidden: true }}>
        <OverflowMenuContentGroup isPersistent />
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
        <OverflowMenuContentGroup />
      </OverflowMenuContentContext.Provider>
    );
    expect(view.find(`.${styles.modifiers.persistent}`).length).toBe(0);
    expect(view.find({ hidden: true }).length).toBe(1);
    expect(view).toMatchSnapshot();
  });

  test('Button group', () => {
    const view = mount(
      <OverflowMenuContentContext.Provider value={{ isHidden: false }}>
        <OverflowMenuContentGroup groupType="button" />
      </OverflowMenuContentContext.Provider>
    );
    expect(view.find(`.${styles.modifiers.buttonGroup}`).length).toBe(1);
    expect(view).toMatchSnapshot();
  });

  test('Icon group', () => {
    const view = mount(
      <OverflowMenuContentContext.Provider value={{ isHidden: false }}>
        <OverflowMenuContentGroup groupType="icon" />
      </OverflowMenuContentContext.Provider>
    );
    expect(view.find(`.${styles.modifiers.iconButtonGroup}`).length).toBe(1);
    expect(view).toMatchSnapshot();
  });
});
