import * as React from 'react';
import { mount } from 'enzyme';
import styles from '@patternfly/react-styles/css/components/OverflowMenu/overflow-menu';
import { OverflowMenuControl } from './OverflowMenuControl';

describe('OverflowMenuControl', () => {
  test('basic', () => {
    const view = mount(<OverflowMenuControl />);
    expect(view.find(`.${styles.overflowMenuControl}`).length).toBe(1);
    expect(view).toMatchSnapshot();
  });

  test('Additional Options', () => {
    const view = mount(<OverflowMenuControl alwaysPersist={true} />);
    expect(view.find(`.${styles.modifiers.additionalOptions}`).length).toBe(1);
    expect(view).toMatchSnapshot();
  });
});
