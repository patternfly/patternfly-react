import { render, screen } from '@testing-library/react';
import styles from '@patternfly/react-styles/css/components/DualListSelector/dual-list-selector';
import { DualListSelector } from '../DualListSelector';
import { DualListSelectorPane } from '../DualListSelectorPane';
import { SearchInput } from '../../SearchInput';

// The following tests can be removed as part of https://github.com/patternfly/patternfly-react/issues/11838
describe('Opt-in animations', () => {
  test(`Does not render with class ${styles.modifiers.animateExpand} by default`, () => {
    render(<DualListSelector data-testid="test-id" />);

    expect(screen.getByTestId('test-id')).not.toHaveClass(styles.modifiers.animateExpand);
  });

  test(`Does not render with class ${styles.modifiers.animateExpand} when hasAnimations is true and isTree is false`, () => {
    render(<DualListSelector hasAnimations data-testid="test-id" />);

    expect(screen.getByTestId('test-id')).not.toHaveClass(styles.modifiers.animateExpand);
  });

  test(`Does not render with class ${styles.modifiers.animateExpand} by default when isTree is true`, () => {
    render(<DualListSelector isTree data-testid="test-id" />);

    expect(screen.getByTestId('test-id')).not.toHaveClass(styles.modifiers.animateExpand);
  });

  test(`Renders with class ${styles.modifiers.animateExpand} when both isTree and hasAnimations are true`, () => {
    render(<DualListSelector isTree hasAnimations data-testid="test-id" />);

    expect(screen.getByTestId('test-id')).toHaveClass(styles.modifiers.animateExpand);
  });
});

// Following tests should be moved to a separate DualListSelectorPane test file
describe('DualListSelector', () => {
  test('basic', () => {
    const { asFragment } = render(<DualListSelectorPane id="basicTest" />);
    expect(asFragment()).toMatchSnapshot();
  });

  test('with search inputs', () => {
    const { asFragment } = render(<DualListSelectorPane id="searchTest" searchInput={<SearchInput />} />);
    expect(asFragment()).toMatchSnapshot();
  });

  test('with custom status', () => {
    const { asFragment } = render(<DualListSelectorPane id="statusTest" status="Test status1" />);
    expect(asFragment()).toMatchSnapshot();
  });

  test('basic with disabled controls', () => {
    const { asFragment } = render(<DualListSelectorPane id="disabledTest" isDisabled />);
    expect(asFragment()).toMatchSnapshot();
  });
});
