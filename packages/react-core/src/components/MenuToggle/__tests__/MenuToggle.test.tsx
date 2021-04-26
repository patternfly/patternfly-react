import React from 'react';
import { shallow } from 'enzyme';
import { MenuToggle } from '../MenuToggle';
import { Badge } from '../../Badge';
import CogIcon from '@patternfly/react-icons/dist/js/icons/cog-icon';
import EllipsisVIcon from '@patternfly/react-icons/dist/js/icons/ellipsis-v-icon';

describe('menu toggle', () => {
  test('renders successfully', () => {
    const view = shallow(<MenuToggle>Toggle</MenuToggle>);
    expect(view).toMatchSnapshot();
  });

  test('passes additional classes', () => {
    const view = shallow(<MenuToggle className="test-class">Toggle</MenuToggle>);
    expect(view).toMatchSnapshot();
  });

  test('shows isExpanded', () => {
    const view = shallow(<MenuToggle isExpanded>Toggle</MenuToggle>);
    expect(view).toMatchSnapshot();
  });

  test('shows isDisabled', () => {
    const view = shallow(<MenuToggle isDisabled>Toggle</MenuToggle>);
    expect(view).toMatchSnapshot();
  });

  test('shows isPrimary', () => {
    const view = shallow(<MenuToggle isPrimary>Toggle</MenuToggle>);
    expect(view).toMatchSnapshot();
  });

  test('shows isPlain', () => {
    const view = shallow(
      <MenuToggle isPlain>
        <EllipsisVIcon />
      </MenuToggle>
    );
    expect(view).toMatchSnapshot();
  });

  test('shows icon', () => {
    const view = shallow(<MenuToggle icon={<CogIcon />}>Toggle</MenuToggle>);
    expect(view).toMatchSnapshot();
  });

  test('shows badge', () => {
    const view = shallow(<MenuToggle badge={<Badge>badge</Badge>}>Toggle</MenuToggle>);
    expect(view).toMatchSnapshot();
  });
});
