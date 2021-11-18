import React from 'react';
import { mount } from 'enzyme';
import { MenuToggle } from '../MenuToggle';
import { Badge } from '../../Badge';
import CogIcon from '@patternfly/react-icons/dist/esm/icons/cog-icon';
import EllipsisVIcon from '@patternfly/react-icons/dist/esm/icons/ellipsis-v-icon';

describe('menu toggle', () => {
  test('renders successfully', () => {
    const view = mount(<MenuToggle>Toggle</MenuToggle>);
    expect(view).toMatchSnapshot();
  });

  test('passes additional classes', () => {
    const view = mount(<MenuToggle className="test-class">Toggle</MenuToggle>);
    expect(view).toMatchSnapshot();
  });

  test('shows isExpanded', () => {
    const view = mount(<MenuToggle isExpanded>Toggle</MenuToggle>);
    expect(view).toMatchSnapshot();
  });

  test('shows isDisabled', () => {
    const view = mount(<MenuToggle isDisabled>Toggle</MenuToggle>);
    expect(view).toMatchSnapshot();
  });

  test('shows isPrimary', () => {
    const view = mount(<MenuToggle variant="primary">Toggle</MenuToggle>);
    expect(view).toMatchSnapshot();
  });

  test('shows isPlain', () => {
    const view = mount(
      <MenuToggle variant="plain">
        <EllipsisVIcon />
      </MenuToggle>
    );
    expect(view).toMatchSnapshot();
  });

  test('shows plain text', () => {
    const view = mount(<MenuToggle variant="plainText">Toggle</MenuToggle>);
    expect(view).toMatchSnapshot();
  });

  test('shows icon', () => {
    const view = mount(<MenuToggle icon={<CogIcon />}>Toggle</MenuToggle>);
    expect(view).toMatchSnapshot();
  });

  test('shows badge', () => {
    const view = mount(<MenuToggle badge={<Badge>badge</Badge>}>Toggle</MenuToggle>);
    expect(view).toMatchSnapshot();
  });
});
