import React from 'react';
import { MenuToggle } from '../MenuToggle';
import { MenuToggleCheckbox } from '../MenuToggleCheckbox';
import { Badge } from '../../Badge';
import CogIcon from '@patternfly/react-icons/dist/esm/icons/cog-icon';
import EllipsisVIcon from '@patternfly/react-icons/dist/esm/icons/ellipsis-v-icon';
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import styles from '@patternfly/react-styles/css/components/MenuToggle/menu-toggle';
import '@testing-library/jest-dom';

describe('menu toggle', () => {
  test('renders successfully', () => {
    const { asFragment } = render(<MenuToggle>Toggle</MenuToggle>);
    expect(asFragment()).toMatchSnapshot();
  });

  test('passes additional classes', () => {
    const { asFragment } = render(<MenuToggle className="test-class">Toggle</MenuToggle>);
    expect(asFragment()).toMatchSnapshot();
  });

  test('shows isExpanded', () => {
    const { asFragment } = render(<MenuToggle isExpanded>Toggle</MenuToggle>);
    expect(asFragment()).toMatchSnapshot();
  });

  test('shows isDisabled', () => {
    const { asFragment } = render(<MenuToggle isDisabled>Toggle</MenuToggle>);
    expect(asFragment()).toMatchSnapshot();
  });

  test('shows isPrimary', () => {
    const { asFragment } = render(<MenuToggle variant="primary">Toggle</MenuToggle>);
    expect(asFragment()).toMatchSnapshot();
  });

  test('shows isPlain', () => {
    const { asFragment } = render(<MenuToggle variant="plain" icon={<EllipsisVIcon />} />);
    expect(asFragment()).toMatchSnapshot();
  });

  test('shows plain text', () => {
    const { asFragment } = render(<MenuToggle variant="plainText">Toggle</MenuToggle>);
    expect(asFragment()).toMatchSnapshot();
  });

  test('shows icon', () => {
    const { asFragment } = render(<MenuToggle icon={<CogIcon />}>Toggle</MenuToggle>);
    expect(asFragment()).toMatchSnapshot();
  });

  test('shows badge', () => {
    const { asFragment } = render(<MenuToggle badge={<Badge>badge</Badge>}>Toggle</MenuToggle>);
    expect(asFragment()).toMatchSnapshot();
  });

  // Old snapshot tests end here; following tests should be kept when refactoring
  test(`Renders with class ${styles.modifiers.small} when size="sm" is passed`, () => {
    render(<MenuToggle size="sm">Toggle</MenuToggle>);
    expect(screen.getByRole('button')).toHaveClass(styles.modifiers.small);
  });

  test(`Renders with class ${styles.modifiers.success} when status="success" is passed`, () => {
    render(<MenuToggle status="success">Toggle</MenuToggle>);
    expect(screen.getByRole('button')).toHaveClass(styles.modifiers.success);
  });

  test(`Renders with class ${styles.modifiers.warning} when status="success" is passed`, () => {
    render(<MenuToggle status="warning">Toggle</MenuToggle>);
    expect(screen.getByRole('button')).toHaveClass(styles.modifiers.warning);
  });

  test(`Renders with class ${styles.modifiers.danger} when status="success" is passed`, () => {
    render(<MenuToggle status="danger">Toggle</MenuToggle>);
    expect(screen.getByRole('button')).toHaveClass(styles.modifiers.danger);
  });

  test('split toggle passes onClick', async () => {
    const mockClick = jest.fn();
    const user = userEvent.setup();

    render(
      <MenuToggle
        onClick={mockClick}
        splitButtonItems={[
          <MenuToggleCheckbox
            id="split-button-checkbox-with-text-disabled-example"
            key="split-checkbox-with-text-disabled"
            aria-label="Select all"
          >
            10 selected
          </MenuToggleCheckbox>
        ]}
        aria-label="Menu toggle with checkbox split button and text"
      />
    );

    await user.click(screen.getByRole(`button`) as Element);
    expect(mockClick).toHaveBeenCalled();
  });

  test(`Renders with class ${styles.modifiers.placeholder} when isPlaceholder is passed`, () => {
    render(<MenuToggle isPlaceholder>Toggle</MenuToggle>);
    expect(screen.getByRole('button')).toHaveClass(styles.modifiers.placeholder);
  });
});
