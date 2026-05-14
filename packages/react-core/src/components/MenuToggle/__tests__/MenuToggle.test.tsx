import { MenuToggle } from '../MenuToggle';
import { MenuToggleCheckbox } from '../MenuToggleCheckbox';
import { Badge } from '../../Badge';
import RhUiSettingsFillIcon from '@patternfly/react-icons/dist/esm/icons/rh-ui-settings-fill-icon';
import EllipsisVIcon from '@patternfly/react-icons/dist/esm/icons/ellipsis-v-icon';
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import styles from '@patternfly/react-styles/css/components/MenuToggle/menu-toggle';
import '@testing-library/jest-dom';

describe('Old Snapshot tests - remove when refactoring', () => {
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
    const { asFragment } = render(<MenuToggle icon={<RhUiSettingsFillIcon />}>Toggle</MenuToggle>);
    expect(asFragment()).toMatchSnapshot();
  });

  test('shows badge', () => {
    const { asFragment } = render(<MenuToggle badge={<Badge>badge</Badge>}>Toggle</MenuToggle>);
    expect(asFragment()).toMatchSnapshot();
  });
});

const toggleVariants = ['default', 'plain', 'primary', 'plainText', 'secondary', 'typeahead'];

test(`Renders with classes ${styles.modifiers.plain} and ${styles.modifiers.text} when variant="plainText" is passed`, () => {
  render(<MenuToggle variant="plainText">Toggle</MenuToggle>);
  const toggle = screen.getByRole('button');
  expect(toggle).toHaveClass(styles.modifiers.plain);
  expect(toggle).toHaveClass(styles.modifiers.text);
});

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

test(`Renders with class ${styles.modifiers.form} when isInForm is passed`, () => {
  render(<MenuToggle isInForm>Toggle</MenuToggle>);
  expect(screen.getByRole('button')).toHaveClass(styles.modifiers.form);
});

test(`Does not render class ${styles.modifiers.form} when isInForm is false`, () => {
  render(<MenuToggle isInForm={false}>Toggle</MenuToggle>);
  expect(screen.getByRole('button')).not.toHaveClass(styles.modifiers.form);
});

test(`Renders with class ${styles.modifiers.placeholder} when isPlaceholder is passed`, () => {
  render(<MenuToggle isPlaceholder>Toggle</MenuToggle>);
  expect(screen.getByRole('button')).toHaveClass(styles.modifiers.placeholder);
});

test(`Renders with class ${styles.modifiers.settings} when isSettings is passed`, () => {
  render(<MenuToggle isSettings>Settings</MenuToggle>);

  expect(screen.getByRole('button')).toHaveClass(styles.modifiers.settings);
});

test(`Renders with class ${styles.modifiers.circle} when variant="plain" and isCircle is true`, () => {
  render(<MenuToggle isCircle variant="plain" aria-label="Toggle"></MenuToggle>);
  expect(screen.getByRole('button')).toHaveClass(styles.modifiers.circle);
});

toggleVariants
  .filter((variant) => variant !== 'plain')
  .forEach((variant) => {
    test(`Does not with class ${styles.modifiers.circle} when variant="${variant}" and isCircle is true`, () => {
      render(
        <MenuToggle isCircle variant={variant as 'default' | 'primary' | 'plainText' | 'secondary' | 'typeahead'}>
          Toggle
        </MenuToggle>
      );
      expect(screen.getByRole('button')).not.toHaveClass(styles.modifiers.circle);
    });
  });

test('Does not render custom icon when icon prop and isSettings are passed', () => {
  render(
    <MenuToggle isSettings icon={<div>Custom icon</div>}>
      Settings
    </MenuToggle>
  );
  expect(screen.queryByText('Custom icon')).not.toBeInTheDocument();
});

test(`Renders with class ${styles.modifiers.docked} when isDocked is passed`, () => {
  render(<MenuToggle isDocked>Dock Toggle</MenuToggle>);
  expect(screen.getByRole('button')).toHaveClass(styles.modifiers.docked);
});

test(`Does not render with class ${styles.modifiers.docked} when isDocked is not passed`, () => {
  render(<MenuToggle>Toggle</MenuToggle>);
  expect(screen.getByRole('button')).not.toHaveClass(styles.modifiers.docked);
});

test(`Renders with class ${styles.modifiers.textExpanded} when isTextExpanded is passed and isDocked is passed`, () => {
  render(
    <MenuToggle isTextExpanded isDocked>
      Text Expanded Toggle
    </MenuToggle>
  );
  expect(screen.getByRole('button')).toHaveClass(styles.modifiers.textExpanded);
});

test(`Does not render with class ${styles.modifiers.textExpanded} when isTextExpanded is not passed`, () => {
  render(<MenuToggle>Toggle</MenuToggle>);
  expect(screen.getByRole('button')).not.toHaveClass(styles.modifiers.textExpanded);
});

test(`Does not render with class ${styles.modifiers.textExpanded} when isTextExpanded is passed but isDocked is not passed`, () => {
  render(<MenuToggle isTextExpanded>Text Expanded Toggle</MenuToggle>);
  expect(screen.getByRole('button')).not.toHaveClass(styles.modifiers.textExpanded);
});

test(`Renders with both ${styles.modifiers.docked} and ${styles.modifiers.textExpanded} when both props are passed`, () => {
  render(
    <MenuToggle isDocked isTextExpanded>
      Dock Text Expanded Toggle
    </MenuToggle>
  );
  const button = screen.getByRole('button');
  expect(button).toHaveClass(styles.modifiers.docked);
  expect(button).toHaveClass(styles.modifiers.textExpanded);
});
