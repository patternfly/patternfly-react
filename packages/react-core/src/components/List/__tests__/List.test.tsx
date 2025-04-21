import { render, screen } from '@testing-library/react';
import { List, ListVariant, ListComponent, OrderType } from '../List';
import styles from '@patternfly/react-styles/css/components/List/list';

describe('Shared tests between ol and ul lists', () => {
  Object.values(ListComponent).forEach((component) => {
    test(`Renders without children for ${component} list`, () => {
      render(<List component={component}></List>);

      expect(screen.getByRole('list')).toBeVisible();
    });

    test(`Renders children for ${component} list`, () => {
      render(<List component={component}>Children content</List>);

      expect(screen.getByRole('list')).toHaveTextContent('Children content');
    });

    test(`Renders with ${component} tag`, () => {
      render(<List component={component}></List>);

      expect(screen.getByRole('list').tagName).toBe(component.toUpperCase());
    });

    test(`Renders with only class ${styles.list} by default for ${component} list`, () => {
      render(<List component={component}></List>);

      expect(screen.getByRole('list')).toHaveClass(styles.list, { exact: true });
    });

    test(`Renders with custom class when className is passed for ${component} list`, () => {
      render(<List component={component} className="custom-class"></List>);

      expect(screen.getByRole('list')).toHaveClass('custom-class');
    });

    test(`Renders with variant class ${styles.modifiers.inline} when variant prop is inline for ${component} list`, () => {
      render(<List component={component} variant={ListVariant.inline}></List>);

      expect(screen.getByRole('list')).toHaveClass(styles.modifiers.inline);
    });

    test(`Renders with class ${styles.modifiers.bordered} when isBordered is true for ${component} list`, () => {
      render(<List component={component} isBordered></List>);

      expect(screen.getByRole('list')).toHaveClass(styles.modifiers.bordered);
    });

    test(`Renders with class ${styles.modifiers.plain} when isPlain is true for ${component} list`, () => {
      render(<List component={component} isPlain></List>);

      expect(screen.getByRole('list')).toHaveClass(styles.modifiers.plain);
    });

    test(`Renders with class ${styles.modifiers.iconLg} when iconSize is "large" for ${component} list`, () => {
      render(<List component={component} iconSize="large"></List>);

      expect(screen.getByRole('list')).toHaveClass(styles.modifiers.iconLg);
    });

    test(`Renders with aria-label for ${component} list`, () => {
      render(<List component={component} aria-label="Testing stuff"></List>);

      expect(screen.getByRole('list')).toHaveAccessibleName('Testing stuff');
    });

    test(`Spreads additional props when passed for ${component} list`, () => {
      render(<List component={component} id="Test ID"></List>);

      expect(screen.getByRole('list')).toHaveAttribute('id', 'Test ID');
    });

    test(`Does not render with role attribute when isPlain is false for ${component} list`, () => {
      render(<List component={component}></List>);

      expect(screen.getByRole('list')).not.toHaveAttribute('role');
    });

    test(`Renders with role attribute of "list" when isPlain is true for ${component} list`, () => {
      render(<List component={component} isPlain></List>);

      expect(screen.getByRole('list')).toHaveAttribute('role', 'list');
    });

    test(`Matches snapshot for ${component} list`, () => {
      const { asFragment } = render(<List component={component}></List>);

      expect(asFragment()).toMatchSnapshot();
    });
  });
});

describe('Ol component list', () => {
  test(`Renders with type of "1" by default`, () => {
    render(<List component={ListComponent.ol}></List>);

    expect(screen.getByRole('list')).toHaveAttribute('type', '1');
  });

  test(`Renders with type attribute when type is passed`, () => {
    render(<List component={ListComponent.ol} type={OrderType.uppercaseLetter}></List>);

    expect(screen.getByRole('list')).toHaveAttribute('type', 'A');
  });
});

describe('Ul component list', () => {
  test(`Does not render with type attribute when type is passed`, () => {
    render(<List type={OrderType.lowercaseRomanNumber}></List>);

    expect(screen.getByRole('list')).not.toHaveAttribute('type');
  });
});
