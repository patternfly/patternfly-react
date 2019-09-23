import * as React from 'react';
import { mount } from 'enzyme';
import styles from '@patternfly/react-styles/css/components/OverflowMenu/overflow-menu';
import { OverflowMenuContentItem } from './OverflowMenuContentItem';
import { OverflowMenuContentContext } from './OverflowMenuContexts';

describe('OverflowMenuContentItem', () => {
  test('isPersistent and Hidden should still show', () => {
    const view = mount(
      <OverflowMenuContentContext.Provider value={{ isHidden: true }}>
        <OverflowMenuContentItem isPersistent />
      </OverflowMenuContentContext.Provider>
    );
    expect(view.find(`.${styles.overflowMenuItem}`).length).toBe(1);
    expect(view.find(`.${styles.modifiers.persistent}`).length).toBe(1);
    expect(view.find({ hidden: true }).length).toBe(0);
    expect(view).toMatchSnapshot();
  });

  test('Hidden but not isPersistent should be hidden', () => {
    const view = mount(
      <OverflowMenuContentContext.Provider value={{ isHidden: true }}>
        <OverflowMenuContentItem />
      </OverflowMenuContentContext.Provider>
    );
    expect(view.find(`.${styles.modifiers.persistent}`).length).toBe(0);
    expect(view.find({ hidden: true }).length).toBe(1);
    expect(view).toMatchSnapshot();
  });
});

