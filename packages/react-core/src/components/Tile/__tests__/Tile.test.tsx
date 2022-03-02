import React from 'react';
import { render } from '@testing-library/react';
import { Tile } from '../Tile';
import PlusIcon from '@patternfly/react-icons/dist/esm/icons/plus-icon';

describe('Tile', () => {
  test('basic', () => {
    const view = render(<Tile title="test" />);
    expect(view.container).toMatchSnapshot();
  });

  test('renders selected', () => {
    const view = render(<Tile title="test" isSelected />);
    expect(view.container).toMatchSnapshot();
  });

  test('renders disabled', () => {
    const view = render(<Tile title="test" isDisabled />);
    expect(view.container).toMatchSnapshot();
  });

  test('renders with subtext', () => {
    const view = render(<Tile title="test">test subtext</Tile>);
    expect(view.container).toMatchSnapshot();
  });

  test('renders with icon', () => {
    const view = render(<Tile title="test" icon={<PlusIcon />} />);
    expect(view.container).toMatchSnapshot();
  });

  test('renders with stacked icon', () => {
    const view = render(<Tile title="test" icon={<PlusIcon />} isStacked />);
    expect(view.container).toMatchSnapshot();
  });

  test('renders with stacked large icon', () => {
    const view = render(<Tile title="test" icon={<PlusIcon />} isStacked isDisplayLarge />);
    expect(view.container).toMatchSnapshot();
  });
});
