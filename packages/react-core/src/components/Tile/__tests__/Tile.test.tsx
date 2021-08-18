import React from 'react';
import { shallow } from 'enzyme';
import { Tile } from '../Tile';
import PlusIcon from '@patternfly/react-icons/dist/esm/icons/plus-icon';

describe('Tile', () => {
  test('basic', () => {
    const view = shallow(<Tile title="test" />);
    expect(view).toMatchSnapshot();
  });

  test('renders selected', () => {
    const view = shallow(<Tile title="test" isSelected />);
    expect(view).toMatchSnapshot();
  });

  test('renders disabled', () => {
    const view = shallow(<Tile title="test" isDisabled />);
    expect(view).toMatchSnapshot();
  });

  test('renders with subtext', () => {
    const view = shallow(<Tile title="test">test subtext</Tile>);
    expect(view).toMatchSnapshot();
  });

  test('renders with icon', () => {
    const view = shallow(<Tile title="test" icon={<PlusIcon />} />);
    expect(view).toMatchSnapshot();
  });

  test('renders with stacked icon', () => {
    const view = shallow(<Tile title="test" icon={<PlusIcon />} isStacked />);
    expect(view).toMatchSnapshot();
  });

  test('renders with stacked large icon', () => {
    const view = shallow(<Tile title="test" icon={<PlusIcon />} isStacked isDisplayLarge />);
    expect(view).toMatchSnapshot();
  });
});
