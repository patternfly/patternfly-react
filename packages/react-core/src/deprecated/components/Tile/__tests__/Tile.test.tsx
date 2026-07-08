import { render } from '@testing-library/react';
import { Tile } from '../Tile';
import RhUiAddIcon from '@patternfly/react-icons/dist/esm/icons/rh-ui-add-icon';

describe('Tile', () => {
  test('basic', () => {
    const { asFragment } = render(<Tile title="test" />);
    expect(asFragment()).toMatchSnapshot();
  });

  test('renders selected', () => {
    const { asFragment } = render(<Tile title="test" isSelected />);
    expect(asFragment()).toMatchSnapshot();
  });

  test('renders disabled', () => {
    const { asFragment } = render(<Tile title="test" isDisabled />);
    expect(asFragment()).toMatchSnapshot();
  });

  test('renders with subtext', () => {
    const { asFragment } = render(<Tile title="test">test subtext</Tile>);
    expect(asFragment()).toMatchSnapshot();
  });

  test('renders with icon', () => {
    const { asFragment } = render(<Tile title="test" icon={<RhUiAddIcon />} />);
    expect(asFragment()).toMatchSnapshot();
  });

  test('renders with stacked icon', () => {
    const { asFragment } = render(<Tile title="test" icon={<RhUiAddIcon />} isStacked />);
    expect(asFragment()).toMatchSnapshot();
  });

  test('renders with stacked large icon', () => {
    const { asFragment } = render(<Tile title="test" icon={<RhUiAddIcon />} isStacked isDisplayLarge />);
    expect(asFragment()).toMatchSnapshot();
  });
});
